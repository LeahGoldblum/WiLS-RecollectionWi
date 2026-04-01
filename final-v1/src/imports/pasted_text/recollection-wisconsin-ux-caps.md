Create a complete, graduate-level UX capstone design system and connected mid-fidelity prototype for a redesign of Recollection Wisconsin, a digital cultural heritage discovery platform. This must be a fully thought-through, stakeholder-aligned system, not a generic website redesign.

The output should visibly demonstrate that stakeholder feedback was heard and implemented. The architecture, labels, pathways, page relationships, and interaction logic must reflect the requests and constraints raised by Andi Coffin and Kristen Whitson. This project is nearly complete, so the goal is not to reinvent it. The goal is to make the right structural and visual refinements so the final result feels coherent, intentional, and defensible.

======================================================================
1. PROJECT OVERVIEW
======================================================================

This is a UX capstone redesign for Recollection Wisconsin.

Important scope:
- This project does NOT redesign the backend DPLA search system.
- It does NOT attempt to fix or standardize inconsistent record-level metadata.
- It DOES improve front-end user experience through:
  - better entry points
  - clearer information architecture
  - stronger navigation and menu structure
  - contributor onboarding improvements
  - educator pre-search guidance
  - genealogist/researcher discovery support
  - a realistic place-based partner map
  - better handoff into the existing collections/search experience

The redesign should feel realistic for a WordPress-based environment and should balance UX polish with implementation-aware structure.

======================================================================
2. CORE GOALS
======================================================================

Primary goals:
- reduce friction for first-time users
- make it obvious where different user types should start
- improve page hierarchy and menu clarity
- make educator discovery faster and more immediate
- make genealogist/researcher exploration more geographically intuitive
- make contributor onboarding clear, realistic, and trustworthy
- create a useful Wisconsin map experience that supports partner and collection discovery
- preserve institutional trust, accessibility, and archival seriousness
- ensure the final design feels aligned with real stakeholder requests rather than generic AI design

Success should feel like:
- the architecture makes sense immediately
- users understand where to start
- the menu labels feel intentional
- contributor routing is accurate
- educator and genealogist pages feel genuinely useful
- the map supports discovery without pretending to solve the metadata problem
- the system looks polished but realistic for WordPress

======================================================================
3. STAKEHOLDER ALIGNMENT REQUIREMENTS
======================================================================

This design must clearly reflect stakeholder feedback from Andi Coffin and Kristen Whitson.

Non-negotiable stakeholder requirements:
- contributor onboarding must focus on two primary pathways only:
  1. Hosting
  2. Harvesting
- RWDI / student intern support is not a third main pathway
- educator-facing pages should help users start quickly
- search starters / starting points are a key educator feature
- featured exhibits / Main Street Mondays are valuable content to surface
- the map should be based on content partners and their collection purviews, not inconsistent record-level geographic metadata
- information architecture and menu structure must be treated as core design work, not secondary styling
- the design should feel realistic for the current environment, not speculative fantasy product design

The final output should feel like a direct response to the client, not a generic museum, nonprofit, or startup website.

======================================================================
4. PRIMARY USER GROUPS
======================================================================

The design should support these user groups:

1. Educators
- Need quick access
- Need clear “start here” guidance
- Often search by topic/subject and may refine by community/county
- Benefit from snippets, featured resources, and guided entry points

2. Genealogists / Researchers / Lifelong Learners
- Often search by family names, street addresses, specific locations, community names, or county names
- Benefit from geographical narrowing and partner discovery
- Need a more exploratory and research-oriented experience

3. Contributors / Potential Content Partners
- Need clear onboarding and expectations
- Need help understanding Hosting vs Harvesting
- Need a guided intake flow that feels trustworthy and human

======================================================================
5. INFORMATION ARCHITECTURE PRINCIPLES
======================================================================

The information architecture is a core deliverable.

The design must prioritize:
- clear primary navigation
- clean page hierarchy
- audience-aware routing
- consistent relationships between pages
- obvious “where should I start?” signals
- reduced ambiguity and reduced cognitive load
- strong handoff from guided pages into the existing collections/search system

Do not invent random navigation. Do not flatten everything into a few vague pages. Do not prioritize aesthetics at the expense of structure.

The homepage should work as an orientation layer.
Educator, Genealogist, and Contributor sections should each have a distinct purpose.
Shared discovery tools should still feel connected to the broader site.

======================================================================
6. MERGE DIRECTION
======================================================================

Use the current colorcopy prototype as the primary visual and structural baseline. Its look and feel, page styling, and overall presentation direction are the preferred foundation.

Borrow the strongest interaction pattern from the geologymixup prototype: the place-based Wisconsin map explorer behavior. Reinterpret that feature for Recollection Wisconsin so it supports:
- historical discovery
- content partner discovery
- collection entry points
- region/county exploration
- genealogist and researcher discovery
- optional educator place-based exploration

This means:
- keep the visual direction of colorcopy
- keep the stronger page styling and aesthetic consistency of colorcopy
- use the map interaction logic from geologymixup
- replace geology-specific labels/content with Recollection Wisconsin partner and collection logic
- use the map as a real navigation/discovery tool, not decoration

======================================================================
7. RECOMMENDED PRIMARY NAVIGATION
======================================================================

Use this top-level menu architecture:

- Explore
- For Educators
- Genealogists
- Contribute
- Resources
- About

Menu logic:

Explore
- Browse Collections
- Explore by Place
- Featured Collections / Stories
- Search Tips / Start Here

For Educators
- Educator Hub
- Search Starters
- Featured Teaching Resources
- Explore by Place
- Online Exhibits / Main Street Mondays

Genealogists
- Genealogist Hub
- Search Records
- Explore by Map
- Research Tips

Contribute
- Partner with Us
- Hosting
- Harvesting
- Contributor FAQ
- Resources / Toolkit
- Get Started

Resources
- Toolkit
- Help / FAQ
- Guides
- Support / Contact

About
- About Recollection Wisconsin
- Content Partners
- Mission / Network / Reach

Navigation rules:
- labels should be plain and intuitive
- avoid overly clever names
- menu should reduce uncertainty
- guided entry points should clearly connect back to collections/search
- use breadcrumbs where helpful on interior pages
- do not overload the main nav

======================================================================
8. SITE MAP / PAGE INVENTORY
======================================================================

Create the following screens:

GLOBAL
1. Homepage
2. Shared Header / Navigation
3. Shared Footer

EXPLORE
4. Explore Landing Page
5. Featured Collections / Stories Page
6. Explore by Place / Shared Wisconsin Map Page
7. Search Handoff / Continue to Collections State

EDUCATORS
8. Educator Hub
9. Search Starters / Quick Find Page
10. Featured Teaching Resources / Main Street Mondays Page
11. Educator Place-Based Discovery Entry State

GENEALOGISTS
12. Genealogist Hub
13. Genealogist Search Entry Page
14. Genealogist Map Exploration Page
15. Partner / Collection Result Detail State

CONTRIBUTORS
16. Contributor Landing Hub (“Partner with Us”)
17. Hosting Information Page
18. Harvesting Information Page
19. Contributor Wizard: Fit & Intent
20. Contributor Wizard: Choose Pathway
21. Contributor Wizard: Organization
22. Contributor Wizard: Collection
23. Contributor Wizard: Rights & Ownership
24. Contributor Wizard: Digital Readiness
25. Contributor Wizard: Timeline & Support
26. Contributor Wizard: Review & Submit
27. Contributor Confirmation Page

SUPPORTING PAGES / STATES
28. Resources / Toolkit Page
29. FAQ / Help Page
30. Empty / No Results State
31. Mobile Examples for Homepage, Educator Hub, Genealogist Map, and Wizard Step

======================================================================
9. PAGE-BY-PAGE REQUIREMENTS
======================================================================

1. HOMEPAGE
Purpose:
- orient users immediately
- reduce confusion
- communicate what Recollection Wisconsin is
- give clear user-type entry points

Required sections:
- concise mission/intro hero
- audience entry cards for Educators, Genealogists, Contributors
- featured content or story-driven highlight section
- map / explore-by-place teaser
- quick search/start guidance
- contributor CTA
- footer

Behavior:
- the homepage should function as a start page, not just a content listing
- user pathways should be obvious
- educator and contributor entry points should be visible without scrolling too far

2. EXPLORE LANDING PAGE
Purpose:
- support broad public discovery
- provide a general gateway into collections, stories, and place-based exploration

Required sections:
- browse collections entry
- featured collections/stories
- explore by place teaser
- search tips / guided start
- CTA into collections/search

3. FEATURED COLLECTIONS / STORIES PAGE
Purpose:
- highlight curated and story-driven materials
- make archival content feel engaging and approachable

Required content:
- featured stories or collections grid
- summaries
- tags
- CTAs to learn more / view collections
- optional featured educator relevance labels

4. SHARED WISCONSIN MAP PAGE
Purpose:
- support place-based exploration
- provide a shared map system that can serve both general discovery and genealogist/researcher use

Important rule:
- this is a content partner map, not a record-level metadata map

Required content:
- Wisconsin map
- 8-region default state
- region or county interaction
- partner list or side panel
- partner detail preview
- CTA to collections
- filters if helpful: region, county, partner type

5. SEARCH HANDOFF PAGE / STATE
Purpose:
- move users from guided entry into the existing search/collection environment

Required content:
- context summary (“You selected Dane County” or “Start with family names + place”)
- continue to collections CTA
- search tips / expectations
- optional back link to guided discovery

6. EDUCATOR HUB
Purpose:
- create a fast and clear starting place for teachers
- help them begin without needing to understand the whole site

Required sections:
- “Start here” intro
- search starters
- featured teaching resources
- Main Street Mondays / online exhibits highlight
- optional place-based entry point
- curated quick links

Behavior:
- should feel immediate and useful
- must reduce time cost and cognitive load
- should not depend on perfect metadata

7. SEARCH STARTERS / QUICK FIND PAGE
Purpose:
- help teachers begin with useful prompts rather than guesswork

Required content:
- starter chips or cards
- topic prompts
- era prompts
- place/community prompts
- optional free text start field
- recommended starting points/results area without leaving the page
- CTA to continue into collections

Behavior:
- fast and guided
- not overbuilt
- avoid requiring metadata the site does not reliably have

8. FEATURED TEACHING RESOURCES / MAIN STREET MONDAYS PAGE
Purpose:
- surface dynamic, curated content that is easier for teachers to use immediately

Required content:
- featured cards/carousel/grid
- short summaries
- tags
- visual hierarchy that feels more dynamic than the current teacher page
- CTA into exhibits or collections

9. EDUCATOR PLACE-BASED DISCOVERY ENTRY STATE
Purpose:
- let teachers start with place when useful
- connect regional/community history to classroom exploration

Required content:
- intro copy explaining place-based discovery
- CTA into shared Wisconsin map
- teacher-facing framing such as “Start with a region, county, or community”

10. GENEALOGIST HUB
Purpose:
- support family history and local-history discovery
- give genealogists two clear ways to begin

Required sections:
- intro / what can you find here
- Search by surname + place entry
- Explore by map / county / region entry
- research tips
- optional example queries

Behavior:
- should feel more research-oriented than Educators
- should support both direct and exploratory behaviors

11. GENEALOGIST SEARCH ENTRY PAGE
Purpose:
- support directed searching for names, places, and family-history clues

Required content:
- surname + place starter
- community/county prompt
- address/location prompt
- research tips
- continue to collections/search CTA

12. GENEALOGIST MAP EXPLORATION PAGE
Purpose:
- let genealogists/researchers narrow geographically through a realistic partner-based map

Required content:
- same shared Wisconsin map logic
- genealogy-oriented framing
- county/region narrowing
- partner list
- relevant local-history collection entry points
- optional filters
- CTA to explore collection results

Behavior:
- map should help narrow family-history discovery geographically
- should make partner reach and local collections visible
- should feel useful even without backend integration

13. PARTNER / COLLECTION RESULT DETAIL STATE
Purpose:
- show more detail when a partner is selected from the map

Required content:
- partner name
- city
- county
- region
- partner type
- short collection scope summary
- featured topics
- featured formats
- CTA to collections
- optional partner page CTA

14. CONTRIBUTOR LANDING HUB (“PARTNER WITH US”)
Purpose:
- explain contribution to Recollection Wisconsin
- clearly distinguish Hosting vs Harvesting
- reassure small organizations

Required sections:
- intro / why contribute
- pathway comparison cards
- how it works
- FAQs snippet
- CTA to start intake
- supporting resources

Behavior:
- clear and calm
- Hosting and Harvesting must be equally understandable

15. HOSTING PAGE
Purpose:
- explain the hosted pathway

Required content:
- what Hosting means
- who it is for
- benefits
- responsibilities
- readiness notes
- CTA to start or continue

16. HARVESTING PAGE
Purpose:
- explain metadata harvesting pathway

Required content:
- what Harvesting means
- who it is for
- OAI-PMH expectations
- update cadence phrased as “every three months”
- readiness notes
- CTA to start or continue

17–24. CONTRIBUTOR WIZARD
Create a connected multi-step flow with a strong progress stepper.

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
- only two main pathways: Hosting and Harvesting
- include optional support-interest checkbox later in the flow:
  “I’d like to learn more about hosting a student intern to assist with digitization, description, and uploading.”
- include option:
  “I’m just getting started digitizing materials.”
- rights step should visibly reference CC0 help
- use “Recollection Wisconsin staff member”
- use “every three months”
- review step should summarize all inputs clearly
- confirmation should support idea that contributors may receive a copy of their submission

For each step include:
- title
- helper copy
- grouped field sections
- validation/error space
- back/next controls
- optional guidance callout

25. CONTRIBUTOR CONFIRMATION PAGE
Purpose:
- reassure user that their submission was successful

Required content:
- confirmation message
- next steps
- note about follow-up from Recollection Wisconsin staff
- reference to submission copy / email confirmation
- return links

26. RESOURCES / TOOLKIT PAGE
Purpose:
- central resource page supporting educators and contributors

Required content:
- grouped resources
- downloadable/helpful materials
- FAQs
- support contact

27. FAQ / HELP PAGE
Purpose:
- answer common questions without dead ends

Required content:
- concise expandable questions
- contact/support CTA
- links to related pages

28. EMPTY / NO RESULTS STATE
Purpose:
- avoid dead ends

Required content:
- clear explanation
- alternate next steps
- guided reset or browse options
- related suggestions

29. MOBILE EXAMPLES
Create mobile-responsive layouts for:
- homepage
- educator hub
- genealogist map page
- contributor wizard step

======================================================================
10. MAP SYSTEM REQUIREMENTS
======================================================================

Create a Wisconsin map explorer that begins with 8 regions.

This is a partner-based map, not a record-level metadata map.

Default map behavior:
- Wisconsin map visible
- 8 regions clickable
- optional county-level refinement
- side panel or below-map results

When user clicks a region:
show:
- region name
- included counties or places
- partner count
- list of relevant content partners
- optional featured counties

When user clicks a county:
show:
- county name
- relevant partners
- one-line summary of collection focus if available
- CTA to partner or collections

When user clicks a partner:
show:
- partner name
- city
- county
- region
- partner type
- collection scope summary
- featured topics
- featured formats
- CTA to “View collections”
- optional “Partner page” CTA

Mock data model:
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

Map design rules:
- useful, not decorative
- should demonstrate partner reach across Wisconsin
- should support region/county/partner exploration
- should not fake a complete record-level geospatial system
- should be usable via list and filters, not map only
- should work for both general discovery and genealogist/researcher use
- can be referenced from educator pages but should not be constrained only to educator content

======================================================================
11. STYLE GUIDE / DESIGN SYSTEM
======================================================================

The visual style should use the stronger look and feel of the colorcopy direction as the baseline while keeping the site realistic for Recollection Wisconsin and WordPress.

Overall visual tone:
- editorial
- archival
- calm
- trustworthy
- accessible
- spacious
- modern but not trendy
- polished but not luxury
- visually stronger than the current site without losing institutional seriousness

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
- Display / headings: Source Serif 4
- Body / UI: Inter
- H1: 40/48 semibold
- H2: 32/40 semibold
- H3: 24/32 semibold
- H4: 20/28 semibold
- Body Large: 18/30 regular
- Body: 16/28 regular
- Small/helper: 14/22 regular
- Labels: 12/18 semibold

Spacing and foundation:
- 8px spacing system
- generous whitespace
- card radius: 12px
- input radius: 10px
- soft shadows only
- subtle borders
- white cards on warm paper or muted backgrounds
- clean section separation

Component styling:
- sticky header
- calm footer
- pathway cards
- featured cards
- search starter chips
- filter chips
- side panels
- stepper
- input fields
- info callouts
- review summary blocks
- empty states
- map result cards

Button hierarchy:
- Primary: Heritage Green background, white text
- Secondary: white background, subtle border, ink text
- Tertiary: text/link treatment

Link styling:
- visible and accessible
- do not rely on color alone

======================================================================
12. ACCESSIBILITY REQUIREMENTS
======================================================================

- meet WCAG AA contrast for body text
- provide visible focus states
- forms must have clear labels and helper text
- map must have list-based access and not rely on pointer interaction alone
- avoid over-dense layouts
- ensure call-to-action buttons are obvious
- do not depend on hover-only understanding
- reduce cognitive load wherever possible

======================================================================
13. PROTOTYPE / OUTPUT REQUIREMENTS
======================================================================

Output should include:
1. a visual style guide frame
2. reusable design components
3. a coherent information architecture
4. connected mid-fidelity screens for all key pages
5. realistic menu/navigation structure
6. page hierarchy that matches stakeholder intent
7. a working-feeling partner map system
8. a complete contributor flow
9. educator and genealogist hubs with distinct logic
10. presentation-ready layouts that still feel implementable

======================================================================
14. WHAT NOT TO DO
======================================================================

Do not:
- create a generic startup website
- create a generic museum website
- flatten the architecture into vague pages
- invent random nav labels
- overdesign at the expense of structure
- create a fake record-level metadata map
- add flashy visual effects that feel off-brand
- create placeholder pages with no clear purpose
- leave pages unfinished or logically disconnected
- show visible annotation notes, lorem ipsum, dev comments, prototype scaffolding, or stray design instructions on the final screens

The final result should feel cohesive, intentional, and nearly final.