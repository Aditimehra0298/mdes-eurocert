import React from 'react';
import './ContactSection.css';

const ContactSection = () => {
  return (
    <div className="contact-section text-gray-100 min-h-screen flex items-center justify-center p-8 md:p-16">
      <div className="max-w-7xl w-full mx-auto">
        
        {/* Header Section */}
        <header className="md:flex justify-between items-start mb-12">
          {/* Title */}
          <div className="mb-6 md:mb-0">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight">

🌱 Environmental & Sustainability Edge
              <br />
              <span className="text-blue-500">Let's Connect!</span>
            </h1>
          </div>
          
          {/* Subtitle */}
          <div className="md:text-right">
            <p className="text-gray-400 text-lg max-w-lg">
            At EUROCERT, we go beyond certification — we help you: make it more elaborative
            </p>
          </div>
        </header>

        {/* Main Content Section */}
        <main className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">

          {/* Image Column */}
          <div className="w-full">
            <img 
              src="/unnamed (4).jpg"
              alt="A team of professionals in a meeting discussing data on a futuristic screen."
              className="w-full h-auto rounded-2xl shadow-2xl shadow-blue-900/20 object-cover"
            />
          </div>

          {/* Links Column */}
          <nav className="w-full">
            <ul className="flex flex-col space-y-5">
              {/* Link Item 1 */}
              <li>
                <a 
                  href="#" 
                  className="block p-7 rounded-xl bg-[#0F141B] border border-blue-800/70 text-lg font-medium text-gray-200 transition duration-300 ease-in-out hover:bg-[#1A2029] hover:border-blue-600 hover:shadow-lg hover:shadow-blue-600/10 transform hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                 🌍 Align with global sustainability goals
                </a>
              </li>
              
              {/* Link Item 2 */}
              <li>
                <a 
                  href="#" 
                  className="block p-7 rounded-xl bg-[#0F141B] border border-blue-800/70 text-lg font-medium text-gray-200 transition duration-300 ease-in-out hover:bg-[#1A2029] hover:border-blue-600 hover:shadow-lg hover:shadow-blue-600/10 transform hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
               
⚙️ Implement energy-efficient operations

                </a>
              </li>
              
              {/* Link Item 3 */}
              <li>
                <a 
                  href="#" 
                  className="block p-7 rounded-xl bg-[#0F141B] border border-blue-800/70 text-lg font-medium text-gray-200 transition duration-300 ease-in-out hover:bg-[#1A2029] hover:border-blue-600 hover:shadow-lg hover:shadow-blue-600/10 transform hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                
♻️ Comply with carbon and waste management standards

                </a>
              </li>
              
              {/* Link Item 4 */}
              <li>
                <a 
                  href="#" 
                  className="block p-7 rounded-xl bg-[#0F141B] border border-blue-800/70 text-lg font-medium text-gray-200 transition duration-300 ease-in-out hover:bg-[#1A2029] hover:border-blue-600 hover:shadow-lg hover:shadow-blue-600/10 transform hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
💬 Demonstrate your environmental responsibility to buyers
                </a>
              </li>
            </ul>
          </nav>

        </main>
        
      </div>
    </div>
  );
};

export default ContactSection;

