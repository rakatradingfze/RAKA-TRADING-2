import React from 'react';
import FadeIn from './FadeIn';

interface RAMAWirePageProps {
  onBack: () => void;
}

const RAMAWirePage: React.FC<RAMAWirePageProps> = ({ onBack }) => {
  return (
    <div className="bg-white min-h-screen font-sans text-gray-800">
      
      {/* Sticky Navbar */}
      <nav className="fixed top-0 left-0 w-full z-50 py-4 px-4 sm:px-8 bg-gradient-to-r from-orange-800 to-orange-600 shadow-xl">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
            <div className="flex items-center space-x-4 cursor-pointer" onClick={onBack}>
                <div className="bg-white p-1 rounded shadow-lg">
                    <img src="https://i.ibb.co/jkLBrfPH/RAKA-LOGO.png" alt="RAKA Logo" className="h-10 w-auto object-contain" />
                </div>
                <div className="text-white">
                    <p className="font-bold text-sm tracking-widest">RAKA TRADING</p>
                    <p className="text-[10px] text-orange-200 uppercase">Back to Main Site</p>
                </div>
            </div>
            <div className="bg-gray-900 p-1 rounded shadow-lg border border-white/10">
                <img src="https://iili.io/f8I8aEu.png" alt="RAMA Logo" className="h-10 w-auto object-contain" />
            </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative pt-32 pb-20 bg-gray-900 overflow-hidden">
        <div className="absolute inset-0 opacity-40">
             <img 
                src="https://images.unsplash.com/photo-1622541306352-7b19283f5001?q=80&w=2070&auto=format&fit=crop" 
                alt="Copper Wire Background" 
                className="w-full h-full object-cover"
            />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-orange-900/90 to-gray-900/90"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
            <FadeIn>
                <span className="inline-block py-1 px-3 rounded-full bg-orange-500/20 text-orange-300 text-sm font-bold tracking-widest border border-orange-500/30 mb-6">
                    AUTHORIZED DISTRIBUTOR
                </span>
                <h1 className="text-5xl md:text-7xl font-display font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-200 via-orange-400 to-yellow-500 mb-6 drop-shadow-lg">
                    RAMA
                    <span className="block text-white text-3xl md:text-5xl mt-2 font-light">Winding Wires</span>
                </h1>
                <p className="max-w-2xl mx-auto text-gray-300 text-lg leading-relaxed mb-10">
                    High-performance enamelled and submersible copper winding wires. 
                    Engineered for efficiency, durability, and superior electrical conductivity.
                </p>
                <button 
                    onClick={() => document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' })}
                    className="bg-orange-600 text-white px-8 py-3 rounded-full font-bold hover:bg-orange-500 transition-all shadow-[0_0_20px_rgba(234,88,12,0.4)]"
                >
                    EXPLORE PRODUCTS
                </button>
            </FadeIn>
        </div>
      </div>

      {/* Main Content */}
      <div id="products" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 space-y-32">
        
        {/* SECTION 1: Enamelled Wire */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <FadeIn className="order-2 lg:order-1">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white aspect-square lg:aspect-auto h-[400px]">
                    <img src="https://t4.ftcdn.net/jpg/18/64/07/83/360_F_1864078340_Tpq3el3uF71wcQBu6K6yM9amTbkfJI27.jpg" alt="Enamelled Copper Wire" className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700 bg-gray-100" />
                    <div className="absolute bottom-0 left-0 bg-orange-600 text-white text-xs font-bold px-4 py-2 rounded-tr-lg">
                        IEC 60317 STANDARDS
                    </div>
                </div>
            </FadeIn>
            <FadeIn className="order-1 lg:order-2">
                <h2 className="text-4xl font-display font-bold text-gray-900 mb-6">
                    Enamelled Copper Wire
                </h2>
                <div className="w-20 h-1.5 bg-orange-500 mb-6"></div>
                <p className="text-gray-600 mb-6 leading-relaxed">
                    Our enamelled copper wires are manufactured using high-purity copper cathodes (99.99%) to ensure superior conductivity and ductility. They are coated with high-quality enamel insulation, making them ideal for high-speed winding processes in motors, transformers, and electrical appliances.
                </p>
                <ul className="space-y-4">
                    {[
                        "Excellent Thermal Stability (Class 155, 180, 200)",
                        "Superior Adhesion & Flexibility",
                        "High Electrical Conductivity (IACS)",
                        "Resistant to transformer oils and coolants"
                    ].map((item, i) => (
                        <li key={i} className="flex items-center text-gray-700 font-medium">
                            <span className="w-6 h-6 rounded-full bg-orange-100 text-orange-600 flex items-center justify-center mr-3 text-xs">
                                <i className="fas fa-check"></i>
                            </span>
                            {item}
                        </li>
                    ))}
                </ul>
            </FadeIn>
        </div>

        {/* SECTION 1.5: Applications Banner */}
        <FadeIn>
            <div className="relative rounded-3xl overflow-hidden h-64 md:h-80 shadow-2xl group">
                <img 
                    src="https://i.ytimg.com/vi/ANkEt-ubSEY/hqdefault.jpg" 
                    alt="Motor Winding Application" 
                    className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-1000"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 via-gray-900/40 to-transparent flex flex-col justify-center px-8 md:px-16">
                    <h3 className="text-3xl font-display font-bold text-white mb-4">Powering The World's Motors</h3>
                    <p className="text-gray-200 max-w-lg text-lg leading-relaxed shadow-sm">
                        Trusted by leading manufacturers for rewinding motors, generators, and transformers. Our wires ensure maximum efficiency and longevity in demanding industrial applications.
                    </p>
                </div>
            </div>
        </FadeIn>

        {/* SECTION 2: Submersible Wire */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <FadeIn>
                <h2 className="text-4xl font-display font-bold text-gray-900 mb-6">
                    Submersible Winding Wire
                </h2>
                <div className="w-20 h-1.5 bg-blue-500 mb-6"></div>
                <p className="text-gray-600 mb-6 leading-relaxed">
                    Specifically designed for submersible pumps and motors working under water. These wires are insulated with a special grade of Polyester/Polypropylene that offers excellent resistance to water absorption, abrasion, and electrical stress.
                </p>
                <ul className="space-y-4">
                    {[
                        "Water & Moisture Resistant Insulation",
                        "High Dielectric Strength",
                        "Excellent Mechanical Strength",
                        "Tear Resistant Polywrapper"
                    ].map((item, i) => (
                        <li key={i} className="flex items-center text-gray-700 font-medium">
                            <span className="w-6 h-6 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center mr-3 text-xs">
                                <i className="fas fa-water"></i>
                            </span>
                            {item}
                        </li>
                    ))}
                </ul>
            </FadeIn>
            <FadeIn>
                <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white h-[400px]">
                    <img src="https://i.ibb.co/kg055HdZ/9.png" alt="Submersible Wire" className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700 bg-gray-100" />
                    <div className="absolute bottom-0 left-0 bg-blue-600 text-white text-xs font-bold px-4 py-2 rounded-tr-lg">
                        WATERPROOF GRADE
                    </div>
                </div>
            </FadeIn>
        </div>

        {/* SECTION 3: Quality & Packaging */}
        <FadeIn>
            <div className="bg-gray-50 rounded-3xl p-10 border border-gray-100">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h3 className="text-3xl font-display font-bold text-gray-900 mb-4">World-Class Quality & Packaging</h3>
                    <p className="text-gray-500">
                        "Quality is not an act, it is a habit." - At RAMA, every spool undergoes rigorous testing including Tangent Delta, Elongation, and Heat Shock tests.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Quality Card */}
                    <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all text-center">
                        <div className="w-16 h-16 mx-auto bg-orange-50 text-orange-600 rounded-full flex items-center justify-center text-2xl mb-4">
                            <i className="fas fa-microscope"></i>
                        </div>
                        <h4 className="font-bold text-lg mb-2">Lab Tested</h4>
                        <p className="text-sm text-gray-500">ISO certified labs testing for spring back, flexibility, and breakdown voltage.</p>
                    </div>

                    {/* Packaging Card */}
                    <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all text-center">
                        <div className="w-16 h-16 mx-auto bg-orange-50 text-orange-600 rounded-full flex items-center justify-center text-2xl mb-4">
                            <i className="fas fa-box-open"></i>
                        </div>
                        <h4 className="font-bold text-lg mb-2">Secure Packing</h4>
                        <p className="text-sm text-gray-500">Available in PT-4 to PT-90 spools. Palletized and shrink-wrapped for safe transit.</p>
                    </div>

                    {/* Certs Card */}
                    <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all text-center">
                        <div className="w-16 h-16 mx-auto bg-orange-50 text-orange-600 rounded-full flex items-center justify-center text-2xl mb-4">
                            <i className="fas fa-certificate"></i>
                        </div>
                        <h4 className="font-bold text-lg mb-2">Certified</h4>
                        <p className="text-sm text-gray-500">ISO 9001:2015, ISO 14001:2015, and UL Approved products.</p>
                    </div>
                </div>
            </div>
        </FadeIn>

      </div>

      {/* Footer CTA */}
      <div className="bg-gray-900 text-white py-16 text-center">
          <h2 className="text-3xl font-bold mb-6">Need Technical Specifications?</h2>
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
              Contact our sales team for data sheets, wire gauge charts, and bulk pricing.
          </p>
          <div className="flex justify-center space-x-4">
              <button 
                  onClick={onBack}
                  className="px-8 py-3 border border-gray-600 rounded hover:bg-gray-800 transition-colors"
              >
                  Back to Home
              </button>
              <button 
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })} // Assuming contact is in main layout or handled via navigation
                  className="px-8 py-3 bg-orange-600 text-white font-bold rounded hover:bg-orange-500 transition-colors"
              >
                  Contact Sales
              </button>
          </div>
      </div>

    </div>
  );
};

export default RAMAWirePage;