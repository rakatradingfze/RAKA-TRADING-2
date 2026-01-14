import React, { useState } from 'react';
import { BEARING_CATALOG, BRANDS } from '../constants';
import { BearingsPageProps } from '../types';
import FadeIn from './FadeIn';

const BearingsPage: React.FC<BearingsPageProps> = ({ onBack }) => {
  const [searchQuery, setSearchQuery] = useState('');

  // Filter logic
  const filteredCatalog = BEARING_CATALOG.map(category => {
    const query = searchQuery.toLowerCase();
    
    // Check if main category matches
    const categoryMatches = 
        category.title.toLowerCase().includes(query) || 
        category.description.toLowerCase().includes(query);

    // Filter subtypes that match
    const matchingSubtypes = category.subTypes.filter(subtype => 
        subtype.title.toLowerCase().includes(query) || 
        subtype.description.toLowerCase().includes(query)
    );

    // If category matches, show all subtypes or just filtered ones?
    // Let's show all if category matches, otherwise specific ones.
    
    if (!query) return category;

    if (categoryMatches) {
        return category; 
    }

    if (matchingSubtypes.length > 0) {
        return {
            ...category,
            subTypes: matchingSubtypes
        };
    }

    return null;
  }).filter(Boolean); // Remove nulls (categories with no matches)

  // Filter brands to exclude non-bearing items (RAMA is wire, EH is chemical)
  const bearingBrands = BRANDS.filter(brand => 
    !brand.alt.toLowerCase().includes('rama') && 
    !brand.alt.toLowerCase().includes('eh')
  );

  return (
    <div className="bg-white pt-20">
      
      {/* Styles for Border Animation */}
      <style>{`
          @keyframes border-shimmer {
              0% { background-position: 0% 50%; }
              50% { background-position: 100% 50%; }
              100% { background-position: 0% 50%; }
          }
          .animate-border-shimmer {
              background-size: 200% 200%;
              animation: border-shimmer 4s ease infinite;
          }
      `}</style>

      {/* Page Header */}
      <div className="bg-raka-blue text-white py-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-raka-blue/90 z-10"></div>
        <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: "url('https://images.unsplash.com/photo-1563906267088-b029e7101114?q=80&w=1000&auto=format&fit=crop')" }}
        ></div>
        
        <div className="max-w-7xl mx-auto relative z-20 text-center">
            <button 
                onClick={onBack}
                className="mb-8 flex items-center justify-center mx-auto text-gray-400 hover:text-raka-gold transition-colors text-sm font-semibold tracking-wide uppercase"
            >
                <i className="fas fa-arrow-left mr-2"></i> Back to Main Site
            </button>
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-6 tracking-tight animate-fade-in-up">Industrial Bearing Catalog</h1>
            
            {/* Search Bar */}
            <div className="max-w-2xl mx-auto relative mb-4 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <i className="fas fa-search text-gray-400 text-lg"></i>
                </div>
                <input 
                    type="text" 
                    placeholder="Search by bearing type (e.g., 'Deep Groove', 'Pillow Block')..." 
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-12 pr-4 py-4 rounded-full bg-white text-gray-800 placeholder-gray-500 shadow-xl focus:outline-none focus:ring-4 focus:ring-raka-gold/50 transition-all text-lg"
                />
            </div>
            
            <p className="text-sm text-gray-400 uppercase tracking-widest animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                {searchQuery && filteredCatalog.length === 0 ? 'No products found' : 'Browse our complete inventory'}
            </p>
        </div>
      </div>

      {/* Main Catalog - Iterating through Categories */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 min-h-[50vh]">
        
        {filteredCatalog.length > 0 ? (
            filteredCatalog.map((category, index) => (
                <section key={category!.id} className="mb-24 last:mb-0">
                    {/* Category Header */}
                    <FadeIn>
                        <div className="mb-10 border-b border-gray-100 pb-6">
                            <h2 className="text-3xl font-display font-bold text-raka-blue mb-3">
                                {category!.title}
                            </h2>
                            <p className="text-gray-500 max-w-3xl leading-relaxed">
                                {category!.description}
                            </p>
                        </div>
                    </FadeIn>

                    {/* Subtype Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {category!.subTypes.map((subtype, subIndex) => (
                            <FadeIn key={subIndex} delay={subIndex * 50} className="h-full">
                                <div className="group flex flex-col h-full">
                                    {/* Image Container */}
                                    <div className="bg-[#f5f5f7] rounded-lg p-8 mb-5 flex items-center justify-center h-64 transition-all duration-300 group-hover:shadow-lg group-hover:bg-[#efeff1] relative overflow-hidden">
                                        <div className="absolute top-0 right-0 bg-raka-gold text-raka-blue text-[10px] font-bold px-2 py-1 rounded-bl opacity-0 group-hover:opacity-100 transition-opacity">
                                            VIEW SPECS
                                        </div>
                                        <img 
                                            src={subtype.image} 
                                            alt={subtype.title} 
                                            className="max-h-full max-w-full object-contain mix-blend-multiply transform transition-transform duration-500 group-hover:scale-110" 
                                        />
                                    </div>

                                    {/* Content */}
                                    <div className="flex-grow">
                                        <h3 className="text-lg font-bold text-raka-blue mb-2 leading-tight group-hover:text-raka-gold transition-colors cursor-pointer">
                                            {subtype.title}
                                        </h3>
                                        <p className="text-sm text-gray-500 leading-relaxed">
                                            {subtype.description}
                                        </p>
                                    </div>
                                </div>
                            </FadeIn>
                        ))}
                    </div>
                </section>
            ))
        ) : (
            <div className="text-center py-20">
                <div className="inline-block p-6 rounded-full bg-gray-100 mb-4">
                    <i className="fas fa-search text-4xl text-gray-300"></i>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">No matching products found</h3>
                <p className="text-gray-500">Try adjusting your search terms or contact us directly.</p>
                <button onClick={() => setSearchQuery('')} className="mt-4 text-raka-gold font-bold underline hover:text-raka-blue">
                    Clear Search
                </button>
            </div>
        )}

      </div>

      {/* Brands Section with Highlighted Animation */}
      <section className="relative py-20 bg-gray-50 border-t border-gray-200 overflow-hidden">
         {/* Subtle background glow */}
         <div className="absolute inset-0 z-0 opacity-20 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-raka-gold/40 via-transparent to-transparent animate-pulse pointer-events-none"></div>
         
         <div className="max-w-7xl mx-auto px-4 text-center relative z-10">
            <FadeIn>
                <div className="inline-block relative mb-12 group">
                    <div className="absolute inset-0 bg-gradient-to-r from-raka-gold/20 via-raka-gold to-raka-gold/20 blur-md opacity-0 group-hover:opacity-50 transition-opacity duration-700"></div>
                    <h3 className="relative font-display font-bold text-2xl text-raka-blue uppercase tracking-widest px-4 py-2 border-b-2 border-raka-gold">
                        Premium Bearing Brands We Stock
                    </h3>
                </div>
            </FadeIn>
            
            {/* Highlighted Grid Container */}
            <FadeIn delay={200}>
                <div className="p-[3px] rounded-3xl bg-gradient-to-r from-raka-blue via-raka-gold to-raka-blue animate-border-shimmer shadow-2xl">
                    <div className="bg-white rounded-[22px] p-10 backdrop-blur-sm bg-white/95">
                        <div className="flex flex-wrap justify-center items-center gap-8 lg:gap-16">
                            {bearingBrands.map((brand, idx) => (
                                <div key={idx} className="w-32 md:w-40 h-24 flex items-center justify-center p-2 transition-transform duration-300 hover:scale-105">
                                    <div className="flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300">
                                        <img 
                                            src={brand.src} 
                                            alt={brand.alt} 
                                            className="max-w-full max-h-16 object-contain drop-shadow-sm" 
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </FadeIn>
         </div>
      </section>

      {/* CTA Footer for Bearings Page */}
      <div className="bg-raka-blue text-white py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-2xl md:text-3xl font-display font-bold mb-4">
                Can't find what you are looking for?
            </h2>
            <p className="text-gray-400 mb-8">
                We have access to over 50,000 products not listed here. Send us your part number or specifications.
            </p>
            <button 
                 onClick={(e) => {
                    e.preventDefault();
                    onBack();
                    setTimeout(() => {
                        document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                    }, 100);
                }}
                className="bg-raka-gold text-raka-blue px-8 py-3 rounded font-bold hover:bg-white transition-colors uppercase tracking-wider text-sm"
            >
                Contact Sales
            </button>
        </div>
      </div>

    </div>
  );
};

export default BearingsPage;