import React from 'react';

const LoadingScreen: React.FC = () => {
  return (
    <div 
      className="fixed top-0 left-0 w-full h-full bg-gray-900 z-[9999] flex flex-col justify-center items-center transition-opacity duration-700"
    >
      <img 
        src="https://i.ibb.co/jkLBrfPH/RAKA-LOGO.png" 
        alt="Loading..." 
        className="w-[120px] h-[120px] object-contain mb-10 animate-[spin-stop_3s_cubic-bezier(0.25,1,0.5,1)_forwards]"
      />
      <div className="w-[280px] h-[6px] bg-gray-700 rounded-full overflow-hidden shadow-[0_0_15px_rgba(0,0,0,0.5)]">
        <div 
          className="h-full w-0 rounded-full bg-gradient-to-r from-blue-500 via-cyan-400 to-blue-500 bg-[length:200%_100%] animate-[load-progress_2.8s_ease-in-out_forwards,gradient-shift_2s_infinite_linear]"
        ></div>
      </div>
      <p className="text-gray-400 mt-4 text-sm tracking-[0.2em] animate-pulse">LOADING</p>
    </div>
  );
};

export default LoadingScreen;