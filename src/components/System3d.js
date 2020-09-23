/**** Inspired by Marshal Murphy's 3D solar system
 * Reference
 *  Build the Solar System with WebGL & Three.js, by Marshal Murphy (https://medium.com/javascript-in-plain-english/build-the-solar-system-in-the-browser-with-webgl-three-js-5c56b882fc3b)
 *  Three.js Official Documentation (https://threejs.org/docs/index.html#manual/en/introduction/Creating-a-scene)
 *  Three.js example source code - Interactive Cubes (https://github.com/mrdoob/three.js/blob/master/examples/webgl_interactive_cubes.html) 
 *  Pure Three.js + React 16 integration (https://blog.bitsrc.io/starting-with-react-16-and-three-js-in-5-minutes-3079b8829817)
*/

import React from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import * as SystemLib from './System3dLib';

const SPACE_RADIUS = 1024;
const INTERSECTED_HEX = 0xAAAAAA;

class System3d extends React.Component {
  componentDidMount() {
    const clock = new THREE.Clock();
    let scene, camera, renderer;
    let controls;
    let planetA, planetB, planetC, planetD, planetE;
    let bgSpace;
    const randomSpeed = new Array(5).fill('').map(elm => {
      const [MIN_SPEED, MAX_SPEED] = [0.1, 0.4];
      let random = Math.random() * MAX_SPEED;
      while (random < MIN_SPEED) {
        random = Math.random() * MAX_SPEED;
      }

      return Math.ceil(random * 100) / 100;
    });

    let mouse = new THREE.Vector2(),
      raycaster, targetPlanets, INTERSECTED;

    function emphasizeIntersected() {
      raycaster.setFromCamera(mouse, camera);

      const intersects = raycaster.intersectObjects(targetPlanets);
      if (intersects.length > 0) {
        if (INTERSECTED !== intersects[0].object) {
          if (INTERSECTED) INTERSECTED.material.emissive.setHex(INTERSECTED.currentHex);

          INTERSECTED = intersects[0].object;
          INTERSECTED.currentHex = INTERSECTED.material.emissive.getHex();
          INTERSECTED.material.emissive.setHex(INTERSECTED_HEX);
        }
      } else {
        if (INTERSECTED) INTERSECTED.material.emissive.setHex(INTERSECTED.currentHex);
        INTERSECTED = null;
      }
    }

    // Launch System
    //// Camera
    camera = new THREE.PerspectiveCamera(80, window.innerWidth / window.innerHeight, 1, SPACE_RADIUS * 2);
    camera.position.set(SPACE_RADIUS / 4, SPACE_RADIUS / 3, SPACE_RADIUS / 4);
    camera.lookAt(0, 0, 0);

    //// Scene
    scene = new THREE.Scene();

    //// Raycaster
    raycaster = new THREE.Raycaster();

    //// Renderer
    renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(window.innerWidth, window.innerHeight);
    this.mount.appendChild(renderer.domElement);

    //// Controls
    controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;
    controls.minDistance = 128;
    controls.maxDistance = SPACE_RADIUS * 0.7;

    //// Planets
    const materialA = new THREE.MeshStandardMaterial({ flatShading: true, color: 'salmon' }),
      materialB = new THREE.MeshStandardMaterial({ flatShading: true, color: 'wheat' }),
      materialC = new THREE.MeshStandardMaterial({ flatShading: true, color: 'midnightblue' }),
      materialD = new THREE.MeshStandardMaterial({ flatShading: true, color: 'sienna' }),
      materialE = new THREE.MeshStandardMaterial({ flatShading: true, color: 'orchid' });
    const geometryA = new THREE.ConeBufferGeometry(8, 16, 8),
      geometryB = new THREE.BoxBufferGeometry(12, 12, 12),
      geometryC = new THREE.SphereBufferGeometry(16, 4, 2),
      geometryD = new THREE.SphereBufferGeometry(16, 8, 8),
      geometryE = new THREE.SphereBufferGeometry(16, 12, 12);

    planetA = SystemLib.createPlanet(geometryA, materialA, scene, 1.5, 'planet', -80, -40, -80);
    planetB = SystemLib.createPlanet(geometryB, materialB, scene, 1.5, 'planet', 160, 0, 80);
    planetC = SystemLib.createPlanet(geometryC, materialC, scene, 1.6, 'planet', -320, -60, -40);
    planetD = SystemLib.createPlanet(geometryD, materialD, scene, 1.3, 'planet', 400, -40, 40);
    planetE = SystemLib.createPlanet(geometryE, materialE, scene, 1.5, 'planet', -600, 0, -20);
    targetPlanets = SystemLib.savePlanetMeshes(scene);

    //// Background (Texture source: https://imgur.com/niHC9wI)
    const bgTexture = new THREE.TextureLoader().load('./textures/stars.jpeg');
    const bgGeometry = new THREE.SphereBufferGeometry(SPACE_RADIUS, 64, 64);
    const bgMaterial = new THREE.MeshStandardMaterial({ map: bgTexture, side: THREE.BackSide });
    bgSpace = SystemLib.createPlanet(bgGeometry, bgMaterial, scene, 1, 'background', 0, 0, 0);

    //// Light
    const light = new THREE.PointLight('#ccc', 2, SPACE_RADIUS * 2);
    light.position.set(0, 0, 0);
    scene.add(light);

    //// GridHelper
    // const gridHelper = new THREE.GridHelper(1000, 20);
    // scene.add(gridHelper);

    //// Animate System
    animate();

    window.addEventListener('resize', onWindowResize, false);
    document.addEventListener('mousemove', onDocumentMouseMove, false);

    function animate() {
      requestAnimationFrame(animate);
      controls.update();
      render();
    }

    function render() {
      const time = clock.getElapsedTime();
      // Auto-rotate Meshes
      SystemLib.rotateMesh(planetA.mesh, time, randomSpeed[0], true);
      SystemLib.rotateMesh(planetB.mesh, time, randomSpeed[1], true);
      SystemLib.rotateMesh(planetC.mesh, time, randomSpeed[2], true);
      SystemLib.rotateMesh(planetD.mesh, time, randomSpeed[3], true);
      SystemLib.rotateMesh(planetE.mesh, time, randomSpeed[4], true);
      SystemLib.rotateMesh(bgSpace.mesh, time, 0.005);
      // Auto-revolve Meshes
      SystemLib.revolveMesh(planetA.group, time, randomSpeed[0]);
      SystemLib.revolveMesh(planetB.group, time, randomSpeed[1]);
      SystemLib.revolveMesh(planetC.group, time, randomSpeed[2]);
      SystemLib.revolveMesh(planetD.group, time, randomSpeed[3]);
      SystemLib.revolveMesh(planetE.group, time, randomSpeed[4]);

      emphasizeIntersected();
      renderer.render(scene, camera);
    }

    function onDocumentMouseMove(e) {
      e.preventDefault();

      mouse.x = (e.clientX / window.innerWidth) * 2 - 1;
      mouse.y = - (e.clientY / window.innerHeight) * 2 + 1;
    }

    function onWindowResize() {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();

      renderer.setSize(window.innerWidth, window.innerHeight);
    }
  }
  render() {
    return (
      <div
        className='system__container'
        ref={ref => (this.mount = ref)}
        style={{ height: window.innerHeight }}
      />
    );
  }
}

export default System3d;