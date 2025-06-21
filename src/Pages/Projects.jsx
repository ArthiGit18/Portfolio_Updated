import React, { useState } from 'react';

const projects = [
  {
    title: 'RSL Lifestyle',
    type: 'Major Project',
    image: '../assets/projects/1 (2).png',
    description: 'A full-stack travel booking app (MERN) offering hotel, car, flight, and attraction reservations with a powerful admin panel.',
    // link: 'https://rsl-lifestyle.netlify.app',
  },
  {
    title: 'Beyond Casa',
    type: 'Major Project',
    image: '../assets/projects/1 (3).png',
    description: 'A real estate platform built with MERN featuring advanced search filters, responsive layout, and admin control.',
    // link: 'https://beyondcasa.netlify.app',
  },
  {
    title: 'EduTech for Learners',
    type: 'Netlify Project',
    image: '../assets/projects/edu.png',
    description: 'A simple and interactive learning platform for web technologies, ideal for beginners exploring HTML, CSS, and JS.',
    link: 'https://edutechlearners.netlify.app/',
  },
  {
    title: 'Gadgets Bazaar (UI Model)',
    type: 'UI Layout',
    image: '../assets/projects/1 (4).png',
    description: 'A sleek, eCommerce-inspired UI design for electronic gadgets with a clean layout and reusable components.',
    link: 'https://gadgets-bazaar.netlify.app',
  },
  {
    title: 'Crime Chronicles (UI Model)',
    type: 'UI Layout',
    image: '../assets/projects/1 (7).png',
    description: 'A bold crime story blog layout with a dramatic dark theme and magazine-style structure.',
    link: 'https://crimerecords.netlify.app/',
  },
  {
    title: 'Travel Website Layout',
    type: 'UI Layout',
    image: '../assets/projects/1 (6).png',
    description: 'A visually engaging layout for a travel and tour agency with curated sections and attractive destination cards.',
    link: 'https://travel-layout.netlify.app',
  },
];

const Projects = () => {
  const [showAll, setShowAll] = useState(false);

  const visibleProjects = showAll ? projects : projects.slice(0, 3);

  const handleToggle = () => setShowAll(!showAll);

  return (
    <section className="projects_bg">
      <div className="container">
        <div className="projects_wrapper">
          <h2>Projects</h2>
          <div className="projects_grid">
            {visibleProjects.map((project, index) => (
              <div className="project_card" key={index}>
                <img src={project.image} alt={project.title} />
                <div className="project_info">
                  <h3>{project.title}</h3>
                  <p className="project_type">{project.type}</p>
                  <p className="project_desc">{project.description}</p>
                  {project.link ? (
                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="view_btn">
                      View Website
                    </a>
                  ) : (
                    <span className="view_btn disabled">Link Coming Soon</span>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="toggle_button_wrapper">
            <button className="toggle_btn" onClick={handleToggle}>
              {showAll ? 'Show Less' : 'Show More'}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
