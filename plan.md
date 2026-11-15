# Atlas Women's Safety Network — Phase 1 Plan

## Scope
Phase 1 delivers the public-facing AWSN foundation: homepage, emergency help, searchable support directory, bilingual digital safety resource hub, school club and partner-network introductions, plus an authenticated admin CMS foundation. Official emergency contacts are sourced from Bangladesh Police and Police Headquarters pages; all other directory records are sample/pending verification.

## Architecture
- React + TypeScript + Vite frontend with Wouter routes.
- Express + tRPC backend with the initialized managed MySQL database and Drizzle ORM.
- Public, non-sensitive content is separated from restricted admin/referral data in schema design.
- Authentication uses the starter's Manus OAuth session and admin role field.
- Phase 1 keeps later school, academy, referral, safeguarding, and M&E modules extensible without collecting survivor disclosures.

## Project structure
- `client/src/pages`: public and admin route screens.
- `client/src/components`: reusable visual and navigation pieces.
- `client/src/data`: reviewed emergency contact and sample directory/resource content.
- `server/routers.ts`: public content and admin CRUD procedure surface.
- `server/db.ts`: database queries and seed-safe access helpers.
- `drizzle/schema.ts`: users, organisations, contacts, resources, verifications, and audit records.
- `public/manus-routes.json`: complete page manifest for crawlers and platform tooling.

## Design direction
Three possible directions: Evidence-led civic editorial (0.06); Quiet institutional care (0.07); Modern public-service archive (0.04). Chosen: Evidence-led civic editorial.

- **Design movement:** public-interest editorial design with restrained civic wayfinding.
- **Core principles:** calm clarity, source visibility, Bangla-first accessibility, and action without alarm.
- **Color philosophy:** warm ivory reduces institutional harshness; deep ink-navy supports trust and legibility; muted teal signals safe navigation; soft brass marks verified evidence and important orientation.
- **Layout paradigm:** editorial split sections and asymmetric information rails rather than a generic centered landing-page grid.
- **Signature elements:** a brass verification rule, a compact emergency rail, and source/date metadata attached to every official contact.
- **Interaction philosophy:** every action explains what happens next; urgent links are visually distinct but never sensational.
- **Animation:** minimal; only gentle reveal and focus transitions, with reduced-motion support.
- **Typography system:** system Bangla stack for reliable rendering, paired with a crisp sans-serif UI hierarchy; large editorial headlines, compact uppercase metadata, and generous line height.
- **Brand essence:** a calm public-interest guide connecting women and girls in Bangladesh to safer information and verified pathways. Personality: grounded, protective, transparent.
- **Brand voice:** direct, respectful, and non-promissory. Example lines: “Start with the kind of help you need.” “Official contact, source, and verification date—shown together.”
- **Wordmark & logo:** an outlined atlas-pin mark built from two intersecting protective arcs, paired with the Atlas AI Institute wordmark.
- **Signature brand color:** atlas teal `#0F766E`.

## Delivery
Build and check the app locally in the managed project, confirm the route manifest and production build, commit to the canonical repository, and publish only when the managed workflow confirms the checkpoint. Document incomplete integrations and the need for independent security review before real survivor referrals are enabled.
