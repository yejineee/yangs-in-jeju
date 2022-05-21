const degreeToRadian = (degree: number) => degree * Math.PI * (1 / 180);

type Position = [number, number, number];

const calcCirclePosition = ({ degree, radius, }: {degree: number, radius : number}): Position => {
  const radian = degreeToRadian(degree);
  const x = radius * Math.cos(radian);
  const y = radius * Math.sin(radian);

  return [x, y, 0];
};

export const getCirclePosArray = ({ count, radius, }: {count: number, radius: number}): Position[] => {
  const baseDegree = 360 / count;

  return new Array(count).fill(null).reduce((prevPosArr, _, i) => {
    return [...prevPosArr, calcCirclePosition({ degree: baseDegree * i, radius, })];
  }, []);
};
