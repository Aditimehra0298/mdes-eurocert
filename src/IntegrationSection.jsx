import React from 'react';
import './IntegrationSection.css';

const IntegrationSection = () => {
  return (
    <main className="flex flex-col items-center justify-center py-16 md:py-20 px-4 md:px-8 overflow-hidden bg-slate-900">
      {/* Heading and Subheading */}
      <div className="text-center max-w-5xl mx-auto z-10">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-400">
          🏆 Our Certifications That Make You Global & Green
        </h1>

        {/* Certification Badges with Arrows */}
        <div className="relative w-full max-w-4xl mb-8 mx-auto">
          {/* SVG Arrows connecting badges */}
          <svg className="absolute top-0 left-0 w-full h-full pointer-events-none hidden md:block" viewBox="0 0 100 100" preserveAspectRatio="none" style={{zIndex: 0}}>
            <defs>
              <marker
                id="arrowhead"
                viewBox="0 0 10 10"
                refX="8"
                refY="5"
                markerWidth="6"
                markerHeight="6"
                orient="auto">
                <path d="M 0 0 L 10 5 L 0 10 z" fill="rgb(59 130 246 / 0.5)" />
              </marker>
            </defs>
            {/* Arrow from 9001 to 14001 */}
            <line x1="20" y1="50" x2="30" y2="50" stroke="rgb(59 130 246 / 0.4)" strokeWidth="0.5" markerEnd="url(#arrowhead)"/>
            {/* Arrow from 14001 to 45001 */}
            <line x1="38" y1="50" x2="48" y2="50" stroke="rgb(59 130 246 / 0.4)" strokeWidth="0.5" markerEnd="url(#arrowhead)"/>
            {/* Arrow from 45001 to 60001 */}
            <line x1="56" y1="50" x2="66" y2="50" stroke="rgb(59 130 246 / 0.4)" strokeWidth="0.5" markerEnd="url(#arrowhead)"/>
            {/* Arrow from 60001 to CE */}
            <line x1="74" y1="50" x2="84" y2="50" stroke="rgb(59 130 246 / 0.4)" strokeWidth="0.5" markerEnd="url(#arrowhead)"/>
          </svg>

          <div className="flex flex-wrap items-center justify-center gap-6 md:gap-8 relative" style={{zIndex: 1}}>
            {/* ISO 9001 */}
            <div className="relative flex flex-col items-center justify-center bg-blue-600 w-24 h-28 md:w-28 md:h-32 shadow-xl" style={{clipPath: 'polygon(10% 0%, 90% 0%, 100% 15%, 100% 80%, 50% 100%, 0% 80%, 0% 15%)'}}>
              <span className="text-white text-xl md:text-2xl font-bold">ISO</span>
              <span className="text-white text-xl md:text-2xl font-bold">9001</span>
            </div>

            {/* ISO 14001 */}
            <div className="relative flex flex-col items-center justify-center bg-green-600 w-24 h-28 md:w-28 md:h-32 shadow-xl" style={{clipPath: 'polygon(10% 0%, 90% 0%, 100% 15%, 100% 80%, 50% 100%, 0% 80%, 0% 15%)'}}>
              <span className="text-white text-xl md:text-2xl font-bold">ISO</span>
              <span className="text-white text-xl md:text-2xl font-bold">14001</span>
            </div>

            {/* ISO 45001 */}
            <div className="relative flex flex-col items-center justify-center bg-green-700 w-24 h-28 md:w-28 md:h-32 shadow-xl" style={{clipPath: 'polygon(10% 0%, 90% 0%, 100% 15%, 100% 80%, 50% 100%, 0% 80%, 0% 15%)'}}>
              <span className="text-white text-xl md:text-2xl font-bold">ISO</span>
              <span className="text-white text-xl md:text-2xl font-bold">45001</span>
            </div>

            {/* ISO 60001 */}
            <div className="relative flex flex-col items-center justify-center bg-green-600 w-24 h-28 md:w-28 md:h-32 shadow-xl" style={{clipPath: 'polygon(10% 0%, 90% 0%, 100% 15%, 100% 80%, 50% 100%, 0% 80%, 0% 15%)'}}>
              <span className="text-white text-xl md:text-2xl font-bold">ISO</span>
              <span className="text-white text-xl md:text-2xl font-bold">60001</span>
            </div>

            {/* CE Badge */}
            <div className="flex flex-col items-center justify-center">
              <img 
                src="/ce-badge.jpg" 
                alt="CE Badge" 
                className="w-28 h-28 md:w-32 md:h-32 object-contain"
              />
            </div>
          </div>
        </div>

        <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto">
        💡 Bonus: We help machinery manufacturers adopt eco-friendly practices, reduce emissions, and meet international environmental regulations
        </p>
      </div>

    </main>
  );
};

export default IntegrationSection;


