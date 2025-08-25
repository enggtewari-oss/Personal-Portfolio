import React from "react";
import { CheckCircle, Award, Users, Globe } from "lucide-react";

const About = ({ data }) => {
  return (
    <section id="about" className="about-section">
      <div className="container">
        <div className="about-grid">
          <div className="about-content">
            <div className="section-header">
              <h2 className="section-title">About Me</h2>
              <p className="section-subtitle">
                Building Excellence Through Strategic Leadership
              </p>
            </div>
            
            <p className="about-summary">{data?.summary}</p>
            
            <div className="about-highlights">
              <h3 className="highlights-title">Key Achievements</h3>
              <ul className="highlights-list">
                {data?.highlights?.map((highlight, index) => (
                  <li key={index} className="highlight-item">
                    <CheckCircle size={20} className="highlight-icon" />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          <div className="about-stats">
            <div className="stat-card">
              <div className="stat-icon">
                <Award size={32} />
              </div>
              <div className="stat-content">
                <h4 className="stat-number">15+</h4>
                <p className="stat-label">Years Experience</p>
              </div>
            </div>
            
            <div className="stat-card">
              <div className="stat-icon">
                <Users size={32} />
              </div>
              <div className="stat-content">
                <h4 className="stat-number">32+</h4>
                <p className="stat-label">Team Members Managed</p>
              </div>
            </div>
            
            <div className="stat-card">
              <div className="stat-icon">
                <Globe size={32} />
              </div>
              <div className="stat-content">
                <h4 className="stat-number">45M+</h4>
                <p className="stat-label">AUD Projects Delivered</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;