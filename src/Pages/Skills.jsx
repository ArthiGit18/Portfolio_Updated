import React from 'react';

const skillsData = [
  {
    category: 'Frontend',
    skills: [
      'HTML',
      'CSS',
      'JavaScript',
      'React.js',
      'Redux',
      'Next.js',
      'Bootstrap',
      'MUI',
      'Sass',
    ],
  },
  {
    category: 'Backend',
    skills: [
      'Node.js',
      'Express.js',
      'MongoDB',
      'JWT',
      'API Auth',
    ],
  },
  {
    category: 'Tools',
    skills: [
      'Git',
      'Postman',
      'Swagger',
      'Webpack',
      'VS Code',
    ],
  },
  {
    category: 'UI/UX & Design',
    skills: [
      'Responsive Design',
      'Flexbox/Grid',
      'Component Architecture',
      'Figma Concepts',
    ],
  },
  {
    category: 'Other',
    skills: [
      'Algorithms',
      'MERN',
      'Prompting',
      'SSR/CSR',
    ],
  },
];

const Skills = () => {
  return (
    <div className='skills_bg'>
      <div className='container'>
        <div className='skills_wrapper'>
          <h2>Skills</h2>

          {skillsData.map((section, index) => (
            <div className="skills__category" key={index}>
              <h3>{section.category}</h3>
              <div className="skills__grid">
                {section.skills.map((skill, i) => (
                  <div className="skill-card" key={i}>
                    <p>{skill}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
