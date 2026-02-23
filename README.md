# WiLS / Recollection Wisconsin — UX Prototypes & Wireframes

This repository contains interactive user-flow prototypes and homepage wireframe explorations (built with Vite/React), published together via GitHub Pages for stakeholder review.

## View the project site (no coding needed)

- **Project Hub (Start Page):** https://leahgoldblum.github.io/WiLS-RecollectionWi/
- **Tree User Flow:** https://leahgoldblum.github.io/WiLS-RecollectionWi/tree/
- **Interactive User Flow:** https://leahgoldblum.github.io/WiLS-RecollectionWi/interactive/
- **User Flow for Everyone:** https://leahgoldblum.github.io/WiLS-RecollectionWi/everyone/
- **Low-Fidelity Homepage Wireframe (V1):** https://leahgoldblum.github.io/WiLS-RecollectionWi/wireframe-lowfi/
- **Intent-Driven Homepage Wireframe (V1):** https://leahgoldblum.github.io/WiLS-RecollectionWi/wireframe-intent/
- **Final Low-Fidelity Homepage Wireframe (V2):** https://leahgoldblum.github.io/WiLS-RecollectionWi/wireframe-final-v2/

## What’s in this repo

- `/pages/` – Landing page that links to research artifacts, user flows, and wireframes
- `/tree/` – Tree User Flow prototype
- `/interactive/` – Interactive User Flow prototype
- `/everyone/` – User Flow for Everyone prototype
- `/wireframe-lowfi/` – Initial low-fidelity homepage wireframe
- `/wireframe-intent/` – Intent-driven homepage wireframe (V1)
- `/wireframe-final-v2/` – Final low-fidelity homepage wireframe (V2), selected direction based on stakeholder feedback

## Current Selected Direction

The current preferred homepage wireframe direction is:

✅ **Final Low-Fidelity Homepage Wireframe (V2)**

This version builds on the intent-driven concept and reflects stakeholder feedback, including:
- clearer contributor-focused language
- improved pathway framing
- updated terminology for contributor resources
- a cleaner client-facing wireframe presentation

## Research Artifacts (linked from the project hub)

The project hub also includes:
- **User Persona Journey Map**
- **Strategic Design Alignment Matrix**

## How it’s deployed

A GitHub Actions workflow (`.github/workflows/deploy-pages.yml`) builds the prototypes/wireframes and deploys them together as a single GitHub Pages site.

If you don’t see the latest version yet, refresh after a minute or two while the GitHub Pages workflow finishes running.

## Local development (optional)

Each prototype/wireframe has its own local setup. To run one locally:

```bash
cd wireframe-final-v2
npm install
npm run dev
