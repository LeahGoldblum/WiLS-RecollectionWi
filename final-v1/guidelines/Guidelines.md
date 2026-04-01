# Recollection Wisconsin Wireframe Guidelines

## General

- This is a low-fidelity wireframe prototype for LIS 640 capstone. Maintain wireframe style only — no heavy branding, no full visual polish.
- Monochrome / greyscale palette throughout. Neutral tones (neutral-50 through neutral-900) only.
- No em dashes anywhere in copy or labels. Use hyphens or parentheses instead.
- No real backend, email, authentication, or database. All form submissions are simulated.
- No real DPLA search integration. All results are mock/wireframe stubs.

## Audience Paths

Three audience paths are implemented and must remain distinct:
1. **Educators** — /educators and sub-routes. Map feature lives HERE only.
2. **Genealogists** — /genealogists and sub-routes.
3. **Contributors / Organizations** — /organizations and sub-routes.

All three paths must be accessible from:
- Homepage audience cards (HeroSection + Home CTA section)
- Header navigation dropdown menus

## Contributor (Organizations) Flow Rules (Kristen's requirements — non-negotiable)

- RWDI is NOT a selectable pathway. Only Hosting and Harvesting are pathways.
- RWDI interest is captured as a checkbox (Step 0 of the wizard), not a route branch.
- "Every three months" replaces "quarterly" or "~quarterly" everywhere.
- "Recollection Wisconsin staff member" replaces "WiLS staff member" everywhere.
- "I'm just getting started digitizing materials" is a distinct goal option from "Get help digitizing."
- Underrepresented communities helper text: "RW prioritizes these collections; we can discuss more how the digital materials and metadata are handled."
- CC0 acknowledgement must include a "What is CC0?" link to https://creativecommons.org/public-domain/cc0/
- Review step includes "Email me a copy of my completed submission" checkbox.
- Confirmation screen shows "Copy will be sent to: [email]" and a "Download a copy" button (mock).

## Copy Rules (Partner With Us / OrganizationsHub)

Match the live RW site language exactly:
- Use "Content Partners" not "contributors" in hub-level copy.
- Use "Collection Hosting" and "Collection Harvesting" as pathway names (not just "Hosting" / "Harvesting") in card titles.
- Reference DPLA as "Digital Public Library of America."
- Keep the "Please note:" callout about institutions vs. individuals.

## Design System

- Inter for body text, serif/display for headings (font-display class).
- Generous whitespace. Minimal shadows (only on hover states).
- Buttons and links must have clear clickability affordances.
- Wireframe annotations (Annotation component) are acceptable.
