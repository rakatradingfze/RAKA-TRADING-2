import React from 'react';
import { STATS } from '../constants';

const StatsBar: React.FC = () => {
  return (
    <div className="bg-raka-gold w-full py-8 -mt-2 relative z-20 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-raka-blue/10">
          {STATS.map((stat, index) => (
            <div key={index} className="flex flex-col">
              <span className="text-3xl sm:text-4xl font-display font-bold text-raka-blue">{stat.value}</span>
              <span className="text-sm font-semibold uppercase tracking-wider text-raka-blue/80 mt-1">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StatsBar;