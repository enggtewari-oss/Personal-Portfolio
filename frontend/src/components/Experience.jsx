import React from "react";
import { MapPin, Calendar, CheckCircle } from "lucide-react";

const ExperienceCard = ({ experience }) => {
  return (
    <div className="experience-card">
      <div className="experience-header">
        <div className="experience-company">
          <h3 className="company-name">{experience.company}</h3>
          <h4 className="position-title">{experience.position}</h4>
        </div>
        <div className="experience-meta">
          <span className="experience-duration">
            <Calendar size={16} />
            {experience.duration}
          </span>
          <span className="experience-location">
            <MapPin size={16} />
            {experience.location}
          </span>
        </div>
      </div>
      
      <div className="experience-content">
        <ul className="achievements-list">
          {experience.achievements?.map((achievement, index) => (
            <li key={index} className="achievement-item">
              <CheckCircle size={16} className="achievement-icon" />
              <span>{achievement}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

const Experience = ({ data }) => {
  return (
    <section id="experience" className="experience-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Professional Experience</h2>
          <p className="section-subtitle">
            A journey of continuous growth and impactful contributions
          </p>
        </div>
        
        <div className="experience-timeline">
          {data?.map((experience, index) => (
            <div key={experience.id} className="timeline-item">
              <div className="timeline-marker"></div>
              <ExperienceCard experience={experience} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;