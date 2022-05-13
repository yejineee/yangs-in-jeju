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

export default BasePhoto;
