import { useState } from 'react';
import { getCirclePosArray } from '../../utils/geometry';
import BasePhoto from './BasePhoto';
import PhotoArrowKey from './PhotoArrowKey';
import { useThree, useFrame } from '@react-three/fiber';
import { Vector3 } from 'three';
import { IMAGE_NAME } from '../../constants/image';

const PHOTO_COUNT = 10;
const getNextPosIndex = (index: number) => (index + 1) % PHOTO_COUNT;

const circlePosArray = getCirclePosArray({ count: PHOTO_COUNT, radius: 60, });

const DISTANCE_FROM_PHOTO = 8;

const MODE = {
  ISLAND: true,
  PHOTO: false,
};

const Photo = () => {
  const [mode, setMode] = useState(MODE.ISLAND);
  const [curPhoto, setCurPhoto] = useState({ position: [], index: null, });
  const state = useThree();

  const moveCamera = () => {
    const [x, y, z] = curPhoto.position;
    state.camera.position.lerp(new Vector3(x, y, z + DISTANCE_FROM_PHOTO), 0.1);
    state.camera.lookAt(...curPhoto.position);
  };

  useFrame(() => {
    if (mode === MODE.PHOTO) {
      moveCamera();
    }
  });

  const onClickPhoto = (position, index) => {
    setMode(!mode);
    setCurPhoto({ position, index, });
  };

  const onClickArrowKey = () => {
    const nextIndex = getNextPosIndex(curPhoto.index);
    setCurPhoto({ position: circlePosArray[nextIndex], index: nextIndex, });
    moveCamera();
  };

  const isPhotoMode = () => mode === MODE.PHOTO;

  return (
    <>
      {isPhotoMode() &&
        <PhotoArrowKey
          x={curPhoto.position[0]}
          y={curPhoto.position[1]}
          onClick={onClickArrowKey}
        />}
      {circlePosArray.map((pos, index) =>
        <BasePhoto
          key={`x:${pos[0]}y:${pos[1]}`}
          args={[10, 10]}
          position={[...pos, 0]}
          onClick={onClickPhoto}
          index={index}
          imageName={IMAGE_NAME[index]}
          />
      )}
    </>
  );
};

export default Photo;
