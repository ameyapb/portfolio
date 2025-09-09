import React from 'react';
import { portfolioData } from '../../data/portfolioData.js';
import './AboutView.css';

const AboutView = ({ onBackToTerminal }) => {
  const { personal, about, skills, experience, projects } = portfolioData;

  return (
    <div className="about-view">
      {/* Header with back button */}
      <div className="about-header">
        <button
          className="back-button"
          onClick={onBackToTerminal}
          title="Back to Terminal"
        >
          <span className="back-arrow">←</span> TERMINAL
        </button>
        <div className="about-title">
          <h1>CURRICULUM_VITAE.pdf</h1>
          <div className="file-info">
            <span>Size: 42KB • Modified: {new Date().toLocaleDateString()}</span>
          </div>
        </div>
      </div>

      {/* CV Content */}
      <div className="cv-content">
        {/* Personal Info Section */}
        <section className="cv-section">
          <div className="section-header">
            <h2>PERSONAL_INFO</h2>
            <div className="section-line"></div>
          </div>
          <div className="personal-grid">
            <div className="personal-item">
              <span className="label">NAME:</span>
              <span className="value">{personal.name}</span>
            </div>
            <div className="personal-item">
              <span className="label">TITLE:</span>
              <span className="value">{personal.title}</span>
            </div>
            <div className="personal-item">
              <span className="label">LOCATION:</span>
              <span className="value">{personal.location}</span>
            </div>
            <div className="personal-item">
              <span className="label">EMAIL:</span>
              <span className="value">{personal.email}</span>
            </div>
            <div className="personal-item">
              <span className="label">PHONE:</span>
              <span className="value">{personal.phone}</span>
            </div>
            <div className="personal-item">
              <span className="label">WEBSITE:</span>
              <span className="value">{personal.website}</span>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="cv-section">
          <div className="section-header">
            <h2>ABOUT</h2>
            <div className="section-line"></div>
          </div>
          <div className="about-content">
            {about.bio.map((paragraph, index) => (
              <p key={index} className="bio-paragraph">{paragraph}</p>
            ))}
            <div className="experience-badge">
              <span className="badge-label">EXPERIENCE:</span>
              <span className="badge-value">{about.yearsOfExperience} YEARS</span>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section className="cv-section">
          <div className="section-header">
            <h2>TECHNICAL_SKILLS</h2>
            <div className="section-line"></div>
          </div>
          <div className="skills-grid">
            <div className="skill-category">
              <h3>Programming Languages</h3>
              <div className="skill-tags">
                {skills.programming.map((skill, index) => (
                  <span key={index} className="skill-tag">{skill}</span>
                ))}
              </div>
            </div>
            <div className="skill-category">
              <h3>Frameworks & Libraries</h3>
              <div className="skill-tags">
                {skills.frameworks.map((skill, index) => (
                  <span key={index} className="skill-tag">{skill}</span>
                ))}
              </div>
            </div>
            <div className="skill-category">
              <h3>Databases</h3>
              <div className="skill-tags">
                {skills.databases.map((skill, index) => (
                  <span key={index} className="skill-tag">{skill}</span>
                ))}
              </div>
            </div>
            <div className="skill-category">
              <h3>Tools & Technologies</h3>
              <div className="skill-tags">
                {skills.tools.map((skill, index) => (
                  <span key={index} className="skill-tag">{skill}</span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section className="cv-section">
          <div className="section-header">
            <h2>WORK_EXPERIENCE</h2>
            <div className="section-line"></div>
          </div>
          <div className="experience-list">
            {experience.map((exp, index) => (
              <div key={index} className="experience-item">
                <div className="exp-header">
                  <h3 className="exp-position">{exp.position}</h3>
                  <span className="exp-duration">{exp.duration}</span>
                </div>
                <div className="exp-company">{exp.company}</div>
                <p className="exp-description">{exp.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Projects Section */}
        <section className="cv-section">
          <div className="section-header">
            <h2>RECENT_PROJECTS</h2>
            <div className="section-line"></div>
          </div>
          <div className="projects-list">
            {projects.map((project, index) => (
              <div key={index} className="project-item">
                <div className="project-header">
                  <h3 className="project-name">{project.name}</h3>
                  <div className="project-meta">
                    <span className="project-year">{project.year}</span>
                    <span className="project-status">{project.status}</span>
                  </div>
                </div>
                <p className="project-description">{project.description}</p>
                <div className="project-tech">
                  <span className="tech-label">STACK:</span>
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default AboutView;
