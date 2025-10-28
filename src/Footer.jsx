import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          {/* Logo and Tagline */}
          <div className="footer-brand">
            <img 
              src="/image (4).png" 
              alt="EUROCERT Logo" 
              className="footer-logo"
            />
            <h3 className="footer-tagline">
              EUROCERT ASIA – Globally Trusted Certification Body
            </h3>
          </div>

          {/* Contact Information */}
          <div className="footer-contact">
            <a href="https://www.eurocert.asia" target="_blank" rel="noopener noreferrer" className="footer-link">
              🌐 www.eurocert.asia
            </a>
            <div className="footer-contact-group">
              <a href="mailto:info@eurocert.asia" className="footer-link">
                📧 info@eurocert.asia
              </a>
              <span className="footer-divider">|</span>
              <a href="tel:+91" className="footer-link">
                📞 +91-9056742781
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom">
          <p className="footer-copyright">
            © {new Date().getFullYear()} EUROCERT ASIA. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

