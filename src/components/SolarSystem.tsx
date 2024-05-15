import React, { useRef } from 'react';
import * as THREE from 'three';
import { useFrame, useLoader } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera } from '@react-three/drei';
import { TextureLoader } from 'three';

const SolarSystem: React.FC = () => {
  const sunRef = useRef<THREE.Mesh>(null);
  const mercuryRef = useRef<THREE.Mesh>(null);
  const venusRef = useRef<THREE.Mesh>(null);
  const earthRef = useRef<THREE.Mesh>(null);
  const marsRef = useRef<THREE.Mesh>(null);
  const jupiterRef = useRef<THREE.Mesh>(null);
  const saturnRef = useRef<THREE.Mesh>(null);
  const uranusRef = useRef<THREE.Mesh>(null);
  const neptuneRef = useRef<THREE.Mesh>(null);

  const milkyWayMap = useLoader(TextureLoader, '/src/assets/galaxy_milky-way.jpg');
  const sunMap = useLoader(TextureLoader, '/src/assets/sun.jpg');
  const mercuryMap = useLoader(TextureLoader, '/src/assets/planet_mercury.jpg');
  const venusMap = useLoader(TextureLoader, '/src/assets/planet_venus-atmosphere.jpg');
  const earthMap = useLoader(TextureLoader, '/src/assets/planet_earth-day.jpg');
  const marsMap = useLoader(TextureLoader, '/src/assets/planet_mars.jpg');
  const jupiterMap = useLoader(TextureLoader, '/src/assets/planet_jupiter.jpg');
  const saturnMap = useLoader(TextureLoader, '/src/assets/planet_saturn.jpg');
  const uranusMap = useLoader(TextureLoader, '/src/assets/planet_uranus.jpg');
  const neptuneMap = useLoader(TextureLoader, '/src/assets/planet_neptune.jpg');
  const celestialBodyRefs = [
    sunRef,
    mercuryRef,
    venusRef,
    earthRef,
    marsRef,
    jupiterRef,
    saturnRef,
    uranusRef,
    neptuneRef,
  ];
  const celestialBodyTextures = [
    sunMap,
    mercuryMap,
    venusMap,
    earthMap,
    marsMap,
    jupiterMap,
    saturnMap,
    uranusMap,
    neptuneMap,
  ];

  useFrame((state, delta) => {
    // 자전속도 및 공전속도에 대한 기준 필요 -> 실제대로 1년에 공전 한 바퀴는 너무 느리니까... 1시간에 1바퀴로 한다던가 등

    celestialBodyRefs.forEach((ref, index) => {
      const body = ref.current;
      if (body) {
        body.rotation.y += delta * 0.5;
        updatePlanetPosition(
          body,
          celestialBodies[index].distance / 10000,
          state.clock.elapsedTime * 0.1,
        );
      }
    });
  });

  return (
    <>
      {/* helpers */}
      <OrbitControls />
      <axesHelper args={[100]} />
      <gridHelper args={[100, 100]} />

      <PerspectiveCamera makeDefault far={2000000} position={[0, 0, 20000]} />
      <ambientLight intensity={0.1} />
      <pointLight color={0xffffff} position={[0, 0, 0]} distance={1000000} decay={0.005} />

      {/* background */}
      <mesh>
        <sphereGeometry args={[1000000, 60, 60]} />
        <meshBasicMaterial map={milkyWayMap} side={THREE.BackSide} />
      </mesh>

      {/* celestial bodies */}
      {/* 직경에 비해 거리가 너무 크기 때문에 행성의 크기와 거리의 비율이 달라져야 함 */}
      {/* 시인성을 높이기 위해 배경과 항성/행성의 크기 추가로 조정 필요 */}
      {celestialBodies.map((body, index) => (
        <mesh
          ref={celestialBodyRefs[index]}
          key={body.name}
          position={[body.distance / 10000, 0, 0]}
        >
          <sphereGeometry args={[body.diameter / (body.type === 'star' ? 1000 : 100), 32, 32]} />
          {body.type === 'star' ? (
            <meshLambertMaterial emissiveMap={celestialBodyTextures[index]} emissive='#ffffff' />
          ) : (
            <meshLambertMaterial map={celestialBodyTextures[index]} />
          )}
        </mesh>
      ))}
    </>
  );
};
export default SolarSystem;

// 우선 간략화된 형태로 공전/자전 구현
function updatePlanetPosition(planet: THREE.Mesh, distance: number, time: number) {
  const i = Math.PI / 6; // Inclination of 30 degrees -> x축을 향해 기울어진 정도 (π: 180도)
  const T = 10; // Orbital period in arbitrary units -> 공전에 걸리는 시간
  const n = (2 * Math.PI) / T;

  const M = n * time; // Mean anomaly at current time
  const E = M; // Assuming a circular orbit for simplicity

  planet.position.x = distance * Math.cos(E);
  // planet.position.y = distance * Math.sin(E) * Math.cos(i);
  planet.position.z = distance * Math.sin(E) * Math.sin(i);
}

const celestialBodies: Array<CelestialBody> = [
  { type: 'star', name: 'Sun', distance: 0, diameter: 1391400 },
  { type: 'planet', name: 'Mercury', distance: 57900000, diameter: 4879 },
  { type: 'planet', name: 'Venus', distance: 108200000, diameter: 12104 },
  { type: 'planet', name: 'Earth', distance: 149600000, diameter: 12756 },
  { type: 'planet', name: 'Mars', distance: 227900000, diameter: 6792 },
  { type: 'planet', name: 'Jupiter', distance: 778600000, diameter: 142984 },
  { type: 'planet', name: 'Saturn', distance: 1433500000, diameter: 120536 },
  { type: 'planet', name: 'Uranus', distance: 2872500000, diameter: 51118 },
  { type: 'planet', name: 'Neptune', distance: 4495100000, diameter: 49528 },
];

type CelestialBody = {
  type: 'star' | 'planet';
  name: string;
  distance: number;
  diameter: number;
};
