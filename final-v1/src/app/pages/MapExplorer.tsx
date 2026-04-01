import { useState } from 'react';
import { Link } from 'react-router';
import { Breadcrumb } from '../components/Breadcrumb';
import { MapPin, Building2, FileText, ArrowRight, X, ChevronDown } from 'lucide-react';

// ── Data Models ────────────────────────────────────────────────────────────────

interface Partner {
  id: string;
  name: string;
  city: string;
  county: string;
  region: string;
  partnerType: string;
  collectionScopeSummary: string;
  featuredTopics: string[];
  featuredFormats: string[];
  collectionsCount: number;
}

interface Region {
  id: string;
  label: string;
  counties: string[];
  path: string;
  labelPosition: { x: number; y: number };
}

// ── Mock Partner Data ──────────────────────────────────────────────────────────

const PARTNERS: Partner[] = [
  // Northwest
  { id: 'p1', name: 'Bayfield Carnegie Library', city: 'Bayfield', county: 'Bayfield', region: 'northwest', partnerType: 'Public Library', collectionScopeSummary: 'Logging industry, commercial fishing, Apostle Islands history', featuredTopics: ['Logging', 'Commercial Fishing', 'Tourism'], featuredFormats: ['Photographs', 'Postcards'], collectionsCount: 3 },
  { id: 'p2', name: 'Superior Public Library', city: 'Superior', county: 'Douglas', region: 'northwest', partnerType: 'Public Library', collectionScopeSummary: 'Harbor history, railroad, and industrial development', featuredTopics: ['Harbor', 'Railroads', 'Industry'], featuredFormats: ['Photographs', 'Maps'], collectionsCount: 5 },
  
  // Northeast
  { id: 'p3', name: 'Brown County Library', city: 'Green Bay', county: 'Brown', region: 'northeast', partnerType: 'Public Library', collectionScopeSummary: 'Packing industry, community history, Oneida Nation materials', featuredTopics: ['Packing Industry', 'Oneida Nation', 'Community Life'], featuredFormats: ['Photographs', 'Documents'], collectionsCount: 8 },
  { id: 'p4', name: 'Sheboygan County Historical Society', city: 'Sheboygan', county: 'Sheboygan', region: 'northeast', partnerType: 'Historical Society', collectionScopeSummary: 'German immigration, furniture industry, lakefront history', featuredTopics: ['Immigration', 'Manufacturing', 'Maritime'], featuredFormats: ['Photographs', 'Documents'], collectionsCount: 4 },
  
  // West Central
  { id: 'p5', name: 'Eau Claire Area Historical Society', city: 'Eau Claire', county: 'Eau Claire', region: 'westcentral', partnerType: 'Historical Society', collectionScopeSummary: 'Lumber industry, Chippewa River, and regional history', featuredTopics: ['Lumber', 'Rivers', 'Education'], featuredFormats: ['Photographs', 'Documents'], collectionsCount: 6 },
  { id: 'p6', name: 'La Crosse Public Library', city: 'La Crosse', county: 'La Crosse', region: 'westcentral', partnerType: 'Public Library', collectionScopeSummary: 'Mississippi River history, brewing, transportation', featuredTopics: ['River Commerce', 'Brewing', 'Railroads'], featuredFormats: ['Photographs', 'Maps'], collectionsCount: 7 },
  
  // Central
  { id: 'p7', name: 'Marathon County Public Library', city: 'Wausau', county: 'Marathon', region: 'central', partnerType: 'Public Library', collectionScopeSummary: 'Ginseng farming, lumber industry, regional development', featuredTopics: ['Agriculture', 'Lumber', 'Community Life'], featuredFormats: ['Photographs', 'Documents'], collectionsCount: 5 },
  { id: 'p8', name: 'Stevens Point Area Historical Society', city: 'Stevens Point', county: 'Portage', region: 'central', partnerType: 'Historical Society', collectionScopeSummary: 'Paper industry, Polish immigration, Wisconsin River history', featuredTopics: ['Paper Mills', 'Immigration', 'Rivers'], featuredFormats: ['Photographs', 'Oral Histories'], collectionsCount: 4 },
  
  // Southeast
  { id: 'p9', name: 'Milwaukee Public Library', city: 'Milwaukee', county: 'Milwaukee', region: 'southeast', partnerType: 'Public Library', collectionScopeSummary: 'Industrial history, immigration, urban development', featuredTopics: ['Industry', 'Immigration', 'Urban Life'], featuredFormats: ['Photographs', 'Maps', 'Documents'], collectionsCount: 18 },
  { id: 'p10', name: 'Racine Heritage Museum', city: 'Racine', county: 'Racine', region: 'southeast', partnerType: 'Museum', collectionScopeSummary: 'Manufacturing, Danish immigration, lakefront development', featuredTopics: ['Manufacturing', 'Immigration', 'Architecture'], featuredFormats: ['Photographs', 'Documents'], collectionsCount: 6 },
  
  // South Central
  { id: 'p11', name: 'Wisconsin Historical Society', city: 'Madison', county: 'Dane', region: 'southcentral', partnerType: 'Archive', collectionScopeSummary: 'State government, University of Wisconsin, capitol construction', featuredTopics: ['Government', 'Education', 'Architecture'], featuredFormats: ['Photographs', 'Documents', 'Maps'], collectionsCount: 24 },
  { id: 'p12', name: 'Rock County Historical Society', city: 'Janesville', county: 'Rock', region: 'southcentral', partnerType: 'Historical Society', collectionScopeSummary: 'Manufacturing, agriculture, community life', featuredTopics: ['Manufacturing', 'Agriculture', 'Main Streets'], featuredFormats: ['Photographs', 'Documents'], collectionsCount: 5 },
  
  // Southwest
  { id: 'p13', name: 'Grant County Historical Society', city: 'Lancaster', county: 'Grant', region: 'southwest', partnerType: 'Historical Society', collectionScopeSummary: 'Lead mining, agriculture, Mississippi River communities', featuredTopics: ['Mining', 'Agriculture', 'River Towns'], featuredFormats: ['Photographs', 'Documents'], collectionsCount: 3 },
  { id: 'p14', name: 'Platteville Public Library', city: 'Platteville', county: 'Grant', region: 'southwest', partnerType: 'Public Library', collectionScopeSummary: 'Mining history, university history, regional agriculture', featuredTopics: ['Mining', 'Education', 'Farming'], featuredFormats: ['Photographs', 'Documents'], collectionsCount: 4 },
  
  // North Central
  { id: 'p15', name: 'Rhinelander District Library', city: 'Rhinelander', county: 'Oneida', region: 'northcentral', partnerType: 'Public Library', collectionScopeSummary: 'Logging, paper industry, tourism development', featuredTopics: ['Logging', 'Paper Mills', 'Tourism'], featuredFormats: ['Photographs', 'Postcards'], collectionsCount: 4 },
  { id: 'p16', name: 'Langlade County Historical Society', city: 'Antigo', county: 'Langlade', region: 'northcentral', partnerType: 'Historical Society', collectionScopeSummary: 'Farming, lumber, community life in north-central Wisconsin', featuredTopics: ['Agriculture', 'Lumber', 'Main Streets'], featuredFormats: ['Photographs', 'Documents'], collectionsCount: 3 },
];

// ── Wisconsin Regions (8 regions) ──────────────────────────────────────────────

const REGIONS: Region[] = [
  { 
    id: 'northwest', 
    label: 'Northwest', 
    counties: ['Bayfield', 'Ashland', 'Douglas', 'Burnett', 'Washburn', 'Sawyer', 'Polk', 'Barron', 'Rusk'], 
    path: 'M 12,12 L 148,12 L 158,35 L 168,58 L 160,82 L 148,102 L 12,102 L 12,52 Z',
    labelPosition: { x: 80, y: 55 }
  },
  { 
    id: 'northcentral', 
    label: 'North Central', 
    counties: ['Vilas', 'Oneida', 'Forest', 'Iron', 'Price', 'Taylor', 'Lincoln', 'Langlade', 'Marathon (north)', 'Menominee'], 
    path: 'M 148,12 L 240,12 L 250,35 L 258,62 L 252,88 L 242,108 L 148,102 L 160,82 L 168,58 L 158,35 Z',
    labelPosition: { x: 200, y: 58 }
  },
  { 
    id: 'northeast', 
    label: 'Northeast', 
    counties: ['Florence', 'Marinette', 'Oconto', 'Door', 'Kewaunee', 'Brown', 'Outagamie', 'Shawano', 'Sheboygan', 'Manitowoc', 'Calumet'], 
    path: 'M 240,12 L 280,12 L 280,62 L 275,92 L 265,118 L 252,132 L 242,108 L 252,88 L 258,62 L 250,35 Z',
    labelPosition: { x: 260, y: 68 }
  },
  { 
    id: 'westcentral', 
    label: 'West Central', 
    counties: ['St. Croix', 'Pierce', 'Dunn', 'Pepin', 'Chippewa', 'Eau Claire', 'Buffalo', 'Trempealeau', 'Jackson', 'La Crosse', 'Clark (west)'], 
    path: 'M 12,102 L 148,102 L 148,172 L 138,198 L 12,198 L 12,142 Z',
    labelPosition: { x: 78, y: 148 }
  },
  { 
    id: 'central', 
    label: 'Central', 
    counties: ['Marathon (south)', 'Wood', 'Portage', 'Clark (east)', 'Waupaca', 'Waushara', 'Adams', 'Juneau', 'Monroe'], 
    path: 'M 148,102 L 242,108 L 242,168 L 230,188 L 148,188 L 148,172 Z',
    labelPosition: { x: 192, y: 145 }
  },
  { 
    id: 'southeast', 
    label: 'Southeast', 
    counties: ['Winnebago', 'Fond du Lac', 'Dodge', 'Ozaukee', 'Washington', 'Waukesha', 'Milwaukee', 'Racine', 'Kenosha'], 
    path: 'M 242,108 L 265,118 L 275,145 L 278,178 L 268,208 L 258,228 L 230,228 L 230,188 L 242,168 Z',
    labelPosition: { x: 255, y: 168 }
  },
  { 
    id: 'southcentral', 
    label: 'South Central', 
    counties: ['Green Lake', 'Marquette', 'Columbia', 'Sauk', 'Dane', 'Jefferson', 'Rock', 'Walworth', 'Green'], 
    path: 'M 138,198 L 230,188 L 258,228 L 250,258 L 228,288 L 140,288 L 125,258 L 118,228 Z',
    labelPosition: { x: 185, y: 238 }
  },
  { 
    id: 'southwest', 
    label: 'Southwest', 
    counties: ['Vernon', 'Crawford', 'Richland', 'Grant', 'Iowa', 'Lafayette'], 
    path: 'M 12,198 L 138,198 L 118,228 L 125,258 L 140,288 L 58,288 L 38,258 L 18,228 Z',
    labelPosition: { x: 78, y: 240 }
  },
];

// Wisconsin outline
const WI_OUTLINE = 'M 12,12 L 280,12 L 280,62 L 275,92 L 265,118 L 278,178 L 268,208 L 258,228 L 250,258 L 228,288 L 58,288 L 38,258 L 18,228 L 12,198 L 12,142 L 12,52 Z';

// ── Component ──────────────────────────────────────────────────────────────────

export function MapExplorer() {
  const [selectedRegion, setSelectedRegion] = useState<Region | null>(null);
  const [selectedCounty, setSelectedCounty] = useState<string | null>(null);
  const [selectedPartner, setSelectedPartner] = useState<Partner | null>(null);
  const [hoveredRegion, setHoveredRegion] = useState<string | null>(null);

  // Filter partners based on selection
  const filteredPartners = PARTNERS.filter(p => {
    if (selectedCounty) return p.county === selectedCounty;
    if (selectedRegion) return p.region === selectedRegion.id;
    return true;
  });

  const totalPartners = filteredPartners.length;
  const totalCollections = filteredPartners.reduce((sum, p) => sum + p.collectionsCount, 0);

  const handleRegionClick = (region: Region) => {
    setSelectedRegion(region);
    setSelectedCounty(null);
    setSelectedPartner(null);
  };

  const handleCountySelect = (county: string) => {
    setSelectedCounty(county);
    setSelectedPartner(null);
  };

  const handleClearAll = () => {
    setSelectedRegion(null);
    setSelectedCounty(null);
    setSelectedPartner(null);
  };

  return (
    <>
      <Breadcrumb items={[
        { label: 'Genealogists', href: '/genealogists' },
        { label: 'Explore by Map' },
      ]} />

      {/* Hero */}
      <section className="border-b-2 border-[var(--card-border)] bg-gradient-to-br from-[var(--accent-warm-light)] via-white to-[var(--primary-light)] py-12 md:py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="font-display text-4xl md:text-5xl text-[var(--primary)] mb-5 leading-tight">
              Explore by Map
            </h1>
            <p className="text-base md:text-lg text-[var(--foreground)] leading-relaxed mb-4">
              Narrow your family history research geographically. Select a region or county to discover content partners with historical records, photographs, and documents from specific Wisconsin communities.
            </p>
            <p className="text-sm text-[var(--muted-foreground)]">
              This map helps you identify which institutions hold materials from the places your ancestors lived, worked, and gathered.
            </p>
          </div>
        </div>
      </section>

      {/* Map + Results */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-7xl mx-auto">
            
            {/* Selection summary bar */}
            {(selectedRegion || selectedCounty) && (
              <div className="mb-8 flex items-center justify-between gap-4 p-4 bg-[var(--accent-sage-light)] border-2 border-[var(--accent-sage)] rounded-lg">
                <div className="flex items-center gap-3 flex-wrap">
                  {selectedRegion && (
                    <span className="inline-flex items-center gap-2 px-3 py-1.5 bg-[var(--accent-sage)] text-white rounded-lg text-sm font-semibold">
                      <MapPin className="w-4 h-4" />
                      {selectedRegion.label}
                    </span>
                  )}
                  {selectedCounty && (
                    <span className="inline-flex items-center gap-2 px-3 py-1.5 bg-[var(--primary)] text-white rounded-lg text-sm font-semibold">
                      {selectedCounty} County
                    </span>
                  )}
                  <span className="text-sm text-[var(--foreground)]">
                    {totalPartners} {totalPartners === 1 ? 'partner' : 'partners'} · {totalCollections} {totalCollections === 1 ? 'collection' : 'collections'}
                  </span>
                </div>
                <button
                  onClick={handleClearAll}
                  className="flex items-center gap-1.5 px-3 py-1.5 text-sm font-medium text-[var(--foreground)] hover:text-[var(--primary)] transition-colors"
                >
                  <X className="w-4 h-4" />
                  Clear
                </button>
              </div>
            )}

            <div className="flex flex-col lg:flex-row gap-8">
              
              {/* Map column */}
              <div className="lg:w-96 flex-shrink-0">
                <div className="border-2 border-[var(--card-border)] bg-[var(--muted)] rounded-lg p-6 sticky top-24">
                  <p className="text-xs font-mono uppercase tracking-wider text-[var(--accent-warm)] mb-4 font-semibold text-center">
                    Click a region to explore
                  </p>
                  
                  <svg
                    viewBox="0 0 290 300"
                    className="w-full h-auto"
                    aria-label="Wisconsin region map"
                  >
                    {/* State outline */}
                    <path
                      d={WI_OUTLINE}
                      fill="#F7F4EE"
                      stroke="#B38A3C"
                      strokeWidth="2"
                    />

                    {/* Clickable regions */}
                    {REGIONS.map((region) => {
                      const isSelected = selectedRegion?.id === region.id;
                      const isHovered = hoveredRegion === region.id;
                      return (
                        <path
                          key={region.id}
                          d={region.path}
                          fill={isSelected ? '#486B5D' : isHovered ? '#D8D2C7' : 'transparent'}
                          fillOpacity={isSelected ? 0.85 : 0.6}
                          stroke={isSelected ? '#355146' : '#B38A3C'}
                          strokeWidth={isSelected ? '2.5' : '1.5'}
                          strokeDasharray={isSelected ? undefined : '4 3'}
                          style={{ cursor: 'pointer', transition: 'all 0.2s' }}
                          onClick={() => handleRegionClick(region)}
                          onMouseEnter={() => setHoveredRegion(region.id)}
                          onMouseLeave={() => setHoveredRegion(null)}
                          role="button"
                          aria-label={`Select ${region.label} region`}
                          aria-pressed={isSelected}
                        />
                      );
                    })}

                    {/* Region labels */}
                    {REGIONS.map((region) => {
                      const isSelected = selectedRegion?.id === region.id;
                      const pos = region.labelPosition;
                      return (
                        <text
                          key={`label-${region.id}`}
                          x={pos.x}
                          y={pos.y}
                          textAnchor="middle"
                          fontSize="10"
                          fontWeight="600"
                          fill={isSelected ? '#ffffff' : '#1F2A30'}
                          fontFamily="Inter, sans-serif"
                          style={{ pointerEvents: 'none', userSelect: 'none' }}
                        >
                          {region.label}
                        </text>
                      );
                    })}
                  </svg>

                  {/* County selector */}
                  {selectedRegion && (
                    <div className="mt-6 pt-6 border-t-2 border-[var(--card-border)]">
                      <label className="block text-sm font-semibold text-[var(--foreground)] mb-2">
                        Narrow by county
                      </label>
                      <div className="relative">
                        <select
                          value={selectedCounty || ''}
                          onChange={(e) => handleCountySelect(e.target.value || null)}
                          className="w-full border-2 border-[var(--card-border)] rounded-lg px-3 py-2.5 text-sm text-[var(--foreground)] bg-white focus:outline-none focus:border-[var(--primary)] appearance-none pr-8"
                        >
                          <option value="">All counties in {selectedRegion.label}</option>
                          {selectedRegion.counties.map(county => (
                            <option key={county} value={county}>{county} County</option>
                          ))}
                        </select>
                        <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[var(--muted-foreground)] pointer-events-none" />
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Results panel */}
              <div className="flex-1 min-w-0">
                {!selectedRegion && !selectedCounty ? (
                  <div className="border-2 border-dashed border-[var(--card-border)] bg-[var(--muted)] rounded-lg p-12 text-center">
                    <div className="w-16 h-16 rounded-full bg-[var(--primary-light)] flex items-center justify-center mx-auto mb-4">
                      <MapPin className="w-8 h-8 text-[var(--primary)]" />
                    </div>
                    <p className="text-base text-[var(--foreground)] mb-2 font-semibold">Select a region to begin</p>
                    <p className="text-sm text-[var(--muted-foreground)] leading-relaxed max-w-md mx-auto">
                      Click any region on the Wisconsin map to see content partners and collections from that area. You can then narrow further by selecting a specific county.
                    </p>
                  </div>
                ) : selectedPartner ? (
                  // Partner detail view
                  <div>
                    <button
                      onClick={() => setSelectedPartner(null)}
                      className="flex items-center gap-2 text-sm text-[var(--primary)] hover:text-[var(--primary-hover)] font-medium mb-6 hover:underline"
                    >
                      ← Back to partner list
                    </button>

                    <div className="border-2 border-[var(--primary)] bg-white rounded-lg p-8 shadow-lg">
                      <div className="flex items-start gap-4 mb-6 pb-6 border-b-2 border-[var(--primary-light)]">
                        <div className="w-14 h-14 rounded-lg bg-[var(--primary-light)] flex items-center justify-center flex-shrink-0">
                          <Building2 className="w-7 h-7 text-[var(--primary)]" />
                        </div>
                        <div className="flex-1">
                          <h2 className="font-display text-2xl text-[var(--primary)] mb-2">{selectedPartner.name}</h2>
                          <div className="flex items-center gap-3 text-sm text-[var(--muted-foreground)] flex-wrap">
                            <span>{selectedPartner.city}, {selectedPartner.county} County</span>
                            <span className="text-[var(--border)]">·</span>
                            <span>{REGIONS.find(r => r.id === selectedPartner.region)?.label}</span>
                            <span className="text-[var(--border)]">·</span>
                            <span className="font-semibold text-[var(--accent-warm)]">{selectedPartner.partnerType}</span>
                          </div>
                        </div>
                      </div>

                      <div className="space-y-6">
                        <div>
                          <h3 className="text-sm font-semibold text-[var(--foreground)] mb-2 uppercase tracking-wider">Collection Scope</h3>
                          <p className="text-base text-[var(--foreground)] leading-relaxed">{selectedPartner.collectionScopeSummary}</p>
                        </div>

                        <div>
                          <h3 className="text-sm font-semibold text-[var(--foreground)] mb-3 uppercase tracking-wider">Featured Topics</h3>
                          <div className="flex flex-wrap gap-2">
                            {selectedPartner.featuredTopics.map(topic => (
                              <span key={topic} className="px-3 py-1.5 bg-[var(--accent-sage-light)] text-[var(--accent-sage)] rounded-lg text-sm font-medium border border-[var(--accent-sage)]">
                                {topic}
                              </span>
                            ))}
                          </div>
                        </div>

                        <div>
                          <h3 className="text-sm font-semibold text-[var(--foreground)] mb-3 uppercase tracking-wider">Material Formats</h3>
                          <div className="flex flex-wrap gap-2">
                            {selectedPartner.featuredFormats.map(format => (
                              <span key={format} className="px-3 py-1.5 bg-[var(--primary-light)] text-[var(--primary)] rounded-lg text-sm font-medium border border-[var(--primary)]">
                                {format}
                              </span>
                            ))}
                          </div>
                        </div>

                        <div className="pt-4 border-t border-[var(--card-border)]">
                          <p className="text-sm text-[var(--muted-foreground)] mb-4">
                            <strong className="text-[var(--foreground)]">{selectedPartner.collectionsCount}</strong> {selectedPartner.collectionsCount === 1 ? 'collection' : 'collections'} available
                          </p>
                          <Link
                            to="/explore"
                            className="inline-flex items-center gap-2 bg-[var(--accent-warm)] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[var(--accent-warm-hover)] transition-all shadow-md hover:shadow-lg"
                          >
                            View Collections
                            <ArrowRight className="w-4 h-4" />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                ) : (
                  // Partner list view
                  <div>
                    <div className="mb-6">
                      <h2 className="font-display text-2xl text-[var(--primary)] mb-2">
                        {selectedCounty ? `${selectedCounty} County` : selectedRegion?.label}
                      </h2>
                      <p className="text-sm text-[var(--muted-foreground)]">
                        {totalPartners} content {totalPartners === 1 ? 'partner' : 'partners'} with {totalCollections} {totalCollections === 1 ? 'collection' : 'collections'}
                      </p>
                    </div>

                    <div className="space-y-4">
                      {filteredPartners.map((partner) => (
                        <button
                          key={partner.id}
                          onClick={() => setSelectedPartner(partner)}
                          className="w-full text-left border-2 border-[var(--card-border)] bg-white rounded-lg p-5 hover:border-[var(--primary)] hover:shadow-md transition-all group"
                        >
                          <div className="flex items-start gap-4">
                            <div className="w-10 h-10 rounded-lg bg-[var(--primary-light)] flex items-center justify-center flex-shrink-0 group-hover:bg-[var(--primary)] transition-colors">
                              <Building2 className="w-5 h-5 text-[var(--primary)] group-hover:text-white transition-colors" />
                            </div>
                            <div className="flex-1 min-w-0">
                              <h3 className="text-base font-semibold text-[var(--primary)] mb-1 group-hover:underline">
                                {partner.name}
                              </h3>
                              <div className="flex items-center gap-2 text-xs text-[var(--muted-foreground)] mb-2 flex-wrap">
                                <span>{partner.city}, {partner.county} County</span>
                                <span className="text-[var(--border)]">·</span>
                                <span className="font-semibold text-[var(--accent-warm)]">{partner.partnerType}</span>
                              </div>
                              <p className="text-sm text-[var(--foreground)] leading-relaxed mb-3">
                                {partner.collectionScopeSummary}
                              </p>
                              <div className="flex items-center gap-2 text-xs">
                                <span className="px-2 py-1 bg-[var(--muted)] text-[var(--foreground)] rounded font-mono">
                                  {partner.collectionsCount} {partner.collectionsCount === 1 ? 'collection' : 'collections'}
                                </span>
                                {partner.featuredFormats.slice(0, 2).map(format => (
                                  <span key={format} className="px-2 py-1 bg-[var(--primary-light)] text-[var(--primary)] rounded text-xs">
                                    {format}
                                  </span>
                                ))}
                              </div>
                            </div>
                            <ArrowRight className="w-5 h-5 text-[var(--muted-foreground)] group-hover:text-[var(--primary)] transition-colors flex-shrink-0 mt-1" />
                          </div>
                        </button>
                      ))}
                    </div>

                    {/* Secondary CTA */}
                    <div className="mt-8 border-2 border-[var(--card-border)] bg-[var(--accent-sage-light)] rounded-lg p-6">
                      <div className="flex items-start gap-4">
                        <FileText className="w-6 h-6 text-[var(--accent-sage)] flex-shrink-0 mt-1" />
                        <div>
                          <p className="text-sm font-semibold text-[var(--foreground)] mb-2">
                            Ready to search collections?
                          </p>
                          <p className="text-sm text-[var(--muted-foreground)] mb-4 leading-relaxed">
                            Continue to the main search interface to explore digitized materials from these partners.
                          </p>
                          <Link
                            to="/explore/search-tips"
                            className="inline-flex items-center gap-2 text-sm font-medium text-[var(--primary)] hover:text-[var(--primary-hover)] hover:underline"
                          >
                            Continue to Search
                            <ArrowRight className="w-4 h-4" />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
