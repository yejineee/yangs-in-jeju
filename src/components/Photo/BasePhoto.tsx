import { DoubleSide, PlaneGeometry, TextureLoader } from 'three';
import { useLoader } from '@react-three/fiber';
import { IMAGE_NAME } from '../../constants/image';

type Position = [number, number, number]

interface BasePhotoProps {
  position: Position;
  args: ConstructorParameters<typeof PlaneGeometry>;
  onClick: any;
  index: number;
  imageName: string;
}

const WIREFRAME = 1;

const BasePhoto = ({ position, args, onClick, index, imageName, }: BasePhotoProps) => {
  const colorMap = useLoader(TextureLoader, imageName ?? IMAGE_NAME[0]);

  return (
    <>
      <mesh position={[...position.slice(0, 2), position[2] - 0.1]}>
        <planeBufferGeometry attach='geometry' args={[args[0] + WIREFRAME, args[1] + WIREFRAME]} />
        <meshBasicMaterial color={'#dde4e7'} side={DoubleSide} />
      </mesh>
      <mesh position={position} onClick={() => onClick(position, index)}>
        <planeBufferGeometry attach='geometry' args={args} />
        <meshBasicMaterial attach="material" map={colorMap} />
      </mesh>
    </>
  );
};

export default BasePhoto;
