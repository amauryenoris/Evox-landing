# EvoX Automated Solutions — Landing Page

Sitio web corporativo de [EvoX Automated Solutions](https://evoxautomation.cloud). Desplegado en Vercel con dominio personalizado.

## Stack

- **React 18** + TypeScript
- **Vite** — build y dev server
- **Tailwind CSS** — estilos
- **Supabase** — formulario de contacto (tabla `contact_submissions` + Edge Function `send-contact-email`)
- **Resend** — envío de emails via Edge Function

## Desarrollo local

```bash
npm install
npm run dev       # servidor en localhost:5173
npm run build     # build de producción
npm run typecheck # verificar tipos TypeScript
```

### Variables de entorno

Crear `.env` en la raíz con:

```
VITE_SUPABASE_URL=https://<project-ref>.supabase.co
VITE_SUPABASE_ANON_KEY=<anon-key>
```

## Deploy

Push a `main` → GitHub Actions → auto-deploy en Vercel.

El dominio `evoxautomation.cloud` apunta a Vercel via DNS en Hostinger:
- `A @ 216.198.79.1`
- `CNAME www cname.vercel-dns.com`

## Estructura

```
src/
  App.tsx                   # componente raíz
  components/
    Header.tsx
    Hero.tsx
    Services.tsx
    HowItWorks.tsx
    CaseStudies.tsx         # carousel de casos de éxito (autoplay 4s)
    WhyChooseUs.tsx
    ContactForm.tsx         # formulario conectado a Supabase
    CTASection.tsx
    FloatingCTA.tsx
    Footer.tsx
  lib/
    supabase.ts             # cliente Supabase
public/
  carlos/card/
    index.html              # tarjeta digital Carlos Rojas
    Carlos_Rojas_EvoX.vcf   # vCard para "Save Contact"
supabase/
  migrations/               # migraciones SQL
  functions/
    send-contact-email/     # Edge Function — notificación por email
```

## Páginas estáticas

### Tarjeta digital — Carlos Rojas

**URL:** `https://evoxautomation.cloud/carlos/card`

Tarjeta de presentación digital de Carlos Rojas (Founder & CEO). Self-contained: logo SVG inline, QR inline. No depende del build de React.

Archivos en `public/carlos/card/`:
- `index.html` — la tarjeta
- `Carlos_Rojas_EvoX.vcf` — contacto descargable (botón "Save Contact")

Para agregar una tarjeta de otro miembro del equipo, replicar la misma estructura en `public/{nombre}/card/`.
