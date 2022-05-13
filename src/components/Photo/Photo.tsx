import { getCirclePosArray } from '../../utils/geometry';
import BasePhoto from './BasePhoto';

const circlePosArray = getCirclePosArray({ count: 12, radius: 60, });

const Photo = () => {
  return (
    <>
      {circlePosArray.map(pos =>
        <BasePhoto
          key={`x:${pos[0]}y:${pos[1]}`}
          args={[10, 10]}
          position={[...pos, 0]}
          />
      )}
    </>
  );
};

export default Photo;
