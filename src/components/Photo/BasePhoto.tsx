import { useState, useRef } from 'react';
import { DoubleSide, PlaneGeometry, Vector3 } from 'three';
import { useThree, useFrame } from '@react-three/fiber';
type Position = [number, number, number]

interface BasePhotoProps {
  position: Position;
  args: ConstructorParameters<typeof PlaneGeometry>;
  color?: string;
}

const DISTANCE_FROM_PHOTO = 8;

const BasePhoto = ({ position, args, color, }: BasePhotoProps) => {
  const state = useThree();
  const ref = useRef();
  const [clicked, setClicked] = useState(false);

  useFrame(() => {
    if (clicked) {
      state.camera.position.lerp(new Vector3(...position.slice(0, 2), position[2] + DISTANCE_FROM_PHOTO), 0.1);
      state.camera.lookAt(...position);
    }
  });

  return (
    <mesh ref={ref} position={position} onClick={() => setClicked((prev) => !prev)}>
      <planeGeometry args={args} />
      <meshBasicMaterial color={color || '#dce160'} side={DoubleSide} />
    </mesh>
  );
};

export default BasePhoto;
