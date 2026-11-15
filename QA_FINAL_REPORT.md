# Final QA & Course Launch Report

**Product:** Women’s Safety in the AI Era — Basic Foundation Course  
**Institution:** Atlas AI Institute  
**Review scope:** Course content, LMS functionality, certificate flow, security/privacy, accessibility, mobile readiness and launch controls  
**QA decision:** **NOT READY FOR PUBLIC LAUNCH**

## Executive summary

The platform builds successfully and the existing automated backend tests pass. The curriculum data is substantially populated: 8 modules, 40 lessons and 24 module quiz questions, with paired Bengali and English fields. The school programme page, bilingual reading controls and an admin certificate audit route are present.

Public launch is blocked by missing or non-production functionality. Certificate issuance and public verification are still browser-local and can be bypassed; the final 20-question assessment and 70% server-side eligibility check are not implemented; QR verification is not implemented; student registration/enrolment and a persistent learner progress model are not complete; and the new certificate audit database table is not connected to the browser certificate issuance flow. The platform must not be described as production-ready until these issues are fixed and retested against a real database and authenticated deployment.

## Automated checks completed

| Check | Result | Evidence |
|---|---|---|
| `pnpm test` | PASS | 2 test files, 6 tests passed |
| TypeScript | PASS | `pnpm exec tsc --noEmit --ignoreDeprecations 5.0` |
| Production build | PASS with warnings | Vite + esbuild completed; module script warning and large bundle warning remain |
| Curriculum count | PASS for presence | 8 modules, 40 lesson title pairs, 24 quiz question pairs |
| Migration generation | NOT VERIFIED | Drizzle generate requires `DATABASE_URL`; SQL migration was manually authored and journal-registered |
| Real DB migration | NOT VERIFIED | No production/staging database credentials were available |
| Android/device test | NOT VERIFIED | No physical Android/browser session was available |
| Screen reader/keyboard audit | NOT VERIFIED | Requires interactive browser and assistive technology testing |

## Content review

### Confirmed

- All 8 approved module IDs are present.
- Each module has English and Bengali introductions, activities and summaries.
- 40 lessons have English and Bengali titles and body content.
- 24 quiz questions have English and Bengali question text, options and explanations.
- Content repeatedly avoids requiring abuse disclosures and uses fictional scenarios.
- The course uses appropriate safety language such as trusted adults, safe evidence preservation, platform reporting and current official-source checks.
- The course avoids promising legal outcomes and generally warns that laws and reporting routes may change.

### Requires editorial sign-off

- Bengali language quality and terminology need a native Bengali safeguarding/editorial review, not only automated field-presence checks.
- Bangladesh-specific legal, police and reporting information must be checked against current official sources immediately before publication. This QA pass did not certify legal accuracy.
- Age-appropriateness, trauma-informed language and safeguarding escalation wording require review by a qualified child-protection professional.
- A content owner must approve all course facts, resource files and support contacts, including verification dates.

## LMS functionality review

| Requirement | Status | Finding |
|---|---|---|
| Student registration/login | BLOCKED | Existing OAuth/admin authentication exists, but a learner registration/enrolment flow for this course was not found. |
| Course enrolment | BLOCKED | Course page is accessible without enrolment and has no persistent learner-course enrolment record. |
| Lesson navigation | PARTIAL | Expandable module/lesson presentation exists; no distinct lesson route or previous/next lesson workflow. |
| Progress tracking | PARTIAL / DEMO ONLY | Module completion is stored in browser `localStorage`; it is not account-bound or server-backed. |
| Module quizzes | PARTIAL | 24 questions render with immediate feedback, but quiz result history and completion persistence are absent. |
| Final assessment | BLOCKED | Required 20-question final assessment, randomisation and 70% threshold are not implemented. |
| Certificate eligibility | BLOCKED | UI only checks that all modules are in local storage; it does not validate quizzes or final assessment server-side. |
| Student dashboard | BLOCKED | No complete learner dashboard with enrolment, progress, assessment history and certificate states was found. |
| Admin dashboard | PARTIAL | Existing admin and phase-2 review screens exist; certificate audit has its own protected route. |
| Certificate audit | PARTIAL | Persistent schema/API/UI and revoke audit log exist, but issuance flow does not insert records into the table. |

## Certificate validation findings

### P0 launch blockers

1. `client/src/pages/Certificate.tsx` generates the certificate ID in the browser and stores the record in `localStorage`.
2. A learner can modify local storage and bypass the intended course completion model.
3. The certificate page itself states that quiz and final assessment validation are still a production integration requirement, but still allows certificate generation after local module completion.
4. The public `/verify/:id` page verifies only against the same browser’s local storage. It is not a public database-backed verification endpoint.
5. No QR code is generated or connected to a verification URL.
6. No server-side PDF generation exists. The current action delegates to browser Print/Save as PDF.
7. The issued certificate audit table cannot review certificates created by the current browser flow because those records are never inserted into `issued_certificates`.

### Certificate fixes required before launch

- Add authenticated learner/course/progress tables and server-side progress writes.
- Add persistent module quiz attempts/results and a 20-question final assessment record.
- Add a server-side `issue` procedure that independently checks all requirements in one transaction.
- Generate certificate IDs with a database unique constraint and server-side cryptographic randomness.
- Insert every issued certificate into `issued_certificates` and `audit_logs`.
- Generate QR data from the canonical public verification URL.
- Implement server-side A4 PDF generation and private certificate storage.
- Make `/verify/:certificate-id` query the database and display `VALID` or `REVOKED` from the stored record.
- Add tests for duplicate ID prevention, under-threshold issuance, invalid IDs and revoked IDs.

## Security and privacy findings

### Positive findings

- `adminProcedure` checks authenticated user role before certificate audit queries and revocation.
- The certificate audit table excludes email, password and assessment answers.
- Revocation requires a non-empty reason and writes an audit-log entry with actor ID and timestamp.
- Public course content does not require an abuse disclosure.
- The course includes safe-exit and safeguarding language.

### Findings requiring remediation

- **Critical:** Client-side certificate issuance and verification are not trustworthy for a public credential.
- **High:** Browser-local progress is not protected against tampering and is not portable between devices.
- **High:** No persistent final assessment or quiz history exists to support eligibility decisions.
- **High:** Database migration was not executed against a real database in this QA environment.
- **Medium:** Public verification is not actually public across devices because it reads local storage.
- **Medium:** No demonstrated rate limiting, abuse monitoring or audit coverage for public verification endpoints.
- **Medium:** Privacy policy, terms of use, retention schedule and data-subject/admin procedures were not found as complete launch documents.

## Mobile and accessibility review

### Static checks

- Responsive media queries exist for course, school programme, certificate and audit table layouts.
- Quiz options collapse to one column on smaller screens.
- The audit table has horizontal overflow handling for narrow screens.
- Several interactive controls have visible text labels, and quiz choices use `aria-pressed`.
- The course language control has a labelled group.

### Not yet verified

- Android Chrome rendering and touch target usability.
- Low-bandwidth loading and offline resource download behaviour.
- Full keyboard-only traversal and focus visibility.
- Screen-reader output for expandable `details`, quiz feedback, progress bar and certificate states.
- Bengali font rendering and line wrapping on small screens.
- Print-to-PDF A4 output on Chrome Android, desktop Chrome and Firefox.

## Launch decision

**No-go.** The platform is a promising functional prototype, not a safe production LMS or public certificate service yet. The highest priority is replacing browser-only progress/certificate logic with authenticated server-side records and completing the final assessment and verification system.

## Required release gates

1. P0 certificate and assessment issues fixed.
2. Real staging database migrated successfully from a clean database.
3. Authenticated learner journey tested end-to-end.
4. Public verification tested from a separate browser/device.
5. Revocation tested and visible publicly.
6. Privacy, terms, safeguarding and support pages approved.
7. Current Bangladesh reporting/legal information re-verified by an authorised reviewer.
8. Android, desktop, keyboard and screen-reader smoke tests completed.
9. Backup/restore and admin recovery procedure tested.
10. Security review completed before public certificate issuance.
