# Affiliate products

Open `/admin`, log in, and select **Affiliate products**. Search for a test, edit its heading and introduction, then add up to three products. Each product supports a name, image URL or upload, Amazon affiliate link, optional price and rating, a badge, and up to five features. Use the arrows to change their order. The preview updates immediately. Enable the section and save to show it after a visitor completes that test; disable and save to hide it. Removing a product takes effect when you save.

## Local setup

Copy `.env.example` to `.env.local` and set `ADMIN_PASSWORD` and a random `SESSION_SECRET`. Run `npm ci` and `npm run dev`. Product settings save to `src/content/affiliates/<test-slug>.json`; uploaded images save to `public/blog-images/`. No GitHub token is needed for local affiliate editing. Local data and images should be committed when you want to deploy them.

## Production

Set `ADMIN_PASSWORD`, `SESSION_SECRET`, and `GITHUB_TOKEN` on the host, with optional `GITHUB_REPO` and `GITHUB_BRANCH` as described in `.env.example`. Production reads and writes recommendation files through GitHub. The token needs Contents read/write access. Product changes are read when a new result opens; uploaded image files require the hosting deployment to finish. Configure your hosting integration to deploy repository changes. GitHub saving is shared with the existing blog system and creates commits.

The public API returns enabled sections only. All editor and upload endpoints require the admin session. Concurrent edits are rejected so one editor cannot silently overwrite another. Failures fetching recommendations do not interrupt tests.

## Product information

Supply your own Amazon Associates links, accurate product information, and images you can use. No products or affiliate IDs are prepopulated. Price and rating fields are manually maintained, optional, and not synchronized with Amazon. Confirm Amazon's current program requirements for displaying product images, prices, and ratings before publishing; leave optional fields blank when appropriate. The visitor section includes an affiliate disclosure and labels links as sponsored. Copy should describe practice or product features without promising cognitive or medical benefits.

## Verification

Run `node scripts/test-affiliates.mjs`, `npx tsc --noEmit`, and `npm run lint`. Check `/admin` and complete a test to verify the section appears only on results, disappears on retry, and stays hidden for unconfigured or disabled tests.
