import React, { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { Canvas } from '@react-three/fiber';
import SolarSystem from './components/SolarSystem';
import styles from './styles/root.module.css';

const Root: React.FC = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <>
      <section className='common'>
        <nav className={styles.nav}>
          <ul>
            {routes.map((route, index) => (
              <li key={route.path} onClick={() => setSelectedIndex(index)}>
                <Link to={route.path}>{route.name}</Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className={styles.canvas}>
          <Canvas dpr={window.devicePixelRatio}>
            <SolarSystem selectedIndex={selectedIndex} />
          </Canvas>
        </div>
      </section>
      <section className='details'>
        <Outlet />
      </section>
    </>
  );
};
export default Root;

const routes = [
  { path: '/', name: 'Home' },
  { path: '/about', name: 'About' },
  { path: '/projects', name: 'Projects' },
  { path: '/contacts', name: 'Contacts' },
];
