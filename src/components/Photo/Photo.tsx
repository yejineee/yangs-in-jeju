import { useState } from 'react';
import { getCirclePosArray } from '../../utils/geometry';
import BasePhoto from './BasePhoto';
import { useThree, useFrame } from '@react-three/fiber';
import { Vector3 } from 'three';

const circlePosArray = getCirclePosArray({ count: 12, radius: 60, });

const DISTANCE_FROM_PHOTO = 8;

const MODE = {
  ISLAND: true,
  PHOTO: false,
};

const Photo = () => {
  const [mode, setMode] = useState(MODE.ISLAND);
  const [curPhotoPos, setCurPhotoPos] = useState(null);
  const state = useThree();

  useFrame(() => {
    if (mode === MODE.PHOTO) {
      state.camera.position.lerp(new Vector3(...curPhotoPos.slice(0, 2), curPhotoPos[2] + DISTANCE_FROM_PHOTO), 0.1);
      state.camera.lookAt(...curPhotoPos);
    }
  });

  const onClick = (position) => {
    setMode(!mode);
    setCurPhotoPos(position);
  };

  return (
    <>
      {circlePosArray.map(pos =>
        <BasePhoto
          key={`x:${pos[0]}y:${pos[1]}`}
          args={[10, 10]}
          position={[...pos, 0]}
          onClick={onClick}
          />
      )}
    </>
  );
};

export default Photo;
