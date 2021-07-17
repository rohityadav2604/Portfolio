//import './style.css'

//  const THREE = require("three");
//  const {OrbitControls} = require("three");
// console.log("insdie main");
//import * as THREE from '../node_modules/build/three.module.js'
//  import * as THREE from 'three'
//  import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls'


import {OrbitControls} from 'https://unpkg.com/three@0.127.0/examples/jsm/controls/OrbitControls.js'
import * as THREE from 'https://unpkg.com/three@0.127.0/build/three.module.js';


console.log("isndie");

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(75 , window.innerWidth/window.innerHeight , 0.1 , 1000);

const renderer = new THREE.WebGLRenderer({
    canvas : document.querySelector("#bg"),
});

renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth , window.innerHeight);
camera.position.setZ(30);
renderer.render(scene , camera);

const geometry = new THREE.TorusGeometry(10 , 3 , 16 , 100);
const material = new THREE.MeshStandardMaterial({color:0xFF6347});
const torus = new THREE.Mesh(geometry , material);
scene.add(torus);
const pointlight = new THREE.PointLight(0xffffff);
pointlight.position.set(5,5,5);
const ambientLight = new THREE.AmbientLight(0xffffff);
scene.add(pointlight , ambientLight);

const lightHelper = new THREE.PointLightHelper(pointlight);
const gridHelper = new THREE.GridHelper(200 , 50);
const controls = new OrbitControls( camera , renderer.domElement);
scene.add(lightHelper , gridHelper);

function animate(){
    requestAnimationFrame(animate);
    torus.rotation.x +=0.01;
    torus.rotation.y += 0.005;
    torus.rotation.z +=0.01;
    controls.update();
    renderer.render(scene , camera);
}
animate();

function addstar()
{
   const geometry = new THREE.SphereGeometry(0.25 , 24 , 24);
   const material = new THREE.MeshStandardMaterial({color:0xffffff});
   const star = new THREE.Mesh(geometry, material);
   const [x,y,z] = Array(3).fill().map(()=>THREE.MathUtils.randFloatSpread(100));
   star.position.set(x,y,z);
   scene.add(star);
}
Array(300).fill().forEach(addstar);

const spaceTexture = new THREE.TextureLoader().load('./assets/space.jpg');
scene.background = spaceTexture;

const rohittexture = new THREE.TextureLoader().load('./assets/picture.png');
const rohit = new THREE.Mesh(
  new THREE.BoxGeometry(3,3,3),
  new THREE.MeshBasicMaterial({map:rohittexture})
); 
scene.add(rohit);

const moonTexture = new THREE.TextureLoader().load('./assets/moon.jpg');
const normalTexture = new THREE.TextureLoader().load('./assets/normal.jpg');
const moon = new THREE.Mesh(
  new THREE.SphereGeometry(3 , 32, 32),
  new THREE.MeshStandardMaterial(
    {
      map:moonTexture,
      normalMap:normalTexture
    }
  )
   
);
scene.add(moon);



moon.position.z = 30;
moon.position.setX(-10);
function movecamera()
{
   const t = document.body.getBoundingClientRect().top;
   moon.rotation.x +=0.05;
   moon.rotation.y +=0.075;
   moon.rotation.z +=0.05;

   rohit.rotation.y +=0.01;
   rohit.rotation.z +=0.01;


   camera.position.z = t*-0.01;
   camera.position.x = t*-0.0002;
   camera.position.y = t*-0.0002;
}
document.body.onscroll = movecamera;


