import React, { useState, useEffect, lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import SleekLoader from './components/Loader';
import SEO from './components/SEO';
import ErrorBoundary from './components/ErrorBoundary';
import { Toaster } from './components/ui/sonner';

// Lazy load pages for better performance
const Header = lazy(() => import('./components/Header'));
const LightThemeHero = lazy(() => import('./components/HeroSection'));
const ProductsShowcase = lazy(() => import('./components/ProductsShowcase'));
const BrandsEcosystem = lazy(() => import('./components/BrandsEcosystem'));
const TechnologySection = lazy(() => import('./components/TechnologySection'));
const IndustriesSection = lazy(() => import('./components/IndustriesSection'));
const ContactSection = lazy(() => import('./components/ContactSection'));
const Footer = lazy(() => import('./components/Footer'));

const CanoBondPage = lazy(() => import('./pages/CanoBondPage'));
const BlackberryPage = lazy(() => import('./pages/BlackberryPage'));
const QuroTuffPage = lazy(() => import('./pages/QuroTuffPage'));
const FurniturePage = lazy(() => import('./pages/FurniturePage'));
const AboutPage = lazy(() => import('./pages/AboutPage'));
const ContactPage = lazy(() => import('./pages/ContactPage'));
const DistributorsPage = lazy(() => import('./pages/DistributorsPage'));
const SocialMediaFloat = lazy(() => import('./components/SocialMediaFloat'));

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
      <SEO />
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
    <ErrorBoundary>
      <AuthProvider>
        <div className="App">
          {loading && <SleekLoader onComplete={handleLoadingComplete} />}
          
          {!loading && (
            <>
              <Suspense fallback={<div className="min-h-screen flex items-center justify-center"><div className="text-xl">Loading...</div></div>}>
                <Routes>
                  {/* Public Routes */}
                  <Route path="/" element={<HomePage />} />
                  <Route path="/canobond" element={<CanoBondPage />} />
                  <Route path="/blackberry" element={<BlackberryPage />} />
                  <Route path="/qurotuff" element={<QuroTuffPage />} />
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
              </Suspense>
              <Toaster />
            </>
          )}
        </div>
      </AuthProvider>
    </ErrorBoundary>
  );
}

export default App;
