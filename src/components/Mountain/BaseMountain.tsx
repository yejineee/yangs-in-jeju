
interface BaseMountainProps {
  position: number[];
  args: [radiusTop?: number, radiusBottom?: number, height?: number, radialSegments?: number, heightSegments?: number, openEnded?: boolean, thetaStart?: number, thetaLength?: number];
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
