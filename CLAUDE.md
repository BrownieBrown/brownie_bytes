# Brownie Bytes - Developer Portfolio

## Project Overview
A minimal developer portfolio website for Marco Braun built with Next.js 14, Tailwind CSS, and Prisma.

## Tech Stack
- **Framework**: Next.js 14 (App Router)
- **Database**: PostgreSQL with Prisma ORM
- **Styling**: Tailwind CSS
- **Deployment**: Ready for Vercel, Railway, or self-hosted

## Design
- **Style**: White minimalist design inspired by jeton.com
- **Accent Color**: `#fcba70` (warm golden amber)
- **Typography**: Bold, large headings with Geist font
- **Layout**: Lots of whitespace, clean borders, no shadows

## Current Status

### Completed
- [x] Project setup with Next.js 14, TypeScript, Tailwind
- [x] Prisma schema (User, Post, Comment, Experience models)
- [x] Public pages: Home, About, Blog, Experience
- [x] Blog with dynamic routes (`/blog/[slug]`)
- [x] Responsive navigation and footer
- [x] White minimal design with #fcba70 accent
- [x] About page with CV content (playful tone)
- [x] Experience page with work history
- [x] Homepage with personal branding
- [x] GitHub, LinkedIn, and email links added

### Removed (per user request)
- Authentication (NextAuth.js) - removed entirely
- Sign in/Register pages
- Dashboard
- Comments functionality
- Twitter links

### Pending
- [ ] Connect to PostgreSQL database
- [ ] Add actual blog posts
- [ ] Add actual experience/job history

## Key Files
```
src/
├── app/
│   ├── (public)/
│   │   ├── page.tsx          # Homepage
│   │   ├── about/page.tsx    # About page (needs CV content)
│   │   ├── blog/page.tsx     # Blog listing
│   │   ├── blog/[slug]/page.tsx
│   │   └── experience/page.tsx
│   ├── api/blog/             # Blog API routes
│   ├── layout.tsx            # Root layout
│   └── globals.css           # Global styles
├── components/
│   ├── Navbar.tsx
│   └── Footer.tsx
├── lib/
│   └── prisma.ts
prisma/
├── schema.prisma             # Database schema
└── seed.ts                   # Seed script with sample data
```

## Database Setup
When PostgreSQL is available:
1. Update `DATABASE_URL` in `.env`
2. Run `npm run db:migrate` to create tables
3. Run `npm run db:seed` to add sample data

## Links
- LinkedIn: https://www.linkedin.com/in/marco-braun-b11423145
- GitHub: https://github.com/BrownieBrown
- Email: marco_alexander_braun@proton.me

## Notes
- User prefers clean, minimal design
- No authentication needed for now
- Blog posts will be managed directly in database (no admin UI currently)
