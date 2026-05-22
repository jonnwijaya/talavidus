# Talavidus — Agent Guide

> Corporate web presence for Talavidus, a macro technology and research firm focused on sovereign risk intelligence. The site serves two domains from a single Next.js codebase: a public storefront (`talavidus.com`) and an authenticated dashboard (`prescientmacro.com`).

## Project Overview

- **Name**: Talavidus
- **Type**: Next.js 14 (App Router) web application
- **Language**: TypeScript
- **Styling**: Tailwind CSS v3 with a fully custom design system
- **Backend / Auth**: Supabase (OAuth PKCE via Google, cookie-based sessions)
- **Analytics**: Vercel Analytics
- **Deployment**: Vercel
- **Node package manager**: npm

### Dual-Domain Architecture

| Domain | Role | Auth |
|--------|------|------|
| `talavidus.com` | Static storefront (marketing, info, contact, seat requests) | None |
| `prescientmacro.com` | Secure dashboard | Required (Supabase PKCE OAuth) |

Both domains run from the **same codebase**. The Edge middleware (`middleware.ts`) detects the `Host` header and switches behavior between "storefront" and "dashboard" contexts. Auth cookies are shared across subdomains via the `.talavidus.com` domain.

---

## Tech Stack

- **Framework**: Next.js 14.2.35 (`app/` router)
- **React**: 18.3.1
- **TypeScript**: 5.6.0 (strict mode enabled)
- **Tailwind CSS**: 3.4.14
- **PostCSS**: 8.4.47 + Autoprefixer 10.4.20
- **Supabase**: `@supabase/ssr` 0.5.2 + `@supabase/supabase-js` 2.47.0
- **Font loading**: Google Fonts via `<link>` (Cormorant Garamond + Inter)

---

## Build and Development Commands

```bash
# Install dependencies
npm install

# Local development server
npm run dev

# Production build
npm run build

# Start production server (after build)
npm run start

# Lint (Next.js ESLint)
npm run lint
```

There is **no test suite** configured in this project. There are no Jest, Vitest, Playwright, or Cypress configs.

---

## Environment Variables

Create `.env.local` for local development:

```env
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
SUPABASE_SERVICE_ROLE_KEY=your-service-role-key
NEXT_PUBLIC_AUTH_COOKIE_DOMAIN=localhost
NEXT_PUBLIC_STOREFRONT_URL=http://localhost:3000
NEXT_PUBLIC_DASHBOARD_URL=http://localhost:3000
```

Production values on Vercel:
- `NEXT_PUBLIC_AUTH_COOKIE_DOMAIN` = `.talavidus.com`
- `NEXT_PUBLIC_STOREFRONT_URL` = `https://talavidus.com`
- `NEXT_PUBLIC_DASHBOARD_URL` = `https://prescientmacro.com`

**Required variables**:
- `NEXT_PUBLIC_SUPABASE_URL`
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`
- `SUPABASE_SERVICE_ROLE_KEY` (used by admin client for seat request writes)

**Optional variables**:
- `NEXT_PUBLIC_AUTH_COOKIE_DOMAIN` (defaults to `.talavidus.com`)
- `NEXT_PUBLIC_STOREFRONT_URL` (defaults to `https://talavidus.com`)
- `NEXT_PUBLIC_DASHBOARD_URL` (defaults to `https://prescientmacro.com`)

---

## Project Structure

```
├── app/                           # Next.js App Router
│   ├── api/
│   │   ├── auth/callback/route.ts # OAuth PKCE callback — exchanges code for session, redirects to dashboard
│   │   ├── contact/route.ts       # Contact form handler (logs only; not wired to email provider yet)
│   │   └── seat-request/route.ts  # Institutional seat allocation form handler with rate limiting
│   ├── about/page.tsx             # About page
│   ├── compliance/page.tsx        # Compliance/legal page
│   ├── contact/page.tsx           # Contact page
│   ├── login/page.tsx             # Dashboard login — initiates Google OAuth PKCE flow
│   ├── logout/route.ts            # Clears session cookies and redirects to storefront
│   ├── request-allocation/page.tsx# Institutional seat request page
│   ├── risk-disclosures/page.tsx  # Risk disclosures page
│   ├── signup/free/page.tsx       # Free tier signup landing
│   ├── signup/professional/page.tsx # Professional tier signup landing
│   ├── globals.css                # Global styles, CSS custom properties, Tailwind directives
│   ├── layout.tsx                 # Root layout (fonts, theme script, metadata, Vercel Analytics)
│   └── page.tsx                   # Storefront landing page
├── components/ui/                 # React components
│   ├── AccessModelSection.tsx
│   ├── ArchitectureSection.tsx
│   ├── ContactForm.tsx
│   ├── ContactSection.tsx
│   ├── Footer.tsx
│   ├── GovernanceSection.tsx
│   ├── HeroSection.tsx
│   ├── HistoricalValidationSection.tsx
│   ├── Navbar.tsx
│   ├── PrescientSection.tsx
│   ├── ResearchSection.tsx
│   ├── SeatAllocationForm.tsx     # Client Component form for seat requests
│   ├── SystemCredibilitySection.tsx
│   └── ThemeToggle.tsx            # Dark/light mode toggle
├── lib/
│   ├── supabase/
│   │   ├── client.ts              # Browser Supabase client (PKCE, auto-refresh, cookie persistence)
│   │   └── server.ts              # Server / middleware / admin Supabase clients
│   └── validations.ts             # Form validation helpers (email, required, max-length)
├── middleware.ts                  # Edge middleware (subdomain routing + auth + security headers)
├── next.config.js                 # Next.js config + security headers + CSP + redirects
├── tailwind.config.ts             # Custom theme (colors, fonts, spacing, transitions)
├── tsconfig.json                  # TypeScript config with `@/*` path alias
└── vercel.json                    # Vercel platform config (headers, rewrites, build settings)
```

---

## Code Style and Conventions

### Components
- **Server Components by default**. Only add `"use client"` when using React hooks (`useState`, `useEffect`, etc.), browser APIs, or event handlers.
- Components are organized as **default exports** in individual files under `components/ui/`.
- Use **function declarations** for page components (`export default function PageName() { ... }`).

### Imports
- Use the `@/*` path alias for project imports (e.g., `@/components/ui/Navbar`, `@/lib/supabase/server`).
- Group imports: external libraries first, then internal aliases.

### Styling
- **Tailwind CSS only**. No CSS Modules, no Styled Components.
- The design system uses **zero border-radius** (`rounded-none` is the implicit default; inputs and buttons have `border-radius: 0`).
- Custom CSS variables in `:root` and `html[data-theme="dark"]` control the color palette. Refer to `globals.css` for the full variable map.
- Key Tailwind tokens:
  - Colors: `bg-background`, `text-ink`, `text-ink-muted`, `border-border`, `bg-mineral`, etc.
  - Fonts: `font-serif` (Cormorant Garamond), `font-sans` (Inter)
  - Spacing: `max-w-container` (72rem), `max-w-prose` (40rem)
  - Letter spacing: `tracking-ultra` (0.25em), `tracking-section` (0.1em)
  - Transitions: `duration-500 ease-expo` (cubic-bezier(0.19, 1, 0.22, 1))

### TypeScript
- Strict mode is enabled.
- Prefer explicit return types on exported functions in `lib/`.
- Use `type` for type aliases (e.g., `type Config = ...`).

### File Naming
- Pages/routes: `page.tsx`, `route.ts`
- Layouts: `layout.tsx`
- Components: PascalCase (e.g., `SeatAllocationForm.tsx`)
- Utilities/lib: camelCase (e.g., `validations.ts`)

---

## Authentication Flow

1. Unauthenticated user visits `prescientmacro.com/login`.
2. Server Component calls `supabase.auth.signInWithOAuth({ provider: 'google' })`.
3. User is redirected to Google OAuth consent screen.
4. On success, Google redirects back to `/api/auth/callback` with an auth `code`.
5. The callback handler exchanges the code for a session and sets cookies with domain `.talavidus.com`.
6. User is redirected to the dashboard (`prescientmacro.com`).
7. The Edge middleware (`middleware.ts`) checks the session on every dashboard request and redirects unauthenticated users to the storefront login.

Logout hits `/logout` (a `route.ts`), which calls `supabase.auth.signOut()` and manually clears auth cookies across subdomains.

---

## API Routes

### `POST /api/seat-request`
Accepts institutional seat allocation requests. Features:
- CORS restricted to `https://talavidus.com` in production
- Content-Type enforcement (`application/json`)
- **Rate limiting**: 3 requests per 15 minutes per IP (in-memory Map — not distributed)
- Field validation (entity, signatory, domain as corporate email, AUM, intent max 500 chars)
- Writes to Supabase `seat_requests` table via **admin client** (service role key)
- Stores IP address and user agent

### `POST /api/contact`
Accepts contact form submissions. **Not yet wired to an email provider** — currently logs to console and returns success.

### `GET /api/auth/callback`
OAuth PKCE callback. Exchanges `code` for a session, sets cross-subdomain cookies, redirects to dashboard.

---

## Security Measures

### Headers
Both `next.config.js` and `middleware.ts` inject a comprehensive set of security headers:
- `Strict-Transport-Security` (HSTS, 2 years, includeSubDomains, preload)
- `X-Frame-Options: DENY`
- `X-Content-Type-Options: nosniff`
- `Referrer-Policy: strict-origin-when-cross-origin`
- `Permissions-Policy` (restricts camera, microphone, geolocation, etc.)
- `Cross-Origin-Opener-Policy: same-origin`
- `Cross-Origin-Resource-Policy: cross-origin`
- `Content-Security-Policy` (configured in both next.config.js and middleware)

### CSP Directives
```
default-src 'self'
script-src 'self' 'unsafe-inline' https://*.supabase.co
style-src 'self' 'unsafe-inline' https://fonts.googleapis.com
img-src 'self' data: https:
font-src 'self' data: https://fonts.gstatic.com
connect-src 'self' https://*.supabase.co wss://*.supabase.co https://fonts.gstatic.com
media-src 'self'
object-src 'none'
frame-ancestors 'none'
base-uri 'self'
form-action 'self'
upgrade-insecure-requests
```

### Other
- `poweredByHeader: false` in Next.js config.
- API routes set `Cache-Control: no-store`.
- Static assets (`/_next/static/`) are cached for 1 year.
- Geoblocking is supported via `BLOCKED_COUNTRIES` array in `middleware.ts` (currently empty).
- Admin routes (`/admin/*`) on the dashboard check `user_metadata.role === 'admin'`.

---

## Database / Supabase

The project expects a Supabase project with the following table:

**`seat_requests`**
| Column | Type | Notes |
|--------|------|-------|
| id | uuid | Primary key |
| full_name | text | Maps from `signatory` |
| email | text | Maps from `domain` |
| company | text | Maps from `entity` |
| role | text | Maps from `aum` |
| message | text | Maps from `intent` |
| ip_address | text | Client IP |
| user_agent | text | Request UA |
| status | text | Default: `'pending'` |

Auth is handled entirely by Supabase Auth. No custom user tables are referenced in the code.

---

## Deployment

The project is deployed to **Vercel**.

Key `vercel.json` settings:
- `buildCommand`: `next build`
- `installCommand`: `npm ci`
- `cleanUrls`: true
- `trailingSlash`: false
- Rewrites `/dashboard/:path*` to `https://prescientmacro.com/:path*`
- API functions max duration: 30 seconds
- GitHub integration enabled; auto-deploy from `main` and `staging` branches

Local dev runs on `localhost:3000`. In local dev, the middleware treats all traffic as the "storefront" context.

---

## Important Notes for Agents

1. **No test framework** — changes cannot be validated by running tests. Verify manually via `npm run build` and `npm run dev`.
2. **Rate limiting is in-memory** — restarting the server resets rate limits. Do not rely on it for strong protection in a multi-instance deployment.
3. **Contact form is not wired** — `POST /api/contact` only logs to the console. If asked to connect it to an email provider, you will need to add a dependency (e.g., Resend, Postmark, AWS SES) and update the route.
4. **Theme toggle** — Dark mode is implemented via a `data-theme="dark"` attribute on `<html>` and CSS custom properties. The toggle script in `layout.tsx` runs before React hydration to prevent flash.
5. **No icon library** — All icons are inline SVGs inside components.
6. **Corporate email restriction** — `lib/validations.ts` blocks public email domains (Gmail, Yahoo, Outlook, etc.) for the seat allocation form. Update `PUBLIC_EMAIL_DOMAINS` if requirements change.
7. **Dashboard pages** — The dashboard subdomain (`prescientmacro.com`) currently only has a `/login` page in this repo. The actual dashboard UI is either served elsewhere or is a future addition. The middleware will enforce auth on any non-public route under this domain.
