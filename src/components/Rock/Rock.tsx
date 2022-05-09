import BaseRock from './BaseRock';
import { FLOOR_SIZE } from '../Floor';

const X = 0;
const Z = 2;

const { radiusBottom: FLOOR_RADIUS, } = FLOOR_SIZE;

const RADIUS = {
  SMALL: FLOOR_RADIUS / 5,
  MEDIUM: FLOOR_RADIUS / 3,
  BIG: FLOOR_RADIUS / 2,
};

const BASE_RANDOM = FLOOR_RADIUS / 10;

const getRadius = (size) => {
  const radius = RADIUS[size] + Math.random() * BASE_RANDOM;
  return Math.min(radius, RADIUS.BIG);
};

const CENTER_ROCK = { radius: getRadius('BIG'), position: [0, -5, 0], }; // center

const POSITION = {
  EAST: CENTER_ROCK.position[X] + CENTER_ROCK.radius,
  WEST: CENTER_ROCK.position[X] - CENTER_ROCK.radius,
  SOUTH: CENTER_ROCK.position[Z] + CENTER_ROCK.radius,
  NORTH: CENTER_ROCK.position[Z] - CENTER_ROCK.radius,
};

const SMALL_ROCK = [
  { radius: getRadius('SMALL'), position: [POSITION.EAST, 0, POSITION.NORTH], }, // 북동
  { radius: getRadius('SMALL'), position: [POSITION.WEST, 0, POSITION.NORTH], }, // 북서
  { radius: getRadius('SMALL'), position: [POSITION.EAST, 0, POSITION.SOUTH], }, // 남동
  { radius: getRadius('SMALL'), position: [POSITION.WEST, 0, POSITION.SOUTH], } // 남서

];

const MEDIUM_ROCK = [
  { radius: getRadius('MEDIUM'), position: [POSITION.EAST, 0, 0], }, // 동
  { radius: getRadius('MEDIUM'), position: [POSITION.WEST, 0, 0], }, // 서
  { radius: getRadius('MEDIUM'), position: [0, 0, POSITION.SOUTH], }, // 남
  { radius: getRadius('MEDIUM'), position: [0, 0, POSITION.NORTH], } // 북
];

const DATA = [
  CENTER_ROCK,
  ...SMALL_ROCK,
  ...MEDIUM_ROCK
];

const Rock = () => {
  return (
    <>
      {DATA.map((value) => (
        <BaseRock key={value.radius} {...value}/>
      ))}
    </>
  );
};

export default Rock;
