import React, { useEffect, useState } from 'react';
import FadeIn from './FadeIn';
import TypewriterText from './TypewriterText';

interface EHHandwashPageProps {
  onBack: () => void;
}

const EHHandwashPage: React.FC<EHHandwashPageProps> = ({ onBack }) => {
  // Bubbles state for background animation
  const [bubbles, setBubbles] = useState<{ id: number; left: number; delay: number; size: number }[]>([]);

  useEffect(() => {
    // Generate random bubbles
    const newBubbles = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 5,
      size: Math.random() * 20 + 10,
    }));
    setBubbles(newBubbles);
  }, []);

  return (
    <div className="font-sans text-gray-700 relative min-h-screen overflow-hidden">
      
      {/* --- INLINE STYLES FOR SPECIFIC ANIMATIONS --- */}
      <style>{`
        @keyframes eh-animation {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        @keyframes float-up {
          0% { transform: translateY(100vh) scale(0); opacity: 0; }
          50% { opacity: 0.6; }
          100% { transform: translateY(-10vh) scale(1); opacity: 0; }
        }
        @keyframes pulse-glow {
            0%, 100% { box-shadow: 0 0 15px rgba(251, 191, 36, 0.5); }
            50% { box-shadow: 0 0 25px rgba(251, 191, 36, 0.8); }
        }
        .bg-eh-gradient {
          background-image: linear-gradient(135deg, #008000, #009900, #008000);
          background-size: 200% 200%;
          animation: eh-animation 5s infinite alternate;
        }
        .bubble {
          position: absolute;
          bottom: -50px;
          background: rgba(255, 255, 255, 0.2);
          border-radius: 50%;
          animation: float-up 10s infinite linear;
          pointer-events: none;
          z-index: 1;
        }
        .glass-panel {
          background: rgba(255, 255, 255, 0.85);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.5);
        }
      `}</style>

      {/* --- BACKGROUND WITH BUBBLES --- */}
      <div className="fixed inset-0 bg-gray-100 z-0">
         {/* Bubbles */}
         {bubbles.map((b) => (
            <div 
                key={b.id} 
                className="bubble" 
                style={{ 
                    left: `${b.left}%`, 
                    width: `${b.size}px`, 
                    height: `${b.size}px`, 
                    animationDelay: `${b.delay}s`,
                    animationDuration: `${10 + Math.random() * 10}s`
                }} 
            />
         ))}
      </div>

      {/* --- NAVBAR --- */}
      <nav className="fixed top-0 left-0 w-full z-50 py-4 px-4 sm:px-8 bg-eh-gradient shadow-lg">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
            {/* Logo Area */}
            <div className="flex items-center space-x-4 cursor-pointer" onClick={onBack}>
                <div className="bg-white p-1 rounded shadow-lg">
                    <img src="https://iili.io/KCQoLB9.png" alt="RAKA Logo" className="h-12 md:h-14 w-auto object-contain" />
                </div>
                <div className="hidden sm:block text-white">
                    <p className="font-bold text-sm">RAKA TRADING F.Z.E</p>
                    <p className="text-xs text-green-100">Back to Main Site</p>
                </div>
            </div>

            {/* Product Logo */}
            <div className="flex items-center">
                <div className="bg-white/90 p-1 rounded-lg shadow-lg">
                     <img src="https://iili.io/KG49Xun.png" alt="EH Handwash" className="h-12 md:h-14 w-auto object-contain" />
                </div>
            </div>
        </div>
      </nav>

      {/* --- MAIN CONTENT --- */}
      <main className="relative z-10 pt-32 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        
        {/* HERO SECTION */}
        <FadeIn duration={1000}>
            <div className="glass-panel rounded-3xl p-8 md:p-12 shadow-2xl mb-16 text-center transform transition-all hover:scale-[1.01] duration-500">
                <div className="inline-block bg-green-100 text-green-800 px-4 py-1 rounded-full text-sm font-bold mb-4 tracking-wider animate-bounce">
                    INDUSTRIAL STRENGTH FORMULA
                </div>
                
                <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-2 font-display leading-tight min-h-[1.2em]">
                    <TypewriterText text="EH Workshop Handwash" speed={70} delay={300} cursorColor="border-green-600" />
                </h1>
                <h2 className="text-3xl md:text-5xl font-bold text-green-700 mb-6 font-display" dir="rtl" lang="ar">
                    <TypewriterText text="غسول اليدين لورش العمل EH" speed={50} delay={1800} cursorColor="border-green-600" />
                </h2>
                
                <div className="max-w-4xl mx-auto space-y-6 text-lg md:text-xl text-gray-600 leading-relaxed">
                    <FadeIn delay={2500} duration={1000}>
                        <p>
                            Introducing <span className="font-bold text-green-700">EH Workshop Handwash</span>, the industrial-strength hand cleaning solution designed for the toughest jobs. Our unique formula acts as a powerful degreaser, effortlessly removing stubborn grime, oil, grease, and dirt from hands without harsh abrasives.
                        </p>
                    </FadeIn>
                    <FadeIn delay={2700} duration={1000}>
                        <p dir="rtl" lang="ar" className="text-gray-500">
                            نقدم لكم غسول اليدين لورش العمل EH، محلول تنظيف اليدين الصناعي المصمم لأصعب المهام. تركيبتنا الفريدة تعمل كمزيل شحوم قوي، حيث تزيل بسهولة الأوساخ العنيدة والزيوت والشحوم من اليدين دون مواد كاشطة قاسية.
                        </p>
                    </FadeIn>
                </div>

                {/* Action Buttons */}
                <div className="mt-10 flex flex-wrap justify-center gap-4">
                    <button 
                        onClick={() => document.getElementById('footer-contact')?.scrollIntoView({ behavior: 'smooth' })}
                        className="px-8 py-3 bg-gradient-to-r from-green-600 to-green-500 text-white font-bold rounded-full shadow-lg hover:shadow-green-500/50 transition-all transform hover:-translate-y-1"
                    >
                        ORDER NOW
                    </button>
                    <button 
                        onClick={onBack}
                        className="px-8 py-3 bg-white text-green-700 border-2 border-green-600 font-bold rounded-full hover:bg-green-50 transition-all"
                    >
                        VIEW ALL PRODUCTS
                    </button>
                </div>
            </div>
        </FadeIn>

        {/* PRODUCT GRID */}
        <div className="glass-panel rounded-3xl p-8 shadow-xl mb-16 relative overflow-hidden">
            <div className="absolute inset-0 bg-green-50/50 z-0"></div>
            
            <div className="relative z-10">
                <FadeIn duration={1000}>
                    <div className="text-center mb-12">
                        <h3 className="text-3xl font-bold text-gray-800">
                            <TypewriterText text="Product Showcase" delay={500} cursorColor="border-gray-800" />
                        </h3>
                        <h3 className="text-2xl font-bold text-green-600 mt-1" lang="ar" dir="rtl">عرض المنتجات</h3>
                        <div className="w-24 h-1 bg-yellow-400 mx-auto mt-4 rounded-full"></div>
                    </div>
                </FadeIn>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {[
                        { src: "https://i.pinimg.com/736x/7e/b8/ce/7eb8ce3112ccc4bcb1fef9ac581cec7f.jpg", en: "EH Handwash Bottle", ar: "زجاجة غسول اليدين EH" },
                        { src: "https://i.pinimg.com/1200x/8b/1d/d5/8b1dd5d74ead76e42293f466cafc8868.jpg", en: "Effective Degreasing", ar: "فعالية في إزالة الشحوم" },
                        { src: "https://i.pinimg.com/1200x/8d/97/43/8d974385e1ec9d1ebb919a33cc2e43da.jpg", en: "Industrial Strength", ar: "قوة صناعية" },
                        { src: "https://iili.io/KYKIzfR.jpg", en: "Tough on Grime", ar: "قوي على الأوساخ" },
                        { src: "https://iili.io/KYKIfOF.jpg", en: "Gentle on Skin", ar: "لطيف على البشرة" },
                        { src: "https://iili.io/KYKInWJ.jpg", en: "Quality Formula", ar: "تركيبة عالية الجودة" }
                    ].map((item, idx) => (
                        <FadeIn key={idx} delay={idx * 100} duration={1000} className="h-full">
                            <div className="group bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 h-full flex flex-col">
                                {/* Improved Image Container: aspect ratio to show full bottle and object-contain */}
                                <div className="aspect-[4/5] overflow-hidden relative p-6 bg-white flex items-center justify-center border-b border-gray-100">
                                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-green-50/30 opacity-0 group-hover:opacity-100 transition-opacity z-0"></div>
                                    <img 
                                        src={item.src} 
                                        alt={item.en} 
                                        className="w-full h-full object-contain transform group-hover:scale-105 transition-transform duration-700 z-10 drop-shadow-lg" 
                                    />
                                </div>
                                <div className="p-4 text-center bg-white flex-grow flex flex-col justify-center">
                                    <p className="text-gray-800 font-bold group-hover:text-green-600 transition-colors text-lg">{item.en}</p>
                                    <p className="text-gray-500 text-sm mt-1 font-medium" dir="rtl" lang="ar">{item.ar}</p>
                                </div>
                            </div>
                        </FadeIn>
                    ))}
                </div>
            </div>
        </div>

        {/* CERTIFICATES */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-16">
             <FadeIn delay={0} duration={1000}>
                <div className="glass-panel p-6 rounded-2xl text-center transform transition-all hover:scale-105 border-2 border-transparent hover:border-yellow-400 group h-full flex flex-col items-center justify-center">
                    <img src="https://i.pinimg.com/736x/e7/64/f6/e764f6b448b5344ab695d89059c0a7b5.jpg" alt="REACH" className="w-48 h-auto rounded-lg shadow-sm mb-4 group-hover:shadow-lg transition-shadow" />
                    <div className="bg-green-100 text-green-800 py-2 px-4 rounded-full inline-block font-bold text-sm">REACH CERTIFIED</div>
                </div>
             </FadeIn>
             <FadeIn delay={200} duration={1000}>
                <div className="glass-panel p-6 rounded-2xl text-center transform transition-all hover:scale-105 border-2 border-transparent hover:border-yellow-400 group h-full flex flex-col items-center justify-center">
                    <img src="https://i.pinimg.com/736x/6f/8a/57/6f8a57ea67c4aa0a4d56adc3016ec487.jpg" alt="ROHS" className="w-48 h-auto rounded-lg shadow-sm mb-4 group-hover:shadow-lg transition-shadow" />
                    <div className="bg-green-100 text-green-800 py-2 px-4 rounded-full inline-block font-bold text-sm">ROHS CERTIFIED</div>
                </div>
             </FadeIn>
        </div>

      </main>

      {/* --- FOOTER --- */}
      <footer id="footer-contact" className="bg-gray-800 text-white py-12 border-t-4 border-green-600 relative z-10">
          <div className="max-w-7xl mx-auto px-4 text-center">
              <div className="mb-8">
                  <h4 className="text-2xl font-bold text-white mb-2">Ready to Order?</h4>
                  <p className="text-gray-400">Contact RAKA TRADING F.Z.E for bulk inquiries.</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 text-sm">
                  <div className="p-4 bg-gray-700/50 rounded-lg">
                      <i className="fas fa-map-marker-alt text-green-400 text-2xl mb-3"></i>
                      <p>RAKA TRADING F.Z.E</p>
                      <p>Ajman Free Zone, Ajman</p>
                  </div>
                  <div className="p-4 bg-gray-700/50 rounded-lg">
                      <i className="fas fa-phone-alt text-green-400 text-2xl mb-3"></i>
                      <p>+971 56 595 9920</p>
                      <p className="text-gray-400 text-xs mt-1">Mon - Sat, 9am - 6pm</p>
                  </div>
                  <div className="p-4 bg-gray-700/50 rounded-lg">
                      <i className="fas fa-envelope text-green-400 text-2xl mb-3"></i>
                      <a href="mailto:raagavan@raka.ae" className="hover:text-green-400 transition-colors">raagavan@raka.ae</a>
                  </div>
              </div>

              <div className="flex justify-center space-x-6">
                  <a href="#" className="w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center hover:bg-green-600 transition-colors"><i className="fab fa-instagram"></i></a>
                  <a href="#" className="w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center hover:bg-green-600 transition-colors"><i className="fab fa-tiktok"></i></a>
                  <a href="#" className="w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center hover:bg-green-600 transition-colors"><i className="fab fa-linkedin"></i></a>
              </div>
              
              <div className="mt-8 pt-8 border-t border-gray-700 text-xs text-gray-500">
                  <p>&copy; 2025 RAKA TRADING F.Z.E. All rights reserved.</p>
                  <p className="mt-1" lang="ar" dir="rtl">© 2025 راكا للتجارة F.Z.E جميع الحقوق محفوظة.</p>
              </div>
          </div>
      </footer>
    </div>
  );
};

export default EHHandwashPage;