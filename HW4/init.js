import * as THREE from 'https://cdn.skypack.dev/three';
import { OrbitControls } from 'https://cdn.skypack.dev/three@0.136/examples/jsm/controls/OrbitControls.js';
import { makeCar } from './makeCar.js';


var camera, scene, renderer, car;
function init() {

    scene = new THREE.Scene();

    renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0x888888);
    document.body.appendChild(renderer.domElement);

    camera = new THREE.PerspectiveCamera(30, window.innerWidth / window.innerHeight, 1, 10000);
    camera.position.set(300, 400, 500); // camera at (0,0,500)
    let controls = new OrbitControls(camera, renderer.domElement);

    ////////////////////////////////////////////////////////
    var gridXZ = new THREE.GridHelper(400, 40, 'red', 'white');
    scene.add(gridXZ);

    const capsule = new THREE.Mesh(new THREE.CapsuleGeometry(10, 30, 4, 8), new THREE.MeshBasicMaterial({ color: 'black' }));
    capsule.position.set(-80, -5, 160);
    capsule.rotation.x = Math.PI / 2;
    scene.add(capsule);

    car = makeCar();
    scene.add(car);
    ///////////////////


    var pos1 = new THREE.Vector3(80, 0, 0);
    var pos2 = new THREE.Vector3(40, 0, 40);
    var pos3 = new THREE.Vector3(0, 0, 80);
    var pos4 = new THREE.Vector3(-40, 0, 120);
    var pos5Before = new THREE.Vector3(-60, 5, 140);
    var pos5 = new THREE.Vector3(-80, 5, 160);
    var pos6 = new THREE.Vector3(0, 0, 160);
    var pos7Before = new THREE.Vector3(40, 0, 160);
    var pos7 = new THREE.Vector3(80, 0, 160);
    var pos8 = new THREE.Vector3(40, 0, 120);
    var pos9 = new THREE.Vector3(0, 0, 80);
    var pos10 = new THREE.Vector3(-40, 0, 40);
    var pos11Before = new THREE.Vector3(-60, 0, 20);
    var pos11 = new THREE.Vector3(-80, 0, 0);
    var pos12 = new THREE.Vector3(0, 0, 0);
    var pos1Before = new THREE.Vector3(40, 0, 0);

    //////////////////
    const quaternion1 = new THREE.Quaternion();
    const quaternion2 = new THREE.Quaternion();
    const quaternion3 = new THREE.Quaternion();
    const quaternion4 = new THREE.Quaternion();
    const quaternion5Before = new THREE.Quaternion();
    const quaternion5 = new THREE.Quaternion();
    const quaternion6 = new THREE.Quaternion();
    const quaternion7Before = new THREE.Quaternion();
    const quaternion7 = new THREE.Quaternion();
    const quaternion8 = new THREE.Quaternion();
    const quaternion9 = new THREE.Quaternion();
    const quaternion10 = new THREE.Quaternion();
    const quaternion11Before = new THREE.Quaternion();
    const quaternion11 = new THREE.Quaternion();
    const quaternion12 = new THREE.Quaternion();
    const quaternion1Before = new THREE.Quaternion();


    quaternion1.setFromAxisAngle(new THREE.Vector3(0, 1, 0), -Math.PI / 3 * 2);
    quaternion2.setFromAxisAngle(new THREE.Vector3(0, 1, 0), -Math.PI / 3 * 2);
    quaternion3.setFromAxisAngle(new THREE.Vector3(0, 1, 0), -Math.PI / 3 * 2);
    quaternion4.setFromAxisAngle(new THREE.Vector3(0, 1, 0), -Math.PI / 3 * 1.5);
    quaternion5Before.setFromAxisAngle(new THREE.Vector3(0, 0, 1), Math.PI / 30);
    quaternion5.setFromAxisAngle(new THREE.Vector3(0, 0, 1), Math.PI / 30);
    quaternion6.setFromAxisAngle(new THREE.Vector3(0, 0, 1), -Math.PI / 30);
    quaternion7Before.setFromAxisAngle(new THREE.Vector3(0, 1, 0), Math.PI / 3 * 2.4);
    quaternion7.setFromAxisAngle(new THREE.Vector3(0, 1, 0), Math.PI / 3 * 2.4);
    quaternion8.setFromAxisAngle(new THREE.Vector3(0, 1, 0), Math.PI / 3 * 2.4);
    quaternion9.setFromAxisAngle(new THREE.Vector3(0, 1, 0), Math.PI / 3 * 2.4);
    quaternion10.setFromAxisAngle(new THREE.Vector3(0, 1, 0), Math.PI / 3 * 1.9);
    quaternion11Before.setFromAxisAngle(new THREE.Vector3(0, 1, 0), Math.PI / 3 * 6);
    quaternion11.setFromAxisAngle(new THREE.Vector3(0, 1, 0), Math.PI / 3 * 6);
    quaternion12.setFromAxisAngle(new THREE.Vector3(0, 1, 0), 0);
    quaternion1Before.setFromAxisAngle(new THREE.Vector3(0, 1, 0), -Math.PI / 3 * 2);
    keys = [
        [0, pos1, quaternion1], // quad1 ...
        [0.0625, pos2, quaternion2],
        [0.125, pos3, quaternion3],
        [0.1875, pos4, quaternion4],
        [0.25, pos5Before, quaternion5Before],
        [0.3125, pos5, quaternion5],    //////
        [0.375, pos6, quaternion6],
        [0.4375, pos7Before, quaternion7Before],
        [0.5, pos7, quaternion7],      /////
        [0.5625, pos8, quaternion8],
        [0.625, pos9, quaternion9],
        [0.6875, pos10, quaternion10],
        [0.75, pos11Before, quaternion11Before],
        [0.8125, pos11, quaternion11], /////
        [0.875, pos12, quaternion12],
        [0.9375, pos1Before, quaternion1Before],
        [1, pos1, quaternion1]         ////
    ];
}

var keys, Qkeys;
var T = 10;
var clock = new THREE.Clock();
var ts = clock.getElapsedTime();
var car = makeCar;
function keyframe(t) {
    var s = ((t - ts) % T) / T;

    for (var i = 1; i < keys.length; i++) {
        if (keys[i][0] > s) break;
    }
    // take i-1
    var ii = i - 1;
    var a = (s - keys[ii][0]) / (keys[ii + 1][0] - keys[ii][0]);



    car.position.lerpVectors(keys[ii][1], keys[ii + 1][1], a);
    car.quaternion.slerpQuaternions(keys[ii][2], keys[ii + 1][2], a);
}
function animate() {

    keyframe(clock.getElapsedTime());

    requestAnimationFrame(animate);
    renderer.render(scene, camera);
}

export { init, animate };
export { camera, scene, renderer };