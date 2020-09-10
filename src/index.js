import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

let BACKGROUND = 'cornsilk';

let scene, camera, renderer;
let controls;

init();
animate();

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

  const geometry = new THREE.SphereGeometry(16, 32, 16);
  const mesh = new THREE.Mesh(geometry, material);
  const group = new THREE.Group();
  group.add(mesh);
  mesh.position.set(100, 0, 0);
  scene.add(group);

  setInterval(() => {
    mesh.rotateY(0.05);
  }, 100);

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
}