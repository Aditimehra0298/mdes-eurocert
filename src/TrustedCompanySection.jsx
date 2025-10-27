import React from 'react';
import './TrustedCompanySection.css';

const TrustedCompanySection = () => {
  const items = [
    { 
      title: 'ISO/IEC 17021 Accredited', 
      description: 'Globally recognized certification body',
      image: '/grid-1.png'
    },
    { 
      title: 'APSCA-Compliant Auditors', 
      description: 'Reliable and ethical inspections',
      image: '/grid-2.png'
    },
    { 
      title: 'ESYD Accredited', 
      description: 'Greece\'s National Certification Authority',
      image: '/grid-3.png'
    },
    { 
      title: 'Sustainability Experts', 
      description: 'Proven track record in helping manufacturers align with ISO and environmental standards',
      image: '/grid-4.png'
    },
  ];

  const renderIcon = (iconType) => {
    switch (iconType) {
      case 'sun':
        return (
          <svg className="w-5 h-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-6.364-.386l1.591-1.591M3 12h2.25m.386-6.364l1.591 1.591M12 12a2.25 2.25 0 00-2.25 2.25v.01c0 1.242 1.008 2.25 2.25 2.25s2.25-1.008 2.25-2.25v-.01A2.25 2.25 0 0012 12z" />
          </svg>
        );
      case 'cube':
        return (
          <svg className="w-5 h-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 7.5l-9-5.25L3 7.5m18 0l-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9" />
          </svg>
        );
      case 'beaker':
        return (
          <svg className="w-5 h-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.5 1.591L5.25 15.686a2.25 2.25 0 000 3.182s1.5 1.5 3 1.5 3-1.5 3-1.5a2.25 2.25 0 000-3.182L7.25 10.409a2.25 2.25 0 01-.5-1.591V3.104M15 3.104v5.714a2.25 2.25 0 00.5 1.591l3.5 4.286a2.25 2.25 0 010 3.182s-1.5 1.5-3 1.5-3-1.5-3-1.5a2.25 2.25 0 010-3.182l3.5-4.286a2.25 2.25 0 00.5-1.591V3.104" />
          </svg>
        );
      case 'atom':
        return (
          <svg className="w-5 h-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.042 21.672L13.684 16.6m0 0l-2.51 2.225.569-9.47 5.227 7.917-3.286-.672zM12 2.25V4.5m5.834.166l-1.591 1.591M21.75 12h-2.25m.166 5.834l-1.591-1.591M12 21.75V19.5m-5.834-.166l1.591-1.591M2.25 12h2.25m-.166-5.834l1.591 1.591" />
          </svg>
        );
      case 'cloud':
        return (
          <svg className="w-5 h-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15a4.5 4.5 0 004.5 4.5H18a3.75 3.75 0 001.332-7.257 3 3 0 00-3.758-3.758A3.75 3.75 0 0013.5 4.5H4.5A4.5 4.5 0 000 9c0 .778.223 1.5.61 2.124" />
          </svg>
        );
      case 'circle':
        return (
          <svg className="w-5 h-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <div className="trusted-company-section flex items-center justify-center py-12 md:py-16 px-4 md:px-8">
      <div className="w-full max-w-6xl mx-auto">
        {/* Flex container for layout */}
        <div className="flex flex-col lg:flex-row items-start lg:items-center gap-6 md:gap-12">
          
          {/* Left: Text content */}
          <div className="w-full lg:w-1/3 space-y-1 md:space-y-2 text-center lg:text-left">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
            🌐 Our Credibility – 
            </h2>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-blue-500 leading-tight">
            Trusted Worldwide
            </h2>
          </div>

          {/* Right: Pill grid */}
          <div className="w-full lg:w-2/3">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
              {items.map((item, index) => (
                <div
                  key={index}
                  className="flex items-start space-x-2 md:space-x-3 rounded-lg border border-gray-700 bg-gray-900/50 p-3 md:p-5 shadow-sm hover:bg-gray-800 transition-colors cursor-pointer"
                >
                  <div className="flex-shrink-0 mt-0.5 md:mt-1">
                    {item.image ? (
                      <img src={item.image} alt={item.title} className="w-8 h-8 md:w-12 md:h-12 object-contain" />
                    ) : (
                      renderIcon(item.icon)
                    )}
                  </div>
                  <div className="flex flex-col space-y-0.5 md:space-y-1">
                    <span className="text-xs md:text-sm font-semibold text-white">{item.title}</span>
                    <span className="text-xs md:text-xs text-gray-400 leading-relaxed">{item.description}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrustedCompanySection;

