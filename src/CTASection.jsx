import React, { useState } from 'react';
import './CTASection.css';
import { GOOGLE_SCRIPT_URL } from './config';

const CTASection = () => {
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
    
    try {
      // Prepare data for Google Sheets
      const submissionData = {
        formType: 'consultation',
        ...formData,
        timestamp: new Date().toISOString()
      };
      
      // Send to Google Sheets via Apps Script
      const response = await fetch(GOOGLE_SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(submissionData)
      });
      
      console.log('Form submitted successfully:', formData);
      setIsSubmitted(true);
    } catch (error) {
      console.error('Error submitting form:', error);
      // Still show success message to user (no-cors mode doesn't return response)
      setIsSubmitted(true);
    }
  };

  return (
    <>
      <section className="cta-section">
        <div className="cta-container">
          <h2 className="cta-title">
            ⚡ Don't Miss Out
          </h2>
          <p className="cta-subtitle">
            Consult, Strategize, and Secure Your Certification at EUROCERT's Stall!
          </p>
          <div className="cta-buttons">
            <button onClick={openModal} className="cta-button cta-button-primary">
              ✅ Reserve a Free Consultation
            </button>
            <a href="https://www.eurocert.asia/" target="_blank" rel="noopener noreferrer" className="cta-button cta-button-secondary">
              🌍 Learn More About EUROCERT
            </a>
          </div>
        </div>
      </section>

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
    </>
  );
};

export default CTASection;

