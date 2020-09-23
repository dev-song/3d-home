import React from 'react';
import './About.css';

function About({ aboutInfo }) {
  const { username, status, intro, skills } = JSON.parse(aboutInfo);

  return (
    <div className='about'>
      <h4 className='about__username'>{username}</h4>
      <h5 className='about__status'>{status}</h5>
      <p className='about__intro'>{intro}</p>
      <div className='about__skills'>
        <h5 className='about__skills--title'>Skills</h5>
        {skills.map((skillObj, skillIndex) => {
          const { name, score, grade } = skillObj;
          return (
            <div key={skillIndex} className={'about__skill'}>
              <div
                className={`skill-${name.toLowerCase()} skill-background`} style={{ width: `${score}%` }}>
              </div>
              {name}: {score}pt, {grade}
            </div>
          )
        })}
      </div>
    </div >
  )
}

export default About;