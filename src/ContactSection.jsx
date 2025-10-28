import React, { useState } from 'react';
import './ContactSection.css';
import { GOOGLE_SCRIPT_URL } from './config';

const ContactSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    description: ''
  });

  const openModal = () => {
    setIsModalOpen(true);
    setIsSubmitted(false);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        description: ''
      });
    }, 300);
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    console.log('🔵 Contact Form - Starting submission...');
    console.log('📝 Form data:', formData);
    
    try {
      const submissionData = {
        formType: 'consultation',
        ...formData,
        timestamp: new Date().toISOString()
      };
      
      await fetch(GOOGLE_SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(submissionData)
      });
      
      console.log('✅ Contact Form - Request sent successfully!');
      setIsSubmitted(true);
    } catch (error) {
      console.error('❌ Contact Form - Error:', error);
      setIsSubmitted(true);
    }
  };

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
              <span className="text-blue-500 text-2xl sm:text-3xl md:text-4xl">Let's Connect at ENGIMACH 2025!</span>
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
            {/* Let's Connect Button */}
            <div className="mb-8">
              <button 
                onClick={openModal}
                className="w-full md:w-auto px-8 py-4 bg-transparent border-2 border-blue-500 text-white hover:bg-blue-600 hover:border-blue-600 hover:scale-105 active:scale-95 transition-all duration-300 rounded-full font-bold text-lg flex items-center justify-center gap-3 cursor-pointer shadow-lg hover:shadow-blue-500/50"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2zm3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2z"/>
                </svg>
                Let's Connect
              </button>
            </div>
            
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

      {/* Modal */}
      {isModalOpen && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={closeModal}>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 16 16">
                <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
              </svg>
            </button>
            
            {!isSubmitted ? (
              <>
                <h2 className="modal-title">Let's Connect</h2>
                <p className="modal-subtitle">Fill in your details and we'll get back to you soon!</p>
                
                <form onSubmit={handleSubmit} className="modal-form">
                  <div className="form-group">
                    <label htmlFor="name">Name *</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      placeholder="Enter your full name"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="email">Email *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      placeholder="Enter your email"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="phone">Phone Number *</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      placeholder="Enter your phone number"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="company">Company Name *</label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      required
                      placeholder="Enter your company name"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="description">Description</label>
                    <textarea
                      id="description"
                      name="description"
                      value={formData.description}
                      onChange={handleInputChange}
                      rows="4"
                      placeholder="Tell us about your requirements..."
                    ></textarea>
                  </div>

                  <button type="submit" className="modal-submit-btn">
                    Submit Request
                  </button>
                </form>
              </>
            ) : (
              <div className="thank-you-container">
                <div className="thank-you-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>
                  </svg>
                </div>
                <h2 className="thank-you-title">Thank You!</h2>
                <p className="thank-you-message">
                  We've received your message. Our team will get back to you within 24 hours.
                </p>
                <div className="thank-you-details">
                  <p><strong>Name:</strong> {formData.name}</p>
                  <p><strong>Email:</strong> {formData.email}</p>
                  <p><strong>Company:</strong> {formData.company}</p>
                </div>
                <button onClick={closeModal} className="modal-submit-btn">
                  Close
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default ContactSection;

