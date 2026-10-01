import React from 'react';
import Sidebar from './components/Sidebar';
import ProjectsSection from './components/Projects';
import Aboutme from './components/Aboutme';
import Experience from './components/Experience';
import Education from './components/Education';

const App: React.FC = () => {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <div className="flex min-w-0 flex-1 flex-col bg-gray-800 pt-14 lg:p-10">
        <Aboutme/>
        <Experience/>
        <Education/>
        <ProjectsSection/>
      </div>
    </div>
  );
};

export default App;