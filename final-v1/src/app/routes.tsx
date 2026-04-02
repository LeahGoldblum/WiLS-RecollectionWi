import { createBrowserRouter } from 'react-router';
import { Layout } from './components/Layout';
import { Home } from './pages/Home';
import { OrganizationsHub } from './pages/OrganizationsHub';
import { Hosting } from './pages/Hosting';
import { Harvesting } from './pages/Harvesting';
import { ContributorFAQ } from './pages/ContributorFAQ';
import { Resources } from './pages/Resources';
import { GetStarted } from './pages/GetStarted';
import { Confirmation } from './pages/Confirmation';
import { EducatorHub } from './pages/EducatorHub';
import { MapExplorer } from './pages/MapExplorer';
import { OnlineExhibits } from './pages/OnlineExhibits';
import { SearchStarters } from './pages/SearchStarters';
import { QuickFind } from './pages/QuickFind';
import { GenealogistHub } from './pages/GenealogistHub';
import { GenealogistSearch } from './pages/GenealogistSearch';
import { GenealogistMap } from './pages/GenealogistMap';
import { EducatorTeachingResources } from './pages/EducatorTeachingResources';
import { EducatorResourceSetDetail } from './pages/EducatorResourceSetDetail';
import { ExploreLanding } from './pages/ExploreLanding';
import { About } from './pages/About';

function resolveRouterBasename() {
  const configuredBase = import.meta.env.BASE_URL;

  if (configuredBase && configuredBase !== '/' && configuredBase !== './') {
    return configuredBase.replace(/\/$/, '');
  }

  if (typeof window !== 'undefined') {
    const appSegment = '/final-v1';
    const segmentIndex = window.location.pathname.indexOf(appSegment);

    if (segmentIndex >= 0) {
      return window.location.pathname.slice(0, segmentIndex + appSegment.length);
    }
  }

  return undefined;
}

export const router = createBrowserRouter([
  {
    path: '/',
    Component: Layout,
    children: [
      { index: true, Component: Home },

      // Explore
      { path: 'explore', Component: ExploreLanding },
      { path: 'explore/place', Component: MapExplorer },
      { path: 'explore/featured', Component: OnlineExhibits },
      { path: 'explore/search-tips', Component: SearchStarters },

      // For Educators
      { path: 'for-educators', Component: EducatorHub },
      { path: 'for-educators/search-starters', Component: SearchStarters },
      { path: 'for-educators/featured-series', Component: OnlineExhibits },
      { path: 'for-educators/teaching-resources', Component: EducatorTeachingResources },
      { path: 'for-educators/resource-set/:id', Component: EducatorResourceSetDetail },
      { path: 'for-educators/explore-place', Component: MapExplorer },
      { path: 'for-educators/quick-find', Component: QuickFind },

      // Genealogists
      { path: 'genealogists', Component: GenealogistHub },
      { path: 'genealogists/search', Component: GenealogistSearch },
      { path: 'genealogists/map', Component: GenealogistMap },

      // Contribute
      { path: 'contribute', Component: OrganizationsHub },
      { path: 'contribute/hosting', Component: Hosting },
      { path: 'contribute/harvesting', Component: Harvesting },
      { path: 'contribute/contributor-faq', Component: ContributorFAQ },
      { path: 'contribute/get-started', Component: GetStarted },
      { path: 'contribute/confirmation', Component: Confirmation },

      // Resources + About
      { path: 'resources', Component: Resources },
      { path: 'about', Component: About },

      // Legacy aliases (temporary during merge)
      { path: 'organizations', Component: OrganizationsHub },
      { path: 'organizations/hosting', Component: Hosting },
      { path: 'organizations/harvesting', Component: Harvesting },
      { path: 'organizations/contributor-faq', Component: ContributorFAQ },
      { path: 'organizations/resources', Component: Resources },
      { path: 'organizations/get-started', Component: GetStarted },
      { path: 'organizations/confirmation', Component: Confirmation },
      { path: 'educators', Component: EducatorHub },
      { path: 'educators/map', Component: MapExplorer },
      { path: 'educators/exhibits', Component: OnlineExhibits },
      { path: 'educators/search-starters', Component: SearchStarters },
      { path: 'educators/quick-find', Component: QuickFind },
      { path: 'educators/browse', Component: EducatorTeachingResources },
      { path: 'educators/resource-set/:id', Component: EducatorResourceSetDetail },
    ],
  },
], {
  basename: resolveRouterBasename(),
});
