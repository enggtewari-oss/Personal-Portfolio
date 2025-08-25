import React from "react";
import { Heart, ArrowUp } from "lucide-react";
import { mockData } from "../data/mock";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-main">
            <div className="footer-brand">
              <h3 className="footer-title">Rajesh Tewari</h3>
              <p className="footer-tagline">
                Senior Project Manager specializing in digital transformation and program leadership
              </p>
            </div>
            
            <div className="footer-nav">
              <h4 className="footer-nav-title">Quick Links</h4>
              <ul className="footer-nav-list">
                <li><a href="#about" className="footer-link">About</a></li>
                <li><a href="#skills" className="footer-link">Skills</a></li>
                <li><a href="#experience" className="footer-link">Experience</a></li>
                <li><a href="#projects" className="footer-link">Projects</a></li>
                <li><a href="#testimonials" className="footer-link">Testimonials</a></li>
                <li><a href="#contact" className="footer-link">Contact</a></li>
              </ul>
            </div>
            
            <div className="footer-certifications">
              <h4 className="footer-nav-title">Certifications</h4>
              <ul className="certifications-list">
                {mockData.certifications.slice(0, 4).map((cert, index) => (
                  <li key={index} className="certification-item">{cert}</li>
                ))}
              </ul>
            </div>
          </div>
          
          <div className="footer-bottom">
            <div className="footer-copyright">
              <p>
                © {currentYear} Rajesh Tewari. Made with <Heart size={16} className="heart-icon" /> 
              </p>
            </div>
            
            <button onClick={scrollToTop} className="scroll-to-top">
              <ArrowUp size={20} />
              <span>Back to Top</span>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;