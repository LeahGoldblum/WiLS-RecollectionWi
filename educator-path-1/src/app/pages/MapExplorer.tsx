import { useState } from 'react';
import { Link } from 'react-router';
import { Breadcrumb } from '../components/Breadcrumb';
import { Info, ArrowLeft, MapPin } from 'lucide-react';

interface Region {
  id: string;
  label: string;
  exampleCounties: string[];
  resources: { title: string; type: string; location: string; date: string }[];
  path: string;
}

// NOTE: This is a wireframe simulation. Shapes are simplified to demonstrate interaction.
// Requirement: 8 regions; clicking a region updates an internal (mock) results panel.
const REGIONS: Region[] = [
  {
    id: 'nw',
    label: 'Northwest',
    exampleCounties: ['Douglas', 'Bayfield', 'Ashland'],
    resources: [
      { title: 'Lake Superior Harbor Views, 1900–1915', type: 'Photographs', location: 'Douglas County', date: '1900–1915' },
      { title: 'Bayfield County Logging Photographs', type: 'Photographs', location: 'Bayfield County', date: '1892–1910' },
      { title: 'Ojibwe Community Records (sample)', type: 'Documents', location: 'Ashland County', date: '1870–1920' },
    ],
    path: 'M 44,20 L 132,20 L 132,92 L 34,92 L 22,58 Z',
  },
  {
    id: 'nc',
    label: 'North Central',
    exampleCounties: ['Price', 'Sawyer', 'Iron'],
    resources: [
      { title: 'Chippewa River Lumber Camp Records', type: 'Documents', location: 'Sawyer County', date: '1885–1905' },
      { title: 'Northwoods Resort Postcards', type: 'Photographs', location: 'Price County', date: '1900–1930' },
      { title: 'Iron County Mining Notes (sample)', type: 'Documents', location: 'Iron County', date: '1890–1910' },
    ],
    path: 'M 132,20 L 198,20 L 210,46 L 210,92 L 132,92 Z',
  },
  {
    id: 'ne',
    label: 'Northeast',
    exampleCounties: ['Vilas', 'Oneida', 'Forest'],
    resources: [
      { title: 'Northwoods Tourism Brochures', type: 'Documents', location: 'Vilas County', date: '1920–1940' },
      { title: 'Lumber & Rail Photographs (sample)', type: 'Photographs', location: 'Oneida County', date: '1895–1915' },
      { title: 'CCC Camp Records (sample)', type: 'Documents', location: 'Forest County', date: '1933–1942' },
    ],
    path: 'M 198,20 L 246,20 L 266,56 L 266,92 L 210,92 L 210,46 Z',
  },
  {
    id: 'wc',
    label: 'West Central',
    exampleCounties: ['Eau Claire', 'Dunn', 'Chippewa'],
    resources: [
      { title: 'Eau Claire Lumber Industry Documents', type: 'Documents', location: 'Eau Claire County', date: '1860–1900' },
      { title: 'Chippewa Falls Riverfront Photos', type: 'Photographs', location: 'Chippewa County', date: '1900–1920' },
      { title: 'Norwegian Settlement Records (sample)', type: 'Documents', location: 'Dunn County', date: '1850–1880' },
    ],
    path: 'M 22,92 L 132,92 L 132,178 L 34,172 L 22,148 Z',
  },
  {
    id: 'ec',
    label: 'East Central',
    exampleCounties: ['Outagamie', 'Winnebago', 'Sheboygan'],
    resources: [
      { title: 'Appleton Paper Mill Photographs', type: 'Photographs', location: 'Outagamie County', date: '1905–1930' },
      { title: 'Oshkosh Manufacturing Records (sample)', type: 'Documents', location: 'Winnebago County', date: '1910–1950' },
      { title: 'Sheboygan Immigrant Portraits', type: 'Photographs', location: 'Sheboygan County', date: '1880–1910' },
    ],
    path: 'M 132,92 L 266,92 L 266,178 L 242,190 L 132,178 Z',
  },
  {
    id: 'sw',
    label: 'Southwest',
    exampleCounties: ['Grant', 'Lafayette', 'Iowa'],
    resources: [
      { title: 'Lead Mining District Photographs', type: 'Photographs', location: 'Grant County', date: '1870–1900' },
      { title: 'Early Settlement Letters (sample)', type: 'Documents', location: 'Iowa County', date: '1840–1870' },
      { title: 'Farmstead Surveys (sample)', type: 'Documents', location: 'Lafayette County', date: '1900–1930' },
    ],
    path: 'M 22,178 L 132,178 L 126,300 L 70,300 L 44,276 L 30,250 Z',
  },
  {
    id: 'sc',
    label: 'South Central',
    exampleCounties: ['Dane', 'Columbia', 'Green'],
    resources: [
      { title: 'Madison Capitol Construction Photos', type: 'Photographs', location: 'Dane County', date: '1906–1917' },
      { title: 'Agricultural Experiment Station Records', type: 'Documents', location: 'Dane County', date: '1890–1940' },
      { title: 'Prairie & Wetland Conservation (sample)', type: 'Documents', location: 'Columbia County', date: '1930–1960' },
    ],
    path: 'M 132,178 L 200,178 L 200,300 L 126,300 Z',
  },
  {
    id: 'se',
    label: 'Southeast',
    exampleCounties: ['Milwaukee', 'Racine', 'Kenosha'],
    resources: [
      { title: 'Milwaukee Industrial District Views', type: 'Photographs', location: 'Milwaukee County', date: '1880–1940' },
      { title: 'Racine Factory Records (sample)', type: 'Documents', location: 'Racine County', date: '1900–1950' },
      { title: 'Lake Michigan Shoreline Photos', type: 'Photographs', location: 'Kenosha County', date: '1910–1935' },
    ],
    path: 'M 200,178 L 242,190 L 230,246 L 218,276 L 200,300 Z',
  },
];

const WI_OUTLINE =
  'M 72,8 L 228,8 L 258,48 L 270,82 L 276,118 L 258,134 L 268,158 L 260,176 L 244,186 L 253,206 L 238,222 L 226,226 L 230,246 L 218,276 L 198,300 L 70,300 L 44,276 L 30,250 L 42,226 L 12,205 L 12,172 L 26,142 L 14,110 L 22,78 L 44,48 Z';

const labelPositions: Record<string, { x: number; y: number }> = {
  nw: { x: 75, y: 62 },
  nc: { x: 165, y: 62 },
  ne: { x: 232, y: 62 },
  wc: { x: 78, y: 140 },
  ec: { x: 205, y: 142 },
  sw: { x: 78, y: 252 },
  sc: { x: 162, y: 252 },
  se: { x: 225, y: 252 },
};

export function MapExplorer() {
  const [selectedRegion, setSelectedRegion] = useState<Region | null>(null);
  const [hoveredRegion, setHoveredRegion] = useState<string | null>(null);

  return (
    <>
      <Breadcrumb items={[{ label: 'Educators', href: '/educators' }, { label: 'Map Explorer' }]} />

      <div className="border-b border-neutral-300 bg-neutral-100">
        <div className="container mx-auto px-4 md:px-6 py-3 flex items-start gap-3">
          <Info className="w-4 h-4 text-neutral-600 flex-shrink-0 mt-0.5" />
          <p className="text-sm text-neutral-700">
            <strong>Proposed Feature (Concept):</strong> Recollection Wisconsin has geographic metadata, but a geographic browsing interface depends on development capacity. This wireframe demonstrates an <strong>8-region</strong> interaction model.
          </p>
        </div>
      </div>

      <section className="py-10 md:py-14 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-5xl mx-auto">
            <div className="mb-8">
              <h1 className="font-display text-2xl md:text-3xl text-neutral-900 mb-2">Map Explorer</h1>
              <p className="text-sm text-neutral-600">
                Click a region of Wisconsin to browse example primary sources from that area. Designed for place-based and community history lessons.
              </p>
            </div>

            <div className="flex flex-col lg:flex-row gap-8">
              <div className="flex-shrink-0">
                <div className="border border-neutral-300 bg-neutral-50 p-4 inline-block">
                  <p className="text-xs font-mono text-neutral-400 mb-3 text-center">Click a region to explore</p>
                  <svg viewBox="0 0 290 315" width="290" height="315" className="block" aria-label="Wisconsin region map">
                    <path d={WI_OUTLINE} fill="#f5f5f4" stroke="#a3a3a2" strokeWidth="1.5" />

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

                    {REGIONS.map((region) => {
                      const isSelected = selectedRegion?.id === region.id;
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
                          {region.label}
                        </text>
                      );
                    })}
                  </svg>

                  <p className="text-xs font-mono text-neutral-400 mt-3 text-center">[Wireframe simulation]</p>
                </div>
              </div>

              <div className="flex-1 min-w-0">
                {!selectedRegion ? (
                  <div className="border border-dashed border-neutral-300 bg-neutral-50 p-8 text-center h-full flex flex-col items-center justify-center">
                    <MapPin className="w-8 h-8 text-neutral-300 mb-3" />
                    <p className="text-sm text-neutral-500">Select a region on the map to see resources from that area.</p>
                    <p className="text-xs text-neutral-400 mt-2">Eight regions available: NW, NC, NE, WC, EC, SW, SC, SE</p>
                  </div>
                ) : (
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <h2 className="font-display text-xl text-neutral-900">{selectedRegion.label}</h2>
                        <p className="text-xs text-neutral-500 mt-0.5 font-mono">Example counties: {selectedRegion.exampleCounties.join(', ')}</p>
                      </div>
                      <button
                        onClick={() => setSelectedRegion(null)}
                        className="text-xs font-mono text-neutral-400 hover:text-neutral-700 flex items-center gap-1 transition-colors"
                      >
                        <ArrowLeft className="w-3 h-3" /> Clear
                      </button>
                    </div>

                    <p className="text-xs font-mono text-neutral-400 uppercase tracking-wide mb-3">Resources from this area ({selectedRegion.resources.length} found)</p>

                    <div className="space-y-3">
                      {selectedRegion.resources.map((item, i) => (
                        <div
                          key={i}
                          className="border border-neutral-200 bg-neutral-50 p-4 hover:border-neutral-400 hover:bg-white transition-all"
                        >
                          <p className="text-sm font-medium text-neutral-800 mb-1">{item.title}</p>
                          <div className="flex items-center gap-3 flex-wrap">
                            <span className="text-xs font-mono text-neutral-400 border border-neutral-200 px-1.5 py-0.5 bg-white">{item.type}</span>
                            <span className="text-xs text-neutral-500">{item.location}</span>
                            <span className="text-xs text-neutral-400">{item.date}</span>
                          </div>
                          <p className="text-xs text-neutral-400 mt-2 font-mono italic">[Wireframe stub — internal mock cards]</p>
                        </div>
                      ))}
                    </div>

                    <div className="mt-6 border border-neutral-200 bg-neutral-50 p-4">
                      <p className="text-sm text-neutral-700 mb-2">Want more images from this area?</p>
                      <Link to="/educators/search-starters" className="text-sm text-neutral-700 hover:underline inline-flex items-center gap-1">
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
