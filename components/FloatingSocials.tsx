import React from 'react';

const FloatingSocials: React.FC = () => {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col space-y-4 items-end">
      
      {/* WhatsApp Wrapper with Tooltip */}
      <div className="group relative flex items-center">
        {/* Tooltip - Always visible with animation */}
        <div className="absolute right-16 top-1/2 -translate-y-1/2 bg-white text-raka-blue text-xs font-bold px-4 py-2.5 rounded shadow-xl w-56 animate-fade-in-up border border-gray-100 flex items-center">
          <span className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></span>
          Chat with us!
          {/* Arrow pointing right */}
          <div className="absolute top-1/2 -right-1.5 -translate-y-1/2 w-3 h-3 bg-white transform rotate-45 border-t border-r border-gray-100"></div>
        </div>

        {/* Animation Wrapper for Pop Effect */}
        <div className="animate-pop">
          <a 
            href="https://wa.me/message/YRLQ32B2XKMDA1" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="bg-[#25D366] text-white w-14 h-14 rounded-full flex items-center justify-center shadow-2xl hover:bg-green-600 transition-all transform hover:scale-110 duration-300 border-2 border-white relative z-10"
            aria-label="Contact via WhatsApp"
          >
            <i className="fab fa-whatsapp text-3xl"></i>
          </a>
        </div>
      </div>

      {/* Instagram Wrapper */}
      <div className="animate-pop" style={{ animationDelay: '1s' }}>
        <a 
          href="https://www.instagram.com/rakatrading_official?igsh=MXB1ZmttdndqcDFpbQ==" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="bg-gradient-to-br from-purple-600 via-pink-500 to-red-500 text-white w-14 h-14 rounded-full flex items-center justify-center shadow-2xl hover:from-purple-700 hover:via-pink-600 hover:to-red-600 transition-all transform hover:scale-110 duration-300 border-2 border-white"
          aria-label="Visit Instagram"
        >
          <i className="fab fa-instagram text-3xl"></i>
        </a>
      </div>
      
    </div>
  );
};

export default FloatingSocials;