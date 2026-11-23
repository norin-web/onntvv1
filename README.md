# Onn TV Remote — promo site

Static promo site for the Onn TV Remote iPhone app. React 18 + TypeScript + Vite + Tailwind 4 + React Router.

## Run locally

    pnpm install
    pnpm dev

## Build

    pnpm run build

## Deploy

GitHub Actions (`.github/workflows/deploy.yml`) builds on every push to `main` and publishes `dist/` to GitHub Pages.
In the repository settings, set Pages → Source to **GitHub Actions**.

The site is served at `https://onntvremote.site`, so `base` in `vite.config.ts` is `/` and `public/CNAME` holds the domain.
If the domain is removed, set `base: "/onntvv1/"` and delete `public/CNAME` in the same commit, or the site goes blank.

## Where content lives

- `src/app/content/site.ts` — brand, operator, email, App Store link, features, FAQ.
- `src/app/content/legal.ts` — Privacy Policy and Terms of Use, verbatim from the owner's documents (only markup changed).
- Images go through the `img()` helper in `src/app/utils/img.ts`, so they resolve under the `/onntvv1/` base.
