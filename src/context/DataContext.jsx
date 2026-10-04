import React, { createContext, useContext, useState } from 'react';
import { 
  INITIAL_ANNOUNCEMENTS, 
  INITIAL_DAILY_AFFAIRS, 
  INITIAL_SOLUTIONS, 
  INITIAL_COURSES, 
  INITIAL_TESTIMONIALS, 
  INITIAL_LEADS 
} from '../data/initialData';

const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [announcements, setAnnouncements] = useState(INITIAL_ANNOUNCEMENTS);
  const [dailyAffairs, setDailyAffairs] = useState(INITIAL_DAILY_AFFAIRS);
  const [activeAffairId, setActiveAffairId] = useState(INITIAL_DAILY_AFFAIRS[0]?.id || '');
  const [activeTab, setActiveTab] = useState('topics');
  
  const [solutions, setSolutions] = useState(INITIAL_SOLUTIONS);
  const [courses, setCourses] = useState(INITIAL_COURSES);
  const [testimonials, setTestimonials] = useState(INITIAL_TESTIMONIALS);
  const [leads, setLeads] = useState(INITIAL_LEADS);

  const [isAdminModalOpen, setIsAdminModalOpen] = useState(false);
  const [isAdminAuthenticated, setIsAdminAuthenticated] = useState(false);

  const addLead = (newLead) => {
    const leadObj = {
      id: `lead-${Date.now()}`,
      date: new Date().toISOString().split('T')[0],
      status: 'New',
      ...newLead
    };
    setLeads((prev) => [leadObj, ...prev]);
    return leadObj;
  };

  const updateLeadStatus = (id, status) => {
    setLeads((prev) =>
      prev.map((lead) => (lead.id === id ? { ...lead, status } : lead))
    );
  };

  const addDailyAffair = (newAffair) => {
    setDailyAffairs((prev) => [newAffair, ...prev]);
    setActiveAffairId(newAffair.id);
  };

  const deleteDailyAffair = (id) => {
    setDailyAffairs((prev) => prev.filter((item) => item.id !== id));
    if (activeAffairId === id) {
      const remaining = dailyAffairs.filter((item) => item.id !== id);
      setActiveAffairId(remaining[0]?.id || '');
    }
  };

  return (
    <DataContext.Provider
      value={{
        announcements,
        setAnnouncements,
        dailyAffairs,
        setDailyAffairs,
        activeAffairId,
        setActiveAffairId,
        activeTab,
        setActiveTab,
        solutions,
        setSolutions,
        courses,
        setCourses,
        testimonials,
        setTestimonials,
        leads,
        setLeads,
        addLead,
        updateLeadStatus,
        addDailyAffair,
        deleteDailyAffair,
        isAdminModalOpen,
        setIsAdminModalOpen,
        isAdminAuthenticated,
        setIsAdminAuthenticated
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => {
  const context = useContext(DataContext);
  if (!context) {
    throw new Error('useData must be used within a DataProvider');
  }
  return context;
};
