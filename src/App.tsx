import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import WelcomeSection from './sections/WelcomeSection';
import VisionSection from './sections/VisionSection';
import OnboardingForm from './sections/OnboardingForm';
import OwnerSection from './sections/OwnerSection';
import FooterSection from './sections/FooterSection';
import Dashboard from './sections/Dashboard';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    // Check user preference
    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && 
        window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      setDarkMode(true);
      document.documentElement.classList.add('dark');
    } else {
      setDarkMode(false);
      document.documentElement.classList.remove('dark');
    }
  }, []);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
    if (darkMode) {
      document.documentElement.classList.remove('dark');
      localStorage.theme = 'light';
    } else {
      document.documentElement.classList.add('dark');
      localStorage.theme = 'dark';
    }
  };

  // Home page component that includes all sections
  const HomePage = () => (
    <>
      <section id="section1" className="scroll-mt-16">
        <WelcomeSection />
      </section>
      
      <section id="section2" className="scroll-mt-16">
        <VisionSection />
      </section>
      
      <section id="section3" className="scroll-mt-16">
        <OnboardingForm />
      </section>
      
      <section id="section4" className="scroll-mt-16">
        <OwnerSection />
      </section>
      
      <section id="section5" className="scroll-mt-16">
        <FooterSection />
      </section>
    </>
  );

  return (
    <Router>
      <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300">
        <Navbar darkMode={darkMode} toggleTheme={toggleTheme} />
        
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
