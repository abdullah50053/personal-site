import React from 'react';
import PropTypes from 'prop-types';

import Job from './Single';

const Project = ({ data }) => {
  const projectsByYear = data.reduce((acc, project) => {
    const { year } = project;
    if (!acc[year]) acc[year] = [];
    acc[year].push(project);
    return acc;
  }, {});

  const sortedYears = Object.keys(projectsByYear).sort((a, b) => b - a);

  return (
    <div className="projects">
      {sortedYears.map((year) => (
        <div key={year} className="year-section">
          <h3 className="year-header">{year}</h3>
          <div className="projects-list">
            {projectsByYear[year].map((project) => (
              <Job
                data={project}
                key={project.title}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

Project.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired,
    link: PropTypes.string,
    year: PropTypes.string.isRequired,
  })).isRequired,
};

export default Project;
