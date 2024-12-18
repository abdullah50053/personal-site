import React from 'react';
import { Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import raw from 'raw.macro';
import Main from '../layouts/Main';

// uses babel to load contents of file
const markdown = raw('../data/about.md');

// Make all hrefs react router links
const LinkRenderer = ({ ...children }) => <Link {...children} />;

const Index = () => (
  <Main
    description={"Abdullah Hasani's personal website."}
  >

    <title>Abdullah Hasani</title>
    <meta name="description" content="Abdullah Hasani's personal website." />
    <article className="post markdown" id="">
      <header>
        <div className="title">
          <h2 data-testid="heading"><Link to="/">Hello!</Link></h2>
        </div>
      </header>
      <ReactMarkdown
        source={markdown}
        renderers={{
          Link: LinkRenderer,
        }}
        allowDangerousHtml={false}
      />
    </article>
  </Main>
);

export default Index;
