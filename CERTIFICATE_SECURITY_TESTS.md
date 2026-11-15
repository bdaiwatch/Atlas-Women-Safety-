# Certificate, Security and Privacy QA Results

## Certificate test matrix

| Test | Expected | Current result |
|---|---|---|
| Fewer than 8 modules | Not eligible | PASS in UI, but based on local storage only |
| All modules complete | Eligible only after quizzes and final assessment | FAIL: UI can issue without those requirements |
| Duplicate ID | Must be impossible | NOT VERIFIED: browser random ID only; database path is not connected |
| Unknown verification ID | Not found | PARTIAL: same-browser local record lookup only |
| Revoked certificate | Publicly shows REVOKED | NOT VERIFIED end-to-end: server route exists, browser verifier does not query it |
| QR code | Opens canonical verification URL | FAIL: QR code not implemented |
| A4 PDF | High-resolution server PDF | FAIL: browser print/save only |
| Admin revocation | Admin-only, reason and audit event | PARTIAL/PASS at API/UI level; requires real DB and authenticated staging test |

## Security and privacy conclusions

The admin API uses role-based `adminProcedure`, and revocation records actor ID, timestamp and reason. The public certificate page does not display email or passwords. However, client-side certificate generation and local verification are critical security failures for a real credential. Local storage can be edited, copied or removed by the learner, and a certificate created in one browser is not visible as a public certificate in another browser.

The next implementation must move eligibility, issuance, verification and revocation to authenticated server-side procedures backed by the database. Public verification should return only certificate ID, learner name, course title, institution, completion date, status and verification timestamp. It must never expose learner email, password, assessment answers or internal audit details.

## Final security disposition

**Not approved for public certificate issuance.** The existing admin audit API is a useful foundation, but it is not evidence that the whole certificate system is secure until the issuance flow is connected to it and the real database/authentication environment is tested.
