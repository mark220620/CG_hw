import { MeshText2D, textAlign } from '@kinyoklion/three-text2d/dist/three-text2d.js';
import * as THREE from 'three';

import { scene } from './main-3';

function buildScene() {


   let loader = new THREE.TextureLoader();
   loader.crossOrigin = '';
   let texture = loader.load('https://i.imgur.com/fNle9uY.jpg');
   let box = new THREE.Mesh(new THREE.BoxGeometry(100, 50, 2), new THREE.MeshBasicMaterial({ map: texture }));
   box.position.y = 25;
   box.position.set(0,50,-100);
   scene.add(box);

   var grassMap = loader.load ('https://i.imgur.com/ADGE9Ix.jpg');
   var grassFloor = new THREE.Mesh (new THREE.PlaneGeometry (200,200), new THREE.MeshBasicMaterial({map: grassMap}));
   grassFloor.rotation.x = -Math.PI/2;
   scene.add(grassFloor);

   let texture1 = loader.load('https://i.imgur.com/1CEKQbs.png');
   let box1 = new THREE.Mesh(new THREE.BoxGeometry(60, 40, 1), new THREE.MeshBasicMaterial({map: texture1}));
  box1.position.set(-100,20,0);
  box1.rotation.y = -Math.PI/2;
  
  
  let box2 = new THREE.Mesh(new THREE.BoxGeometry(0, 10, 60), new THREE.MeshBasicMaterial({map: texture1}));
  box2.position.set(-95,40,0);
  //box2.rotation.y = Math.PI/2;
  box2.rotation.z = Math.PI/2;
  
  let box3 = new THREE.Mesh(new THREE.BoxGeometry(10, 0, 40), new THREE.MeshBasicMaterial({map: texture1}));
  box3.rotation.x = Math.PI/2;
  box3.position.set(-95,20,30);
  
  let box4 = new THREE.Mesh(new THREE.BoxGeometry(10, 0, 40), new THREE.MeshBasicMaterial({map: texture1}));
  box4.rotation.x = Math.PI/2;
  box4.position.set(-95,20,-30);
  
  let box5 = new THREE.Mesh(new THREE.BoxGeometry(60, 40, 1), new THREE.MeshBasicMaterial({map: texture1}));
  box5.position.set(100,20,0);
  box5.rotation.y = -Math.PI/2;
  
  
  let box6 = new THREE.Mesh(new THREE.BoxGeometry(0, 10, 60), new THREE.MeshBasicMaterial({map: texture1}));
  box6.position.set(95,40,0);
  box6.rotation.z = Math.PI/2;
  
  let box7 = new THREE.Mesh(new THREE.BoxGeometry(10, 0, 40), new THREE.MeshBasicMaterial({map: texture1}));
  box7.rotation.x = Math.PI/2;
  box7.position.set(95,20,30);
  
  let box8 = new THREE.Mesh(new THREE.BoxGeometry(10, 0, 40), new THREE.MeshBasicMaterial({map: texture1}));
  box8.rotation.x = Math.PI/2;
  box8.position.set(95,20,-30);
  scene.add(box1,box2,box3,box4,box5,box6,box7,box8);


  
}

export { buildScene };

