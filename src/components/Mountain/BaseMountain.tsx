import { CylinderGeometry } from 'three';
interface BaseMountainProps {
  position: number[];
  args: ConstructorParameters<typeof CylinderGeometry>;
  color: string;
}

const BaseMountain = (props: BaseMountainProps) => {
  return (
    <mesh position={props.position} >
      <cylinderGeometry args={props.args} />
      <meshBasicMaterial color={props.color} />
    </mesh>
  );
};

export default BaseMountain;
