import React from 'react';
import { CoursesSection } from '../components/CoursesSection';
import { OpportunitiesSection } from '../components/OpportunitiesSection';
import { ContactSection } from '../components/ContactSection';

export const CoursesPage = () => {
  return (
    <div className="py-6 bg-slate-50">
      <CoursesSection />
      <OpportunitiesSection />
      <ContactSection />
    </div>
  );
};
