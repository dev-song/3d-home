import * as THREE from 'three';

let camera, scene, renderer;

init();
render();

function init() {
  camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 10000);
  camera.position.set(500, 800, 1300);
  camera.lookAt(0, 0, 0);

  scene = new THREE.Scene();
  scene.background = new THREE.Color('cornsilk');

  const gridHelper = new THREE.GridHelper(1000, 20);
  scene.add(gridHelper);

  renderer = new THREE.WebGLRenderer({ antialias: true });
  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.setSize(window.innerWidth, window.innerHeight);
  document.body.appendChild(renderer.domElement);
}

function render() {
  renderer.render(scene, camera);
}