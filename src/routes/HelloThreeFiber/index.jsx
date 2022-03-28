import { useEffect, useRef, useState, useMemo } from 'react';
import * as THREE from 'three';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, useHelper } from '@react-three/drei';

const Plane = (props) => {
  return (
    <mesh {...props} receiveShadow={true} castShadow={false}>
      <planeGeometry args={[160, 160]} />
      <meshLambertMaterial />
    </mesh>
  );
};

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

const Light = () => {
  const lightRef = useRef();

  useHelper(lightRef, THREE.DirectionalLightHelper, 1);

  useEffect(() => {
    const { camera: shadowCamera } = lightRef.current.shadow;
    shadowCamera.left = -30;
    shadowCamera.right = 30;
    shadowCamera.top = 30;
    shadowCamera.bottom = -30;
  }, []);

  return <directionalLight ref={lightRef} position={[20, 40, 0]} castShadow={true} />;
};

const HelloThreeFiber = () => {
  return (
    <Canvas camera={{ fov: 50, near: 0.1, far: 1000, position: [20, 80, 140] }} shadows={true}>
      <Light />
      <Box position={[-12, 0, 0]} />
      <Box position={[12, 0, 0]} />
      <Plane position={[0, -24, 0]} rotation={[-Math.PI / 2, 0, 0]} />
      <OrbitControls />
    </Canvas>
  );
};

export default HelloThreeFiber;
