import * as THREE from 'https://cdn.skypack.dev/three';

var car

function makeCar() {
     car = new THREE.Group();

    var wheel = new THREE.Mesh(new THREE.CylinderGeometry(6, 6, 5, 64), new THREE.MeshBasicMaterial({
        color: 'black'
    }));

    var backWheel = wheel.clone();
    backWheel.position.y = 86;
    backWheel.position.z = -18;
    backWheel.rotation.x = Math.PI / 2;
    //car.add(backWheel);

    var frontWheel1 = wheel.clone();
    frontWheel1.position.set(15, 6, 16.5);
    frontWheel1.rotation.x = Math.PI / 2;
    car.add(frontWheel1);
    var frontWheel2 = wheel.clone();
    frontWheel2.position.set(15, 6, -16.5);
    frontWheel2.rotation.x = Math.PI / 2;
    car.add(frontWheel2);
    var backWheel1 = wheel.clone();
    backWheel1.position.set(-20, 6, -16.5);
    backWheel1.rotation.x = Math.PI / 2;
    car.add(backWheel1);
    var backWheel2 = wheel.clone();
    backWheel2.position.set(-20, 6, 16.5);
    backWheel2.rotation.x = Math.PI / 2;
    car.add(backWheel2);

    var body = new THREE.Mesh(
        new THREE.BoxGeometry(60, 15, 30),
        new THREE.MeshBasicMaterial({
            color: 'red'
        })
    );
    body.position.y = 12;
    car.add(body);

    var cabin = new THREE.Mesh(
        new THREE.BoxGeometry(33, 12, 24),
        new THREE.MeshBasicMaterial({
            color: 'blue'
        })
    );
    cabin.position.x = -6;
    cabin.position.y = 25.5;
    car.add(cabin);

    return car;
}

export { makeCar }