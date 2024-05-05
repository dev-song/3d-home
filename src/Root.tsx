import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Root: React.FC = () => {
  return (
    <>
      <section className='common'>
        <nav>
          <ul>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/about'>About</Link>
            </li>
            <li>
              <Link to='/projects'>Projects</Link>
            </li>
            <li>
              <Link to='/contacts'>Contacts</Link>
            </li>
          </ul>
        </nav>
      </section>
      <section className='details'>
        <Outlet />
      </section>
    </>
  );
};
export default Root;
