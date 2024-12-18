import React from 'react';
import PropTypes from 'prop-types';

const Job = ({ data }) => (
  <article className="jobs-container">
    <header>
      <h4><a href={data.link}>{data.title}</a></h4>
      <p>{data.desc}</p>
    </header>
  </article>
);

Job.propTypes = {
  data: PropTypes.shape({
    link: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired,
    year: PropTypes.string.isRequired,
  }).isRequired,
};

export default Job;
