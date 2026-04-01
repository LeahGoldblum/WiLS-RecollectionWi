export interface ResourceSet {
  id: string;
  title: string;
  gradeBand: string;
  time: string;
  format: string;
  teachingOutcome: string;
  topic: string;
  essentialQuestion: string;
  whatYoullDo: string[];
  materials: { id: string; title: string; type: string }[];
  discussionPrompts: string[];
  vocabulary: string[];
}

export const resourceSets: ResourceSet[] = [
  {
    id: 'bell-ringer',
    title: '15-Minute Bell Ringer: Wisconsin at Work',
    gradeBand: 'Middle / High',
    time: '15 min',
    format: 'Source Set',
    teachingOutcome: 'Students interpret a primary source photograph and make evidence-based observations.',
    topic: 'Industry & Labor',
    essentialQuestion: 'What can a single photograph tell us about daily life in early Wisconsin?',
    whatYoullDo: [
      'Display an archival photograph from the RW collection (included).',
      'Guide students through a 3-question observation routine (See / Think / Wonder).',
      "Facilitate a 5-minute whole-class share-out to anchor the day's content.",
    ],
    materials: [
      { id: 'item-001', title: 'Pea canning factory workers, Door County, 1912', type: 'Photograph' },
      { id: 'item-002', title: 'Lumber camp crew, Chippewa County, 1898', type: 'Photograph' },
      { id: 'item-003', title: 'See / Think / Wonder student handout', type: 'Worksheet' },
      { id: 'item-004', title: 'Wisconsin labor statistics, 1910 census extract', type: 'Document' },
      { id: 'item-005', title: 'Child labor reform pamphlet, Milwaukee, 1906', type: 'Document' },
      { id: 'item-006', title: 'Discussion facilitation guide (teacher copy)', type: 'Guide' },
    ],
    discussionPrompts: [
      'What details in this image surprise you? What do you think the photographer wanted viewers to notice?',
      'Compare this image to your own experience of work. What has changed? What stays the same?',
      'If this photograph were taken today, what would be different about the setting, clothing, or tools?',
    ],
    vocabulary: ['primary source', 'labor', 'industry', 'caption', 'context', 'inference'],
  },
  {
    id: 'primary-source-analysis',
    title: 'Primary Source Analysis: Wisconsin Labor Records',
    gradeBand: 'High',
    time: '45 min',
    format: 'Worksheet',
    teachingOutcome: 'Students apply the SOAPS framework to analyze a primary document from Wisconsin labor history.',
    topic: 'Industry & Labor',
    essentialQuestion: 'How did workers organize to improve conditions in turn-of-the-century Wisconsin?',
    whatYoullDo: [
      'Introduce the SOAPS (Speaker, Occasion, Audience, Purpose, Subject) analysis framework.',
      'Students independently analyze 2-3 documents from the Milwaukee trade union archive.',
      'Small groups compare findings and write a synthesis paragraph.',
    ],
    materials: [
      { id: 'item-007', title: 'Milwaukee Federated Trades Council minutes, 1901', type: 'Document' },
      { id: 'item-008', title: 'Cigar makers union membership card, 1895', type: 'Artifact scan' },
      { id: 'item-009', title: 'Letter from factory inspector to state labor board, 1903', type: 'Letter' },
      { id: 'item-010', title: 'SOAPS analysis worksheet (student copy)', type: 'Worksheet' },
      { id: 'item-011', title: 'SOAPS analysis teacher answer guide', type: 'Guide' },
      { id: 'item-012', title: 'Wisconsin labor law timeline, 1890-1920', type: 'Infographic' },
      { id: 'item-013', title: 'Synthesis paragraph rubric', type: 'Rubric' },
    ],
    discussionPrompts: [
      'Who had power in these documents, and who did not? How can you tell?',
      'Why might the author have chosen to write this at this particular time?',
      'What would we learn if we had a document written by a worker, rather than by an official?',
    ],
    vocabulary: ['SOAPS', 'primary source', 'trade union', 'labor rights', 'collective bargaining', 'suffrage'],
  },
  {
    id: 'local-history-starter',
    title: 'Local History Starter Pack',
    gradeBand: 'Elementary / Middle',
    time: '1 class period',
    format: 'Slide Deck',
    teachingOutcome: 'Students connect community landmarks and stories to broader Wisconsin history using archival materials.',
    topic: 'Wisconsin Communities',
    essentialQuestion: 'How has our community changed over time, and what has stayed the same?',
    whatYoullDo: [
      'Begin with a "then and now" image pair of a local landmark (slides included for 12 Wisconsin cities).',
      'Students work in pairs to identify 3 changes and 3 constants between historical and current images.',
      'Class creates a shared timeline on the board anchoring local events to state and national history.',
    ],
    materials: [
      { id: 'item-014', title: 'Madison Capitol Square, 1880 vs. present day', type: 'Photograph pair' },
      { id: 'item-015', title: 'Milwaukee lakefront, 1905 panoramic view', type: 'Photograph' },
      { id: 'item-016', title: 'Green Bay Main Street, ca. 1920', type: 'Photograph' },
      { id: 'item-017', title: 'Then/Now comparison student worksheet', type: 'Worksheet' },
      { id: 'item-018', title: 'Community timeline template', type: 'Template' },
      { id: 'item-019', title: 'Teacher slide deck (12 Wisconsin cities)', type: 'Slide Deck' },
    ],
    discussionPrompts: [
      'What clues in the old photograph tell you when it was taken?',
      'Why do you think this building/street/landmark was important enough to photograph?',
      'If someone took a photograph of our town today, what would they most want to show?',
    ],
    vocabulary: ['community', 'landmark', 'historical', 'contemporary', 'primary source', 'archive'],
  },
  {
    id: 'native-nations',
    title: 'Native Nations of Wisconsin',
    gradeBand: 'Middle / High',
    time: '1 class period',
    format: 'Source Set',
    teachingOutcome: 'Students examine treaty documents and community photographs to understand tribal sovereignty in Wisconsin.',
    topic: 'Indigenous History',
    essentialQuestion: 'What rights and responsibilities are established in Wisconsin treaty agreements?',
    whatYoullDo: [
      'Review an overview map of the 11 federally recognized tribes in Wisconsin.',
      'Analyze excerpts from three Wisconsin treaties alongside photographs of tribal community life.',
      'Discuss the ongoing relevance of treaty rights using a structured academic controversy protocol.',
    ],
    materials: [
      { id: 'item-020', title: 'Map of Wisconsin tribal nations and ceded territories', type: 'Map' },
      { id: 'item-021', title: 'Menominee Nation powwow photographs, 1920s-1940s', type: 'Photograph set' },
      { id: 'item-022', title: 'Treaty of 1837 (LaPointe) excerpt', type: 'Document' },
      { id: 'item-023', title: 'Ho-Chunk community, Black River Falls, 1905', type: 'Photograph' },
      { id: 'item-024', title: 'Structured academic controversy guide', type: 'Guide' },
      { id: 'item-025', title: 'Tribal sovereignty vocabulary reference card', type: 'Reference' },
    ],
    discussionPrompts: [
      'What does sovereignty mean to a nation? How is tribal sovereignty different from state sovereignty?',
      'How do these photographs challenge or confirm what you already knew about Wisconsin tribes?',
      'Why do treaty rights remain relevant today?',
    ],
    vocabulary: ['sovereignty', 'treaty', 'ceded territory', 'tribe', 'federal recognition', 'reservation'],
  },
  {
    id: 'immigration-waves',
    title: 'Immigration Waves: Wisconsin 1880-1920',
    gradeBand: 'Middle / High',
    time: '45 min',
    format: 'Activity',
    teachingOutcome: 'Students trace immigration patterns using maps and first-person documents from the RW collection.',
    topic: 'Immigration',
    essentialQuestion: 'Why did people come to Wisconsin, and how did they shape the communities they joined?',
    whatYoullDo: [
      'Use the provided map to trace the origins of major immigrant groups to Wisconsin by region.',
      'Read two brief first-person accounts (German and Polish immigrant letters, included).',
      'Students complete a "push-pull factors" graphic organizer linking documents to migration reasons.',
    ],
    materials: [
      { id: 'item-026', title: 'Wisconsin immigrant origins map, 1900 census data', type: 'Map' },
      { id: 'item-027', title: 'Letter from German immigrant, Milwaukee, 1886', type: 'Letter' },
      { id: 'item-028', title: "Polish neighborhood, Milwaukee's South Side, 1910s", type: 'Photograph' },
      { id: 'item-029', title: 'Norwegian settlement, Dane County, ca. 1890', type: 'Photograph' },
      { id: 'item-030', title: 'Push-pull factors graphic organizer', type: 'Worksheet' },
      { id: 'item-031', title: 'Immigration timeline, Wisconsin 1840-1920', type: 'Infographic' },
    ],
    discussionPrompts: [
      'What motivated these individuals to leave their homelands? What did they hope to find?',
      'How do these historical immigrant experiences compare to immigration today?',
      'What traditions or customs from their homelands did these groups maintain in Wisconsin?',
    ],
    vocabulary: ['immigration', 'emigration', 'push factors', 'pull factors', 'assimilation', 'settlement'],
  },
  {
    id: 'water-resources',
    title: 'Wisconsin Water Resources',
    gradeBand: 'Middle',
    time: '1 class period',
    format: 'Source Set',
    teachingOutcome: 'Students examine historical perspectives on water use and conservation in Wisconsin.',
    topic: 'Environment',
    essentialQuestion: 'How have Wisconsin communities used and protected their water resources over time?',
    whatYoullDo: [
      'Examine historical photographs of Wisconsin lakes, rivers, and wetlands from the early 1900s.',
      'Compare historical water use patterns with contemporary conservation practices.',
      'Students create an annotated timeline of Wisconsin environmental legislation.',
    ],
    materials: [
      { id: 'item-032', title: 'Wisconsin River logging drive, 1900', type: 'Photograph' },
      { id: 'item-033', title: 'Lake Mendota ice harvesting, Madison, 1895', type: 'Photograph' },
      { id: 'item-034', title: 'Horicon Marsh drainage survey, 1910', type: 'Map' },
      { id: 'item-035', title: 'State Board of Health water quality report, 1918', type: 'Document' },
      { id: 'item-036', title: 'Environmental timeline template', type: 'Template' },
    ],
    discussionPrompts: [
      'What human activities in these photographs affected Wisconsin waterways?',
      'How have attitudes toward natural resources changed from the early 1900s to today?',
      'What environmental challenges shown in these documents are still relevant today?',
    ],
    vocabulary: ['conservation', 'natural resources', 'wetlands', 'watershed', 'legislation', 'ecology'],
  },
];
