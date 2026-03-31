import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Preloader from './components/Preloader';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import ProjectsSection from './components/ProjectsSection';
import SkillsSection from './components/SkillsSection';
import ServicesSection from './components/ServicesSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

// Ensure dark mode is always active
function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.add('dark');
    
    // Simulate loading time (adjust as needed)
    const loadingTimer = setTimeout(() => {
      setIsLoading(false);
    }, 2500);

    return () => clearTimeout(loadingTimer);
  }, []);

  const handleLoadingComplete = () => {
    // Loading animation completed
  };

  return (
    <div className="min-h-screen bg-background text-text font-sans selection:bg-primary/30 transition-colors duration-300 overflow-x-hidden">
      <Preloader isLoading={isLoading} onLoadingComplete={handleLoadingComplete} />
      {!isLoading && <Navbar />}
      {!isLoading && (
        <main className="w-full relative">
          <HeroSection />
          <AboutSection />
          <ProjectsSection />
          <SkillsSection />
          <ServicesSection />
          <ContactSection />
        </main>
      )}
      {!isLoading && <Footer />}
    </div>
  );
}

export default App;
