export const FLOOR_SIZE = {
  radiusTop: 22,
  radiusBottom: 20,
  height: 3,
};

export const FLOOR_POSITION = {
  x: 0,
  y: 0,
  z: 0,
};

const Floor = () => {
  return (
    <mesh position={[FLOOR_POSITION.x, FLOOR_POSITION.y, FLOOR_POSITION.z]}>
      <cylinderGeometry args={Object.values(FLOOR_SIZE)} />
      <meshBasicMaterial color={'#acd877'} />
    </mesh>
  );
};

export default Floor;
