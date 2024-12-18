import React from 'react';
import { Link } from 'react-router-dom';
import Main from '../layouts/Main';
import Project from '../components/Projects/Project';
import data from '../data/projects';

const Projects = () => (
  <Main
    title="Projects"
    description="Abdullah Hasani's Projects."
  >
    <article className="post" id="resume">
      <header>
        <div className="title">
          <h2 data-testid="heading"><Link to="projects">Projects</Link></h2>
        </div>
      </header>
      <Project data={data} />

    </article>
  </Main>
);

export default Projects;
