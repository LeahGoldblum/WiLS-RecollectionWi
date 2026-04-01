Create a polished, implementation-aware visual style guide and mid-fidelity design system for a UX capstone redesign of Recollection Wisconsin, a digital cultural heritage discovery platform built on WordPress and connected to a fixed DPLA search infrastructure.

This is not a full rebrand from scratch. The goal is to modernize and clarify the experience while preserving institutional trust, accessibility, and realistic implementation constraints.

PROJECT CONTEXT
- Recollection Wisconsin helps users discover archival and historical resources from content partners across Wisconsin.
- This capstone focuses on front-end UX improvements, not backend search rebuilds.
- The redesign must support:
  1. contributor onboarding
  2. educator discovery / pre-search guidance
  3. featured content / online exhibits / Main Street Mondays
  4. a partner-based map experience
- The current site is content-heavy, white-background, WordPress-based, and organized around Explore / Projects / Toolkit / Get Involved.
- The visual direction should feel editorial, archival, trustworthy, warm, spacious, accessible, and realistic for WordPress block-based implementation.

IMPORTANT STAKEHOLDER RULES
- Contributor onboarding should route to only two primary pathways:
  - Hosting
  - Harvesting
- RWDI / student intern support is not a third main pathway. It should appear as an optional support-interest question later in the flow.
- The feasible map is NOT a record-level metadata map.
- The map should be based on known content partners and their collections, using partner locations, regions, counties, and short collection summaries.
- Educators need fast, guided orientation and “start here” support.
- Search starters are a key feature direction.
- The design should reduce clicks and improve clarity.

CREATE A STYLE GUIDE WITH THESE EXACT TOKENS

COLOR PALETTE
- Primary Ink: #1F2A30
- Warm Paper: #F7F4EE
- White Surface: #FFFFFF
- Heritage Green: #486B5D
- Deep Heritage Green: #355146
- Lake Blue: #3F667A
- Brass / History Gold: #B38A3C
- Clay Accent: #A76D4E
- Text Secondary: #52616A
- Text Muted: #6F7C84
- Border Light: #D8D2C7
- Border Soft: #E7E2D8
- Muted Section Background: #EFE9DE
- Success: #4E7A59
- Warning: #A9792E
- Error: #A84C45
- Info: #436A80

TYPOGRAPHY
- Display font: Source Serif 4
- Body/UI font: Inter
- H1: 40/48 semibold
- H2: 32/40 semibold
- H3: 24/32 semibold
- Body large: 18/30 regular
- Body: 16/28 regular
- Small/helper: 14/22 regular
- Eyebrow/label: 12/18 semibold with slight letter spacing

SPACING + UI FOUNDATIONS
- 8px spacing scale
- Card radius: 12px
- Input radius: 10px
- Soft borders and minimal shadows
- Clean sections with generous whitespace
- White cards on warm paper backgrounds
- Sticky header
- Clear CTA hierarchy
- Accessible focus states

CREATE EXAMPLE COMPONENTS
- global header / nav
- hero or section header
- search starter cards
- featured content cards
- tags/chips
- contributor wizard stepper
- form fields
- review/submit summary block
- map side panel
- partner result cards
- empty state / no results state
- footer

MAP MODULE REQUIREMENTS
Design a partner-based Wisconsin discovery map with mock data, no real API required.

Map behavior:
- default view shows Wisconsin with either partner dots or region overlays
- clicking a region opens a side panel or results section showing:
  - region name
  - partner count
  - featured counties/cities
  - 4-8 partner cards
- clicking a partner shows:
  - partner name
  - city
  - county
  - partner type
  - short collection scope summary
  - featured topics
  - “View collections” CTA
  - optional “Partner page” CTA

Use this mock data model:
- partner_name
- city
- county
- region
- lat
- lng
- partner_type
- collection_scope_summary
- featured_topics
- featured_formats
- collections_count
- direct_collection_url
- partner_page_url

MAP UX RULES
- Make the map feel useful without pretending to solve the record-level metadata problem.
- Reduce unnecessary clicks.
- Emphasize partner reach across Wisconsin.
- Support two framing modes:
  1. general/research discovery
  2. educator “start with this place” exploration

EDUCATOR DISCOVERY REQUIREMENTS
Create a guided educator section that feels faster and more dynamic than the current site.
Include:
- search starters
- quick “start here” prompts
- place/topic/era starter chips
- curated featured content area
- optional “Explore local history by place” entry point powered by the partner map system
- teacher-friendly copy and lower cognitive load

CONTRIBUTOR WIZARD REQUIREMENTS
Create a design pattern for the contributor onboarding wizard using these steps:
- Fit & Intent
- Choose Pathway
- Organization
- Collection
- Rights & Ownership
- Digital Readiness
- Timeline & Support
- Review & Submit

Contributor rules:
- pathways = Hosting or Harvesting only
- include optional later checkbox:
  “I’d like to learn more about hosting a student intern to assist with digitization, description, and uploading.”
- include option:
  “I’m just getting started digitizing materials.”
- reference CC0 help link in rights area
- use “Recollection Wisconsin staff member” wording
- quarterly harvest should be phrased as “every three months”
- confirmation screen should support the idea that a contributor can receive a copy of their submission

OUTPUT
- produce a clean style guide frame
- produce sample mid-fidelity screens
- keep everything presentation-ready, coherent, accessible, and implementation-aware
- overall feeling: archival editorial clarity with modern UX discipline