

const BaseRock = ({radius, position, color = '#808285'}) => {

  const [x, y, z] = position;

  return (
    <mesh position={[x, y-radius, z]} >
      <dodecahedronGeometry args={[radius]}  />
      <meshBasicMaterial color={color} />
    </mesh>
  );
};

export default BaseRock;
