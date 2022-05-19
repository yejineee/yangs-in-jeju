import { useState, useRef } from 'react';
import { DoubleSide, PlaneGeometry, Vector3, TextureLoader } from 'three';
import { useThree, useFrame, useLoader } from '@react-three/fiber';

type Position = [number, number, number]

interface BasePhotoProps {
  position: Position;
  args: ConstructorParameters<typeof PlaneGeometry>;
  color?: string;
}

const DISTANCE_FROM_PHOTO = 8;

const WIREFRAME = 1;

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

  const colorMap = useLoader(TextureLoader, 'cs.png');

  return (
    <>
      <mesh position={[...position.slice(0, 2), position[2] - 0.1]}>
        <planeBufferGeometry attach='geometry' args={[args[0] + WIREFRAME, args[1] + WIREFRAME]} />
        <meshBasicMaterial color={'#dde4e7'} side={DoubleSide} />
      </mesh>
      <mesh ref={ref} position={position} onClick={() => setClicked((prev) => !prev)}>
        <planeBufferGeometry attach='geometry' args={args} />
        <meshBasicMaterial attach="material" map={colorMap} />
      </mesh>
    </>
  );
};

export default BasePhoto;
