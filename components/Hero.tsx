import React, { useState } from 'react';
import { ORBIT_ITEMS } from '../constants';
import FadeIn from './FadeIn';
import TypewriterText from './TypewriterText';

const Hero: React.FC = () => {
  const [isPaused, setIsPaused] = useState(false);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      // Calculate offset manually for better reliability than scrollIntoView with sticky headers
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <section id="home" className="relative w-full h-[90vh] min-h-[700px] overflow-hidden bg-raka-blue flex items-center">
      
      {/* Background with Overlay */}
      <div className="absolute inset-0 z-0">
        <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-40 mix-blend-overlay"
            style={{ backgroundImage: "url('https://images.unsplash.com/photo-1565043589221-1a6fd4951911?q=80&w=2070&auto=format&fit=crop')" }} 
        />
        <div className="absolute inset-0 bg-gradient-to-r from-raka-blue via-raka-blue/90 to-transparent"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* Text Content */}
        <div className="text-white space-y-6 pt-10 lg:pt-0">
          <FadeIn delay={100}>
            <div className="inline-block bg-raka-gold/20 border border-raka-gold/50 rounded-full px-4 py-1 text-raka-gold text-sm font-semibold tracking-wider mb-2">
                PREMIUM INDUSTRIAL SOLUTIONS
            </div>
          </FadeIn>
          
          <h1 className="text-4xl sm:text-6xl font-display font-bold leading-tight">
            <div className="mb-2">
                <TypewriterText text="POWERING INDUSTRY WITH" speed={40} delay={200} cursorColor="border-raka-gold" />
            </div> 
            <FadeIn delay={1400} className="inline-block">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-raka-gold to-yellow-200">PRECISION</span>
            </FadeIn>
          </h1>
          
          <FadeIn delay={1600}>
            <p className="text-gray-300 text-lg sm:text-xl max-w-lg leading-relaxed">
                Leading supplier of high-performance bearings, copper winding wires, and maintenance solutions in the Middle East.
            </p>
          </FadeIn>
          
          <FadeIn delay={1800}>
            <div className="flex flex-wrap gap-4 pt-4 relative z-20">
                <a 
                    href="#products" 
                    onClick={(e) => scrollToSection(e, 'products')}
                    className="px-8 py-3 bg-raka-gold text-raka-blue font-bold rounded hover:bg-white transition-colors shadow-[0_0_20px_rgba(251,191,36,0.4)] cursor-pointer inline-block"
                >
                VIEW PRODUCTS
                </a>
                <a 
                    href="#contact" 
                    onClick={(e) => scrollToSection(e, 'contact')}
                    className="px-8 py-3 border border-gray-500 text-white font-bold rounded hover:border-raka-gold hover:text-raka-gold transition-colors cursor-pointer inline-block"
                >
                CONTACT US
                </a>
            </div>
          </FadeIn>
        </div>

        {/* Orbit Visualizer */}
        <div className="relative h-[400px] sm:h-[500px] flex justify-center items-center lg:translate-x-10 pointer-events-none">
            {/* Center Logo with Pulse Wave Animation */}
            <div className="absolute z-20 w-[140px] h-[140px] flex items-center justify-center pointer-events-auto">
                 {/* Wave Effects */}
                <div className="absolute inset-0 bg-raka-gold rounded-full opacity-30 animate-ping"></div>
                <div className="absolute inset-0 bg-raka-gold/20 rounded-full animate-pulse delay-75 transform scale-125"></div>
                
                {/* Main Logo Circle */}
                <div className="relative w-full h-full bg-white rounded-full flex items-center justify-center shadow-[0_0_50px_rgba(251,191,36,0.5)] z-20 border-4 border-white/10">
                    <img src="https://i.ibb.co/jkLBrfPH/RAKA-LOGO.png" alt="RAKA" className="w-[80%] object-contain" />
                </div>
            </div>

            {/* Orbit Container */}
            <div className={`orbit-container ${isPaused ? 'paused' : ''} pointer-events-auto`}>
                {ORBIT_ITEMS.map((item) => (
                <div 
                    key={item.id} 
                    className="orbit-spoke" 
                    style={{ '--angle': `${item.angle}deg` } as React.CSSProperties}
                >
                    <div className="orbit-translator" style={{ animationDelay: item.delay }}>
                        <div 
                            className="orbit-scale-wrapper"
                            onMouseEnter={() => setIsPaused(true)}
                            onMouseLeave={() => setIsPaused(false)}
                        >
                            <div className="orbit-item-content">
                                <img src={item.image} className="orbit-product-img w-full h-full object-contain p-2 bg-white" alt={item.label} />
                                <span className="product-name">{item.label}</span>
                            </div>
                        </div>
                    </div>
                </div>
                ))}
            </div>

            {/* Decorative Rings */}
            <div className="absolute rounded-full border border-white/10 w-[280px] h-[280px] sm:w-[560px] sm:h-[560px]"></div>
            <div className="absolute rounded-full border border-dashed border-white/20 w-[200px] h-[200px] sm:w-[400px] sm:h-[400px] animate-spin-slow"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;