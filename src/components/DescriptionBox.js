import React from 'react';
import './DescriptionBox.css';

function DescriptionBox({ title }) {
  return (
    <article className='description-box'>
      {title}
    </article>
  )
}

export default DescriptionBox;