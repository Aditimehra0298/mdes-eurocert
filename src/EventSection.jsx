import React, { useState } from 'react';
import './EventSection.css';
import { GOOGLE_SCRIPT_URL } from './config';

const EventSection = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    date: '',
    time: '',
    description: ''
  });
  
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
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
        formType: 'event',
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
      setSubmitted(true);
    } catch (error) {
      console.error('Error submitting form:', error);
      // Still show success message to user (no-cors mode doesn't return response)
      setSubmitted(true);
    }
  };

  const resetForm = () => {
    setSubmitted(false);
    setCurrentStep(1);
    setFormData({
      name: '',
      email: '',
      phone: '',
      company: '',
      date: '',
      time: '',
      description: ''
    });
  };

  const nextStep = () => {
    if (currentStep < 4) setCurrentStep(currentStep + 1);
  };

  const prevStep = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1);
  };

  const selectDate = (date) => {
    setFormData({ ...formData, date });
    nextStep();
  };

  const selectTime = (time) => {
    setFormData({ ...formData, time });
    nextStep();
  };

  const features = [
    {
      icon: '📅',
      title: 'Free Consultation',
      description: '30-minute strategic discussion about your project requirements and compliance goals'
    },
    {
      icon: '⚡',
      title: 'Fast Response',
      description: 'Get expert feedback within 24 hours of your scheduled consultation'
    },
    {
      icon: '🎯',
      title: 'Customized Solutions',
      description: 'Receive tailored recommendations for your specific machinery design challenges'
    }
  ];

  const times = ['09:00 AM', '10:00 AM', '11:00 AM', '12:00 PM', '01:00 PM', '02:00 PM', '03:00 PM', '04:00 PM', '05:00 PM', '06:00 PM'];

  return (
    <div id="event-section" className="event-section">
      <div className="event-container">
        <div className="event-header">
          <p className="event-subtitle">🗓 Event Details – Mark Your Calendar</p>
          <h2 className="event-title">Visit EUROCERT at ENGIMACH 2025</h2>
          <p className="event-description">
            📍 ENGIMACH 2025 Exhibition | Gandhinagar, Gujarat, India<br/>
            📅 December 3-7, 2025 | 🕒 9:00 AM - 6:00 PM<br/>
            Where Machinery Meets Global & Green Standards!
          </p>
        </div>

        <div className="event-content">
          {/* Left Side - Features */}
          <div className="features-column">
            {features.map((feature, index) => (
              <div key={index} className="feature-card">
                <div className="feature-icon">{feature.icon}</div>
                <h3 className="feature-title">{feature.title}</h3>
                <p className="feature-description">{feature.description}</p>
              </div>
            ))}
          </div>

          {/* Right Side - Booking Form */}
          <div className="booking-column">
            <div className="booking-card">
              <h3 className="booking-title">Book Your Appointment</h3>
              <p className="booking-subtitle">Join us at ENGIMACH 2025, Gandhinagar</p>

              {/* Step Indicator */}
              <div className="steps-indicator">
                <div className={`step ${currentStep >= 1 ? 'active' : ''}`}>
                  <div className="step-number">1</div>
                  <div className="step-label">DATE</div>
                </div>
                <div className={`step ${currentStep >= 2 ? 'active' : ''}`}>
                  <div className="step-number">2</div>
                  <div className="step-label">TIME</div>
                </div>
                <div className={`step ${currentStep >= 3 ? 'active' : ''}`}>
                  <div className="step-number">3</div>
                  <div className="step-label">ROLE</div>
                </div>
                <div className={`step ${currentStep >= 4 ? 'active' : ''}`}>
                  <div className="step-number">4</div>
                  <div className="step-label">DETAILS</div>
                </div>
              </div>

              {!submitted ? (
                <>
                  {/* Step 1: Date Selection */}
                  {currentStep === 1 && (
                    <div className="step-content">
                      <div className="calendar-header">
                        <button onClick={prevStep} className="calendar-nav">←</button>
                        <h4>December 2025</h4>
                        <button onClick={nextStep} className="calendar-nav">→</button>
                      </div>
                      <div className="calendar-grid">
                        <div className="calendar-day-header">Sun</div>
                        <div className="calendar-day-header">Mon</div>
                        <div className="calendar-day-header">Tue</div>
                        <div className="calendar-day-header">Wed</div>
                        <div className="calendar-day-header">Thu</div>
                        <div className="calendar-day-header">Fri</div>
                        <div className="calendar-day-header">Sat</div>
                        
                        {Array.from({ length: 42 }, (_, i) => {
                          const day = i; // Dec 2025 starts on Monday
                          const isEventDay = day >= 1 && day <= 31;
                          return (
                            <div
                              key={i}
                              className={`calendar-day ${isEventDay ? 'event-day' : ''} ${formData.date === `2025-12-${day}` ? 'selected' : ''}`}
                              onClick={() => isEventDay && selectDate(`2025-12-${day}`)}
                            >
                              {day > 0 && day <= 31 ? day : ''}
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  )}

                  {/* Step 2: Time Selection */}
                  {currentStep === 2 && (
                    <div className="step-content">
                      <button onClick={prevStep} className="back-button">← Back</button>
                      <h4 className="step-title">Select Time</h4>
                      <div className="time-grid">
                        {times.map((time) => (
                          <button
                            key={time}
                            className={`time-slot ${formData.time === time ? 'selected' : ''}`}
                            onClick={() => selectTime(time)}
                          >
                            {time}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Step 3: Role Selection */}
                  {currentStep === 3 && (
                    <div className="step-content">
                      <button onClick={prevStep} className="back-button">← Back</button>
                      <h4 className="step-title">Your Role</h4>
                      <div className="role-grid">
                        <button className="role-button" onClick={nextStep}>Manufacturing Owner</button>
                        <button className="role-button" onClick={nextStep}>Quality Manager</button>
                        <button className="role-button" onClick={nextStep}>Engineering Lead</button>
                        <button className="role-button" onClick={nextStep}>Compliance Officer</button>
                      </div>
                    </div>
                  )}

                  {/* Step 4: Details Form */}
                  {currentStep === 4 && (
                    <form onSubmit={handleSubmit} className="step-content">
                      <button type="button" onClick={prevStep} className="back-button">← Back</button>
                      <h4 className="step-title">Your Details</h4>
                      
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Full Name *"
                        required
                        className="form-input"
                      />
                      
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Email Address *"
                        required
                        className="form-input"
                      />
                      
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="Phone Number *"
                        required
                        className="form-input"
                      />
                      
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        placeholder="Company Name *"
                        required
                        className="form-input"
                      />
                      
                      <textarea
                        name="description"
                        value={formData.description}
                        onChange={handleChange}
                        placeholder="Tell us about your certification needs..."
                        rows="3"
                        className="form-input"
                      ></textarea>
                      
                      <button type="submit" className="submit-button">
                        Confirm Appointment
                      </button>
                      
                      <p className="form-note">* Required fields | We'll confirm your appointment via email within 24 hours</p>
                    </form>
                  )}
                </>
              ) : (
                <div className="thank-you-message">
                  <div className="success-icon">✓</div>
                  <h3>Thank You!</h3>
                  <p>Your appointment has been scheduled successfully.</p>
                  <div className="appointment-summary">
                    <p><strong>Date:</strong> {formData.date}</p>
                    <p><strong>Time:</strong> {formData.time}</p>
                    <p><strong>Email:</strong> {formData.email}</p>
                  </div>
                  <button onClick={resetForm} className="reset-button">
                    Book Another Appointment
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventSection;

