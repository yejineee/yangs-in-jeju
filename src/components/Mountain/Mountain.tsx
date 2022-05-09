import BaseMountain from './BaseMountain';

enum Args {
  RadiusTop,
  RadiusBottom,
  Height,
}

const BASE_RADIUS = 14;
const BASE_HEIGHT = 10;

const bottomMountain = {
  _args: {
    radiusBottom: BASE_RADIUS,
    height: BASE_HEIGHT,
  },
  getArgs () {
    return [this._args.radiusBottom / 2, this._args.radiusBottom, this._args.height];
  },
  getPosition () {
    const pos = {
      x: 0,
      y: this._args.height / 2,
      z: 0,
    };
    return Object.values(pos);
  },
};

const topMountain = {
  _args: {
    radiusBottom: bottomMountain.getArgs()[Args.RadiusTop],
    height: bottomMountain.getArgs()[Args.Height] / 3,
  },
  getArgs () {
    return [this._args.radiusBottom / 2, this._args.radiusBottom, this._args.height];
  },
  getPosition () {
    const pos = {
      x: 0,
      y: bottomMountain.getArgs()[Args.Height] + this._args.height / 2,
      z: 0,
    };
    return Object.values(pos);
  },
};

const Mountain = () => {
  return (
    <>
      <BaseMountain
        position={topMountain.getPosition()}
        args={topMountain.getArgs()}
        color={'#6c6d6e'}
      />
      <BaseMountain
        position={bottomMountain.getPosition()}
        args={bottomMountain.getArgs()}
        color={'#68a95e'}
      />
    </>
  );
};

export default Mountain;
