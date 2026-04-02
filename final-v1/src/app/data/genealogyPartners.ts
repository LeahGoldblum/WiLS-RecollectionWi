export const countyPositions: Record<string, { x: number; y: number }> = {
  Bayfield: { x: 118, y: 25 },
  Douglas: { x: 93, y: 29 },
  Ashland: { x: 157, y: 34 },
  Iron: { x: 181, y: 49 },
  Vilas: { x: 205, y: 65 },
  Oneida: { x: 203, y: 94 },
  Burnett: { x: 88, y: 85 },
  Marathon: { x: 183, y: 143 },
  'Eau Claire': { x: 118, y: 158 },
  'La Crosse': { x: 128, y: 181 },
  Crawford: { x: 165, y: 225 },
  Sauk: { x: 195, y: 242 },
  Adams: { x: 215, y: 195 },
  Dane: { x: 208, y: 262 },
  Rock: { x: 228, y: 286 },
  Lafayette: { x: 185, y: 292 },
  Milwaukee: { x: 292, y: 263 },
  Brown: { x: 292, y: 174 },
  Outagamie: { x: 272, y: 168 },
  Sheboygan: { x: 305, y: 214 },
  Dodge: { x: 262, y: 238 },
  Door: { x: 335, y: 158 },
};

export const wisconsinRegions = {
  Northwest: ['Douglas', 'Bayfield', 'Ashland', 'Iron', 'Burnett', 'Washburn', 'Sawyer', 'Price', 'Rusk'],
  Northeast: ['Florence', 'Forest', 'Vilas', 'Oneida', 'Marinette', 'Oconto', 'Langlade', 'Menominee', 'Shawano'],
  'West Central': ['St. Croix', 'Pierce', 'Pepin', 'Eau Claire', 'Chippewa', 'Dunn', 'Buffalo', 'Trempealeau'],
  Central: ['Marathon', 'Lincoln', 'Taylor', 'Clark', 'Wood', 'Portage', 'Adams', 'Juneau', 'Waushara', 'Marquette'],
  Southwest: ['La Crosse', 'Vernon', 'Crawford', 'Richland', 'Grant', 'Iowa', 'Lafayette'],
  'South Central': ['Sauk', 'Columbia', 'Dane', 'Green', 'Rock', 'Jefferson', 'Dodge', 'Green Lake'],
  Southeast: ['Milwaukee', 'Waukesha', 'Walworth', 'Racine', 'Kenosha', 'Ozaukee', 'Washington'],
  'Northeast Lakeshore': ['Door', 'Kewaunee', 'Manitowoc', 'Sheboygan', 'Calumet', 'Fond du Lac', 'Brown', 'Outagamie', 'Winnebago'],
} as const;

export interface Partner {
  id: string;
  name: string;
  city: string;
  county: string;
  region: keyof typeof wisconsinRegions;
  lat: number;
  lng: number;
  partnerType: string;
  collectionScope: string;
  featuredTopics: string[];
  featuredFormats: string[];
  collectionsCount: number;
  directCollectionUrl?: string;
  partnerPageUrl?: string;
}

export const genealogyPartners: Partner[] = [
  {
    id: 'partner-001',
    name: 'Dane County Historical Society',
    city: 'Madison',
    county: 'Dane',
    region: 'South Central',
    lat: 43.0731,
    lng: -89.4012,
    partnerType: 'Historical Society',
    collectionScope:
      'County histories, family genealogies, cemetery records, and photographs documenting Dane County communities from the 1830s to present.',
    featuredTopics: ['Family genealogies', 'Cemetery records', 'City directories', 'Immigration records'],
    featuredFormats: ['Vital records', 'Photographs', 'City directories', 'County histories'],
    collectionsCount: 12,
    directCollectionUrl: '/collections/dane-county',
    partnerPageUrl: '/partners/dane-county-historical-society',
  },
  {
    id: 'partner-002',
    name: 'Milwaukee Public Library',
    city: 'Milwaukee',
    county: 'Milwaukee',
    region: 'Southeast',
    lat: 43.0389,
    lng: -87.9065,
    partnerType: 'Public Library',
    collectionScope:
      'Extensive genealogy collection including vital records, church records, naturalization papers, and ethnic community materials.',
    featuredTopics: ['Vital records', 'Church records', 'Naturalization papers', 'Ethnic communities'],
    featuredFormats: ['Birth/death records', 'Newspapers', 'City directories', 'Immigration records'],
    collectionsCount: 18,
    directCollectionUrl: '/collections/milwaukee-public-library',
    partnerPageUrl: '/partners/milwaukee-public-library',
  },
  {
    id: 'partner-003',
    name: 'Crawford County Historical Society',
    city: 'Prairie du Chien',
    county: 'Crawford',
    region: 'Southwest',
    lat: 43.0517,
    lng: -91.1412,
    partnerType: 'Historical Society',
    collectionScope:
      "Pioneer settlement records, land deeds, and family histories from Wisconsin's Driftless Area, 1840s-1950s.",
    featuredTopics: ['Pioneer families', 'Land records', 'River communities', 'Civil War records'],
    featuredFormats: ['Land deeds', 'Family papers', 'Photographs', 'Cemetery records'],
    collectionsCount: 8,
    directCollectionUrl: '/collections/crawford-county',
    partnerPageUrl: '/partners/crawford-county-historical-society',
  },
  {
    id: 'partner-004',
    name: 'Brown County Library',
    city: 'Green Bay',
    county: 'Brown',
    region: 'Northeast Lakeshore',
    lat: 44.5133,
    lng: -88.0133,
    partnerType: 'Public Library',
    collectionScope:
      'Belgian, Dutch, and German immigrant records, Catholic parish records, and early Green Bay settlement materials.',
    featuredTopics: ['Belgian immigrants', 'Parish records', 'Early settlers', 'Military records'],
    featuredFormats: ['Church records', 'Photographs', 'Obituaries', 'Family histories'],
    collectionsCount: 11,
    directCollectionUrl: '/collections/brown-county',
    partnerPageUrl: '/partners/brown-county-library',
  },
  {
    id: 'partner-005',
    name: 'La Crosse Public Library Archives',
    city: 'La Crosse',
    county: 'La Crosse',
    region: 'West Central',
    lat: 43.8136,
    lng: -91.2395,
    partnerType: 'Public Library',
    collectionScope:
      'Norwegian, German, and Bohemian immigration records, Mississippi River community histories, and vital records.',
    featuredTopics: ['Norwegian settlers', 'River towns', 'Vital records', 'School records'],
    featuredFormats: ['Vital records', 'Immigration records', 'Newspapers', 'Photographs'],
    collectionsCount: 9,
    directCollectionUrl: '/collections/la-crosse',
    partnerPageUrl: '/partners/la-crosse-public-library',
  },
  {
    id: 'partner-006',
    name: 'Door County Historical Society',
    city: 'Sturgeon Bay',
    county: 'Door',
    region: 'Northeast Lakeshore',
    lat: 44.8342,
    lng: -87.3771,
    partnerType: 'Historical Society',
    collectionScope:
      'Scandinavian settlement records, maritime family histories, lighthouse keeper logs, and fishing industry records.',
    featuredTopics: ['Scandinavian families', 'Maritime history', 'Lighthouse records', 'Fishing families'],
    featuredFormats: ['Family papers', 'Photographs', 'Ship logs', 'Cemetery records'],
    collectionsCount: 7,
    directCollectionUrl: '/collections/door-county',
    partnerPageUrl: '/partners/door-county-historical-society',
  },
  {
    id: 'partner-007',
    name: 'Marathon County Public Library',
    city: 'Wausau',
    county: 'Marathon',
    region: 'Central',
    lat: 44.9591,
    lng: -89.6301,
    partnerType: 'Public Library',
    collectionScope:
      'German and Polish immigrant records, lumber industry family histories, and central Wisconsin settlement materials.',
    featuredTopics: ['German immigrants', 'Lumber families', 'Church records', 'City directories'],
    featuredFormats: ['Church records', 'City directories', 'Photographs', 'Obituaries'],
    collectionsCount: 10,
    directCollectionUrl: '/collections/marathon-county',
    partnerPageUrl: '/partners/marathon-county-library',
  },
  {
    id: 'partner-008',
    name: 'Rock County Historical Society',
    city: 'Janesville',
    county: 'Rock',
    region: 'South Central',
    lat: 42.6828,
    lng: -89.0187,
    partnerType: 'Historical Society',
    collectionScope:
      'Early Wisconsin Territory records, abolitionist movement papers, Civil War soldier records, and agricultural family histories.',
    featuredTopics: ['Civil War soldiers', 'Pioneer families', 'Agricultural records', 'Cemetery records'],
    featuredFormats: ['Military records', 'Family histories', 'Photographs', 'County records'],
    collectionsCount: 13,
    directCollectionUrl: '/collections/rock-county',
    partnerPageUrl: '/partners/rock-county-historical-society',
  },
  {
    id: 'partner-009',
    name: 'Bayfield County Historical Society',
    city: 'Washburn',
    county: 'Bayfield',
    region: 'Northwest',
    lat: 46.6727,
    lng: -90.8918,
    partnerType: 'Historical Society',
    collectionScope:
      'Logging and fishing family histories, Scandinavian and Finnish immigrant records, Lake Superior maritime materials.',
    featuredTopics: ['Finnish settlers', 'Logging families', 'Fishing records', 'Maritime history'],
    featuredFormats: ['Family papers', 'Photographs', 'Immigration records', 'Cemetery records'],
    collectionsCount: 6,
    directCollectionUrl: '/collections/bayfield-county',
    partnerPageUrl: '/partners/bayfield-county-historical-society',
  },
  {
    id: 'partner-010',
    name: 'Sheboygan County Historical Research Center',
    city: 'Sheboygan',
    county: 'Sheboygan',
    region: 'Northeast Lakeshore',
    lat: 43.7508,
    lng: -87.7145,
    partnerType: 'Research Center',
    collectionScope:
      'German immigrant records, cheese-making family histories, Lake Michigan port records, and manufacturing records.',
    featuredTopics: ['German immigrants', 'Cheese industry', 'Manufacturing families', 'Port records'],
    featuredFormats: ['Church records', 'Business records', 'Photographs', 'City directories'],
    collectionsCount: 14,
    directCollectionUrl: '/collections/sheboygan-county',
    partnerPageUrl: '/partners/sheboygan-historical-center',
  },
];
