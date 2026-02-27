# AGENTS.md

## Cursor Cloud specific instructions

This is a **Next.js 16** single-page marketing site (no backend, no database, no Docker). All standard dev commands are in `package.json`:

- **Dev server**: `npm run dev` (port 3000)
- **Lint**: `npm run lint`
- **Build**: `npm run build`

### Non-obvious notes

- The project uses **npm** as package manager (`package-lock.json`). Do not use pnpm/yarn.
- External images are hosted on Cloudinary and GitHub Avatars; the Next.js config (`next.config.ts`) has `remotePatterns` for these hosts. If new image hosts are added, update `next.config.ts`.
- The CTA buttons link to an external Cal.com booking page (`cal.com/hasaam/30min`), not an internal route.
- The `shadcn` CLI uses a Tailark Pro registry (`pro.tailark.com`). A `TAILARK_API_KEY` may be needed when pulling new components via `npx shadcn add`, but is not required for dev/build/lint.
