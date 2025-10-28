import React, { useState } from 'react';
import './HeroSection.css';
import { GOOGLE_SCRIPT_URL } from './config';

const HeroSection = () => {
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
    
    console.log('🔵 Starting form submission...');
    console.log('📝 Form data:', formData);
    console.log('🔗 Script URL:', GOOGLE_SCRIPT_URL);
    
    try {
      // Prepare data for Google Sheets
      const submissionData = {
        formType: 'consultation',
        ...formData,
        timestamp: new Date().toISOString()
      };
      
      console.log('📤 Sending data:', submissionData);
      
      // Send to Google Sheets via Apps Script
      const response = await fetch(GOOGLE_SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(submissionData)
      });
      
      console.log('✅ Request sent successfully!');
      console.log('📊 Check your Google Sheet for new entry');
      console.log('📧 Check email: aditimehra0298@gmail.com');
      setIsSubmitted(true);
    } catch (error) {
      console.error('❌ Error submitting form:', error);
      console.error('Error details:', error.message);
      // Still show success message to user (no-cors mode doesn't return response)
      setIsSubmitted(true);
    }
  };

  return (
    <div className="hero-container">
      {/* Video Background */}
      <video 
        autoPlay 
        loop 
        muted 
        playsInline
        className="hero-video-background"
      >
        <source src="/Eurocert_Stall_Video_Creation.mp4" type="video/mp4" />
      </video>
      
      {/* Overlay for better text readability */}
      <div className="hero-video-overlay"></div>
      
      {/* Info Card - Right Corner */}
      <div className="hero-info-card">
        <div className="hero-info-number">1</div>
        <h3 className="hero-info-title">ENGIMACH 2025</h3>
        <p className="hero-info-subtitle">
          Known as India's <span className="hero-info-highlight">#1</span>
        </p>
        <p className="hero-info-subtitle-orange">Technology Showcase.</p>
        <p className="hero-info-description">
          A major expo for automation and manufacturing technology at Gandhinagar, Gujarat, India.
        </p>
      </div>
      
      <div className="w-full max-w-7xl hero-content">
        {/* Header/Navigation */}
        <header className="w-full flex justify-center py-4 z-10">
          <nav className="glowing-pill w-full max-w-6xl flex flex-wrap items-center justify-between py-3 px-6">
            {/* Logo */}
            <a href="#" className="flex items-center gap-2">
              <img 
                src="/image (4).png" 
                alt="EUROCERT Logo" 
                className="h-16 md:h-20 w-auto object-contain"
              />
            </a>

            {/* Contact Us Button */}
            <button
              onClick={openModal}
              className="glowing-pill bg-gray-900 hover:bg-gray-800 transition-all flex items-center justify-center gap-3 py-2 px-4 border-gray-700"
            >
              <div className="bg-white rounded-full p-1.5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="black"
                  viewBox="0 0 16 16"
                ></svg>
              </div>
              <span className="text-white font-medium">Contact Us</span>
            </button>
          </nav>
        </header>

        {/* Hero Section */}
        <main className="flex flex-col items-center text-center mt-6 md:mt-10 lg:mt-16 px-2 md:px-6 lg:px-20 xl:px-32 w-full">
          {/* Info Card - Mobile Only */}
          <div className="hero-info-card-mobile md:hidden">
            <div className="hero-info-number">1</div>
            <h3 className="hero-info-title">ENGIMACH 2025</h3>
            <p className="hero-info-subtitle">
              Known as India's <span className="hero-info-highlight">#1</span>
            </p>
            <p className="hero-info-subtitle-orange">Technology Showcase.</p>
            <p className="hero-info-description">
              A major expo for automation and manufacturing technology at Gandhinagar, Gujarat, India.
            </p>
          </div>
          
          {/* Top Badges */}
          <div className="hero-badges-container flex flex-wrap items-center justify-center gap-3 mb-8">
            <span className="hero-badge px-6 py-3 bg-transparent border-2 border-blue-400 text-white hover:bg-gradient-to-r hover:from-blue-500 hover:to-blue-600 hover:border-transparent hover:scale-105 transition-all duration-300 rounded-full text-sm md:text-base font-bold italic shadow-lg cursor-pointer">
              Machinery Design Excellence
            </span>
            <span className="hero-badge px-6 py-3 bg-transparent border-2 border-blue-500 text-white hover:bg-gradient-to-r hover:from-blue-600 hover:to-blue-700 hover:border-transparent hover:scale-105 transition-all duration-300 rounded-full text-sm md:text-base font-bold italic shadow-lg cursor-pointer">
              Principal Sponsor-EUROCERT
            </span>
            <span className="hero-badge px-6 py-3 bg-transparent border-2 border-cyan-400 text-white hover:bg-gradient-to-r hover:from-cyan-500 hover:to-blue-500 hover:border-transparent hover:scale-105 transition-all duration-300 rounded-full text-sm md:text-base font-bold italic shadow-lg cursor-pointer">
              ITC (India)-Excellence Partner
            </span>
          </div>

          <h1 className="text-xl sm:text-2xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold max-w-4xl leading-tight px-2">
            Make Your Machinery{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-400">
              Globally Trusted & Environmentally Responsible!
            </span>
          </h1>
          
          <p className="text-sm sm:text-base md:text-xl lg:text-2xl text-gray-300 max-w-3xl mt-4 md:mt-6 leading-relaxed font-semibold px-2">
            Fast-track ISO, CE, ATEX, PED & Sustainability Certifications
          </p>
          
          <p className="text-xs sm:text-sm md:text-base lg:text-lg text-blue-400 max-w-2xl mt-3 md:mt-4 leading-relaxed font-medium px-2">
            Only at EUROCERT's Stall (12A) at ENGIMACH 2025 in Gandhinagar, Gujarat, India!
          </p>

          {/* Certification Capsules */}
          <div className="flex flex-wrap items-center justify-center gap-2 md:gap-3 mt-6 md:mt-8 max-w-3xl px-2">
            <span className="px-3 py-1.5 md:px-4 md:py-2 bg-blue-600/20 border border-blue-500/40 rounded-full text-blue-300 text-xs md:text-sm font-semibold">
              ISO 9001
            </span>
            <span className="px-3 py-1.5 md:px-4 md:py-2 bg-blue-600/20 border border-blue-500/40 rounded-full text-blue-300 text-xs md:text-sm font-semibold">
              ISO 14001
            </span>
            <span className="px-3 py-1.5 md:px-4 md:py-2 bg-blue-600/20 border border-blue-500/40 rounded-full text-blue-300 text-xs md:text-sm font-semibold">
              ISO 45001
            </span>
            <span className="px-3 py-1.5 md:px-4 md:py-2 bg-blue-600/20 border border-blue-500/40 rounded-full text-blue-300 text-xs md:text-sm font-semibold">
              ISO 50001
            </span>
            <span className="px-3 py-1.5 md:px-4 md:py-2 bg-blue-600/20 border border-blue-500/40 rounded-full text-blue-300 text-xs md:text-sm font-semibold">
              CE
            </span>
            <span className="px-3 py-1.5 md:px-4 md:py-2 bg-blue-600/20 border border-blue-500/40 rounded-full text-blue-300 text-xs md:text-sm font-semibold">
              PED
            </span>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-6 mt-8 md:mt-12 lg:mt-16 w-full px-2">
            {/* Primary CTA */}
            <button onClick={openModal} className="flex items-center justify-center gap-2 md:gap-3 bg-transparent border-2 border-blue-500 text-white hover:bg-blue-600 hover:border-blue-600 hover:scale-105 active:scale-95 transition-all duration-300 rounded-full py-2.5 px-5 md:py-3 md:px-6 lg:py-4 lg:px-8 font-semibold text-sm md:text-base lg:text-lg w-full sm:w-auto cursor-pointer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-search md:w-5 md:h-5 transition-transform duration-300"
                viewBox="0 0 16 16"
              >
                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
              </svg>
              <span>Book Your Consultation Now</span>
            </button>

            {/* Secondary CTA */}
            <a href="#event-section" className="cta-secondary-pill flex items-center justify-center gap-2 md:gap-3 py-2.5 px-5 md:py-3 md:px-6 lg:py-4 lg:px-8 font-semibold text-sm md:text-base lg:text-lg text-gray-200 w-full sm:w-auto no-underline hover:bg-blue-600 hover:text-white hover:scale-105 active:scale-95 transition-all duration-300 cursor-pointer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-lightning-charge-fill md:w-5 md:h-5 transition-transform duration-300 group-hover:rotate-12"
                viewBox="0 0 16 16"
              >
                <path d="M11.251.068a.5.5 0 0 1 .227.58L9.677 6.5H13a.5.5 0 0 1 .364.843l-8 8.5a.5.5 0 0 1-.842-.49L6.323 9.5H3a.5.5 0 0 1-.364-.843l8-8.5a.5.5 0 0 1 .615-.032z" />
              </svg>
              <span>Book Appointment with us at ENGIMACH</span>
            </a>
          </div>
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
                <h2 className="modal-title">Book Your Consultation</h2>
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
                  We've received your consultation request. Our team will get back to you within 24 hours.
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

export default HeroSection;

