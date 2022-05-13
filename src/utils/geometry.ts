const degreeToRadian = (degree: number) => degree * Math.PI * (1 / 180);

const calcCirclePosition = ({ degree, radius, }: {degree: number, radius : number}) => {
  const radian = degreeToRadian(degree);
  const x = radius * Math.cos(radian);
  const y = radius * Math.sin(radian);

  return [x, y];
};

export const getCirclePosArray = ({ count, radius, }: {count: number, radius: number}): ReturnType<typeof calcCirclePosition>[] => {
  const baseDegree = 360 / count;

  return new Array(count).fill(null).reduce((prevPosArr, _, i) => {
    return [...prevPosArr, calcCirclePosition({ degree: baseDegree * i, radius, })];
  }, []);
};
