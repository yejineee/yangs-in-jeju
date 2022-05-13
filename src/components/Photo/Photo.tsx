import { DoubleSide, PlaneGeometry } from 'three';
import { getCirclePosArray } from '../../utils/geometry';
interface BasePhotoProps {
  position: number[]
  args: ConstructorParameters<typeof PlaneGeometry>
  color?: string;
}

const BasePhoto = (props: BasePhotoProps) => {
  return (
    <mesh position={props.position} >
      <planeGeometry args={props.args} />
      <meshBasicMaterial color={props.color || '#dce160'} side={DoubleSide} />
    </mesh>
  );
};

const circlePosArray = getCirclePosArray({ count: 12, radius: 60, });

const Photo = () => {
  return (
    <>
      {circlePosArray.map(pos =>
        <BasePhoto
          key={`x:${pos[0]}y:${pos[1]}`}
          args={[10, 10]}
          position={[...pos, 0]}
          />
      )}
    </>

  );
};

export default Photo;
