
const Floor = () => {

  return (
    <mesh>
      <cylinderGeometry args={[15, 15, 3]} />
      <meshBasicMaterial color={'green'} />
    </mesh>
  )
}

export default Floor;