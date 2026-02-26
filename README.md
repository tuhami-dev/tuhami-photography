# Tuhami Photography

Premium, mobile-first photography landing page for [Tuhami Photography](https://photo.tuhamiconsulting.com) — serving the Phoenix Metro.

## Tech Stack

- **Next.js 16** (App Router)
- **TypeScript**
- **Tailwind CSS v4**
- **Resend** — lead notification emails
- **Supabase** — optional lead storage
- **Lucide React** — icons
- **Vercel** — deployment

---

## Getting Started

### 1. Clone & install

```bash
git clone <repo-url>
cd tuhami-photography
npm install
```

### 2. Configure environment variables

Copy the example file and fill in your values:

```bash
cp .env.example .env.local
```

| Variable | Required | Description |
|---|---|---|
| `RESEND_API_KEY` | Yes (for emails) | API key from [resend.com](https://resend.com) |
| `LEADS_TO_EMAIL` | Yes (for emails) | Email that receives lead notifications |
| `SUPABASE_URL` | No | Your Supabase project URL |
| `SUPABASE_ANON_KEY` | No | Your Supabase anon/public key |
| `NEXT_PUBLIC_CONTACT_EMAIL` | No | Contact email shown in the footer |
| `NEXT_PUBLIC_CAL_LINK` | No | Cal.com link shown after form success |

> The app works without Supabase or Resend configured — it will just skip those steps and log warnings to the server console.

### 3. Run locally

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

---

## Resend Setup

1. Create a free account at [resend.com](https://resend.com)
2. Add and verify your domain (`photo.tuhamiconsulting.com` or `tuhamiconsulting.com`)
3. Create an API key and add it to `.env.local` as `RESEND_API_KEY`
4. Update the `from` address in `app/api/lead/route.ts` if you use a different sender domain:
   ```ts
   from: "Tuhami Photography <noreply@photo.tuhamiconsulting.com>",
   ```

---

## Supabase Setup (Optional)

If you want leads stored in a database:

1. Create a project at [supabase.com](https://supabase.com)
2. Run this SQL in the Supabase SQL editor:

```sql
create table leads (
  id uuid primary key default gen_random_uuid(),
  full_name text not null,
  email text not null,
  phone text not null,
  session_type text not null,
  preferred_location text,
  preferred_date date not null,
  message text,
  created_at timestamptz default now()
);

-- Optional: enable row-level security
alter table leads enable row level security;

-- Allow the anon key to insert only (no read access)
create policy "Allow insert" on leads
  for insert with check (true);
```

3. Add your Supabase URL and anon key to `.env.local`

---

## Deploying to Vercel

1. Push to GitHub
2. Import the repo at [vercel.com](https://vercel.com)
3. Add all environment variables in the Vercel dashboard under **Settings → Environment Variables**
4. Deploy

---

## Customization

### Replacing portfolio images

The portfolio section (`components/Portfolio.tsx`) uses sample Unsplash images. Replace the `src` values in the `photos` array with your actual SmugMug or hosted image URLs.

### Updating testimonials

Edit the `testimonials` array in `components/Testimonials.tsx` with real client feedback.

### Updating pricing

Edit the `packages` array in `components/Packages.tsx`.

### OG image

Add a high-quality `/public/og-image.jpg` (1200×630px) for social sharing previews.

---

## Project Structure

```
app/
  layout.tsx          # Root layout, SEO metadata, JSON-LD
  page.tsx            # Main page — composes all sections
  globals.css         # Global styles + Tailwind theme
  api/
    lead/
      route.ts        # POST /api/lead — Resend email + Supabase insert
components/
  Header.tsx          # Sticky nav with mobile menu
  Hero.tsx            # Full-height dark hero
  WhoItsFor.tsx       # Session types / services
  Packages.tsx        # Pricing cards (dark section)
  HowItWorks.tsx      # 3-step process
  Portfolio.tsx       # 8-image preview grid
  Testimonials.tsx    # Client quotes
  FAQ.tsx             # Accordion FAQ
  LeadForm.tsx        # Lead capture form (client component)
  Footer.tsx          # Service areas, contact, copyright
```
