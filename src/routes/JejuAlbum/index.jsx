import * as THREE from 'three';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import Island from '../../components/Island';
import Light from '../../systems/Light';

const JejuAlbum = () => {
  return (
    <Canvas camera={{ fov: 50, near: 0.1, far: 1000, position: [0,30,30] }} shadows={true}>
      <Light />
      <Island />
      <primitive object={new THREE.AxesHelper(100)} />
      <OrbitControls />
    </Canvas>
  );
};

export default JejuAlbum;
