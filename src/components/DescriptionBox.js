import React from 'react';
import './DescriptionBox.css';

import Portfolio from './Portfolio';
import Contact from './Contact';

function DescriptionBox({ content, fadingOut }) {
  const { title, subtitle, body } = content;

  function renderDescriptionBody(title) {
    let bodyComponent = body;
    switch (title) {
      case 'Portfolio':
        bodyComponent = <Portfolio portfolioInfo={body} />;
        break;
      case 'Contact':
        bodyComponent = <Contact contactInfo={body} />;
        break;
      default:
    }

    return bodyComponent;
  }

  return (
    <article className={`description-box${fadingOut ? ' fadeout' : ''}`}>
      <h2 className='description__title'>{title}</h2>
      <div className='decorative-line' />
      <h3 className='description__subtitle'>{subtitle}</h3>
      <div className='description__body'>
        {renderDescriptionBody(title)}
      </div>
    </article>
  )
}

export default DescriptionBox;