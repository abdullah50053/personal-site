import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

const Index = () => (
  <Main
    description={"Abdullah Hasani's personal website."}
  >

  <title>Abdullah Hasani</title>
  <meta name="description" content="Abdullah Hasani's portfolio website"/>

  <meta property="og:url" content="https://abdullahhasani.com"/>
  <meta property="og:type" content="website"/>
  <meta property="og:title" content="Abdullah Hasani"/>
  <meta property="og:description" content="Abdullah Hasani's portfolio website"/>
  <meta property="og:image" content="https://res.cloudinary.com/dx1x7j2ti/image/upload/c_pad,b_auto:predominant,fl_preserve_transparency/v1673234240/AH_cntnzn.jpg"/>

  <meta name="twitter:card" content="summary_large_image"/>
  <meta property="twitter:domain" content="abdullahhasani.com"/>
  <meta property="twitter:url" content="https://abdullahhasani.com"/>
  <meta name="twitter:title" content="Abdullah Hasani"/>
  <meta name="twitter:description" content="Abdullah Hasani's portfolio website"/>
  <meta name="twitter:image" content="https://res.cloudinary.com/dx1x7j2ti/image/upload/c_pad,b_auto:predominant,fl_preserve_transparency/v1673234240/AH_cntnzn.jpg"/>        

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
