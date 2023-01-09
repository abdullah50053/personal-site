import React from 'react';
import { hydrate, render } from 'react-dom';
import App from './App';

// See https://reactjs.org/docs/strict-mode.html
const StrictApp = () => (
  <React.StrictMode>
    <meta property="og:url" content="https://abdullahhasani.com" />
    <meta property="og:type" content="website" />
    <meta property="og:title" content="Abdullah Hasani" />
    <meta property="og:description" content="Abdullah Hasani's portfolio website" />
    <meta property="og:image" content="https://res.cloudinary.com/dx1x7j2ti/image/upload/c_pad,b_auto:predominant,fl_preserve_transparency/v1673234240/AH_cntnzn.jpg" />

    <meta name="twitter:card" content="summary_large_image" />
    <meta property="twitter:domain" content="abdullahhasani.com" />
    <meta property="twitter:url" content="https://abdullahhasani.com" />
    <meta name="twitter:title" content="Abdullah Hasani" />
    <meta name="twitter:description" content="Abdullah Hasani's portfolio website" />
    <meta name="twitter:image" content="https://res.cloudinary.com/dx1x7j2ti/image/upload/c_pad,b_auto:predominant,fl_preserve_transparency/v1673234240/AH_cntnzn.jpg" />
    <App />
  </React.StrictMode>
);

const rootElement = document.getElementById('root');

// hydrate is required by react-snap.
if (rootElement.hasChildNodes()) {
  hydrate(<StrictApp />, rootElement);
} else {
  render(<StrictApp />, rootElement);
}
