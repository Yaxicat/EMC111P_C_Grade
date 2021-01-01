//var

let containter;
let camera;
let renderer;
let scene;
let cube;


function init(){
    container = document.querySelector('.scene');

    //scene
    scene = new THREE.Scene();

    const fov = 35;
    const aspect = container.clientWidth / container.clientHeight;
    const near = 0.1;
    const far = 1000;
    
// camera
let camera = new THREE.PerspectiveCamera(
    fov,
    aspect,
    near,
    far
  );
  camera.position.x = 35;
  camera.position.y = 20;
  camera.position.z = 34;

  camera.lookAt(new THREE.Vector3(0, 0, 0));

    //const ambient = new THREE.AmbientLight(0x404040,4);
    //scene.add(ambient);

    let ambient = new THREE.AmbientLight(0xffffff, -20);
    scene.add (ambient);

    light = new THREE.PointLight (0xffffff, 20, 24);
    light.position.set (3,24,4);
    light.castShadow = true;
    light.shadow.camera.near = 0.1;
    light.shadow.camera.far = 25;
    scene.add(light);

    //let light = new THREE.DirectionalLight( 0xffffff, 1, 100 );
    //light.position.set( 0, 90, 0 ); //default; light shining from top
    //light.castShadow = true; // default false
    //scene.add( light );

    //light.shadow.mapSize.width = 512; // default
    //light.shadow.mapSize.height = 512; // default
    //light.shadow.camera.near = 0.5; // default
    //light.shadow.camera.far = 500; // default

    //let spotlighte = new THREE.SpotLight( 0x45F6FF, 10 );
    //spotlighte.position.set (0,20,0);
    //scene.add(spotlighte);

    //let spotlighte2 = new THREE.SpotLight( 0xFF4E45, 300 );
    //spotlighte2.position.set (0,5,-5);
    //scene.add(spotlighte2);

    //renderer
    renderer = new THREE.WebGLRenderer({antialias: false, alpha: true });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(window.devicePixelRation);
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.BasicShadowMap;

    container.appendChild(renderer.domElement);

    function animate(){
        requestAnimationFrame(animate);
        cube.rotation.z += 0.009;
        cube.rotation.x += 0.008;
        cube.rotation.y += 0.005;
        renderer.render(scene, camera);
        cube.castShadow = true;
        cube.receiveShadow = true;
    }

    
    

    //model
    let loader = new THREE.GLTFLoader();
    loader.load('./3D/scene.gltf', function(gltf){
        scene.add(gltf.scene);
        cube = gltf.scene.children[0];
        animate ();
        
    });
}



init();
