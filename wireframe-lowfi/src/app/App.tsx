import React from 'react';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { BrowseTopicsGrid } from './components/BrowseTopicsGrid';
import { ContributorPathway } from './components/ContributorPathway';
import { FeaturedContent } from './components/FeaturedContent';
import { MetadataSearch } from './components/MetadataSearch';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Global Header */}
      <Header />
      
      {/* Main Content */}
      <main>
        {/* Intent-Driven Hero Section */}
        <HeroSection />
        
        {/* Browse By Topic Discovery Grid */}
        <BrowseTopicsGrid />
        
        {/* Contributor Pathway Section */}
        <ContributorPathway />
        
        {/* Featured Stories or Collections */}
        <FeaturedContent />
        
        {/* Metadata-Guided Search Support */}
        <MetadataSearch />
      </main>
      
      {/* Footer */}
      <Footer />
    </div>
  );
}