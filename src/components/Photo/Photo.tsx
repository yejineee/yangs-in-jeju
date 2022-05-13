import { DoubleSide, PlaneGeometry } from 'three';

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

const Photo = () => {
  return (
    <BasePhoto args={[10, 10]} position={[0, 0, 0]} />
  );
};

export default Photo;
