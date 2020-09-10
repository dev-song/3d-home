import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

let BACKGROUND = 'cornsilk';

let scene, camera, renderer;
let controls;
const clock = new THREE.Clock();

let planetA, planetB, planetC, planetD, planetE, planetF;

init();
animate();

function createPlanet(geometry, material, scene, scale = 1, xPosition = 0, zPosition = 0, yPosition = 0) {
  const mesh = new THREE.Mesh(geometry, material);
  mesh.position.set(xPosition, yPosition, zPosition);
  mesh.scale.setScalar(scale);

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
  camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 10000);
  camera.position.set(500, 800, 1300);
  camera.lookAt(0, 0, 0);

  scene = new THREE.Scene();
  scene.background = new THREE.Color(BACKGROUND);

  const gridHelper = new THREE.GridHelper(1000, 20);
  scene.add(gridHelper);

  renderer = new THREE.WebGLRenderer({ antialias: true });
  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.setSize(window.innerWidth, window.innerHeight);
  document.body.appendChild(renderer.domElement);

  controls = new OrbitControls(camera, renderer.domElement);
  controls.enableDamping = true;
  controls.dampingFactor = 0.05;

  controls.minDistance = 100;
  controls.maxDistance = 2000;

  const material = new THREE.MeshStandardMaterial({ flatShading: true });
  const geometryA = new THREE.ConeBufferGeometry(4, 16, 8);
  const geometryB = new THREE.BoxBufferGeometry(8, 8, 8);
  const geometryC = new THREE.SphereBufferGeometry(16, 4, 2);
  const geometryD = new THREE.SphereBufferGeometry(16, 8, 8);
  const geometryE = new THREE.SphereBufferGeometry(16, 8, 8);

  planetA = createPlanet(geometryA, material, scene, 1, 80, 40, -20);
  planetB = createPlanet(geometryB, material, scene, 0.8, 160, 0, 40);
  planetC = createPlanet(geometryC, material, scene, 1.5, 240, 60, 20);
  planetD = createPlanet(geometryD, material, scene, 0.8, 320, -40, -60);
  planetE = createPlanet(geometryE, material, scene, 1.5, 480);

  // Light
  const light = new THREE.PointLight('white', 5);
  light.position.set(0, 0, 0);
  scene.add(light);
}

function animate() {
  requestAnimationFrame(animate);
  controls.update();
  render();
}

function render() {
  renderer.render(scene, camera);

  const time = clock.getElapsedTime();
  rotateMesh(planetA.mesh, time, 0.3, true);
  rotateMesh(planetB.mesh, time, 0.2, true);
  rotateMesh(planetC.mesh, time, 0.1, true);
  rotateMesh(planetD.mesh, time, 0.4, false);
  rotateMesh(planetE.mesh, time, 0.2, true);

  revolveMesh(planetA.group, time, 0.2);
  revolveMesh(planetB.group, time, 0.1);
  revolveMesh(planetC.group, time, 0.3);
  revolveMesh(planetD.group, time, 0.15);
  revolveMesh(planetE.group, time, 0.25);
}