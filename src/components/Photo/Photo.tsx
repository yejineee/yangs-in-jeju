import { Fragment } from 'react/cjs/react.production.min';
import { DoubleSide, PlaneGeometry } from 'three';

interface BasePhotoProps {
  position: number[]
  args: ConstructorParameters<typeof PlaneGeometry>
  color?: string;
}

const BasePhoto = (props: BasePhotoProps) => {
  return (
    <mesh position={props.position} >
      <planeGeometry args={props.args} />
      <meshBasicMaterial color={props.color || '#dce160'} side={DoubleSide} />
    </mesh>
  );
};

const degreeToRadian = (degree: number) => degree * Math.PI * (1 / 180);

const calcCirclePosition = ({ degree, radius, }: {degree: number, radius : number}) => {
  const radian = degreeToRadian(degree);
  const x = radius * Math.cos(radian);
  const y = radius * Math.sin(radian);

  return [x, y];
};

const getCirclePosArray = ({ count, }: {count: number}): ReturnType<typeof calcCirclePosition>[] => {
  const baseDegree = 360 / count;
  const radius = 100;
  const arr = [];

  for (let i = 0; i < count; i++) {
    arr.push(calcCirclePosition({ degree: baseDegree * i, radius, }));
  }

  return arr;
};

const circlePosArray = getCirclePosArray({ count: 12, });

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
