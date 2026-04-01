Create a full mid-fidelity product design system and connected screen set for a UX capstone redesign of Recollection Wisconsin, a digital cultural heritage discovery platform. This should feel like a serious graduate-level UX capstone deliverable: polished, coherent, accessible, realistic, and grounded in stakeholder feedback.

PROJECT OVERVIEW
This project redesigns the front-end user experience of Recollection Wisconsin. The work does NOT replace or redesign the core DPLA backend search infrastructure. Instead, it improves discovery, orientation, page hierarchy, contributor onboarding, and guided entry points for key users.

The redesign must feel realistic for a WordPress-based environment and should balance visual polish with implementation realism.

PRIMARY GOALS
- reduce friction for first-time users
- improve clarity of entry points
- make educator discovery faster and more useful
- make contributor onboarding more understandable and actionable
- create a place-based exploration experience that is realistic and useful
- preserve institutional trust, accessibility, and archival seriousness

PRIMARY USER GROUPS
1. Educators
2. Researchers / lifelong learners / genealogists
3. Contributors / potential content partners

IMPORTANT CONSTRAINTS
- The project does not redesign the backend search engine.
- Search improvements should happen through front-end guidance, contextual suggestions, search starters, and better pathways.
- Contributor onboarding must route into only two real pathways:
  1. Hosting
  2. Harvesting
- RWDI / student intern support is not a third main pathway; it should appear as an optional support-interest question later in the contributor flow.
- The map should NOT pretend to plot individual archival records from inconsistent metadata.
- The map should instead focus on Recollection Wisconsin content partners and the collections they contribute, using partner location, region, county, and collection summaries.
- Educators need fast orientation, lower cognitive load, and stronger “start here” guidance.
- The interface should feel modern and editorial, but not flashy or startup-like.

DESIGN PRINCIPLES
- clarity over complexity
- calm archival editorial tone
- accessible, spacious, readable layouts
- realistic for WordPress
- modular and reusable components
- guided exploration where search complexity exists
- meaningful hierarchy and clear calls to action

VISUAL STYLE SYSTEM
Use this exact visual direction.

Color palette:
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

Typography:
- Display headings: Source Serif 4
- Body/UI: Inter
- H1: 40/48 semibold
- H2: 32/40 semibold
- H3: 24/32 semibold
- H4: 20/28 semibold
- Body large: 18/30 regular
- Body: 16/28 regular
- Small/helper: 14/22 regular
- Label/eyebrow: 12/18 semibold with slight tracking

UI foundations:
- 8px spacing scale
- generous whitespace
- card radius: 12px
- input radius: 10px
- soft shadows only
- subtle borders
- strong section hierarchy
- accessible focus states
- calm editorial feeling

SITE MAP / PAGE INVENTORY

GLOBAL
1. Homepage
2. Shared header/navigation
3. Shared footer

CONTRIBUTOR AREA
4. Contributor landing hub (“Partner with Us”)
5. Hosting information page
6. Harvesting information page
7. Contributor wizard: Fit & Intent
8. Contributor wizard: Choose Pathway
9. Contributor wizard: Organization
10. Contributor wizard: Collection
11. Contributor wizard: Rights & Ownership
12. Contributor wizard: Digital Readiness
13. Contributor wizard: Timeline & Support
14. Contributor wizard: Review & Submit
15. Contributor confirmation page

EDUCATOR / DISCOVERY AREA
16. Educator hub
17. Search starters / Quick Find module or page
18. Featured content / Main Street Mondays module or page
19. Place-based exploration / partner map page
20. Partner result panel or partner result detail view
21. Search handoff / continue to collections state

SUPPORTING STATES
22. Resources / toolkit support page
23. FAQ / help panel state
24. Empty state / no results state
25. Mobile-responsive examples for homepage, educator hub, and contributor wizard

PAGE-BY-PAGE REQUIREMENTS

1. HOMEPAGE
Purpose:
- orient users quickly
- create clear entry points for discovery and contribution
Audience:
- mixed public users + contributors
Required sections:
- simple hero with short mission statement
- audience entry cards or pathways
- featured collections/content area
- educator entry point
- contributor entry point
- place-based exploration teaser
- search/support entry
- footer
Behavior:
- homepage should reduce ambiguity and clearly signal where to start

2. CONTRIBUTOR LANDING HUB
Purpose:
- explain what it means to contribute to Recollection Wisconsin
- help users understand Hosting vs Harvesting before starting
Required sections:
- overview
- pathway comparison cards
- process summary
- FAQ/help snippet
- CTA to start wizard
- optional support references
Behavior:
- make Hosting and Harvesting visually distinct but equally clear

3. HOSTING PAGE
Purpose:
- explain hosted collections model
Required content:
- what Hosting means
- who it fits
- benefits
- responsibilities
- readiness notes
- CTA to start or continue intake

4. HARVESTING PAGE
Purpose:
- explain metadata harvesting model
Required content:
- what Harvesting means
- who it fits
- OAI-PMH expectation
- update cycle every three months
- readiness notes
- CTA to start or continue intake

5–14. CONTRIBUTOR WIZARD
Create a clear, step-based form system with a visual progress stepper.

Steps:
- Fit & Intent
- Choose Pathway
- Organization
- Collection
- Rights & Ownership
- Digital Readiness
- Timeline & Support
- Review & Submit

Contributor-specific rules:
- only two primary pathways: Hosting or Harvesting
- include an optional support-interest checkbox later in the flow:
  “I’d like to learn more about hosting a student intern to assist with digitization, description, and uploading.”
- include an option:
  “I’m just getting started digitizing materials.”
- rights step should include a visible help reference for CC0
- use the phrase “Recollection Wisconsin staff member”
- phrase harvest timing as “every three months”
- review screen should clearly summarize all entered information
- confirmation page should imply that the contributor can receive a copy of the completed submission

For each step, design:
- page title
- helper text
- grouped field sections
- back / next actions
- validation helper space
- sidebar or callout for guidance when useful

15. CONTRIBUTOR CONFIRMATION PAGE
Purpose:
- reassure user submission is complete
Required content:
- confirmation message
- summary reference
- next steps
- note about follow-up from Recollection Wisconsin staff
- confirmation copy/download/email state

16. EDUCATOR HUB
Purpose:
- create a fast, guided entry point for teachers
Required content:
- “start here” orientation
- search starters
- quick-find prompts
- featured teaching-friendly content
- place-based exploration entry point
- curated resource cards
Behavior:
- reduce cognitive load
- make the first action obvious
- support browsing by topic, era, or place

17. SEARCH STARTERS / QUICK FIND
Purpose:
- help teachers begin without guessing search terms
Required elements:
- starter chips or prompts
- topic filters
- era filters
- place prompts
- time-based prompts if useful
- result suggestions or handoff links
Behavior:
- should feel fast and guided, not overwhelming

18. FEATURED CONTENT / MAIN STREET MONDAYS
Purpose:
- highlight curated, story-driven, engaging content
Required elements:
- featured carousel or grid
- short summaries
- tags
- clear CTA
Behavior:
- should feel dynamic and teacher-friendly

19. PLACE-BASED EXPLORATION / PARTNER MAP PAGE
Purpose:
- let users explore Wisconsin history through Recollection Wisconsin’s content partners
Important rule:
- this is a partner-based map, not a record-level metadata map

Design the map with:
- Wisconsin map
- region overlays and/or partner dots
- side panel or below-map result list
- filters if appropriate: region, county, partner type, topic

Map interaction behavior:
- clicking a region shows:
  - region name
  - partner count
  - featured counties/cities
  - 4–8 partner cards
- clicking a partner shows:
  - partner name
  - city
  - county
  - region
  - partner type
  - short collection scope summary
  - featured topics
  - “View collections” CTA
  - optional “Partner page” CTA

Use this mock data structure:
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

Design this page so it can support two tones:
1. general research discovery
2. educator “start with this place” discovery

20. PARTNER RESULT DETAIL VIEW
Purpose:
- show more detail when a partner is selected
Required content:
- partner name
- location
- type
- summary
- featured topics
- featured collections preview
- CTA to collections

21. SEARCH HANDOFF STATE
Purpose:
- bridge users from guided entry into the existing collection/search experience
Required content:
- context label showing what they selected
- button or link to continue searching
- optional helper note about what to expect

22. RESOURCES / TOOLKIT SUPPORT PAGE
Purpose:
- centralize contributor or educator help content
Required content:
- grouped resources
- FAQs
- support contacts
- download/resource cards

23. FAQ / HELP PANEL STATE
Purpose:
- lightweight expandable support area
Required elements:
- common questions
- concise answers
- “contact Recollection Wisconsin staff” CTA

24. EMPTY / NO RESULTS STATE
Purpose:
- prevent dead ends
Required content:
- friendly explanation
- suggestions
- alternate next steps
- reset or browse options

25. MOBILE-RESPONSIVE EXAMPLES
Create mobile layouts for:
- homepage
- educator hub
- contributor wizard step

SHARED COMPONENTS
Design and reuse:
- header
- footer
- pathway cards
- featured cards
- search starter chips
- tags
- CTA buttons
- side panels
- stepper
- input fields
- info callouts
- empty states
- breadcrumbs where useful

ACCESSIBILITY
- color contrast should meet WCAG AA for body text
- links should not rely on color alone
- focus states must be visible
- forms should use clear labels and helper text
- map interactions should also provide list-based access, not map-only interaction
- reduce dense layouts and cognitive overload

OUTPUT REQUIREMENTS
Create:
1. a style guide frame
2. a connected set of mid-fidelity screens
3. reusable components
4. consistent page hierarchy
5. a presentation-ready system that still looks realistic for implementation

Overall design tone:
editorial, archival, warm, clear, trustworthy, accessible, and modern without losing institutional seriousness.