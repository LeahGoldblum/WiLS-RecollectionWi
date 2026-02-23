import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { AudienceDelineation } from './components/AudienceDelineation';
import { MetadataGrid } from './components/MetadataGrid';
import { ContributorPathway } from './components/ContributorPathway';
import { Footer } from './components/Footer';
import { Annotation } from './components/Annotation';

export default function App() {
  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      {/* Header Section with Annotations */}
      <div className="relative">
        <Header />
        <Annotation
          number={1}
          text="All primary navigation items remain visible on tablet and desktop (md+). Resources is organized as a mega menu to support scanning and reduce cognitive load. Hover preview panels help users understand section content."
          position="right"
        />
      </div>

      {/* Hero Section with Annotations */}
      <div className="relative">
        <HeroSection />
        <Annotation
          number={2}
          text="Dual headline hierarchy supports mission clarity (primary) and user intent (secondary). Hover affordances on cards signal clickability without overwhelming users."
          position="left"
        />
      </div>

      {/* Audience Delineation Module with Annotation */}
      <div className="relative">
        <AudienceDelineation />
        <Annotation
          number={3}
          text="Side-by-side audience paths with clear visual separation. For Partners section includes numbered steps to address 'roach motel' pattern."
          position="right"
        />
      </div>

      {/* Metadata Discovery Grid with Annotations */}
      <div className="relative">
        <MetadataGrid />
        <Annotation
          number={4}
          text="Browse-by-topic grid using metadata tags to bypass search-term failures identified in 2020 report. Subtle elevation on hover supports exploratory browsing behavior."
          position="left"
        />
      </div>

      {/* Contributor Pathway with Annotation */}
      <div className="relative">
        <ContributorPathway />
        <Annotation
          number={5}
          text="Contributor CTA section with subtle card styling and hover highlights improves visibility for partner organizations without overwhelming general audiences."
          position="right"
        />
      </div>

      {/* Footer with Annotation */}
      <div className="relative">
        <Footer />
        <Annotation
          number={6}
          text="Navigation affordances include underline on hover for clarity. All links use subtle state changes without overwhelming animation. Front-end guidance supports usability when backend search cannot be modified."
          position="left"
        />
      </div>
    </div>
  );
}