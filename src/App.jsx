// File: app.jsx
import React from 'react';
import Header from './components/Header';
import Navigation from './components/Navigation';
import HeroSection from './components/HeroSection';
import FeaturesSection from './components/FeaturesSection';
import ResourcesSection from './components/ResourcesSection';
import AppFeatures from './components/AppFeatures';
import SupportSection from './components/SupportSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="safe-haven-app">
      <Header />
      <Navigation />
      <main>
        <HeroSection />
        <FeaturesSection />
        <AppFeatures />
        <ResourcesSection />
        <SupportSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;