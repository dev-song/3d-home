import React from 'react';
import './Navigation.css';

function Navigation(props) {
  const links = ['About', 'Portfolio', 'Contact', 'Guestbook'];

  return (
    <nav className='navigation'>
      <ul className='nav__container'>
        {links.map((linkName, index) => (
          <li
            className='nav__link'
            key={index}
            onClick={props.handleStateChange}
          >
            {linkName}
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Navigation;