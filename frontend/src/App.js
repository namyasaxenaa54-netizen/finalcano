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
import SocialMediaFloat from './components/SocialMediaFloat';
import { Toaster } from './components/ui/sonner';

// Admin imports
import { AuthProvider } from './admin/context/AuthContext';
import ProtectedRoute from './admin/components/ProtectedRoute';
import AdminLogin from './admin/pages/AdminLogin';
import AdminLayout from './admin/components/AdminLayout';
import AdminDashboard from './admin/pages/AdminDashboard';
import ProductsManager from './admin/pages/ProductsManager';
import BrandsManager from './admin/pages/BrandsManager';
import CompanyManager from './admin/pages/CompanyManager';

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
    <AuthProvider>
      <div className="App">
        {loading && <SleekLoader onComplete={handleLoadingComplete} />}
        
        {!loading && (
          <>
            <Routes>
              {/* Public Routes */}
              <Route path="/" element={<HomePage />} />
              <Route path="/canobond" element={<CanoBondPage />} />
              <Route path="/blackberry" element={<BlackberryPage />} />
              <Route path="/furniture" element={<FurniturePage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/distributors" element={<DistributorsPage />} />

              {/* Admin Routes */}
              <Route path="/admin/login" element={<AdminLogin />} />
              <Route
                path="/admin"
                element={
                  <ProtectedRoute>
                    <AdminLayout />
                  </ProtectedRoute>
                }
              >
                <Route path="dashboard" element={<AdminDashboard />} />
                <Route path="products" element={<ProductsManager />} />
                <Route path="brands" element={<BrandsManager />} />
                <Route path="company" element={<CompanyManager />} />
              </Route>
            </Routes>
            <SocialMediaFloat />
            <Toaster />
          </>
        )}
      </div>
    </AuthProvider>
  );
}

export default App;
