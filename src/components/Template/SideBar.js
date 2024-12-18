import React from 'react';
import { Link } from 'react-router-dom';

import ContactIcons from '../Contact/ContactIcons';

const { PUBLIC_URL } = process.env; // set automatically from package.json:homepage

const SideBar = () => (
  <section id="sidebar">
    <section id="intro">
      <Link to="/" className="logo">
        <img src={`${PUBLIC_URL}/images/me.jpg`} alt="" />
      </Link>
      <header>
        <h2>Abdullah Hasani</h2>
        <p><a href="mailto:hello@abdullahhasani.com">Get in touch</a></p>
      </header>
    </section>

    <section className="blurb">
      <p>Hi, I&apos;m Abdullah. I like building things.</p>
      <ul className="actions">
        <li>
          {!window.location.pathname.includes('/projects') ? <Link to="/projects" className="button">See what I&apos;ve built</Link> : <Link to="/" className="button">About Me</Link>}
        </li>
      </ul>
    </section>

    <section id="footer">
      <ContactIcons />
      <p className="copyright">&copy; Abdullah Hasani 2025 <Link to="/">abdullahhasani.com</Link>.</p>
    </section>
  </section>
);

export default SideBar;
