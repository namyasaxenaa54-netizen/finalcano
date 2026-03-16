import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import SleekLoader from './components/Loader';
import Header from './components/Header';
import LightThemeHero from './components/HeroSection';
import ProductsShowcase from './components/ProductsShowcase';
import BrandsEcosystem from './components/BrandsEcosystem';
import TechnologySection from './components/TechnologySection';
import IndustriesSection from './components/IndustriesSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import CanoBondPage from './pages/CanoBondPage';
import BlackberryPage from './pages/BlackberryPage';
import FurniturePage from './pages/FurniturePage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import DistributorsPage from './pages/DistributorsPage';
import { Toaster } from './components/ui/sonner';

function HomePage() {
  return (
    <>
      <Header />
      <main>
        <LightThemeHero />
        <ProductsShowcase />
        <BrandsEcosystem />
        <TechnologySection />
        <IndustriesSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}

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
      {loading && <SleekLoader onComplete={handleLoadingComplete} />}
      
      {!loading && (
        <>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/canobond" element={<CanoBondPage />} />
            <Route path="/blackberry" element={<BlackberryPage />} />
            <Route path="/furniture" element={<FurniturePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/distributors" element={<DistributorsPage />} />
          </Routes>
          <Toaster />
        </>
      )}
    </div>
  );
}

export default App;
