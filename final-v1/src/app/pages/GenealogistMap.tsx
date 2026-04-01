import { useState } from 'react';
import { Link } from 'react-router';
import { Breadcrumb } from '../components/Breadcrumb';
import { ArrowRight, MapPin, Building2, ChevronDown, Search, X, AlertCircle } from 'lucide-react';
import { genealogyPartners, countyPositions, wisconsinRegions } from '../data/genealogyPartners';

const WI_OUTLINE =
  'M 100 10 L 340 10 L 360 50 L 355 80 L 370 120 L 360 150 L 380 180 L 370 220 L 350 260 L 330 290 L 300 295 L 260 295 L 240 285 L 220 290 L 200 295 L 170 290 L 150 280 L 120 260 L 90 230 L 70 200 L 65 170 L 75 140 L 65 110 L 70 70 L 90 40 Z';

const allRegions = Object.keys(wisconsinRegions) as (keyof typeof wisconsinRegions)[];
const partnerTypes = ['All Types', 'Historical Society', 'Public Library', 'Research Center'];

export function GenealogistMap() {
  const [selectedPartnerId, setSelectedPartnerId] = useState<string | null>(null);
  const [selectedCounty, setSelectedCounty] = useState<string>('All Counties');
  const [selectedRegion, setSelectedRegion] = useState<string>('All Regions');
  const [partnerType, setPartnerType] = useState('All Types');
  const [keyword, setKeyword] = useState('');

  const allCounties = ['All Counties', ...Array.from(new Set(genealogyPartners.map((p) => p.county))).sort()];

  const filteredPartners = genealogyPartners.filter((partner) => {
    if (selectedCounty !== 'All Counties' && partner.county !== selectedCounty) return false;
    if (selectedRegion !== 'All Regions' && partner.region !== selectedRegion) return false;
    if (partnerType !== 'All Types' && partner.partnerType !== partnerType) return false;
    if (keyword) {
      const kw = keyword.toLowerCase();
      if (
        !partner.name.toLowerCase().includes(kw) &&
        !partner.city.toLowerCase().includes(kw) &&
        !partner.county.toLowerCase().includes(kw) &&
        !partner.collectionScope.toLowerCase().includes(kw) &&
        !partner.featuredTopics.some((t) => t.toLowerCase().includes(kw))
      ) {
        return false;
      }
    }
    return true;
  });

  const selectedPartner = selectedPartnerId ? genealogyPartners.find((p) => p.id === selectedPartnerId) : null;

  return (
    <>
      <Breadcrumb items={[{ label: 'Genealogists', href: '/genealogists' }, { label: 'Explore by Map' }]} />

      <div className="bg-white min-h-screen">
        <div className="border-b border-[var(--card-border)] py-3 bg-[var(--muted)]">
          <div className="container mx-auto px-4 md:px-6 flex flex-wrap items-center justify-between gap-3">
            <div>
              <h1 className="font-display text-xl text-[var(--primary)]">Explore by Map</h1>
              <p className="text-sm text-[var(--muted-foreground)]">
                {filteredPartners.length} partner{filteredPartners.length !== 1 ? 's' : ''} found
              </p>
            </div>
            <Link to="/genealogists/search" className="font-mono text-xs text-[var(--muted-foreground)] hover:text-[var(--foreground)] hover:underline">
              Or search by surname →
            </Link>
          </div>
        </div>

        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col lg:flex-row gap-6 py-6">
            <div className="flex-1 min-w-0 flex flex-col gap-5">
              <div className="bg-[var(--muted)] border border-[var(--card-border)] rounded-lg p-5">
                <p className="text-sm text-[var(--foreground)] leading-relaxed mb-3">
                  This map shows content partners organized by county and region. Each partner holds unique genealogical materials and local history records.
                </p>
                <p className="text-sm text-[var(--muted-foreground)]">
                  Use the map or filters below to discover what collections are available in your area of interest.
                </p>
              </div>

              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[var(--muted-foreground)]" />
                <input
                  type="text"
                  value={keyword}
                  onChange={(e) => setKeyword(e.target.value)}
                  placeholder="Search partners, counties, or topics..."
                  className="w-full pl-9 pr-4 py-2.5 border border-[var(--card-border)] font-mono text-sm text-[var(--foreground)] placeholder:text-[var(--muted-foreground)] focus:outline-none focus:border-[var(--accent-sage)]"
                />
              </div>

              <div className="flex flex-wrap gap-2 items-center">
                <div className="relative">
                  <select
                    value={selectedCounty}
                    onChange={(e) => setSelectedCounty(e.target.value)}
                    className="appearance-none border border-[var(--card-border)] bg-white pl-3 pr-7 py-2 font-mono text-xs text-[var(--foreground)] focus:outline-none focus:border-[var(--accent-sage)] cursor-pointer"
                  >
                    {allCounties.map((c) => (
                      <option key={c}>{c}</option>
                    ))}
                  </select>
                  <ChevronDown className="absolute right-2 top-1/2 -translate-y-1/2 w-3 h-3 text-[var(--muted-foreground)] pointer-events-none" />
                </div>

                <div className="relative">
                  <select
                    value={selectedRegion}
                    onChange={(e) => setSelectedRegion(e.target.value)}
                    className="appearance-none border border-[var(--card-border)] bg-white pl-3 pr-7 py-2 font-mono text-xs text-[var(--foreground)] focus:outline-none focus:border-[var(--accent-sage)] cursor-pointer"
                  >
                    <option>All Regions</option>
                    {allRegions.map((r) => (
                      <option key={r}>{r}</option>
                    ))}
                  </select>
                  <ChevronDown className="absolute right-2 top-1/2 -translate-y-1/2 w-3 h-3 text-[var(--muted-foreground)] pointer-events-none" />
                </div>

                <div className="relative">
                  <select
                    value={partnerType}
                    onChange={(e) => setPartnerType(e.target.value)}
                    className="appearance-none border border-[var(--card-border)] bg-white pl-3 pr-7 py-2 font-mono text-xs text-[var(--foreground)] focus:outline-none focus:border-[var(--accent-sage)] cursor-pointer"
                  >
                    {partnerTypes.map((t) => (
                      <option key={t}>{t}</option>
                    ))}
                  </select>
                  <ChevronDown className="absolute right-2 top-1/2 -translate-y-1/2 w-3 h-3 text-[var(--muted-foreground)] pointer-events-none" />
                </div>
              </div>

              <div className="border border-[var(--card-border)] divide-y divide-[var(--card-border)] overflow-hidden rounded-lg">
                {filteredPartners.length === 0 ? (
                  <div className="p-8 text-center bg-[var(--muted)]">
                    <AlertCircle className="w-8 h-8 text-[var(--muted-foreground)] mx-auto mb-3" />
                    <p className="font-mono text-sm text-[var(--foreground)] mb-3">No partners match your filters.</p>
                    <p className="text-sm text-[var(--muted-foreground)] mb-4">
                      Try adjusting your filters or searching for different keywords.
                    </p>
                    <button
                      onClick={() => {
                        setSelectedCounty('All Counties');
                        setSelectedRegion('All Regions');
                        setPartnerType('All Types');
                        setKeyword('');
                      }}
                      className="font-mono text-xs text-[var(--muted-foreground)] hover:text-[var(--foreground)] underline"
                    >
                      Reset all filters
                    </button>
                  </div>
                ) : (
                  filteredPartners.map((partner) => (
                    <div
                      key={partner.id}
                      onClick={() => setSelectedPartnerId(selectedPartnerId === partner.id ? null : partner.id)}
                      className="flex gap-3 px-4 py-4 cursor-pointer transition-colors group"
                      style={
                        selectedPartnerId === partner.id
                          ? { backgroundColor: 'var(--muted)' }
                          : { backgroundColor: 'white' }
                      }
                    >
                      <div
                        className="flex-shrink-0 w-9 h-9 rounded-md flex items-center justify-center mt-0.5"
                        style={
                          selectedPartnerId === partner.id
                            ? { backgroundColor: 'var(--accent-sage)', color: 'white' }
                            : { backgroundColor: 'var(--primary-light)', color: 'var(--muted-foreground)' }
                        }
                      >
                        <Building2 className="w-4 h-4" />
                      </div>

                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-[var(--foreground)] group-hover:text-[var(--accent-sage)] transition-colors mb-1">
                          {partner.name}
                        </p>
                        <div className="flex flex-wrap items-center gap-2 mb-2">
                          <span className="font-mono text-xs text-[var(--muted-foreground)]">{partner.city}</span>
                          <span className="text-[var(--border)]">·</span>
                          <span className="font-mono text-xs text-[var(--muted-foreground)]">{partner.county} Co.</span>
                          <span className="text-[var(--border)]">·</span>
                          <span className="font-mono text-xs text-[var(--muted-foreground)]">{partner.partnerType}</span>
                        </div>
                        <p className="text-sm text-[var(--muted-foreground)] leading-relaxed line-clamp-2">
                          {partner.collectionScope}
                        </p>
                      </div>

                      <div className="flex-shrink-0 flex items-start mt-1">
                        <span className="font-mono text-xs text-[var(--muted-foreground)]">
                          {partner.collectionsCount} collection{partner.collectionsCount !== 1 ? 's' : ''}
                        </span>
                      </div>
                    </div>
                  ))
                )}
              </div>
            </div>

            <div className="w-full lg:w-96 xl:w-[440px] flex-shrink-0 order-first lg:order-none">
              <div className="lg:sticky lg:top-24">
                <div className="border border-[var(--card-border)] bg-[var(--muted)] overflow-hidden rounded-lg">
                  <div className="flex items-center justify-between px-4 py-2.5 border-b border-[var(--card-border)] bg-white">
                    <p className="font-mono text-xs text-[var(--foreground)]">Wisconsin Partners by County</p>
                    <p className="font-mono text-xs text-[var(--muted-foreground)]">
                      {filteredPartners.length} partner{filteredPartners.length !== 1 ? 's' : ''}
                    </p>
                  </div>

                  <div className="p-4">
                    <svg
                      viewBox="50 0 340 310"
                      className="w-full h-[280px] sm:h-[320px] lg:h-[360px]"
                      role="img"
                      aria-label="Map of Wisconsin showing partners by location"
                    >
                      <path d={WI_OUTLINE} fill="var(--primary-light)" stroke="var(--card-border)" strokeWidth="1.5" />

                      <rect x="55" y="2" width="45" height="15" fill="#c8ddf0" opacity="0.6" rx="2" />
                      <text x="77" y="12" fontSize="5" fill="#6b8fb0" textAnchor="middle" fontFamily="monospace">
                        L. Superior
                      </text>

                      <rect x="345" y="120" width="38" height="100" fill="#c8ddf0" opacity="0.6" rx="2" />
                      <text x="364" y="175" fontSize="5" fill="#6b8fb0" textAnchor="middle" fontFamily="monospace" transform="rotate(90,364,175)">
                        L. Michigan
                      </text>

                      {Object.entries(countyPositions).map(([countyName, pos]) => {
                        const countyPartners = filteredPartners.filter((p) => p.county === countyName);
                        if (countyPartners.length === 0) return null;

                        const isSelected = countyPartners.some((p) => p.id === selectedPartnerId);

                        return (
                          <g
                            key={countyName}
                            style={{ cursor: 'pointer' }}
                            onClick={() => {
                              const firstPartnerId = countyPartners[0].id;
                              setSelectedPartnerId(selectedPartnerId === firstPartnerId ? null : firstPartnerId);
                            }}
                          >
                            <circle
                              cx={pos.x}
                              cy={pos.y}
                              r={isSelected ? 9 : 6}
                              fill={isSelected ? 'var(--accent-sage)' : 'var(--accent-warm)'}
                              stroke={isSelected ? 'var(--accent-sage)' : 'var(--accent-warm)'}
                              strokeWidth="1.5"
                              opacity="0.95"
                            />
                            {countyPartners.length > 1 && (
                              <text
                                x={pos.x}
                                y={pos.y + 1}
                                fontSize="5"
                                fill={isSelected ? 'white' : '#1F2A30'}
                                textAnchor="middle"
                                dominantBaseline="middle"
                                fontFamily="monospace"
                              >
                                {countyPartners.length}
                              </text>
                            )}
                          </g>
                        );
                      })}

                      {selectedPartner && (() => {
                        const pos = countyPositions[selectedPartner.county];
                        if (!pos) return null;
                        const tx = Math.min(pos.x + 12, 300);
                        const ty = Math.max(pos.y - 26, 12);
                        return (
                          <g>
                            <rect x={tx} y={ty} width={140} height={28} fill="white" stroke="var(--accent-sage)" strokeWidth="1" rx="2" />
                            <text x={tx + 6} y={ty + 10} fontSize="5.5" fill="var(--accent-sage)" fontFamily="monospace" fontWeight="600">
                              {selectedPartner.name.length > 24 ? `${selectedPartner.name.slice(0, 24)}...` : selectedPartner.name}
                            </text>
                            <text x={tx + 6} y={ty + 19} fontSize="5" fill="#6b7280" fontFamily="monospace">
                              {selectedPartner.city}, {selectedPartner.county} Co.
                            </text>
                          </g>
                        );
                      })()}
                    </svg>
                  </div>

                  <div className="px-4 pb-3 border-t border-[var(--card-border)] pt-3 space-y-2">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-[var(--accent-warm)] border border-[var(--accent-warm)]" />
                      <span className="font-mono text-xs text-[var(--muted-foreground)]">Partner location</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-[var(--accent-sage)]" />
                      <span className="font-mono text-xs text-[var(--muted-foreground)]">Selected</span>
                    </div>
                    <p className="font-mono text-xs text-[var(--muted-foreground)] pt-1">Click a pin or partner card to view details.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {selectedPartner && (
          <div className="border-t border-[var(--card-border)] bg-[var(--muted)]">
            <div className="container mx-auto px-4 md:px-6 py-6">
              <div className="max-w-4xl mx-auto">
                <div className="bg-white border border-[var(--card-border)] rounded-lg p-6 md:p-8">
                  <div className="flex items-start justify-between gap-4 mb-5">
                    <div className="flex-1">
                      <div className="flex items-start gap-3 mb-3">
                        <div className="w-10 h-10 rounded-md flex items-center justify-center flex-shrink-0 bg-[var(--accent-sage)]">
                          <Building2 className="w-5 h-5 text-white" />
                        </div>
                        <div>
                          <h2 className="font-display text-xl text-[var(--primary)] mb-1">{selectedPartner.name}</h2>
                          <div className="flex flex-wrap items-center gap-2">
                            <span className="font-mono text-sm text-[var(--muted-foreground)]">{selectedPartner.city}</span>
                            <span className="text-[var(--border)]">·</span>
                            <span className="font-mono text-sm text-[var(--muted-foreground)]">{selectedPartner.county} County</span>
                            <span className="text-[var(--border)]">·</span>
                            <span className="font-mono text-sm text-[var(--muted-foreground)]">{selectedPartner.region}</span>
                          </div>
                        </div>
                      </div>
                      <div className="inline-flex items-center gap-1.5 border border-[var(--card-border)] bg-[var(--muted)] px-3 py-1 rounded-md">
                        <MapPin className="w-3 h-3 text-[var(--muted-foreground)]" />
                        <span className="font-mono text-xs text-[var(--muted-foreground)]">{selectedPartner.partnerType}</span>
                      </div>
                    </div>
                    <button
                      onClick={() => setSelectedPartnerId(null)}
                      className="flex-shrink-0 p-1 text-[var(--muted-foreground)] hover:text-[var(--foreground)] transition-colors"
                      aria-label="Close partner details"
                    >
                      <X className="w-5 h-5" />
                    </button>
                  </div>

                  <div className="space-y-5">
                    <div>
                      <p className="font-mono text-xs uppercase tracking-widest text-[var(--muted-foreground)] mb-2">Collection Scope</p>
                      <p className="text-sm text-[var(--foreground)] leading-relaxed">{selectedPartner.collectionScope}</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      <div>
                        <p className="font-mono text-xs uppercase tracking-widest text-[var(--muted-foreground)] mb-2">Featured Topics</p>
                        <div className="flex flex-wrap gap-2">
                          {selectedPartner.featuredTopics.map((topic, index) => (
                            <span key={index} className="border border-[var(--card-border)] bg-[var(--muted)] px-3 py-1 font-mono text-xs text-[var(--foreground)] rounded-md">
                              {topic}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div>
                        <p className="font-mono text-xs uppercase tracking-widest text-[var(--muted-foreground)] mb-2">Featured Formats</p>
                        <div className="flex flex-wrap gap-2">
                          {selectedPartner.featuredFormats.map((format, index) => (
                            <span key={index} className="border border-[var(--card-border)] bg-[var(--muted)] px-3 py-1 font-mono text-xs text-[var(--foreground)] rounded-md">
                              {format}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-wrap items-center gap-3 pt-3 border-t border-[var(--card-border)]">
                      <span className="font-mono text-sm text-[var(--muted-foreground)]">
                        {selectedPartner.collectionsCount} collection{selectedPartner.collectionsCount !== 1 ? 's' : ''} available
                      </span>
                      <div className="flex flex-wrap gap-2 w-full sm:w-auto">
                        <Link
                          to={selectedPartner.directCollectionUrl || '/explore'}
                          className="w-full sm:w-auto justify-center inline-flex items-center gap-2 px-5 py-2 rounded-lg font-mono text-sm text-white bg-[var(--accent-sage)] hover:opacity-90 transition-colors"
                        >
                          View collections
                          <ArrowRight className="w-4 h-4" />
                        </Link>
                        {selectedPartner.partnerPageUrl && (
                          <Link
                            to={selectedPartner.partnerPageUrl}
                            className="w-full sm:w-auto justify-center inline-flex items-center gap-2 border border-[var(--card-border)] bg-white px-5 py-2 rounded-lg font-mono text-sm text-[var(--foreground)] hover:bg-[var(--muted)] transition-colors"
                          >
                            Partner info
                          </Link>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        <section className="border-t border-[var(--card-border)] bg-white py-6">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-start gap-4 bg-[var(--muted)] border border-[var(--card-border)] rounded-lg p-5">
                <AlertCircle className="w-5 h-5 text-[var(--muted-foreground)] flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm text-[var(--foreground)] leading-relaxed mb-2">
                    <strong>Need more help?</strong> Many partners hold additional records not yet digitized. Contact institutions directly for research inquiries, on-site access, or questions about their collections.
                  </p>
                  <Link to="/genealogists" className="font-mono text-sm text-[var(--muted-foreground)] hover:text-[var(--foreground)] hover:underline">
                    ← Return to Genealogist Hub
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
