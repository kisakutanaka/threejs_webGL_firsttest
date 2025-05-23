var canvasWidth = 600;
var canvasHeight = 600;

var renderer, scene, camera, light;

scene = new THREE.Scene();

camera = new THREE.PerspectiveCamera(
    45,
    canvasWidth/canvasHeight,
    1,
    10000
);
camera.position.set(0,0,+1000)

renderer = new THREE.WebGLRenderer({canvas: document.querySelector("#testCanvas")});
renderer.setPixelRatio(window.devicePixelRatio);

var geometry, material, box, time;

init()

animate()

function init(){
    geometry = new THREE.BoxGeometry(250,250,250);
    material = new THREE.MeshBasicMaterial({
        color:0xffffff
    });
    box = new THREE.Mesh(geometry,material);
    scene.add(box);

    light = new THREE.DirectionalLight(0xffffff);
    light.intensity = 2;
    light.position.set(1,1,1);
    scene.add(light);
}

function animate(){
    window.requestAnimationFrame(animate);
    render();
}

function resizeRendererToDisplaySize(renderer){
    const canvas = renderer.domElement;
    const width = canvas.clientWidth;
    const height = canvas.clientHeight;
    const needResize = canvas.width !== width || canvas.height !== height;
    if(needResize){
        renderer.setSize(width,height,false);
    }
    return needResize;
}

function render(){
    if (resizeRendererToDisplaySize(renderer)) {
		const canvas = renderer.domElement;
		camera.aspect = canvas.clientWidth / canvas.clientHeight;
		camera.updateProjectionMatrix();
	  }

    //boxを回転させるよ
	box.rotation.x += 0.01;
	box.rotation.y += 0.01;
	
	renderer.render(scene, camera);
}