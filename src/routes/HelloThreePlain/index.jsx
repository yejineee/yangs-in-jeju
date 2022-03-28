import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import * as dat from 'dat.gui';
import Stats from 'stats.js';

let stats = null;
let scene = null;
let camera = null;
let renderer = null;
let cube = null;
let controls = null;

const ctrlOptions = {
  cube: {
    speed: 0.01,
    velocity: {
      x: 0.1,
      y: 0.1,
    },
  },
};

const initializeRenderer = (container) => {
  scene = new THREE.Scene();
  camera = new THREE.PerspectiveCamera(50, 1, 0.1, 1000);
  camera.position.set(50, 50, 75);
  camera.lookAt(scene.position);
  camera.updateMatrixWorld();

  renderer = new THREE.WebGLRenderer();
  renderer.setSize(window.innerWidth, window.innerHeight);

  container.appendChild(renderer.domElement);
};

const initializeStats = (container) => {
  stats = new Stats();
  stats.showPanel(0);

  container.appendChild(stats.dom);
};

const initializeCube = () => {
  const boxGeometry = new THREE.BoxGeometry(10, 10, 10, 2, 2, 2);
  const boxMaterial = new THREE.MeshBasicMaterial({ color: '#fea133', wireframe: true });
  cube = new THREE.Mesh(boxGeometry, boxMaterial);
  scene.add(cube);
};

const initializeControls = () => {
  controls = new dat.GUI();
  const velFolder = controls.addFolder('Velocity');
  velFolder.add(ctrlOptions.cube.velocity, 'x', -0.1, 1.0).listen();
  velFolder.add(ctrlOptions.cube.velocity, 'y', -0.1, 1.0).listen();
  velFolder.add(ctrlOptions.cube, 'speed', 0, 0.1).listen();
  velFolder.open();

  const cubeFolder = controls.addFolder('Cube');
  cubeFolder.add(cube.material, 'wireframe', true).listen();
  cubeFolder.add(cube.scale, 'x', 0, 5).listen();
  cubeFolder.add(cube.scale, 'y', 0, 5).listen();
  cubeFolder.add(cube.scale, 'z', 0, 5).listen();
  cubeFolder.open();
};

const cleanup = (container) => {
  controls.destroy();
  container.removeChild(stats.dom);
  container.removeChild(renderer.domElement);
};

const update = () => {
  const { speed } = ctrlOptions.cube;
  cube.rotation.x += ctrlOptions.cube.velocity.x * speed;
  cube.rotation.y += ctrlOptions.cube.velocity.y * speed;
};

const animate = () => {
  stats.begin();

  update();
  renderer.render(scene, camera);

  stats.end();

  requestAnimationFrame(animate);
};

const HelloThreePlain = () => {
  const containerRef = useRef();

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    const container = containerRef.current;
    if (!container) {
      return;
    }

    initializeRenderer(container);
    initializeStats(container);
    initializeCube();
    initializeControls();

    requestAnimationFrame(animate);

    return () => cleanup(container);
  }, []);

  return <div ref={containerRef}></div>;
};

export default HelloThreePlain;
