import React from 'react';
import './FeatureSection.css';

const FeatureSection = () => {
  const features = [
    {
      title: "✅ Fast-Track Certifications",
      description: "ISO, CE, ATEX, PED guidance on the spot",
      image: "/1.png",
      alt: "Documents with certification stamps, symbolizing quick approval"
    },
    {
      title: "✅ Environmental Compliance",
      description: "Make your machinery eco-friendly with ISO 14001",
      image: "/unnamed (1).jpg",
      alt: "Green leaf or eco-friendly icon over machinery, symbolizing sustainability"
    },
    {
      title: "✅ Exclusive Stall-Only Offers",
      description: "Limited consultation slots available today",
      image: "/3.jpg",
      alt: "Gift box or 'Limited Time Offer' sign, indicating special deals"
    },
    {
      title: "✅ Live Audit Demos",
      description: "See exactly how your machinery meets global standards",
      image: "/4.jpg",
      alt: "Person inspecting machinery with a checklist, demonstrating an audit"
    },
    {
      title: "✅ Export-Ready Advantage",
      description: "Stay ahead of competitors in international markets",
      image: "/5 grid.jpg",
      alt: "Globe with shipping containers or arrows pointing outwards, symbolizing global export"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-8 md:p-16 overflow-hidden bg-slate-900">
      {/* Title */}
      <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-center mb-12 max-w-4xl mx-auto">
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-400">
        Why Machinery Manufacturers Must Visit EUROCERT Stall (12A) at ENGIMACH 2025
        </span>
        <br />
        <span className="text-lg md:text-xl text-gray-400 font-normal italic">Global standards + green advantage in one place.</span>
      </h2>

      {/* Mobile carousel wrapper */}
      <div className="w-full max-w-7xl mx-auto md:overflow-visible overflow-hidden relative">
        {/* Fade-out mask for mobile carousel */}
        <div className="absolute top-0 left-0 bottom-0 w-8 bg-gradient-to-r from-slate-900 to-transparent z-10 md:hidden"></div>
        <div className="absolute top-0 right-0 bottom-0 w-8 bg-gradient-to-l from-slate-900 to-transparent z-10 md:hidden"></div>

        {/* Container for cards */}
        <div className="flex md:grid md:grid-cols-6 gap-8 md:w-auto md:animate-none animate-scroll">
          {/* Original Cards */}
          <div className="bg-slate-800 p-8 rounded-2xl border border-slate-700 flex flex-col h-full shadow-lg md:col-start-2 md:col-span-2 w-80 md:w-auto flex-shrink-0">
            <div className="flex-grow">
              <h3 className="text-2xl font-bold mb-3 text-white">
                {features[0].title}
              </h3>
              <p className="text-slate-300">
                {features[0].description}
              </p>
            </div>
            <div className="mt-4 rounded-lg overflow-hidden h-40 bg-slate-700 flex items-center justify-center">
              <img
                src={features[0].image}
                alt={features[0].alt}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="bg-slate-800 p-8 rounded-2xl border border-slate-700 flex flex-col h-full shadow-lg md:col-start-4 md:col-span-2 w-80 md:w-auto flex-shrink-0">
            <div className="flex-grow">
              <h3 className="text-2xl font-bold mb-3 text-white">
                {features[1].title}
              </h3>
              <p className="text-slate-300">
                {features[1].description}
              </p>
            </div>
            <div className="mt-4 rounded-lg overflow-hidden h-40 bg-slate-700 flex items-center justify-center">
              <img
                src={features[1].image}
                alt={features[1].alt}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="bg-slate-800 p-8 rounded-2xl border border-slate-700 flex flex-col h-full shadow-lg md:col-span-2 w-80 md:w-auto flex-shrink-0">
            <div className="flex-grow">
              <h3 className="text-2xl font-bold mb-3 text-white">
                {features[2].title}
              </h3>
              <p className="text-slate-300">
                {features[2].description}
              </p>
            </div>
            <div className="mt-4 rounded-lg overflow-hidden h-40 bg-slate-700 flex items-center justify-center">
              <img
                src={features[2].image}
                alt={features[2].alt}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="bg-slate-800 p-8 rounded-2xl border border-slate-700 flex flex-col h-full shadow-lg md:col-span-2 w-80 md:w-auto flex-shrink-0">
            <div className="flex-grow">
              <h3 className="text-2xl font-bold mb-3 text-white">
                {features[3].title}
              </h3>
              <p className="text-slate-300">
                {features[3].description}
              </p>
            </div>
            <div className="mt-4 rounded-lg overflow-hidden h-40 bg-slate-700 flex items-center justify-center">
              <img
                src={features[3].image}
                alt={features[3].alt}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="bg-slate-800 p-8 rounded-2xl border border-slate-700 flex flex-col h-full shadow-lg md:col-span-2 w-80 md:w-auto flex-shrink-0">
            <div className="flex-grow">
              <h3 className="text-2xl font-bold mb-3 text-white">
                {features[4].title}
              </h3>
              <p className="text-slate-300">
                {features[4].description}
              </p>
            </div>
            <div className="mt-4 rounded-lg overflow-hidden h-40 bg-slate-700 flex items-center justify-center">
              <img
                src={features[4].image}
                alt={features[4].alt}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Duplicated Cards for mobile scroll */}
          {features.map((feature, index) => (
            <div
              key={`duplicate-${index}`}
              className="bg-slate-800 p-8 rounded-2xl border border-slate-700 flex flex-col h-full shadow-lg w-80 md:w-auto flex-shrink-0 md:hidden"
            >
              <div className="flex-grow">
                <h3 className="text-2xl font-bold mb-3 text-white">
                  {feature.title}
                </h3>
                <p className="text-slate-300">
                  {feature.description}
                </p>
              </div>
              <div className="mt-4 rounded-lg overflow-hidden h-40 bg-slate-700 flex items-center justify-center">
                <img
                  src={feature.image}
                  alt={feature.alt}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeatureSection;

