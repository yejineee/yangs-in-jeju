import BaseMountain from './BaseMountain';
import Lake from './Lake';

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

const lake = {
  _args: {
    radius: topMountain.getArgs()[Args.RadiusTop],
  },
  getArgs () {
    return Object.values(this._args);
  },
  getPosition () {
    const pos = {
      x: 0,
      y: topMountain.getArgs()[Args.Height] + bottomMountain.getArgs()[Args.Height] + 0.1, // TODO: 0.1 뺐을 때 현상 알아보기
      z: 0,
    };
    return Object.values<number>(pos);
  },
};

const Mountain = () => {
  return (
    <>
      <Lake
        position={lake.getPosition()}
        args={lake.getArgs()}
      />
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
