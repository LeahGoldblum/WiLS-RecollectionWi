import { useState } from 'react';
import { Link } from 'react-router';
import { Breadcrumb } from '../components/Breadcrumb';

type Region = {
  id: string;
  label: string;
  resources: { title: string; type: string }[];
};

const regions: Region[] = [
  {
    id: 'northwoods',
    label: 'Northwoods',
    resources: [
      { title: 'Logging Camps in Vilas County', type: 'Photo Set' },
      { title: 'Lac du Flambeau Community Portraits', type: 'Exhibit' },
      { title: 'Early Tourism Postcards (Eagle River)', type: 'Image Collection' },
      { title: 'Forest Service Maps, 1920s', type: 'Map' },
      { title: 'Rail Depots of the North', type: 'Search Starter' },
      { title: 'Main Street Mondays: Rhinelander', type: 'Series' },
    ],
  },
  {
    id: 'northeast',
    label: 'Northeast',
    resources: [
      { title: 'Green Bay Harbor Industry', type: 'Photo Set' },
      { title: 'Appleton Civil Rights Organizing', type: 'Exhibit' },
      { title: 'Fox Valley Schoolhouse Records', type: 'Image Collection' },
      { title: 'Brown County Plat Maps', type: 'Map' },
      { title: 'Immigration in the Fox Valley', type: 'Search Starter' },
      { title: 'Main Street Mondays: Neenah', type: 'Series' },
    ],
  },
  {
    id: 'west',
    label: 'West / Driftless',
    resources: [
      { title: 'La Crosse Riverfront Photographs', type: 'Photo Set' },
      { title: 'Mineral Point Main Street Archive', type: 'Exhibit' },
      { title: 'Farm Cooperatives, 1930s', type: 'Image Collection' },
      { title: 'Driftless Region Atlas Sheets', type: 'Map' },
      { title: 'Lead Mining in Wisconsin', type: 'Search Starter' },
      { title: 'Main Street Mondays: Viroqua', type: 'Series' },
    ],
  },
  {
    id: 'south',
    label: 'South',
    resources: [
      { title: 'Madison Campus Protests, 1960s', type: 'Photo Set' },
      { title: 'Milwaukee Community Stories', type: 'Exhibit' },
      { title: 'Racine Industrial Photographs', type: 'Image Collection' },
      { title: 'Kenosha County Planning Maps', type: 'Map' },
      { title: 'Wisconsin Civil Rights', type: 'Search Starter' },
      { title: 'Main Street Mondays: Beloit', type: 'Series' },
    ],
  },
];

export function EducatorsMap() {
  const [activeRegion, setActiveRegion] = useState<Region>(regions[0]);

  return (
    <>
      <Breadcrumb items={[{ label: 'Educators', href: '/educators' }, { label: 'Map Explorer' }]} />

      <section className="border-b border-neutral-200 bg-neutral-50 py-10 md:py-14">
        <div className="container mx-auto px-4 md:px-6 max-w-5xl">
          <h1 className="font-display text-3xl md:text-4xl text-neutral-900 mb-3">Map Explorer (Concept)</h1>
          <p className="text-base text-neutral-600 leading-relaxed">
            Choose an area to preview resources tied to that location.
          </p>
          <p className="text-sm text-neutral-500 mt-3">
            Concept: RW has geographic metadata; implementation depends on development capacity.
          </p>
        </div>
      </section>

      <section className="py-10 md:py-14 bg-white">
        <div className="container mx-auto px-4 md:px-6 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="border border-neutral-200 p-5 bg-white">
              <h2 className="font-display text-lg text-neutral-900 mb-3">Wisconsin Map Placeholder</h2>
              <div className="border border-dashed border-neutral-300 bg-neutral-50 p-4 mb-4">
                <p className="text-sm text-neutral-600">
                  Wireframe interaction: select a region to simulate county-level map exploration.
                </p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {regions.map(region => (
                  <button
                    key={region.id}
                    type="button"
                    onClick={() => setActiveRegion(region)}
                    className={`text-left border px-3 py-2.5 text-sm transition-colors ${
                      activeRegion.id === region.id
                        ? 'border-neutral-900 bg-neutral-100 text-neutral-900'
                        : 'border-neutral-300 hover:border-neutral-500 text-neutral-700'
                    }`}
                  >
                    {region.label}
                  </button>
                ))}
              </div>
            </div>

            <div className="border border-neutral-200 p-5 bg-white">
              <h2 className="font-display text-lg text-neutral-900 mb-1">Resources in this area</h2>
              <p className="text-sm text-neutral-500 mb-4">Showing mock resources for: {activeRegion.label}</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {activeRegion.resources.map(resource => (
                  <div key={resource.title} className="border border-neutral-200 p-3 bg-neutral-50">
                    <p className="text-sm text-neutral-800 mb-1">{resource.title}</p>
                    <p className="text-xs text-neutral-500 mb-2">{resource.type}</p>
                    <button type="button" className="text-xs text-neutral-700 hover:underline">
                      Open
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-6">
            <Link to="/educators" className="text-sm text-neutral-700 hover:underline">
              ← Back to Teaching Resources
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
