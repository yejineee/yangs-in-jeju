import { useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';


const Box = (props) => {
  const ref = useRef();

  const [clicked, click] = useState(false);
  const [hovered, hover] = useState(false);

  useFrame(() => {
    ref.current.rotation.x += 0.01;
    ref.current.rotation.y += 0.01;
  });

  return (
    <mesh
      {...props}
      ref={ref}
      scale={clicked ? 1.2 : 1}
      onClick={(event) => click(!clicked)}
      onPointerOver={(event) => hover(true)}
      onPointerOut={(event) => hover(false)}
      castShadow={true}
      receiveShadow={true}
    >
      <boxGeometry args={[14, 14, 14]} />
      <meshLambertMaterial color={hovered ? 'hotpink' : 'orange'} wireframe={false} />
    </mesh>
  );
};


export default Box;
