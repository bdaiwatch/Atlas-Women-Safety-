# Mobile Compatibility & Accessibility Report

## Static evidence

The course, school programme, certificate and admin audit styles include responsive breakpoints. Lesson cards and quiz options collapse on narrow screens. The certificate audit table uses horizontal overflow rather than forcing unreadable columns. The course language selector and quiz options have labelled controls, and several icons are marked decorative with `aria-hidden`.

## Tests not executable in this environment

No physical Android handset, interactive browser session or screen reader was available during this QA pass. Therefore Android Chrome layout, touch target size, Bengali font rendering, low-bandwidth behaviour, keyboard traversal, focus visibility, screen-reader semantics, and print-to-PDF output remain unverified.

## Required pre-launch tests

Run the course on a small Android viewport and a real Android Chrome device. Verify that all text remains readable, language controls remain reachable, quiz feedback is announced, expandable modules are understandable, and no action requires horizontal scrolling except the admin table. Test with keyboard-only navigation on desktop, inspect focus rings, and perform a screen-reader pass over progress, quiz feedback, certificate eligibility and revocation states. Save one A4 PDF from desktop Chrome and Android Chrome and compare margins, page orientation and text clipping.
