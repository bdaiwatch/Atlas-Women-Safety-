# Women Safety in AI Era — Atlas AI Institute

A Bangla-first digital safety, rights, learning, and support navigation platform for women and girls in Bangladesh, initiated by **Atlas AI Institute**.

## Tech Stack

- **Frontend**: React 19, TypeScript, Vite, Tailwind CSS v4, Wouter, Lucide Icons
- **Backend**: Express, tRPC v11, SuperJSON, Zod
- **Database**: Drizzle ORM (`mysql2`) with automatic in-memory fallback when `DATABASE_URL` is not configured
- **Testing**: Vitest

## Key Features Preserved & Rebranded

- Bangla-first digital safety foundation course (8 modules, lessons, downloadable `.txt` checklists, local progress tracking)
- 30-question MCQ + 5 short-written-question final exam with 70% pass requirement, 45-minute countdown timer, and automatic submission on expiry
- Certificate generation after course + exam completion (`Atlas AI Institute` — `Women Safety in AI Era`) with learner name, final score, pass mark, and unique certificate ID (`AAI-WSAI-...`)
- Public certificate verification (`/verify/:id`) and admin certificate audit (`/admin/certificates`)
- Support directory (`/support`), official emergency contacts (`/emergency`), and digital safety resource hub (`/resources`)
- School programme (`/school-programme`), school registration (`/clubs/register`), and verified club directory (`/clubs`)
- Responsive navigation, mobile menu, safe-exit bar, and privacy-first safeguarding defaults

## Scripts

- `npm run dev` — Start development server on port `3000` (`0.0.0.0`)
- `npm run check` — Type-check TypeScript (`tsc --noEmit`)
- `npm run build` — Build frontend (`dist/public`) and backend (`dist/index.js`)
- `npm start` — Run production server (`NODE_ENV=production node dist/index.js`)
- `npm test` — Run Vitest test suite
- `npm run db:push` / `npm run db:migrate` — Generate and run Drizzle MySQL migrations

## Environment Variables

See `.env.example` for optional database (`DATABASE_URL`) and reviewer OAuth configuration.
