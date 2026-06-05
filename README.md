# Fabio Di Nota Portfolio

Personal portfolio for software engineering, UI/UX design, project case studies,
blog posts, and contact inquiries.

## Stack

- Next.js 16 App Router
- React 19
- TypeScript
- Tailwind CSS 4
- motion
- Lottie React
- Resend
- Vitest

## Getting Started

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Scripts

```bash
npm run dev        # Start the local development server
npm run lint       # Run ESLint
npm run typecheck  # Run TypeScript without emitting files
npm test           # Run Vitest unit tests
npm run build      # Create a production build
npm run start      # Serve the production build
```

## Environment

Create `.env.local` for local contact form delivery:

```env
RESEND_API_KEY=re_...
EMAIL=contact@fabiodinota.com
```

`RESEND_API_KEY` is required for email delivery. `EMAIL` is used as both the
sender and recipient address; when omitted, the server action falls back to
`contact@fabiodinota.com`.

## Project Structure

```text
app/                  Route files, layouts, metadata, sitemap, robots, OG route
components/layout/    Shared shell and providers
components/navigation/Menu, menu button, and theme switch
components/ui/        Generic UI primitives
context/              Theme context
content/blog/         Markdown blog posts
features/about/       About page components
features/blog/        Blog client components
features/contact/     Contact validation, server action, and email template
features/projects/    Project data and project cards
lib/                  SEO, blog, motion, type, and utility helpers
public/               Static images, SVGs, and Lottie assets
tests/                Vitest unit tests and archived contact terminal fixture
```

## Content

Blog posts are markdown files in `content/blog`. Project data lives in
`features/projects/data.ts`; project images are imported from `public/`.

## Contact Flow

The active contact page links to email and LinkedIn directly. The previous
terminal contact UI is parked under `tests/fixtures/contact-terminal` for now.
Server-side contact utilities remain in `features/contact/` for future reuse.
