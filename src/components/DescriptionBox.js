import React from 'react';
import { FaTimesCircle } from 'react-icons/fa';
import './DescriptionBox.css';

import About from './About';
import Portfolio from './Portfolio';
import Contact from './Contact';
import Guestbook from './Guestbook';

function DescriptionBox({ language, content, fadingOut, handleDeleteButton }) {
  const { title, subtitle, body } = content;

  function renderDescriptionBody(title, lang) {
    switch (title) {
      case 'About':
        return <About lang={lang} aboutInfo={body} />;
      case 'Portfolio':
        return <Portfolio lang={lang} portfolioInfo={body} />;
      case 'Contact':
        return <Contact contactInfo={body} />;
      case 'Guestbook':
        return <Guestbook />;
      default:
        console.error('Error: No component is loaded');
        return null;
    }
  }

  return (
    <article className={`description-box${fadingOut ? ' fadeout' : ''}`}>
      <h2 className='description__title'>{title}</h2>
      <div className='decorative-line' />
      <h3 className='description__subtitle'>{subtitle}</h3>
      <div className='description__body'>{renderDescriptionBody(title, language)}</div>
      <button type='button' className='description__close-btn' onClick={handleDeleteButton}>
        <FaTimesCircle />
      </button>
    </article>
  );
}

export default DescriptionBox;
