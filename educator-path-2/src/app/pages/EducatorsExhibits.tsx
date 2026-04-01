import { Link } from 'react-router';
import { Breadcrumb } from '../components/Breadcrumb';

const exhibits = [
  {
    title: 'Main Street Mondays: Wausau',
    description: 'A visual look at local business and street life in central Wisconsin.',
  },
  {
    title: 'Wisconsin in Wartime',
    description: 'Photographs and documents tracing local experiences during major conflicts.',
  },
  {
    title: 'Working the Northwoods',
    description: 'Primary sources about logging labor, camps, and communities.',
  },
  {
    title: 'Immigrant Neighborhoods',
    description: 'Stories and images from immigrant families across Wisconsin cities.',
  },
  {
    title: 'Rural School Days',
    description: 'Classroom photographs, attendance books, and school maps.',
  },
  {
    title: 'Civil Rights in Wisconsin',
    description: 'Collections documenting activism and community organizing.',
  },
];

export function EducatorsExhibits() {
  return (
    <>
      <Breadcrumb items={[{ label: 'Educators', href: '/educators' }, { label: 'Online Exhibits' }]} />

      <section className="border-b border-neutral-200 bg-neutral-50 py-10 md:py-14">
        <div className="container mx-auto px-4 md:px-6 max-w-5xl">
          <h1 className="font-display text-3xl md:text-4xl text-neutral-900 mb-3">Online Exhibits</h1>
          <p className="text-base text-neutral-600 leading-relaxed">
            Curated, visual entry points designed for quick classroom use.
          </p>
        </div>
      </section>

      <section className="py-10 md:py-14 bg-white">
        <div className="container mx-auto px-4 md:px-6 max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
            {exhibits.map(exhibit => (
              <article key={exhibit.title} className="border border-neutral-200 bg-white p-4">
                <div className="h-28 border border-dashed border-neutral-300 bg-neutral-50 mb-3 flex items-center justify-center">
                  <span className="text-xs text-neutral-500">Thumbnail placeholder</span>
                </div>
                <h2 className="font-display text-lg text-neutral-900 mb-1">{exhibit.title}</h2>
                <p className="text-sm text-neutral-600 mb-3">{exhibit.description}</p>
                <a href="#" className="text-sm text-neutral-700 hover:underline">
                  Open exhibit
                </a>
              </article>
            ))}
          </div>

          <div className="border border-neutral-200 bg-neutral-50 p-5 mt-8">
            <p className="text-sm text-neutral-700 mb-2">Want more images fast?</p>
            <Link to="/educators/search-starters" className="text-sm text-neutral-700 hover:underline">
              Try Search Starters →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
