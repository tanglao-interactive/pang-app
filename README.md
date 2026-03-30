# Pang App

Marketing site for **Pang App**, built with Next.js.

## Purpose

This repository contains the public-facing website for `pang-app.com`. The site presents Tanglao, Corp as the parent company behind a growing portfolio of subscription-based software products.
This repository contains the public-facing website for `pang-app.com`. The site presents Pang App as the primary product/platform, with Tanglao, Corp positioned as the company behind it.

## Stack

- Next.js
- React
- TypeScript

## Local Development

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Production Build

```bash
npm run build
npm start
```

## Deploying To AWS Amplify

This repo includes [amplify.yml](/Users/franz.tanglao/GitHub/pang-app/amplify.yml) for Amplify Hosting.

- Connect the repository in AWS Amplify Hosting.
- Keep the app type as the default Next.js SSR/compute deployment.
- Amplify will run `npm ci` and `npm run build`.
- Build artifacts are published from `.next`.

The project is pinned to Node 20 via `.nvmrc` and the `package.json` `engines` field to match Amplify's supported modern runtimes.

## Notes

- The current homepage uses polished placeholder product content so the site can launch before the product portfolio is finalized.
- Styling lives in `app/globals.css`.
- Main page content lives in `app/page.tsx`.
