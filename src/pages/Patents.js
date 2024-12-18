import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

import Cell from '../components/Awards/Cell';
import data from '../data/patents';

const Patents = () => (
  <Main
    title="Patents"
    description="View Abdullah Hasani's patents and certificates."
  >
    <article className="post" id="projects">
      <header>
        <div className="title">
          <h2 data-testid="heading"><Link to="/certificates">Awards</Link></h2>
          <p>A gallery of awards, patents and certificates</p>
        </div>
      </header>
      <div className="mini-posts">
        {data.map((award) => (
          <Cell
            data={award}
            key={award.title}
          />
        ))}
      </div>
    </article>
  </Main>
);

export default Patents;
