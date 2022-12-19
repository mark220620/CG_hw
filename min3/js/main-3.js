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

  var material = new THREE.MeshBasicMaterial({
    color: 0xffffff,
    side: THREE.DoubleSide,
    transparent: true,
    opacity: 0.9,
  });
  
  var sideLength, a, b, c, d, e, f, g, h, cords, lineWidth;
  
  sideLength = 50;
  lineWidth = 2;
  
  a = 0.0;
  b = 1.0;
  c = 2.0;
  d = (1.0 + Math.sqrt(5.0)) / 2.0;
  e = 3.0 * d;
  f = 1.0 + 2.0 * d;
  g = 2.0 + d;
  h = 2.0 * d;
  
  a *= sideLength;
  b *= sideLength;
  c *= sideLength;
  d *= sideLength;
  e *= sideLength;
  f *= sideLength;
  g *= sideLength;
  h *= sideLength;
  
  var cords = [
    [+a, +b, +e],
    [+a, +b, -e],
    [+a, -b, +e],
    [+a, -b, -e],
  
    [+b, +e, +a],
    [+b, -e, +a],
    [-b, +e, +a],
    [-b, -e, +a],
  
    [+e, +a, +b],
    [-e, +a, +b],
    [+e, +a, -b],
    [-e, +a, -b],
  
    [+c, +f, +d],
    [+c, +f, -d],
    [+c, -f, +d],
    [-c, +f, +d],
    [+c, -f, -d],
    [-c, +f, -d],
    [-c, -f, +d],
    [-c, -f, -d],
  
    [+f, +d, +c],
    [+f, -d, +c],
    [-f, +d, +c],
    [+f, +d, -c],
    [-f, -d, +c],
    [+f, -d, -c],
    [-f, +d, -c],
    [-f, -d, -c],
    [+d, +c, +f],
    [-d, +c, +f],
    [+d, +c, -f],
    [+d, -c, +f],
    [-d, +c, -f],
    [-d, -c, +f],
    [+d, -c, -f],
    [-d, -c, -f],
  
    [+b, +g, +h],
    [+b, +g, -h],
    [+b, -g, +h],
    [-b, +g, +h],
    [+b, -g, -h],
    [-b, +g, -h],
    [-b, -g, +h],
    [-b, -g, -h],
  
    [+g, +h, +b],
    [+g, -h, +b],
    [-g, +h, +b],
    [+g, +h, -b],
    [-g, -h, +b],
    [+g, -h, -b],
    [-g, +h, -b],
    [-g, -h, -b],
  
    [+h, +b, +g],
    [-h, +b, +g],
    [+h, +b, -g],
    [+h, -b, +g],
    [-h, +b, -g],
    [-h, -b, +g],
    [+h, -b, -g],
    [-h, -b, -g]
  ];
  
  var circle = new THREE.Object3D();
  var footballEdge;
  
  var p0 = new THREE.Vector3(0, 0, 0);
  var radius = new THREE.Vector3(
    cords[0][0],
    cords[0][1],
    cords[0][2]
  ).distanceTo(p0);
  
  footballEdge = new THREE.Object3D();
  footballEdge.position.z = radius / 7;
  
  footballEdge.add(
    new THREE.Mesh(
      new THREE.TorusBufferGeometry(radius, lineWidth, 8, 128),
      material
    )
  );
  
  for (var i = 0; i < cords.length; ++i) {
    for (var j = 0; j < cords.length; ++j) {
      if (i === j) continue;
  
      var p1, p2, p3, distance, mid;
      
      p1 = new THREE.Vector3(cords[i][0], cords[i][1], cords[i][2]),
      p2 = new THREE.Vector3(cords[j][0], cords[j][1], cords[j][2]);
  
      distance = p1.distanceTo(p2);
  
      if (Math.round(distance) > c) continue;
  
      mid = new THREE.Vector3(
        (cords[i][0] + cords[j][0]) / 2,
        (cords[i][1] + cords[j][1]) / 2,
        (cords[i][2] + cords[j][2]) / 2
      );
  
      var scale = p1.distanceTo(p0) / mid.distanceTo(p0);
      p3 = new THREE.Vector3(
        mid.x * scale * scale,
        mid.y * scale * scale,
        mid.z * scale * scale
      );
  
      var curve = new THREE.QuadraticBezierCurve3(p1, p3, p2);
  
      var tubeGeom = new THREE.TubeGeometry(curve, 8, lineWidth, 4, false);
  
      circle.add(new THREE.Mesh(tubeGeom, material));
    }
  }
  
  var facesCords = [
    [0, 28, 36, 39, 29],
    [1, 32, 41, 37, 30],
    [2, 33, 42, 38, 31],
    [3, 34, 40, 43, 35],
    [4, 12, 44, 47, 13],
    [5, 16, 49, 45, 14],
    [6, 17, 50, 46, 15],
    [7, 18, 48, 51, 19],
    [8, 20, 52, 55, 21],
    [9, 24, 57, 53, 22],
    [10, 25, 58, 54, 23],
    [11, 26, 56, 59, 27],
  ];
  
  var indicesOfFaces = [];
  
  for (var i = 0; i < facesCords.length; ++i) {
    var faceCord = facesCords[i];
    for (var j = 0; j < faceCord.length - 2; ++j) {
      indicesOfFaces.push(faceCord[0]);
      indicesOfFaces.push(faceCord[j + 1]);
      indicesOfFaces.push(faceCord[j + 2]);
    }
  }
  
  var facesGeom = new THREE.PolyhedronBufferGeometry(
    _.flattenDeep(cords),
    indicesOfFaces,
    radius,
    2
  );
  
  circle.add(new THREE.Mesh(facesGeom, material));
  
  scene.add(footballEdge);
  scene.add(circle);
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

function update() {
  circle.rotation.x += 1 / 50;
  circle.rotation.y += 1 / 100;
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
  update();
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
