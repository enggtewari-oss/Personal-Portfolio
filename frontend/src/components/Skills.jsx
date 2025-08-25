import React from "react";

const SkillBar = ({ skill }) => {
  return (
    <div className="skill-item">
      <div className="skill-header">
        <span className="skill-name">{skill.name}</span>
        <span className="skill-level">{skill.level}/5</span>
      </div>
      <div className="skill-bar">
        <div 
          className="skill-progress" 
          style={{ width: `${(skill.level / 5) * 100}%` }}
        ></div>
      </div>
    </div>
  );
};

const Skills = ({ data }) => {
  return (
    <section id="skills" className="skills-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Skills & Expertise</h2>
          <p className="section-subtitle">
            Core competencies developed through 15+ years of experience
          </p>
        </div>
        
        <div className="skills-grid">
          {data?.categories?.map((category, index) => (
            <div key={index} className="skill-category">
              <h3 className="category-title">{category.name}</h3>
              <div className="skills-list">
                {category.skills?.map((skill, skillIndex) => (
                  <SkillBar key={skillIndex} skill={skill} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;