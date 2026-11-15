# Atlas AI Institute — Launch Readiness Checklist

**Current status: NO-GO / prototype only**

## Product and infrastructure

- [ ] Production domain selected and DNS configured.
- [ ] HTTPS enforced; secure cookies and security headers verified.
- [ ] Production hosting environment documented with rollback plan.
- [ ] Error monitoring and uptime monitoring configured.
- [ ] Low-bandwidth and Android smoke tests passed.

## Data and database

- [ ] Staging database created from a clean schema.
- [ ] `0003_certificate_audit.sql` applied successfully.
- [ ] Learner, enrolment, lesson progress, quiz attempt and final assessment tables implemented.
- [ ] Unique certificate ID constraint tested.
- [ ] Automated backup and restore tested.
- [ ] Retention and deletion procedure approved.

## Course and safeguarding

- [ ] All 8 modules approved by instructional design reviewer.
- [ ] Bengali content approved by a native Bengali editor.
- [ ] Bangladesh legal/reporting references checked against current official sources.
- [ ] Age-appropriateness and child-safeguarding review signed off.
- [ ] Privacy Policy published.
- [ ] Terms of Use published.
- [ ] Safe support/referral information published with verification dates.
- [ ] No course activity requests personal abuse disclosure or intimate-image upload.

## Learner journey

- [ ] Registration and secure login tested.
- [ ] Consent and under-18 safeguarding flow tested.
- [ ] Course enrolment record created.
- [ ] Progress syncs across two devices.
- [ ] Quiz attempts/results persist and cannot be changed by client storage.
- [ ] 20-question final assessment randomisation tested.
- [ ] 70% threshold tested at 69%, 70% and 100%.

## Certificates

- [ ] Only server-side eligible learners can issue.
- [ ] Certificate ID is generated server-side and unique.
- [ ] Issuance inserts `issued_certificates` and `audit_logs` records.
- [ ] QR code resolves to the canonical verification URL.
- [ ] Verification works from a separate browser/device.
- [ ] Unknown ID returns the required not-found message.
- [ ] Revoked certificate shows `REVOKED` publicly.
- [ ] A4 PDF generated server-side and print-tested.
- [ ] Duplicate issuance/reissue policy approved.

## Administration and security

- [ ] Admin role checks tested for every certificate endpoint.
- [ ] Non-admin direct requests return `FORBIDDEN`.
- [ ] Audit table search and revocation tested.
- [ ] Revocation requires reason and records actor/timestamp.
- [ ] Public verification exposes minimum necessary data only.
- [ ] Rate limiting, abuse monitoring and security headers checked.
- [ ] Incident response and admin account recovery documented.

## Accessibility and QA evidence

- [ ] Keyboard-only test passed.
- [ ] Screen-reader smoke test passed.
- [ ] Colour contrast checked.
- [ ] Focus states visible.
- [ ] Bengali typography tested on small Android screens.
- [ ] Loading, empty, error and retry states tested.
- [ ] Automated tests, TypeScript check and production build pass.
- [ ] QA report signed off by responsible reviewer.
