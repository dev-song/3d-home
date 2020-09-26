import React from 'react';
import { FaLink, FaGithubAlt } from 'react-icons/fa';
import './Portfolio.css';

function Portfolio({ lang, portfolioInfo }) {
  return JSON.parse(portfolioInfo).map((eachInfo, index) => {
    const { title, subtitle, description, skills, url, github, titleKR, subtitleKR, descriptionKR } = eachInfo;

    return (
      <div key={index} className='portfolio-item'>
        <h4 className='portfolio-item__title'>
          {lang === 'ko' ? titleKR : title}
        </h4>
        <h5 className='portfolio-item__subtitle'>
          {lang === 'ko' ? subtitleKR : subtitle}
        </h5>
        <p className='portfolio-item__description'>
          {lang === 'ko' ? descriptionKR : description}
        </p>
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
}

export default Portfolio;