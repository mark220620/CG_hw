import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { MeshText2D, textAlign } from '@kinyoklion/three-text2d/dist/three-text2d.js';
import { buildScene } from './buildScene';

var camera, scene, renderer;
var i = 0, j = 0, homeScore, guestScore, start = false, minutes, seconds;
var circle, pos, vel;
$('#Homeadd').click(function () {
  i.valueOf(++i);
})
$('#Homeminor').click(function () {
  if (i > 0) {
    i.valueOf(--i);
  }
})

$('#Guestadd').click(function () {
  j.valueOf(++j);
})
$('#Guestminor').click(function () {
  if (j > 0) {
    i.valueOf(--j);
  }
})
$('#time').click(function () {
  start = !start;
})
init();
animate();

function init() {

  scene = new THREE.Scene();

  renderer = new THREE.WebGLRenderer();
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setClearColor(0x888888);
  document.body.appendChild(renderer.domElement);

  camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 1, 1000);
  camera.position.set(100, 200, 100);

  const controls = new OrbitControls(camera, renderer.domElement);

  ////////////////////////////////////////////////////////////////
  var gridXZ = new THREE.GridHelper(200, 20, 'red', 'white');
  //scene.add(gridXZ);

  buildScene();
  homeScore = new MeshText2D({
    align: textAlign.right, font: '2px Arial',
    fillStyle: '#000000', antialias: true
  });
  homeScore.position.set(30, 60, -97);

  guestScore = new MeshText2D({
    align: textAlign.right, font: '2px Arial',
    fillStyle: '#000000', antialias: true
  });
  guestScore.position.set(-30, 60, -97);
  scene.add(homeScore, guestScore);


  var home = new MeshText2D("HOME", {
    align: textAlign.center, font: '10px Arial',
    fillStyle: 'white', antialias: true
  });
  home.position.set(30, 70, -97);

  var guest = new MeshText2D("GUEST", {
    align: textAlign.center, font: '10px Arial',
    fillStyle: 'white', antialias: true
  });
  guest.position.set(-30, 70, -97);
  scene.add(home, guest);


  minutes = new MeshText2D({
    align: textAlign.center, font: '10px Arial',
    fillStyle: 'white', antialias: true
  });
  minutes.position.set(-3, 65, -96.9);
  minutes.scale.set(0.2, 0.2, 0.2)

  seconds = new MeshText2D({
    align: textAlign.center, font: '10px Arial',
    fillStyle: 'white', antialias: true
  });
  seconds.position.set(3, 65, -96.9);
  seconds.scale.set(0.2, 0.2, 0.2);
  scene.add(minutes, seconds);


  let geometry = new THREE.BufferGeometry();
  let points = [];
  points.push(
    new THREE.Vector3(-100, -100, 0),
    new THREE.Vector3(100, -100, 0),
    new THREE.Vector3(100, 100, 0),
    new THREE.Vector3(-100, 100, 0),
    new THREE.Vector3(-100, -100, 0));
  geometry.setFromPoints(points);
  var border = new THREE.Line(geometry, new THREE.LineBasicMaterial({
    color: 'blue'
  }));
  //scene.add(border);
  border.rotation.x = Math.PI / 2

  let loader = new THREE.TextureLoader();
  loader.crossOrigin = '';
  let texture = loader.load('https://i.imgur.com/j1QHn3s.png');
  circle = new THREE.Mesh(new THREE.SphereGeometry(10, 20, 20), new THREE.MeshBasicMaterial({
    map: texture
  }));
  scene.add(circle);
  circle.rotation.x = Math.PI / 2
  circle.position.y = 20;
  pos = new THREE.Vector3();
  vel = new THREE.Vector3(10, 0, 20);
}
var minute = 0;
var Cal_Minute = 0, Cal_Second = 0;

function time() {
  minute += 1;
  Cal_Minute = Math.floor(minute / 3600);
  Cal_Second = Math.floor(Math.floor(minute % 3600) / 60);


}
function animate() {
  homeScore.text = "" + i;
  guestScore.text = "" + j;
  minutes.text = Cal_Minute + " :";
  seconds.text = " " + Cal_Second;
  if (start === true) {
    setInterval(time(), 1000);
  }

  requestAnimationFrame(animate);
  renderer.render(scene, camera);

  var dt = 0.05;
  pos.add(vel.clone().multiplyScalar(dt));
  if (pos.x > 90 || pos.x < -90)
    vel.x *= -1;
  if (pos.z > 90 || pos.z < -90)
    vel.z *= -1;
    
  if (pos.x === 90.5  ) {
    i++;
  }
  if (pos.x === -90.5 ) {
    j++;
  }
  pos.y = 10;


  circle.position.copy(pos);
}

export { scene };
