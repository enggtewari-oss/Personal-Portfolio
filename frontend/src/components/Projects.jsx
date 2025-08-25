import React from "react";
import { Users, Clock, TrendingUp, ArrowRight } from "lucide-react";

const ProjectCard = ({ project }) => {
  return (
    <div className="project-card">
      <div className="project-content">
        <h3 className="project-title">{project.title}</h3>
        <p className="project-description">{project.description}</p>
        
        <div className="project-technologies">
          {project.technologies?.slice(0, 3).map((tech, index) => (
            <span key={index} className="tech-tag">{tech}</span>
          ))}
          {project.technologies?.length > 3 && (
            <span className="tech-more">+{project.technologies.length - 3} more</span>
          )}
        </div>
        
        <div className="project-metrics">
          <div className="metric">
            <TrendingUp size={16} />
            <span>{project.impact}</span>
          </div>
          <div className="metric">
            <Clock size={16} />
            <span>{project.duration}</span>
          </div>
          <div className="metric">
            <Users size={16} />
            <span>{project.teamSize}</span>
          </div>
        </div>
        
        <button className="project-action">
          <span>View Details</span>
          <ArrowRight size={16} />
        </button>
      </div>
    </div>
  );
};

const Projects = ({ data }) => {
  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-subtitle">
            Transformative initiatives that delivered measurable business value
          </p>
        </div>
        
        <div className="projects-grid">
          {data?.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;