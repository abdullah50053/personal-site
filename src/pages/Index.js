import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

const Index = () => (
  <Main
    description={"Abdullah Hasani's personal website."}
  >
    <meta property="og:site_name" content="Abdullah Hasani" />
    <meta property="og:title" content="Personal Site - Abdullah Hasani" />
    <meta property="og:description" content="Abdullah Hasani's portfolio site" />
    <meta property="og:url" content="https://abdullahhasani.com/" />
    <meta property="og:image" content="https://asset.cloudinary.com/dx1x7j2ti/5dc8c4bf7a7679820ac512465c5be92c" />
    <meta property="og:image:secure_url" content="https://asset.cloudinary.com/dx1x7j2ti/5dc8c4bf7a7679820ac512465c5be92c" />
    <meta property="og:image:width" content="650" />
    <meta property="og:image:height" content="650" />

    <article className="post" id="index">
      <header>
        <div className="title">
          <h2 data-testid="heading"><Link to="/">Welcome to my site</Link></h2>
          <p>
            An ongoing project by Abdullah Hasani
          </p>
        </div>
      </header>
      <p> Welcome! Feel free to read more <Link to="/about">about me</Link>,
        or you can check out my {' '}
        <Link to="/resume">resume</Link>, {' '}
        <Link to="/projects">projects</Link>, {' '}
        view <Link to="/stats">some statistics</Link>, {' '}
        or <Link to="/contact">contact</Link> me.
      </p>
    </article>
  </Main>
);

export default Index;
