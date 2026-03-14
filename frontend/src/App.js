import React, { useState, useEffect } from 'react';
import './App.css';
import Loader from './components/Loader';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
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
      {loading && <Loader onComplete={handleLoadingComplete} />}
      
      {!loading && (
        <>
          <Header />
          <main>
            <HeroSection />
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
