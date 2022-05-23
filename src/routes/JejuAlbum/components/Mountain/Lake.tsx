import { CircleGeometry } from 'three';
import { Color } from '@react-three/fiber';

interface LakeProps {
  position: number[];
  args: ConstructorParameters<typeof CircleGeometry>;
  color?: Color;
}

const Lake = ({ position, args, color = '#50bef9', }: LakeProps) => {
  return (
    <mesh position={position} rotation={[-Math.PI / 2, 0, 0]}>
      <circleGeometry args={args} />
      <meshBasicMaterial color={color} />
    </mesh>
  );
};

export default Lake;
