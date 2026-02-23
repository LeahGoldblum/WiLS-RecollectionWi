import { useState } from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Homepage } from './components/Homepage';
import { EducatorsHub } from './components/hubs/EducatorsHub';
import { ResearchersHub } from './components/hubs/ResearchersHub';
import { GenealogistsHub } from './components/hubs/GenealogistsHub';
import { LearnersHub } from './components/hubs/LearnersHub';
import { FilteredResources } from './components/FilteredResources';
import { ResourcePreview } from './components/ResourcePreview';

export type Persona = 'educators' | 'researchers' | 'genealogists' | 'learners';
export type Page = 'homepage' | 'hub' | 'filtered' | 'preview';

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>('homepage');
  const [currentPersona, setCurrentPersona] = useState<Persona>('educators');
  const [filters, setFilters] = useState<Record<string, string>>({});
  const [selectedResource, setSelectedResource] = useState<any>(null);

  const navigateToHub = (persona: Persona) => {
    setCurrentPersona(persona);
    setCurrentPage('hub');
    setFilters({});
  };

  const navigateToFiltered = (filterData: Record<string, string>) => {
    setFilters(filterData);
    setCurrentPage('filtered');
  };

  const navigateToPreview = (resource: any) => {
    setSelectedResource(resource);
    setCurrentPage('preview');
  };

  const navigateToHome = () => {
    setCurrentPage('homepage');
    setFilters({});
  };

  return (
    <div className="min-h-screen bg-neutral-50 flex flex-col">
      <Header 
        currentPage={currentPage}
        currentPersona={currentPersona}
        onNavigateHome={navigateToHome}
      />
      
      <main className="flex-1">
        {currentPage === 'homepage' && (
          <Homepage onSelectPersona={navigateToHub} />
        )}
        
        {currentPage === 'hub' && currentPersona === 'educators' && (
          <EducatorsHub
            onFilterApply={navigateToFiltered}
            onBack={navigateToHome}
          />
        )}
        
        {currentPage === 'hub' && currentPersona === 'researchers' && (
          <ResearchersHub
            onFilterApply={navigateToFiltered}
            onBack={navigateToHome}
          />
        )}
        
        {currentPage === 'hub' && currentPersona === 'genealogists' && (
          <GenealogistsHub
            onFilterApply={navigateToFiltered}
            onBack={navigateToHome}
          />
        )}
        
        {currentPage === 'hub' && currentPersona === 'learners' && (
          <LearnersHub
            onFilterApply={navigateToFiltered}
            onBack={navigateToHome}
          />
        )}
        
        {currentPage === 'filtered' && (
          <FilteredResources
            persona={currentPersona}
            filters={filters}
            onSelectResource={navigateToPreview}
            onBack={() => setCurrentPage('hub')}
          />
        )}
        
        {currentPage === 'preview' && (
          <ResourcePreview
            persona={currentPersona}
            resource={selectedResource}
            onBack={() => setCurrentPage('filtered')}
          />
        )}
      </main>
      
      <Footer />
    </div>
  );
}
