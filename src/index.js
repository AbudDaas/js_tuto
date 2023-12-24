import * as THREE from 'three';
// import bimg from '../img/download.jpg';
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 
    75, window.innerWidth / window.innerHeight, 0.1, 1000 
);
camera.position.z = 4;
const renderer = new THREE.WebGLRenderer();

renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

//===========================
// Cube
// const geometry = new THREE.BoxGeometry( 1, 1, 1 );
// const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
// const cube = new THREE.Mesh( geometry, material );
// scene.add( cube );
//===========================
// Sphere
const geometry = new THREE.SphereGeometry( 1, 99, 99 );
const material = new THREE.MeshBasicMaterial( { color: 0xffffff } );
const Sphere = new THREE.Mesh( geometry, material );
scene.add( Sphere );


// Background Img
// const textureLoader = new THREE.TextureLoader();
// const backgroundTexture = textureLoader.load("./src/back.jpg");
// scene.background = backgroundTexture;
renderer.setClearColor(0xffff00);





function animate() {
	requestAnimationFrame( animate );

	// Sphere.rotation.x += 0.01;
	// Sphere.rotation.y += 0.01;

	renderer.render( scene, camera );
}

animate();