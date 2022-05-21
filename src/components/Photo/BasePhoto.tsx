import { useRef } from 'react';
import { DoubleSide, PlaneGeometry, TextureLoader } from 'three';
import { useLoader } from '@react-three/fiber';

type Position = [number, number, number]

interface BasePhotoProps {
  position: Position;
  args: ConstructorParameters<typeof PlaneGeometry>;
  onClick: any;
}

const WIREFRAME = 1;

const BasePhoto = ({ position, args, onClick, }: BasePhotoProps) => {
  const ref = useRef();

  const colorMap = useLoader(TextureLoader, 'cs.png');

  return (
    <>
      <mesh position={[...position.slice(0, 2), position[2] - 0.1]}>
        <planeBufferGeometry attach='geometry' args={[args[0] + WIREFRAME, args[1] + WIREFRAME]} />
        <meshBasicMaterial color={'#dde4e7'} side={DoubleSide} />
      </mesh>
      <mesh ref={ref} position={position} onClick={() => onClick(position)}>
        <planeBufferGeometry attach='geometry' args={args} />
        <meshBasicMaterial attach="material" map={colorMap} />
      </mesh>
    </>
  );
};

export default BasePhoto;
