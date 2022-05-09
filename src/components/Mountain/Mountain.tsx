import { useEffect, createRef, forwardRef } from 'react';
import * as dat from 'dat.gui';
let controls;

interface BaseMountainProps {
  position: number[];
  args: [radiusTop?: number, radiusBottom?: number, height?: number, radialSegments?: number, heightSegments?: number, openEnded?: boolean, thetaStart?: number, thetaLength?: number];
  color: string;
}

const BaseMountain = forwardRef((props: BaseMountainProps, ref) => {
  return (
    <mesh position={props.position} ref={ref}>
      <cylinderGeometry args={props.args} />
      <meshBasicMaterial color={props.color} />
    </mesh>
  );
});

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

const cleanup = () => {
  controls.destroy();
};

const Mountain = () => {
  const greenMountainRef = createRef();
  const topMountainRef = createRef();

  useEffect(() => {
    controls = new dat.GUI();
    const BottomMountainFolder = controls.addFolder('Bottom Mountain');
    BottomMountainFolder.add(greenMountainRef.current.position, 'y', 0, 20, 1);
    BottomMountainFolder.open();

    const topMountainFolder = controls.addFolder('Top Mountain');
    topMountainFolder.add(topMountainRef.current.position, 'y', 0, 20, 1);
    topMountainFolder.open();

    return cleanup;
  }, []);

  return (
    <>
      <BaseMountain
        ref={topMountainRef}
        position={topMountain.getPosition()}
        args={topMountain.getArgs()}
        color={'#6c6d6e'}
      />
      <BaseMountain
        ref={greenMountainRef}
        position={bottomMountain.getPosition()}
        args={bottomMountain.getArgs()}
        color={'#68a95e'}
      />
    </>
  );
};

export default Mountain;
