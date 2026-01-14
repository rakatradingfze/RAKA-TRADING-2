import React, { useState, useEffect, useLayoutEffect } from 'react';
import LoadingScreen from './components/LoadingScreen';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import StatsBar from './components/StatsBar';
import About from './components/About';
import ProductCategories from './components/ProductCategories';
import Brands from './components/Brands';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FloatingSocials from './components/FloatingSocials';
import BearingsPage from './components/BearingsPage';
import EHHandwashPage from './components/EHHandwashPage';
import RAMAWirePage from './components/RAMAWirePage';
import InstagramPreview from './components/InstagramPreview';
import { PageView } from './types';

const App: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [currentView, setCurrentView] = useState<PageView>('home');

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500);
    return () => clearTimeout(timer);
  }, []);

  // Scroll to top whenever the view changes. 
  // useLayoutEffect ensures this happens before the browser paints the new screen, preventing the "middle of page" issue.
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, [currentView]);

  const handleNavigate = (view: PageView) => {
    setCurrentView(view);
  };

  if (isLoading) {
    return <LoadingScreen />;
  }

  // Define logic for standalone pages that have their own structure
  const isStandalonePage = currentView === 'eh-handwash' || currentView === 'rama-wire';

  return (
    <div className={`flex flex-col min-h-screen font-sans text-slate-800 bg-white selection:bg-raka-gold selection:text-black`}>
      
      {/* Conditionally render Global Navbar */}
      {!isStandalonePage && (
        <Navbar currentView={currentView} onNavigate={handleNavigate} />
      )}
      
      <main className="flex-grow">
        {currentView === 'home' ? (
          <>
            <Hero />
            <StatsBar />
            <About />
            <ProductCategories onNavigate={handleNavigate} />
            <Brands />
            <InstagramPreview />
            <Contact />
          </>
        ) : currentView === 'bearings' ? (
          <BearingsPage onBack={() => handleNavigate('home')} />
        ) : currentView === 'rama-wire' ? (
          <RAMAWirePage onBack={() => handleNavigate('home')} />
        ) : (
          <EHHandwashPage onBack={() => handleNavigate('home')} />
        )}
      </main>

      <FloatingSocials />
      
      {/* Conditionally render Global Footer */}
      {!isStandalonePage && (
        <Footer onNavigate={handleNavigate} />
      )}
    </div>
  );
};

export default App;