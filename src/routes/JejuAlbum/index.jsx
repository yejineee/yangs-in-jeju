import * as THREE from 'three';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import Island from '../../components/Island';
import Mountain from '../../components/Mountain/Mountain';
import Photo from '../../components/Photo/Photo';
import Light from '../../systems/Light';

const cameraOption = { fov: 50, near: 0.1, far: 1000, position: [30, 30, 30], };

const JejuAlbum = () => {
  return (
    <Canvas camera={cameraOption} shadows={true}>
      <Island />
      <Mountain />
      <Photo />
      <primitive object={new THREE.AxesHelper(100)} />
      <Light />
      <OrbitControls />
    </Canvas>
  );
};

export default JejuAlbum;
