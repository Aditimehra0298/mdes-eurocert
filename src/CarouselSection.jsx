import React from 'react';
import './CarouselSection.css';

const CarouselSection = () => {
  const items = [
    {
      emoji: '🧭',
      title: 'Get Certified Faster',
      description: 'ISO 9001, 14001, 45001, 50001, 3834, EN 1090, CE, PED, ATEX',
      image: '/j1.jpg'
    },
    {
      emoji: '🌿',
      title: 'Go Green',
      description: 'Environmental and sustainability audits that make your machinery future-ready',
      image: '/j2.jpg'
    },
    {
      emoji: '💼',
      title: 'Get Market-Ready',
      description: 'Export-ready certifications to enter new global markets',
      image: '/j3.jpg'
    },
    {
      emoji: '🎁',
      title: 'Stall-Only Perks',
      description: 'Free consultation and strategy sessions for early visitors',
      image: '/j4.jpg'
    },
    {
      emoji: '👀',
      title: 'Live Demonstrations',
      description: 'Watch how compliance checks are done in real time',
      image: '/j5.jpg'
    },
  ];

  return (
    <div className="carousel-section">
      <div className="carousel-container">
        <h2 className="carousel-main-title">
          🎯 Why You Can't Afford to Miss This
        </h2>
        
        <div className="carousel" mask="true">
          {items.map((item, index) => (
            <article key={index} style={{ '--i': index }}>
              <img src={item.image} alt={item.title} />
              <h2>
                <span className="emoji">{item.emoji}</span> {item.title}
              </h2>
              <div>
                <p>{item.description}</p>
              </div>
            </article>
          ))}
          
          {/* Duplicate items for seamless loop */}
          {items.map((item, index) => (
            <article key={`dup-${index}`} style={{ '--i': index + items.length }}>
              <img src={item.image} alt={item.title} />
              <h2>
                <span className="emoji">{item.emoji}</span> {item.title}
              </h2>
              <div>
                <p>{item.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CarouselSection;

