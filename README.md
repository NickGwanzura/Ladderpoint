# Ladder Point — The House of Ideas

Seven-page editorial website built with Next.js App Router, TypeScript, Tailwind CSS, Framer Motion and Lucide. Standard Node deployment; no Sites, Cloudflare or Vinext dependencies.

## Local development

Use Node 22.13+.

```sh
npm ci
cp .env.example .env.local
npm run dev
```

Set `NEXT_PUBLIC_SITE_URL` to `http://localhost:3000` for development. Run `npm run build`, `npm run typecheck`, and `npm run lint` for validation.

## Dokploy deployment

1. Push this repository to your Git provider and connect it to a Dokploy application.
2. Select **Dockerfile** as the build type, with `Dockerfile` at the repository root and context `.`.
3. Configure container port **3000** and attach your domain with HTTPS.
4. Set build arguments `NEXT_PUBLIC_SITE_URL` (the HTTPS origin, without a trailing slash), `NEXT_PUBLIC_CONTACT_EMAIL`, and `NEXT_PUBLIC_CONTACT_PHONE`.
5. Set runtime variables `NEXT_PUBLIC_SITE_URL` (same origin), `INQUIRY_WEBHOOK_URL`, `NEWSLETTER_WEBHOOK_URL`, and optionally `FORM_WEBHOOK_TOKEN`.
6. Deploy. The image uses Next.js standalone output and runs as a non-root user. No persistent volume is required.

Changes to public contact details or the site URL require rebuilding. Set runtime webhook values to server endpoints you control, such as an n8n workflow, CRM or newsletter integration. The receiver must return a 2xx status only after accepting delivery. Payloads are JSON and contain `type`, `submittedAt`, and validated form fields; the optional token is sent as a Bearer authorization header. There is no submission database in this app. An unset integration returns a clear unavailable message instead of a false success. Add rate limiting through your ingress or webhook service before public launch.

## Content editing

- `content/site.ts`: service copy, exact package inclusions, experience claims, contact settings and future insights adapter.
- `app/about/page.tsx`: leadership profile using only supplied experience information.
- `components/site/footer.tsx`: replace the social-channel placeholder once real profile URLs exist.
- `app/globals.css`: brand palette, typography, layouts and responsive styling.

The brief provided no full biography, portrait, verified contact details or social URLs. The leadership area uses a typographic monogram, not a substitute person’s photograph. The profile uses the provided claims; replace it with Doreen’s approved full biography when available. No invented clients, testimonials, partnerships or additional awards are included. Hero imagery is an abstract ascending-line motif. Fonts are loaded from Google Fonts with system fallbacks.

The Insights page intentionally has no fabricated articles. Its typed content adapter in `content/site.ts` is ready for an MDX or CMS implementation once real content exists.
