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

export const router = createBrowserRouter([
  {
    path: '/',
    Component: Layout,
    children: [
      { index: true, Component: Home },
      // Contributor / Organizations
      { path: 'organizations', Component: OrganizationsHub },
      { path: 'organizations/hosting', Component: Hosting },
      { path: 'organizations/harvesting', Component: Harvesting },
      { path: 'organizations/contributor-faq', Component: ContributorFAQ },
      { path: 'organizations/resources', Component: Resources },
      { path: 'organizations/get-started', Component: GetStarted },
      { path: 'organizations/confirmation', Component: Confirmation },
      // Educators
      { path: 'educators', Component: EducatorHub },
      { path: 'educators/map', Component: MapExplorer },
      { path: 'educators/exhibits', Component: OnlineExhibits },
      { path: 'educators/search-starters', Component: SearchStarters },
      { path: 'educators/quick-find', Component: QuickFind },
      // Genealogists
      { path: 'genealogists', Component: GenealogistHub },
      { path: 'genealogists/search', Component: GenealogistSearch },
    ],
  },
]);
