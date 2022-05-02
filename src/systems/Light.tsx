import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { useHelper } from '@react-three/drei';

const Light = () => {
  const lightRef = useRef();

  useHelper(lightRef, THREE.DirectionalLightHelper);

  useEffect(() => {
    const { camera: shadowCamera } = lightRef.current.shadow;
    shadowCamera.left = -30;
    shadowCamera.right = 30;
    shadowCamera.top = 30;
    shadowCamera.bottom = -30;
  }, []);

  return <directionalLight ref={lightRef} position={[20, 40, 0]} castShadow={true} />;
};

export default Light;
