import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { DataProvider } from './context/DataContext';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { ScrollToTop } from './components/ScrollToTop';
import { AdminModal } from './components/admin/AdminModal';

import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ProductsPage } from './pages/ProductsPage';
import { CategoryPage } from './pages/CategoryPage';
import { CoursesPage } from './pages/CoursesPage';
import { DailyGKPage } from './pages/DailyGKPage';
import { ContactPage } from './pages/ContactPage';
import { PrivacyPolicyPage } from './pages/PrivacyPolicyPage';
import { RefundPolicyPage } from './pages/RefundPolicyPage';
import { TermsPage } from './pages/TermsPage';

export default function App() {
  return (
    <DataProvider>
      <BrowserRouter>
        <ScrollToTop />
        <div className="min-h-screen bg-slate-50 text-slate-900 font-poppins selection:bg-blue-600 selection:text-white antialiased overflow-x-hidden flex flex-col">
          <Navbar />
          <main className="pt-20 flex-grow">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/products" element={<ProductsPage />} />
              <Route path="/category/:categorySlug" element={<CategoryPage />} />
              <Route path="/courses" element={<CoursesPage />} />
              <Route path="/daily-gk" element={<DailyGKPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
              <Route path="/refund-policy" element={<RefundPolicyPage />} />
              <Route path="/terms" element={<TermsPage />} />
            </Routes>
          </main>
          <Footer />
          <AdminModal />
        </div>
      </BrowserRouter>
    </DataProvider>
  );
}
