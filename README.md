# Michail Belias — Time-Travel Portfolio

Single-page React portfolio with era-based themes (80s → AI era), GitHub Pages deployment, and per-era hero imagery.

## Overview
- Era toggle cycles five eras: 80s “Unix and S Language Era”, 90s “The Web, R and SQL Era”, 00s “The Big Data Era”, 10s “Machine Learning & Python Era”, and “The AI Era”.
- Each era has its own colors/typography and optional hero background image (`src/assets/images/mydesk_*.png`).
- Metadata for link previews is customized for Michail Belias (Open Graph/Twitter tags + Helmet meta).
- Theme toggle is disabled; modern AI era locks to dark.
- Built with React 18, react-router, react-helmet-async, and react-icons.

## Getting Started
```bash
yarn install
yarn start
```

Content lives in `src/content_option.js`. Era styles and backgrounds: `src/index.css` and `src/pages/home/style.css`.

## Era Background Images
Drop your images at these paths (PNG or JPG):
- `src/assets/images/mydesk_modern_ai.png`
- `src/assets/images/mydesk_80s_lab.png`
- `src/assets/images/mydesk_90s_desktop.png`
- `src/assets/images/mydesk_00s_web.png`
- `src/assets/images/mydesk_10s_flat.png`

## Deploy (GitHub Pages)
```bash
yarn deploy        # builds and publishes to gh-pages branch
```
Ensure repo Pages source: branch `gh-pages`, folder `/`. `package.json` has `homepage` set to `https://michailbelias.github.io`.

## SEO / Preview Meta
- Global head tags: `public/index.html` (author, OG/Twitter title/description/url/image).
- Per-page meta: `src/content_option.js` (title/description/keywords/canonical via Helmet).

## Scripts
- `yarn start` — dev server
- `yarn build` — production build
- `yarn deploy` — build + push to `gh-pages`

