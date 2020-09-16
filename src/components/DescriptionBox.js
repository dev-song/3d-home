import React from 'react';
import './DescriptionBox.css';

function DescriptionBox({ content }) {
  const { title, subtitle, body } = content;

  return (
    <article className='description-box'>
      <h2 className='description__title'>{title}</h2>
      <h4 className='description__subtitle'>{subtitle}</h4>
      <p className='description__body'>{body}</p>
    </article>
  )
}

export default DescriptionBox;