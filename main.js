import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { RGBELoader } from 'three/examples/jsm/loaders/RGBELoader.js';

// ------ Scene Setup -------

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

const renderer = new THREE.WebGLRenderer({
  canvas: document.querySelector('#bg'),
  alpha: true,
});

renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);
camera.position.setZ(30);

window.addEventListener('resize', onWindowResize, false);


// ------ Responsive Window -------

function onWindowResize() {
  // Update the size of the renderer
  renderer.setSize(window.innerWidth, window.innerHeight);

  // Update the aspect ratio of the camera
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
}

// ------ HDRI Setup -------

renderer.outputEncoding = THREE.sRGBEncoding;
renderer.toneMapping = THREE.ACESFilmicToneMapping;
renderer.toneMappingExposure = 0.6;
const rgbeLoader = new RGBELoader();
const hdriUrl = 'hdr/studio_small_02_2k.hdr';
rgbeLoader.load( hdriUrl, function ( texture ) {
  texture.mapping = THREE.EquirectangularReflectionMapping;
  //scene.background = texture;
  scene.environment = texture;
} );


// ------ GLTF Loader -------

const loader = new GLTFLoader();

let gltf;

loader.load( 'gltf/FaceV6.gltf', function ( _gltf ) {
  
  gltf = _gltf;

  gltf.scene.rotation.y = Math.PI / 2;
  gltf.scene.scale.set(10,10,10);
  gltf.scene.castShadow = true; //default is false
  gltf.scene.receiveShadow = true; //default
	scene.add( gltf.scene );

}, undefined, function ( error ) {

	console.error( error );

} );


// ------ Follow Mouse -------

document.addEventListener('mousemove', onMouseMove, false);


function onMouseMove(event) {
  var mouseX = window.innerWidth / 2 - event.clientX;
  var mouseY = window.innerHeight / 2 - event.clientY;
  gltf.scene.rotation.y = -Math.PI * 0.5 * mouseX / window.innerWidth+ Math.PI / 2;
  gltf.scene.rotation.x = -Math.PI * 0.5 * mouseY / window.innerHeight;
  gltf.scene.updateMatrix();
}

// ------ Animate & Render -------

function animate() {
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
}

animate();