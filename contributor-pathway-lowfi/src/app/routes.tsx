import { createHashRouter } from 'react-router';
import { Layout } from './components/Layout';
import { Home } from './pages/Home';
import { OrganizationsHub } from './pages/OrganizationsHub';
import { Hosting } from './pages/Hosting';
import { Harvesting } from './pages/Harvesting';
import { ContributorFAQ } from './pages/ContributorFAQ';
import { Resources } from './pages/Resources';
import { GetStarted } from './pages/GetStarted';
import { Confirmation } from './pages/Confirmation';

export const router = createHashRouter([
  {
    path: '/',
    Component: Layout,
    children: [
      { index: true, Component: Home },
      { path: 'organizations', Component: OrganizationsHub },
      { path: 'organizations/hosting', Component: Hosting },
      { path: 'organizations/harvesting', Component: Harvesting },
      { path: 'organizations/contributor-faq', Component: ContributorFAQ },
      { path: 'organizations/resources', Component: Resources },
      { path: 'organizations/get-started', Component: GetStarted },
      { path: 'organizations/confirmation', Component: Confirmation },
    ],
  },
]);