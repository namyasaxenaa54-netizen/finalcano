import React, { useState, useEffect } from 'react';
import './App.css';
import CinematicLoader from './components/Loader';
import Header from './components/Header';
import PremiumHeroSection from './components/HeroSection';
import ProductsShowcase from './components/ProductsShowcase';
import BrandsEcosystem from './components/BrandsEcosystem';
import TechnologySection from './components/TechnologySection';
import IndustriesSection from './components/IndustriesSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import { Toaster } from './components/ui/sonner';

function App() {
  const [loading, setLoading] = useState(true);

  const handleLoadingComplete = () => {
    setLoading(false);
  };

  // Smooth scroll behavior
  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  return (
    <div className="App">
      {loading && <CinematicLoader onComplete={handleLoadingComplete} />}
      
      {!loading && (
        <>
          <Header />
          <main>
            <PremiumHeroSection />
            <ProductsShowcase />
            <BrandsEcosystem />
            <TechnologySection />
            <IndustriesSection />
            <ContactSection />
          </main>
          <Footer />
          <Toaster />
        </>
      )}
    </div>
  );
}

export default App;
