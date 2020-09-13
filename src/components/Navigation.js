import React from 'react';
import './styles/navigation.css';

function Navigation() {
  const linkList = ['About', 'Portfolio', 'Contact', 'Guestbook']

  return (
    <nav className='navigation'>
      <ul className='nav__container'>
        {linkList.map(linkName => <li className='nav__link'>{linkName}</li>)}
      </ul>
    </nav>
  )
}

export default Navigation;