import { useState } from 'react';
import { Link } from 'react-router';
import { Breadcrumb } from '../components/Breadcrumb';
import { Info, ArrowLeft, MapPin } from 'lucide-react';

interface Region {
  id: string;
  label: string;
  counties: string[];
  resources: { title: string; type: string; location: string; date: string }[];
  path: string;
}

const REGIONS: Region[] = [
  {
    id: 'north',
    label: 'Northern Wisconsin',
    counties: ['Bayfield', 'Ashland', 'Douglas', 'Vilas', 'Iron', 'Price', 'Sawyer'],
    resources: [
      { title: 'Bayfield County Logging Photographs, 1892-1918', type: 'Photographs', location: 'Bayfield County', date: '1892-1918' },
      { title: 'Chippewa River Lumber Camp Records', type: 'Documents', location: 'Sawyer County', date: '1885-1905' },
      { title: 'Superior Harbor Industrial Views', type: 'Photographs', location: 'Douglas County', date: '1900-1910' },
      { title: 'Madeline Island Ojibwe Community Records', type: 'Documents', location: 'Ashland County', date: '1870-1920' },
    ],
    path: 'M 48,8 L 228,8 L 258,48 L 270,82 L 256,132 L 44,132 L 22,80 L 22,46 Z',
  },
  {
    id: 'west',
    label: 'Western Wisconsin',
    counties: ['La Crosse', 'Eau Claire', 'Chippewa', 'Dunn', 'St. Croix', 'Pierce'],
    resources: [
      { title: 'La Crosse Riverfront Photographs, 1870-1930', type: 'Photographs', location: 'La Crosse', date: '1870-1930' },
      { title: 'Eau Claire Lumber Industry Documents', type: 'Documents', location: 'Eau Claire County', date: '1860-1900' },
      { title: 'Norwegian Settlement Records, St. Croix Valley', type: 'Documents', location: 'St. Croix County', date: '1850-1880' },
    ],
    path: 'M 12,132 L 120,132 L 120,232 L 42,226 L 12,205 L 12,172 L 26,142 Z',
  },
  {
    id: 'central',
    label: 'Central Wisconsin',
    counties: ['Marathon', 'Wood', 'Portage', 'Adams', 'Waushara', 'Clark'],
    resources: [
      { title: 'Wausau Ginseng Farming Photographs', type: 'Photographs', location: 'Marathon County', date: '1895-1925' },
      { title: 'Wisconsin River Valley Panoramas', type: 'Photographs', location: 'Wood County', date: '1900-1920' },
      { title: 'Central Wisconsin Dairy Records', type: 'Documents', location: 'Portage County', date: '1910-1940' },
    ],
    path: 'M 120,132 L 195,132 L 195,225 L 120,225 Z',
  },
  {
    id: 'east',
    label: 'Eastern Wisconsin',
    counties: ['Milwaukee', 'Waukesha', 'Ozaukee', 'Sheboygan', 'Brown', 'Outagamie', 'Winnebago'],
    resources: [
      { title: 'Milwaukee Industrial District Views, 1880-1940', type: 'Photographs', location: 'Milwaukee County', date: '1880-1940' },
      { title: 'Green Bay Packing Industry Records', type: 'Documents', location: 'Brown County', date: '1900-1950' },
      { title: 'Appleton Paper Mill Photographs', type: 'Photographs', location: 'Outagamie County', date: '1905-1930' },
      { title: 'Sheboygan Immigrant Community Portraits', type: 'Photographs', location: 'Sheboygan County', date: '1880-1910' },
    ],
    path: 'M 195,132 L 260,132 L 264,170 L 256,205 L 242,222 L 195,225 Z',
  },
  {
    id: 'south',
    label: 'Southern Wisconsin',
    counties: ['Dane', 'Rock', 'Walworth', 'Racine', 'Kenosha', 'Grant', 'Lafayette', 'Iowa'],
    resources: [
      { title: 'Madison Capitol Construction Photographs, 1906-1917', type: 'Photographs', location: 'Dane County', date: '1906-1917' },
      { title: 'Wisconsin Agricultural Experiment Station Records', type: 'Documents', location: 'Dane County', date: '1890-1940' },
      { title: 'Lead Mining District Photographs, Southwestern Wisconsin', type: 'Photographs', location: 'Grant County', date: '1870-1900' },
      { title: 'Beloit Iron Works Industrial Records', type: 'Documents', location: 'Rock County', date: '1870-1920' },
    ],
    path: 'M 42,226 L 120,225 L 242,222 L 220,272 L 198,300 L 70,300 L 44,276 L 30,250 Z',
  },
];

// Wisconsin outline path
const WI_OUTLINE = 'M 72,8 L 228,8 L 258,48 L 270,82 L 276,118 L 258,134 L 268,158 L 260,176 L 244,186 L 253,206 L 238,222 L 226,226 L 230,246 L 218,276 L 198,300 L 70,300 L 44,276 L 30,250 L 42,226 L 12,205 L 12,172 L 26,142 L 14,110 L 22,78 L 44,48 Z';

export function MapExplorer() {
  const [selectedRegion, setSelectedRegion] = useState<Region | null>(null);
  const [hoveredRegion, setHoveredRegion] = useState<string | null>(null);

  return (
    <>
      <Breadcrumb items={[
        { label: 'Educators', href: '/educators' },
        { label: 'Map Explorer' },
      ]} />

      {/* Concept banner */}
      <div className="border-b border-neutral-300 bg-neutral-100">
        <div className="container mx-auto px-4 md:px-6 py-3 flex items-center gap-3">
          <Info className="w-4 h-4 text-neutral-600 flex-shrink-0" />
          <p className="text-sm text-neutral-700">
            <strong>Proposed Feature (Concept):</strong> Recollection Wisconsin has geographic metadata, but a geographic browsing interface depends on development capacity. This wireframe demonstrates the intended interaction model.
          </p>
        </div>
      </div>

      <section className="py-10 md:py-14 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-5xl mx-auto">
            <div className="mb-8">
              <h1 className="font-display text-2xl md:text-3xl text-neutral-900 mb-2">Map Explorer</h1>
              <p className="text-sm text-neutral-600">
                Click a region of Wisconsin to browse primary sources from that area. Ideal for place-based and community history lessons.
              </p>
            </div>

            <div className="flex flex-col lg:flex-row gap-8">
              {/* Map column */}
              <div className="flex-shrink-0">
                <div className="border border-neutral-300 bg-neutral-50 p-4 inline-block">
                  <p className="text-xs font-mono text-neutral-400 mb-3 text-center">Click a region to explore</p>
                  <svg
                    viewBox="0 0 290 315"
                    width="290"
                    height="315"
                    className="block"
                    aria-label="Wisconsin region map"
                  >
                    {/* State outline */}
                    <path
                      d={WI_OUTLINE}
                      fill="#f5f5f4"
                      stroke="#a3a3a2"
                      strokeWidth="1.5"
                    />

                    {/* Clickable regions */}
                    {REGIONS.map((region) => {
                      const isSelected = selectedRegion?.id === region.id;
                      const isHovered = hoveredRegion === region.id;
                      return (
                        <path
                          key={region.id}
                          d={region.path}
                          fill={isSelected ? '#262626' : isHovered ? '#d4d4d4' : 'transparent'}
                          fillOpacity={isSelected ? 0.9 : 0.7}
                          stroke={isSelected ? '#262626' : '#737373'}
                          strokeWidth={isSelected ? '2' : '1'}
                          strokeDasharray={isSelected ? undefined : '3 2'}
                          style={{ cursor: 'pointer', transition: 'fill 0.15s' }}
                          onClick={() => setSelectedRegion(region)}
                          onMouseEnter={() => setHoveredRegion(region.id)}
                          onMouseLeave={() => setHoveredRegion(null)}
                          role="button"
                          aria-label={`Select ${region.label}`}
                          aria-pressed={isSelected}
                        />
                      );
                    })}

                    {/* Region labels */}
                    {REGIONS.map((region) => {
                      const isSelected = selectedRegion?.id === region.id;
                      const labelPositions: Record<string, { x: number; y: number }> = {
                        north:   { x: 150, y: 75 },
                        west:    { x: 66,  y: 180 },
                        central: { x: 157, y: 180 },
                        east:    { x: 225, y: 178 },
                        south:   { x: 145, y: 262 },
                      };
                      const pos = labelPositions[region.id];
                      return (
                        <text
                          key={`label-${region.id}`}
                          x={pos.x}
                          y={pos.y}
                          textAnchor="middle"
                          fontSize="9"
                          fill={isSelected ? '#ffffff' : '#525252'}
                          fontFamily="monospace"
                          style={{ pointerEvents: 'none', userSelect: 'none' }}
                        >
                          {region.label.replace(' Wisconsin', '')}
                        </text>
                      );
                    })}
                  </svg>

                  <p className="text-xs font-mono text-neutral-400 mt-3 text-center">
                    [Wireframe simulation]
                  </p>
                </div>
              </div>

              {/* Results panel */}
              <div className="flex-1 min-w-0">
                {!selectedRegion ? (
                  <div className="border border-dashed border-neutral-300 bg-neutral-50 p-8 text-center h-full flex flex-col items-center justify-center">
                    <MapPin className="w-8 h-8 text-neutral-300 mb-3" />
                    <p className="text-sm text-neutral-500">Select a region on the map to see resources from that area.</p>
                    <p className="text-xs text-neutral-400 mt-2">Five regions available: Northern, Western, Central, Eastern, Southern</p>
                  </div>
                ) : (
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <h2 className="font-display text-xl text-neutral-900">{selectedRegion.label}</h2>
                        <p className="text-xs text-neutral-500 mt-0.5 font-mono">
                          Example counties: {selectedRegion.counties.slice(0, 4).join(', ')}{selectedRegion.counties.length > 4 ? ' + more' : ''}
                        </p>
                      </div>
                      <button
                        onClick={() => setSelectedRegion(null)}
                        className="text-xs font-mono text-neutral-400 hover:text-neutral-700 flex items-center gap-1 transition-colors"
                      >
                        <ArrowLeft className="w-3 h-3" /> Clear
                      </button>
                    </div>

                    <p className="text-xs font-mono text-neutral-400 uppercase tracking-wide mb-3">
                      Resources from this area ({selectedRegion.resources.length} found)
                    </p>

                    <div className="space-y-3">
                      {selectedRegion.resources.map((item, i) => (
                        <div
                          key={i}
                          className="border border-neutral-200 bg-neutral-50 p-4 hover:border-neutral-400 hover:bg-white transition-all"
                        >
                          <p className="text-sm font-medium text-neutral-800 mb-1">{item.title}</p>
                          <div className="flex items-center gap-3 flex-wrap">
                            <span className="text-xs font-mono text-neutral-400 border border-neutral-200 px-1.5 py-0.5 bg-white">
                              {item.type}
                            </span>
                            <span className="text-xs text-neutral-500">{item.location}</span>
                            <span className="text-xs text-neutral-400">{item.date}</span>
                          </div>
                          <p className="text-xs text-neutral-400 mt-2 font-mono italic">
                            [Wireframe stub -- item link would open in external platform]
                          </p>
                        </div>
                      ))}
                    </div>

                    <div className="mt-6 border border-neutral-200 bg-neutral-50 p-4">
                      <p className="text-sm text-neutral-700 mb-2">Want more images from this area?</p>
                      <Link
                        to="/educators/search-starters"
                        className="text-sm text-neutral-700 hover:underline inline-flex items-center gap-1"
                      >
                        Browse search starters by place <ArrowLeft className="w-3 h-3 rotate-180" />
                      </Link>
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
