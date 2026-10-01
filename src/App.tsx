import React from 'react';
import Backdrop from './components/Backdrop';
import MobileNav from './components/MobileNav';
import Sidebar from './components/Sidebar';
import Aboutme from './components/Aboutme';
import Experience from './components/Experience';
import Education from './components/Education';
import ProjectsSection from './components/Projects';
import Footer from './components/Footer';
import { sections } from './data/profile';
import { useActiveSection } from './hooks/useActiveSection';

const sectionIds = sections.map((s) => s.id);

const App: React.FC = () => {
  const active = useActiveSection(sectionIds);

  return (
    <div id="top" className="relative">
      <a
        href="#about"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-full focus:bg-zinc-100 focus:px-4 focus:py-2 focus:text-sm focus:text-zinc-900"
      >
        Skip to content
      </a>
      <Backdrop />
      <MobileNav active={active} />
      <div className="mx-auto min-h-screen max-w-6xl px-6 sm:px-12 lg:px-16 xl:px-24">
        <div className="lg:flex lg:justify-between lg:gap-12">
          <Sidebar active={active} />
          <main className="pt-20 lg:w-[54%] lg:py-24">
            <Aboutme />
            <Experience />
            <Education />
            <ProjectsSection />
            <Footer />
          </main>
        </div>
      </div>
    </div>
  );
};

export default App;
