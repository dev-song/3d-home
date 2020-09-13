import * as THREE from 'three';

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

function savePlanetMeshes(scene) {
  return scene.children.map(child => child.children[0]).filter(elm => !!elm && elm.name === 'planet');
}

export { createPlanet, rotateMesh, revolveMesh, savePlanetMeshes };