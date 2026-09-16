import assert from 'node:assert/strict';
import { readFile, unlink } from 'node:fs/promises';
import path from 'node:path';

// Run only against a local development server, with its ADMIN_PASSWORD in the environment.
const base = 'http://127.0.0.1:3000';
const endpoint = '/api/admin/affiliates/reaction-time-test';
const request = (url, options) => fetch(base + url, options);
assert.equal((await request(endpoint)).status, 401);
assert.equal((await request(endpoint, { method: 'PUT', body: '{}' })).status, 401);
const login = await request('/api/admin/login', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ password: process.env.ADMIN_PASSWORD }) });
assert.equal(login.status, 200);
const cookie = login.headers.get('set-cookie').split(';')[0];
const headers = { Cookie: cookie, 'Content-Type': 'application/json' };
const original = await (await request(endpoint, { headers })).json();
assert.equal(original.storage, 'local', 'Only run this smoke check against local storage.');
let current = original;
const put = (section, revision = current.revision) => request(endpoint, { method: 'PUT', headers, body: JSON.stringify({ section, revision }) });
try {
  const invalid = { ...original.section, enabled: true, products: [{ id: 'bad', name: 'bad', image: 'https://example.com/a.png', url: 'javascript:alert(1)', price: '', rating: '6', badge: '', features: [] }] };
  assert.equal((await put(invalid)).status, 400);
  const disabled = { ...original.section, enabled: false };
  const saved = await put(disabled); assert.equal(saved.status, 200); current = await saved.json();
  assert.equal((await (await request('/api/affiliates/reaction-time-test')).json()).section, null);
  assert.equal((await put(original.section, 'stale-revision')).status, 409);
  assert.equal((await request('/api/admin/affiliates/not-a-test', { headers })).status, 404);
  assert.equal((await request(endpoint, { method: 'PUT', headers: { ...headers, Origin: 'https://other.example' }, body: JSON.stringify(current) })).status, 403);
  const form = new FormData(); form.append('image', new Blob(['<svg>bad</svg>'], { type: 'image/png' }), 'fake.png');
  assert.equal((await request('/api/admin/affiliates/upload', { method: 'POST', headers: { Cookie: cookie }, body: form })).status, 400);
  const validImage = new FormData(); validImage.append('image', new Blob([await readFile('public/favicon-32.png')], { type: 'image/png' }), 'smoke.png');
  const upload = await request('/api/admin/affiliates/upload', { method: 'POST', headers: { Cookie: cookie }, body: validImage });
  assert.equal(upload.status, 200);
  const uploaded = await upload.json();
  assert.match(uploaded.url, /^\/blog-images\/affiliate-[a-f0-9-]+\.png$/);
  try { assert.equal((await request(uploaded.url)).status, 200); }
  finally { await unlink(path.join(process.cwd(), 'public', uploaded.url.slice(1))); }
  console.log('API smoke checks passed: authorization, save/read, hidden sections, stale edits, unknown tests, origin checks, invalid images.');
} finally {
  const restored = await put(original.section); assert.equal(restored.status, 200);
}
