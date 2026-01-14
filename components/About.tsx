import React from 'react';
import FadeIn from './FadeIn';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          <div className="relative">
            <FadeIn delay={0}>
                <div className="absolute top-4 left-4 w-full h-full border-2 border-raka-gold rounded-lg -z-0"></div>
                <img 
                    src="https://iili.io/f8zjVCx.md.png" 
                    alt="Industrial Warehouse" 
                    className="w-full rounded-lg shadow-xl relative z-10"
                />
            </FadeIn>
          </div>

          <div className="space-y-6">
            <FadeIn delay={200}>
                <span className="text-raka-gold font-bold uppercase tracking-widest text-sm">About RAKA Trading</span>
                <h2 className="text-3xl sm:text-4xl font-display font-bold text-raka-blue mt-2">
                Your Reliable Partner in <br/> Industrial Excellence
                </h2>
            </FadeIn>
            
            <FadeIn delay={400}>
                <p className="text-gray-600 leading-relaxed">
                Established as a premier supplier in the UAE, RAKA Trading F.Z.E specializes in high-quality mechanical and electrical components. We bridge the gap between global manufacturers and local industries, ensuring that your machinery runs smoothly with zero downtime.
                </p>
                <p className="text-gray-600 leading-relaxed mt-4">
                We are the authorized distributors for <strong>LAZIO Bearings</strong>, <strong>RAMA Copper Wires</strong>, and <strong>EH Chemicals</strong>. Our commitment to quality, competitive pricing, and technical support makes us the preferred choice for engineers and procurement managers across the region.
                </p>
            </FadeIn>
            
            <FadeIn delay={600}>
                <div className="pt-4">
                    <ul className="space-y-3">
                        {['Authorized Distributor', 'Technical Consultation', 'Fast Logistics Network'].map((item, i) => (
                            <li key={i} className="flex items-center text-gray-700 font-medium">
                                <i className="fas fa-check-circle text-green-500 mr-3"></i> {item}
                            </li>
                        ))}
                    </ul>
                </div>
            </FadeIn>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;