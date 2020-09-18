import React from 'react';
import './DescriptionBox.css';

import About from './About';
import Portfolio from './Portfolio';
import Contact from './Contact';
import Guestbook from './Guestbook';

function DescriptionBox({ content, fadingOut }) {
  const { title, subtitle, body } = content;

  function renderDescriptionBody(title) {
    let bodyComponent = body;
    switch (title) {
      case 'About':
        bodyComponent = <About aboutInfo={body} />
        break;
      case 'Portfolio':
        bodyComponent = <Portfolio portfolioInfo={body} />;
        break;
      case 'Contact':
        bodyComponent = <Contact contactInfo={body} />;
        break;
      case 'Guestbook':
        bodyComponent = <Guestbook />;
        break;
      default:
        console.error('Error: No component is loaded');
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