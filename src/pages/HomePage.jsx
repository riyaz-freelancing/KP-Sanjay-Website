import React from 'react';
import { Hero } from '../components/Hero';
import { TrustStrip } from '../components/TrustStrip';
import { AboutSection } from '../components/AboutSection';
import { SolutionsSection } from '../components/SolutionsSection';
import { ProcessSection } from '../components/ProcessSection';
import { ProductsPreviewSection } from '../components/ProductsPreviewSection';
import { OpportunitiesSection } from '../components/OpportunitiesSection';
import { TestimonialsSection } from '../components/TestimonialsSection';
import { ContactSection } from '../components/ContactSection';

export const HomePage = () => {
  return (
    <>
      <Hero />
      <TrustStrip />
      <AboutSection />
      <SolutionsSection />
      <ProcessSection />
      <ProductsPreviewSection />
      <OpportunitiesSection />
      <TestimonialsSection />
      <ContactSection />
    </>
  );
};
