const Plane = (props) => {
  return (
    <mesh {...props} receiveShadow={true} castShadow={false}>
      <planeGeometry args={[160, 160]} />
      <meshLambertMaterial />
    </mesh>
  );
};

export default Plane;
