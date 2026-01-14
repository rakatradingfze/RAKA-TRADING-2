import React from 'react';
import { BRANDS } from '../constants';

const Brands: React.FC = () => {
  // Duplicate logos multiple times for smooth infinite scroll
  const duplicatedLogos = [...BRANDS, ...BRANDS, ...BRANDS, ...BRANDS];

  return (
    <section id="brands" className="py-20 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-12">
        <span className="text-raka-gold font-bold uppercase tracking-widest text-sm">Our Partners</span>
        <h3 className="text-2xl font-display font-bold text-gray-800 mt-2 uppercase tracking-wide">Trusted Brands We Distribute</h3>
      </div>
      
      {/* Container with gradient masks for fade effect */}
      <div className="relative w-full overflow-hidden mask-gradient">
        {/* CSS Mask for fading edges */}
        <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-white via-white/80 to-transparent z-10"></div>
        <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-white via-white/80 to-transparent z-10"></div>

        <div className="scrolling-logos-container py-6">
          {duplicatedLogos.map((logo, index) => {
            // Check if logo is ARB or VLH to apply larger sizing
            const isLarge = logo.alt.includes('ARB') || logo.alt.includes('VLH');
            
            return (
                <div 
                    key={index} 
                    className="mx-6 md:mx-10 flex items-center justify-center h-24 w-48 flex-shrink-0 grayscale-0 hover:grayscale-0 transition-all duration-300 bg-white"
                >
                    <img 
                    src={logo.src} 
                    alt={logo.alt} 
                    className={`${isLarge ? 'max-h-24 scale-110' : 'max-h-16'} w-auto max-w-full object-contain drop-shadow-sm hover:drop-shadow-md transition-all`}
                    />
                </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Brands;