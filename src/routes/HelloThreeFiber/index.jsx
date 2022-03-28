import { Canvas, useFrame } from '@react-three/fiber';
import { useRef, useState, forwardRef } from 'react';
import * as THREE from 'three';

const Plane = forwardRef((props, ref) => {
  return (
    <mesh {...props} ref={ref} receiveShadow={true} castShadow={false}>
      <planeGeometry args={[160, 160]} />
      <meshLambertMaterial />
    </mesh>
  );
});

const Box = (props) => {
  const ref = useRef();

  const [clicked, click] = useState(false);
  const [hovered, hover] = useState(false);

  useFrame(() => {
    ref.current.rotation.x += 0.01;
    ref.current.rotation.y += 0.01;
  });

  return (
    <mesh
      {...props}
      ref={ref}
      scale={clicked ? 1.2 : 1}
      onClick={(event) => click(!clicked)}
      onPointerOver={(event) => hover(true)}
      onPointerOut={(event) => hover(false)}
      castShadow={true}
      receiveShadow={true}
    >
      <boxGeometry args={[14, 14, 14]} />
      <meshLambertMaterial color={hovered ? 'hotpink' : 'orange'} wireframe={false} />
    </mesh>
  );
};

const HelloThreeFiber = () => {
  const shadowCamera = new THREE.OrthographicCamera(-100, 100, 100, -100, 0.5, 1000);
  shadowCamera.lookAt(0, 0, 0);

  const planeRef = useRef();

  return (
    <Canvas camera={{ fov: 50, near: 0.1, far: 1000, position: [20, 80, 140] }} shadows={true}>
      <directionalLight
        target={planeRef.current}
        shadow={{ camera: shadowCamera }}
        position={[20, 40, 0]}
        color={0xff0000}
        castShadow={true}
      />
      <Box position={[-12, 0, 0]} />
      <Box position={[12, 0, 0]} />
      <Plane ref={planeRef} position={[0, -10, 0]} rotation={[-Math.PI / 2, 0, 0]} />
    </Canvas>
  );
};

export default HelloThreeFiber;
