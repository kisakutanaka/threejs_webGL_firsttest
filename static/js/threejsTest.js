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
    if(resizeRendererToDisplaySize(renderer)){
        const canvas = renderer.domElement;
        camera.aspect = canvas.clientWidth / camera.clientHeight;
        camera.updateProjectionMatrix;
    }

    renderer.render(scene,camera)
}