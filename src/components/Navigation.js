import React from 'react';
import './navigation.css';

function Navigation({ handleStateChange }) {
  const links = ['About', 'Portfolio', 'Contact', 'Guestbook'];

  return (
    <nav className='navigation'>
      <ul className='nav__container'>
        {links.map((linkName, index) => (
          <li
            className='nav__link'
            key={index}
            onClick={handleStateChange}
          >
            {linkName}
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Navigation;