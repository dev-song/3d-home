import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { Canvas } from '@react-three/fiber';
import SolarSystem from './components/SolarSystem';
import styles from './styles/canvas.module.css';

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
        <div className={styles.canvas}>
          <Canvas
            camera={{
              fov: 60,
              near: 0.1,
              far: 1000,
              position: [0, 20, 100],
              aspect: window.innerWidth / window.innerHeight,
            }}
            dpr={window.devicePixelRatio}
          >
            <SolarSystem />
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
