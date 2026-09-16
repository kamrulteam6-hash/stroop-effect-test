import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import ts from 'typescript';
const source = fs.readFileSync('src/lib/affiliate.ts', 'utf8');
const compiled = ts.transpileModule(source, { compilerOptions: { module: ts.ModuleKind.CommonJS } }).outputText;
const model = { exports: {} };
new Function('exports', compiled)(model.exports);
const { validateAffiliateSection, amazonUrl, safeImageUrl } = model.exports;
const product = { id: 'one', name: 'Practice game', image: 'https://example.com/product.png', url: 'https://www.amazon.com/dp/EXAMPLE?tag=example-20', price: '$24.99', rating: '4.6', badge: '', features: ['Portable'] };
const section = { enabled: true, heading: 'Practice at home', description: '', buttonLabel: 'Buy now', products: [product] };
assert.equal(validateAffiliateSection(section).products.length, 1);
for (const url of ['javascript:alert(1)', 'https://amazon.com.evil.com/x', 'https://amazon.com@evil.com', 'http://amazon.com/x']) assert.equal(amazonUrl(url), false);
assert.equal(amazonUrl('https://amzn.to/example'), true);
assert.equal(safeImageUrl('//evil.com/a'), false);
assert.equal(safeImageUrl('/blog-images/../secret'), false);
assert.throws(() => validateAffiliateSection({ ...section, products: Array(4).fill(product) }));
assert.throws(() => validateAffiliateSection({ ...section, products: [product, product] }));
assert.throws(() => validateAffiliateSection({ ...section, products: [{ ...product, rating: '5.1' }] }));
assert.throws(() => validateAffiliateSection({ ...section, products: [] }));
assert.throws(() => validateAffiliateSection({ ...section, products: [{ ...product, features: Array(6).fill('a') }] }));
// Every test module must reach a shared component that signals a completed result.
function reachesResult(file, visited = new Set()) {
  if (visited.has(file)) return false;
  visited.add(file);
  const text = fs.readFileSync(file, 'utf8');
  if (/<(?:ResultScreen|ResultHeading|TypeResult|AgeResultScreen)\b/.test(text)) return true;
  const imports = [...text.matchAll(/from ["'](@\/components\/tests\/[^"']+)["']/g)];
  return imports.some(match => {
    const target = path.resolve('src', match[1].slice(2) + '.tsx');
    return fs.existsSync(target) && reachesResult(target, visited);
  });
}
const testFiles = fs.readdirSync('src/components/tests').filter(file => file.endsWith('Test.tsx'));
for (const file of testFiles) assert.ok(reachesResult(path.resolve('src/components/tests', file)), `Missing result integration: ${file}`);
console.log(`Affiliate validation passed; ${testFiles.length} test components reach a result integration.`);
