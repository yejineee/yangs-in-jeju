import * as THREE from 'three';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import Floor from '../../components/Floor';
import Light from '../../systems/Light';

const JejuAlbum = () => {
  return (
    <Canvas camera={{ fov: 50, near: 0.1, far: 1000, position: [30, 30, 30] }} shadows={true}>
      <Light />
      <Floor />
      <primitive object={new THREE.AxesHelper(100)} />
      <OrbitControls />
    </Canvas>
  );
};

export default JejuAlbum;
