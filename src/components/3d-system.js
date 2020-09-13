/**** Inspired by Marshal Murphy's 3D solar system
 * Reference
 *  Build the Solar System with WebGL & Three.js, by Marshal Murphy (https://medium.com/javascript-in-plain-english/build-the-solar-system-in-the-browser-with-webgl-three-js-5c56b882fc3b)
 *  Three.js Official Documentation (https://threejs.org/docs/index.html#manual/en/introduction/Creating-a-scene)
 *  Three.js example source code - Interactive Cubes (https://github.com/mrdoob/three.js/blob/master/examples/webgl_interactive_cubes.html) 
*/

import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

const SPACE_RADIUS = 1024;
const INTERSECTED_HEX = 0xAAAAAA;

const clock = new THREE.Clock();

let scene, camera, renderer;
let controls;
let planetA, planetB, planetC, planetD, planetE;
let bgSpace;
const randomSpeed = new Array(5).fill('').map(elm => {
  const MIN_SPEED = 0.1,
    MAX_SPEED = 0.4;
  let random = Math.random() * MAX_SPEED;
  while (random < MIN_SPEED) {
    random = Math.random() * MAX_SPEED;
  }

  return Math.ceil(random * 100) / 100;
});

let raycaster;
let mouse = new THREE.Vector2();
let planets, INTERSECTED;

const container = document.createElement('div');
container.classList.add('space-container');
document.body.appendChild(container);

// init();
// animate();

function createPlanet(geometry, material, scene, scale = 1, name = '', xPosition = 0, zPosition = 0, yPosition = 0) {
  const mesh = new THREE.Mesh(geometry, material);
  mesh.position.set(xPosition, yPosition, zPosition);
  mesh.scale.setScalar(scale);
  mesh.name = name;

  const group = new THREE.Group();
  group.add(mesh);
  scene.add(group);

  return { mesh, group };
}

function rotateMesh(mesh, time, speed, verticalRotation = false) {
  mesh.rotation.y = time * speed;

  if (verticalRotation) {
    mesh.rotation.x = time * speed;
    mesh.rotation.z = time * speed;
  }
}

function revolveMesh(meshGroup, time, speed) {
  meshGroup.rotation.y = time * speed
}

function init() {
  // Camera
  camera = new THREE.PerspectiveCamera(80, window.innerWidth / window.innerHeight, 1, SPACE_RADIUS * 2);
  camera.position.set(SPACE_RADIUS / 4, SPACE_RADIUS / 3, SPACE_RADIUS / 4);
  camera.lookAt(0, 0, 0);

  // Scene
  scene = new THREE.Scene();

  // Raycaster
  raycaster = new THREE.Raycaster();

  // Renderer
  renderer = new THREE.WebGLRenderer({ antialias: true });
  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.setSize(window.innerWidth, window.innerHeight);
  container.appendChild(renderer.domElement);

  // Controls
  controls = new OrbitControls(camera, renderer.domElement);
  controls.enableDamping = true;
  controls.dampingFactor = 0.05;
  controls.minDistance = 128;
  controls.maxDistance = SPACE_RADIUS * 0.7;

  // Planets
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

  planetA = createPlanet(geometryA, materialA, scene, 1.5, 'planet', -80, -40, -80);
  planetB = createPlanet(geometryB, materialB, scene, 1.5, 'planet', 160, 0, 80);
  planetC = createPlanet(geometryC, materialC, scene, 1.6, 'planet', -320, -60, -40);
  planetD = createPlanet(geometryD, materialD, scene, 1.3, 'planet', 400, -40, 40);
  planetE = createPlanet(geometryE, materialE, scene, 1.5, 'planet', -600, 0, -20);

  // Background (Texture source: https://imgur.com/niHC9wI)
  const bgTexture = new THREE.TextureLoader().load('textures/stars.jpeg');
  const bgGeometry = new THREE.SphereBufferGeometry(SPACE_RADIUS, 64, 64);
  const bgMaterial = new THREE.MeshStandardMaterial({ map: bgTexture, side: THREE.BackSide });
  bgSpace = createPlanet(bgGeometry, bgMaterial, scene, 1, 'background', 0, 0, 0);

  // Light
  const light = new THREE.PointLight('#ccc', 2, SPACE_RADIUS * 2);
  light.position.set(0, 0, 0);
  scene.add(light);

  // GridHelper
  const gridHelper = new THREE.GridHelper(1000, 20);
  scene.add(gridHelper);

  savePlanetMeshes();

  window.addEventListener('resize', onWindowResize, false);
  document.addEventListener('mousemove', onDocumentMouseMove, false);
}

function savePlanetMeshes() {
  planets = scene.children.map(child => child.children[0]).filter(elm => !!elm && elm.name === 'planet');
  console.log(planets);
}

function emphasizeIntersected() {
  raycaster.setFromCamera(mouse, camera);

  const intersects = raycaster.intersectObjects(planets);

  if (intersects.length > 0) {
    if (INTERSECTED != intersects[0].object) {
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

function onDocumentMouseMove(e) {
  e.preventDefault();

  mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
  mouse.y = - (event.clientY / window.innerHeight) * 2 + 1;
}

function onWindowResize() {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();

  renderer.setSize(window.innerWidth, window.innerHeight);
}

function animate() {
  requestAnimationFrame(animate);
  controls.update();
  render();
}

function render() {
  const time = clock.getElapsedTime();
  // Auto-rotate Meshes
  rotateMesh(planetA.mesh, time, randomSpeed[0], true);
  rotateMesh(planetB.mesh, time, randomSpeed[1], true);
  rotateMesh(planetC.mesh, time, randomSpeed[2], true);
  rotateMesh(planetD.mesh, time, randomSpeed[3], true);
  rotateMesh(planetE.mesh, time, randomSpeed[4], true);
  rotateMesh(bgSpace.mesh, time, 0.005);
  // Auto-revolve Meshes
  revolveMesh(planetA.group, time, randomSpeed[0]);
  revolveMesh(planetB.group, time, randomSpeed[1]);
  revolveMesh(planetC.group, time, randomSpeed[2]);
  revolveMesh(planetD.group, time, randomSpeed[3]);
  revolveMesh(planetE.group, time, randomSpeed[4]);

  emphasizeIntersected();

  renderer.render(scene, camera);
}

export { init, animate };