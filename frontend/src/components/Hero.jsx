import React from "react";
import { ArrowRight, MapPin, Calendar } from "lucide-react";

const Hero = ({ data }) => {
  const handleContactClick = () => {
    const element = document.querySelector("#contact");
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleProjectsClick = () => {
    const element = document.querySelector("#projects");
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="hero-section">
      <div className="hero-background">
        <div className="hero-overlay"></div>
      </div>
      
      <div className="hero-container">
        <div className="hero-content">
          <div className="hero-badges">
            <span className="hero-badge">
              <MapPin size={16} />
              {data?.location}
            </span>
            <span className="hero-badge">
              <Calendar size={16} />
              {data?.yearsExperience} Years Experience
            </span>
          </div>
          
          <h1 className="hero-title">{data?.name}</h1>
          <h2 className="hero-subtitle">{data?.title}</h2>
          <p className="hero-description">{data?.tagline}</p>
          
          <div className="hero-actions">
            <button onClick={handleContactClick} className="btn-primary">
              Get In Touch
              <ArrowRight size={20} />
            </button>
            <button onClick={handleProjectsClick} className="btn-secondary">
              View Projects
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;