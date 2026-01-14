import React from 'react';
import { NAV_LINKS } from '../constants';
import { FooterProps, PageView } from '../types';

const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const handleLinkClick = (e: React.MouseEvent, href: string, view: string | undefined) => {
    e.preventDefault();
    if (view) {
      onNavigate(view as PageView);
    }
    if (view === 'home' && href.startsWith('#')) {
       setTimeout(() => {
           const element = document.querySelector(href);
           if (element) {
               element.scrollIntoView({ behavior: 'smooth' });
           }
       }, 100);
    }
  };

  return (
    <footer className="bg-raka-dark text-white pt-16 pb-8 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
            
            {/* Brand */}
            <div>
                <div className="flex items-center space-x-3 mb-6">
                    <div className="w-8 h-8 bg-white rounded flex items-center justify-center">
                        <img src="https://i.ibb.co/jkLBrfPH/RAKA-LOGO.png" alt="Logo" className="w-6 h-6 object-contain" />
                    </div>
                    <span className="font-display font-bold text-xl tracking-wide">RAKA<span className="text-raka-gold">TRADING</span></span>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed mb-6">
                    Your premier source for industrial bearings, winding wires, and maintenance chemicals in the UAE.
                </p>
                <div className="flex space-x-4">
                    <a href="#" className="w-10 h-10 rounded bg-white/5 flex items-center justify-center hover:bg-raka-gold hover:text-raka-blue transition-colors">
                        <i className="fab fa-facebook-f"></i>
                    </a>
                    <a href="https://www.instagram.com/rakatrading_official" target="_blank" className="w-10 h-10 rounded bg-white/5 flex items-center justify-center hover:bg-raka-gold hover:text-raka-blue transition-colors">
                        <i className="fab fa-instagram"></i>
                    </a>
                    <a href="#" className="w-10 h-10 rounded bg-white/5 flex items-center justify-center hover:bg-raka-gold hover:text-raka-blue transition-colors">
                        <i className="fab fa-linkedin-in"></i>
                    </a>
                </div>
            </div>

            {/* Links */}
            <div>
                <h4 className="text-lg font-bold mb-6">Quick Links</h4>
                <ul className="space-y-3">
                    {NAV_LINKS.map(link => (
                        <li key={link.name}>
                            <a 
                                href={link.href} 
                                onClick={(e) => handleLinkClick(e, link.href, link.view)}
                                className="text-gray-400 hover:text-raka-gold text-sm transition-colors"
                            >
                                {link.name}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>

            {/* Products */}
            <div>
                <h4 className="text-lg font-bold mb-6">Our Products</h4>
                <ul className="space-y-3">
                    <li><a href="#" onClick={(e) => handleLinkClick(e, '#bearings-catalog', 'bearings')} className="text-gray-400 hover:text-raka-gold text-sm transition-colors">Ball Bearings</a></li>
                    <li><a href="#" onClick={(e) => handleLinkClick(e, '#bearings-catalog', 'bearings')} className="text-gray-400 hover:text-raka-gold text-sm transition-colors">Roller Bearings</a></li>
                    <li><a href="#products" onClick={(e) => handleLinkClick(e, '#products', 'home')} className="text-gray-400 hover:text-raka-gold text-sm transition-colors">Winding Copper Wire</a></li>
                    <li><a href="#products" onClick={(e) => handleLinkClick(e, '#products', 'home')} className="text-gray-400 hover:text-raka-gold text-sm transition-colors">Workshop Handwash</a></li>
                </ul>
            </div>

            {/* Newsletter */}
            <div>
                <h4 className="text-lg font-bold mb-6">Newsletter</h4>
                <p className="text-gray-400 text-sm mb-4">Subscribe for latest stock updates and offers.</p>
                <form className="flex">
                    <input type="email" placeholder="Email" className="bg-white/5 border border-white/10 rounded-l px-4 py-2 text-sm w-full focus:outline-none focus:border-raka-gold" />
                    <button type="button" className="bg-raka-gold text-raka-blue px-4 py-2 rounded-r font-bold hover:bg-white transition-colors">
                        <i className="fas fa-paper-plane"></i>
                    </button>
                </form>
            </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-xs text-center md:text-left">&copy; 2025 RAKA TRADING F.Z.E. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0 text-xs text-gray-500">
                <a href="#" className="hover:text-white">Privacy Policy</a>
                <a href="#" className="hover:text-white">Terms of Service</a>
            </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;