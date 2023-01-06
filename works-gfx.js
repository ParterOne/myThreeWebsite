import * as THREE from 'three';
import { TTFLoader } from 'three/examples/jsm/loaders/TTFLoader';
import { FontLoader } from 'three/examples/jsm/loaders/FontLoader';
import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry';
import {OrbitControls} from "three/examples/jsm/controls/OrbitControls";

//--------Scene Setup---------

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({
    canvas: document.querySelector('#bg-works'),
    alpha: true,
});

renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);

camera.position.setZ(200);

//--------Responsive window---------

window.addEventListener('resize', onWindowResize, false);

function onWindowResize() {
    // Update the size of the renderer
    renderer.setSize(window.innerWidth, window.innerHeight);
    // Update the aspect ratio of the camera
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
}

//--------Orbit Controls---------

const controls = new OrbitControls(camera, renderer.domElement);
//camera.lookAt(scene.position);
controls.enablePan = false;
controls.enableZoom = false;
controls.autoRotate = true;

//--------Create Geometry---------

// true type font loader
const fontLoader = new FontLoader();
const ttfLoader = new TTFLoader();
ttfLoader.load('Fonts/Gilroy-Bold.ttf', (json) => {
  // First parse the font.
  const myFont = fontLoader.parse(json);
  // Use parsed font as normal.
  const textGeometry = new TextGeometry('works', {
    height: 2,
    size: 50,
    font: myFont,
    bevelEnabled: true,
    bevelThickness: 2,
    bevelSize: 1,
    bevelSegments: 12,
    curveSegments: 24,
  });

  const textMaterial = new THREE.MeshNormalMaterial();
  const textMesh = new THREE.Mesh(textGeometry, textMaterial);
  textMesh.position.x = -90;
  scene.add(textMesh);
  
});

// ------ Animate & Render -------

function animate() {
  requestAnimationFrame(animate);
  controls.update();
  renderer.render(scene, camera);
}

animate();