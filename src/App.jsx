import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import ProjectsSection from './components/ProjectsSection';
import SkillsSection from './components/SkillsSection';
import ServicesSection from './components/ServicesSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

// Ensure dark mode is always active
function App() {
  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.add('dark');
    // Optionally, remove any saved theme preference to prevent conflicts if the user previously selected light mode
    // localStorage.removeItem('theme');
  }, []);

  return (
    <div className="min-h-screen bg-background text-text font-sans selection:bg-primary/30 transition-colors duration-300 overflow-x-hidden">
      <Navbar />
      <main className="w-full relative">
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <SkillsSection />
        <ServicesSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
