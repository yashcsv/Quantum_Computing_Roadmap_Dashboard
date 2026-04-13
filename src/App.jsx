import { useEffect } from 'react';
import useDashboardStore from './store/dashboardStore';
import useScrollSpy from './hooks/useScrollSpy';

import Sidebar from './components/layout/Sidebar';
import MobileNav from './components/layout/MobileNav';
import ScrollProgress from './components/layout/ScrollProgress';
import BackToTop from './components/layout/BackToTop';

import HeroSection from './components/sections/HeroSection';
import RoadmapSection from './components/sections/RoadmapSection';
import KnowledgeSection from './components/sections/KnowledgeSection';
import FrameworksSection from './components/sections/FrameworksSection';
import ProjectsSection from './components/sections/ProjectsSection';
import ApplicationsSection from './components/sections/ApplicationsSection';
import CareerSection from './components/sections/CareerSection';
import VerdictSection from './components/sections/VerdictSection';

function App() {
  const setActiveSection = useDashboardStore((s) => s.setActiveSection);
  
  // Track active section as user scrolls
  const activeId = useScrollSpy([
    'hero',
    'roadmap',
    'knowledge',
    'frameworks',
    'projects',
    'applications',
    'careers',
    'verdict'
  ], 100);

  useEffect(() => {
    if (activeId) {
      setActiveSection(activeId);
    }
  }, [activeId, setActiveSection]);

  return (
    <div className="min-h-screen bg-bg-base text-text-primary transition-colors duration-300">
      {/* Global Elements */}
      <div className="noise-overlay" />
      <ScrollProgress />
      <BackToTop />

      {/* Navigation */}
      <Sidebar />
      <MobileNav />

      {/* Main Content Area */}
      <main className="lg:pl-[240px] pb-20 lg:pb-0">
        <HeroSection />
        <RoadmapSection />
        <KnowledgeSection />
        <FrameworksSection />
        <ProjectsSection />
        <ApplicationsSection />
        <CareerSection />
        <VerdictSection />
      </main>
    </div>
  );
}

export default App;
