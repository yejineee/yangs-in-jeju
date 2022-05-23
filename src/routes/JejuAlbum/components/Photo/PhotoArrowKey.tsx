import { useRef, useEffect } from 'react';
const DEFAULT_Z = -100;
const OFFSET = 100;

const PhotoArrowKey = ({ x, y, onClick, }) => {
  const rightRef = useRef();
  const position = [x + OFFSET, y, DEFAULT_Z];

  useEffect(() => {
    rightRef.current.rotation.z = Math.PI / -4;
  }, []);

  return (
    <>

      {/** right */}
      <mesh ref={rightRef} position={position} onClick={onClick}>
        <tetrahedronGeometry args={[5]}/>
        <meshBasicMaterial color="black" />
      </mesh>
    </>
  );
};

export default PhotoArrowKey;
