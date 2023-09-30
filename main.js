import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import SceneInit from './SceneInit';

const loader = new GLTFLoader();
const test = new SceneInit('root');
test.initialize();
test.animate();

loader.load('/shiba/scene.gltf', gltf => {

  test.scene.add(gltf.scene);

})