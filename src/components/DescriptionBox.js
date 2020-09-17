import React from 'react';
import './DescriptionBox.css';
import { FaLink, FaGithubAlt } from 'react-icons/fa';

function DescriptionBox({ content, fadingOut }) {
  const { title, subtitle, body } = content;

  function renderDescriptionBody(title) {
    switch (title) {
      case 'Portfolio':
        return JSON.parse(body).map((portfolioItem, index) => {
          const { title, subtitle, description, skills, url, github } = portfolioItem;

          return (
            <div key={index} className='portfolio-item'>
              <h4 className='portfolio-item__title'>{title}</h4>
              <h5 className='portfolio-item__subtitle'>{subtitle}</h5>
              <p className='portfolio-item__description'>{description}</p>
              <div className='portfolio-item__skills'>
                {skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className={`portfolio-item__skill skill-${skill.toLowerCase()}`}>
                    {skill}
                  </div>
                ))}
              </div>
              <div className='portfolio-item__links'>
                <a className='portfolio-item__link link-project' href={url}><FaLink /></a>
                <a className='portfolio-item__link link-github' href={github}><FaGithubAlt /></a>
              </div>
            </div>
          )
        })
      case 'Contact':
        const { homepage, email, github, blogName, blogUrl } = JSON.parse(body);

        return (
          <div className='contact-info'>
            <h4 className='contact-info__homepage--label'>Homepage</h4>
            <p className='contact-info__homepage'>{homepage}</p>
            <h4 className='contact-info__homepage--label'>E-mail</h4>
            <p className='contact-info__homepage'>{email}</p>
            <a className='contact-info__homepage' href={github}><FaGithubAlt /></a>
            <a className='contact-info__homepage' href={blogUrl}>{blogName} (Blog)</a>
          </div>
        )
      default:
        return body;
    }
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