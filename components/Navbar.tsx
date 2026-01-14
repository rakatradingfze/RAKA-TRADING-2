import React, { useState, useEffect } from 'react';
import { NAV_LINKS } from '../constants';
import { NavbarProps, PageView } from '../types';

const Navbar: React.FC<NavbarProps> = ({ currentView, onNavigate }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (e: React.MouseEvent, href: string, view: string | undefined) => {
    e.preventDefault();
    if (view) {
      onNavigate(view as PageView);
    }
    
    // Allow small delay for view change before scrolling
    if (view === 'home' && href.startsWith('#')) {
       setTimeout(() => {
           const element = document.querySelector(href);
           if (element) {
               element.scrollIntoView({ behavior: 'smooth' });
           }
       }, 100);
    }
    
    setIsMobileMenuOpen(false);
  };

  return (
    <nav 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled || currentView === 'bearings' ? 'bg-raka-blue shadow-xl py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          
          {/* Logo */}
          <div 
            className="flex items-center space-x-3 cursor-pointer"
            onClick={() => onNavigate('home')}
          >
             <div className="w-10 h-10 bg-white rounded flex items-center justify-center">
                <img src="https://i.ibb.co/jkLBrfPH/RAKA-LOGO.png" alt="RAKA Logo" className="w-8 h-8 object-contain" />
             </div>
             <div className="flex flex-col">
                 <span className={`font-display font-bold text-xl md:text-2xl tracking-wide leading-none ${isScrolled || currentView === 'bearings' ? 'text-white' : 'text-white text-shadow'}`}>
                 RAKA<span className="text-raka-gold">TRADING</span>
                 </span>
                 <span className={`text-[0.6rem] md:text-xs font-medium tracking-[0.2em] ${isScrolled || currentView === 'bearings' ? 'text-gray-400' : 'text-gray-200 text-shadow'}`}>
                    - F.Z.E
                 </span>
             </div>
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center space-x-8">
            {NAV_LINKS.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href, link.view)}
                className={`text-sm font-medium uppercase tracking-wider transition-colors hover:text-raka-gold ${
                    isScrolled || currentView === 'bearings' ? 'text-gray-300' : 'text-white text-shadow'
                } ${link.name === 'Bearings' ? 'text-raka-gold font-bold' : ''}`}
              >
                {link.name}
              </a>
            ))}
            <a 
              href="#contact"
              onClick={(e) => handleLinkClick(e, '#contact', 'home')}
              className="bg-raka-gold text-raka-blue hover:bg-white hover:text-raka-blue px-5 py-2 rounded font-bold text-sm transition-all transform hover:-translate-y-0.5 shadow-lg"
            >
              GET QUOTE
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-white text-2xl"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <i className={`fas ${isMobileMenuOpen ? 'fa-times' : 'fa-bars'}`}></i>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div 
        className={`fixed top-0 right-0 h-full w-64 bg-raka-blue shadow-2xl transform transition-transform duration-300 ease-in-out z-40 pt-20 px-6 ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col space-y-6">
          {NAV_LINKS.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className="text-white text-lg font-medium border-b border-gray-700 pb-2 hover:text-raka-gold"
              onClick={(e) => handleLinkClick(e, link.href, link.view)}
            >
              {link.name}
            </a>
          ))}
          <a 
            href="#contact"
            className="bg-raka-gold text-center text-raka-blue py-3 rounded font-bold mt-4"
            onClick={(e) => handleLinkClick(e, '#contact', 'home')}
          >
            GET A QUOTE
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;