import React, { useRef } from 'react';
import * as THREE from 'three';
import { useFrame, useLoader } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { TextureLoader } from 'three';

const SolarSystem: React.FC = () => {
  const sunRef = useRef<THREE.Mesh>(null);
  const earthRef = useRef<THREE.Mesh>(null);
  const marsRef = useRef<THREE.Mesh>(null);
  const jupiterRef = useRef<THREE.Mesh>(null);

  const milkyWay = useLoader(TextureLoader, '/src/assets/milky-way.jpg');
  const emissiveMap = useLoader(TextureLoader, '/src/assets/sun.jpg');
  const earthMap = useLoader(TextureLoader, '/src/assets/earth_daymap.jpg');
  const marsMap = useLoader(TextureLoader, '/src/assets/planet_mars.jpg');
  const jupiterMap = useLoader(TextureLoader, '/src/assets/planet_jupiter.jpg');

  useFrame((state, delta) => {
    // 자전속도 및 공전속도에 대한 기준 필요 -> 실제대로 1년에 공전 한 바퀴는 너무 느리니까... 1시간에 1바퀴로 한다던가 등

    if (sunRef.current) {
      sunRef.current.rotation.y += delta * 0.5;
    }
    if (earthRef.current) {
      earthRef.current.rotation.y += delta * 0.5;
      updatePlanetPosition(earthRef.current, state.clock.elapsedTime);
    }
    if (marsRef.current) {
      marsRef.current.rotation.y += delta * 0.5;
    }
    if (jupiterRef.current) {
      jupiterRef.current.rotation.y += delta * 0.5;
    }
  });

  return (
    <>
      {/* helpers */}
      <OrbitControls />
      <axesHelper args={[100]} />
      <gridHelper args={[100, 100]} />

      <ambientLight intensity={1} />
      <directionalLight color={0xffffff} position={[0, 0, 5]} />

      {/* background */}
      <mesh>
        <sphereGeometry args={[500, 60, 60]} />
        <meshBasicMaterial map={milkyWay} side={THREE.BackSide} />
      </mesh>

      <mesh ref={sunRef} scale={[10, 10, 10]}>
        <sphereGeometry args={[1, 32, 32]} />
        <meshLambertMaterial emissiveMap={emissiveMap} emissive='#ffffff' />
      </mesh>
      <mesh ref={earthRef} position={[10, 0, 0]}>
        <sphereGeometry args={[1, 32, 32]} />
        <meshLambertMaterial map={earthMap} />
      </mesh>
      <mesh ref={marsRef} scale={[0.5, 0.5, 0.5]} position={[15, 0, 0]}>
        <sphereGeometry args={[1, 32, 32]} />
        <meshLambertMaterial map={marsMap} />
      </mesh>
      <mesh ref={jupiterRef} scale={[3, 3, 3]} position={[30, 0, 0]}>
        <sphereGeometry args={[1, 32, 32]} />
        <meshLambertMaterial map={jupiterMap} />
      </mesh>
    </>
  );
};
export default SolarSystem;

function updatePlanetPosition(planet: THREE.Mesh, time: number) {
  const a = 5; // Semi-major axis -> x축 범위: n ~ -n 순환
  const b = 5; // Semi-minor axis -> y축 범위: n ~ -n
  const i = Math.PI / 6; // Inclination of 30 degrees -> x축을 향해 기울어진 정도 (π: 180도)
  const T = 10; // Orbital period in arbitrary units -> 공전에 걸리는 시간
  const n = (2 * Math.PI) / T;

  const M = n * time; // Mean anomaly at current time
  const E = M; // Assuming a circular orbit for simplicity

  planet.position.x = a * Math.cos(E);
  planet.position.y = b * Math.sin(E) * Math.cos(i);
  planet.position.z = b * Math.sin(E) * Math.sin(i);
}

// 우선 간략화된 형태로 공전/자전 구현
