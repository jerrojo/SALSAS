## Grupo Arrabiato — Quote Builder

Minimal, mobile‑first, production‑ready site for private‑label salsa quotes. No backend. WhatsApp handoff only.

- Tech: Next.js 14 App Router + TypeScript, Tailwind CSS, React Hook Form + Zod
- i18n: lightweight local dictionaries (ES default at `/`, EN at `/en`)
- State: persisted to `localStorage` key `ga:order`
- Deploy: Vercel (connected to GitHub)

### Local dev

```bash
npm install
npm run dev
# http://localhost:3000 and http://localhost:3000/en
```

### WhatsApp handoff

- Number: `+52 55 3899 4836`
- On submit we open `https://wa.me/525538994836?text=...` and navigate to `/success` as fallback.

### Domain

Add `grupoarrabiato.com` in Vercel → Project → Settings → Domains.


