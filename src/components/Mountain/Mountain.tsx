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

const bottomMountain = {
  args: {
    radiusTop: 7,
    radiusBottom: 14,
    height: 10,
  },
  getArgs () {
    return Object.values(this.args);
  },
  getPosition () {
    const pos = {
      x: 0,
      y: this.args.height / 2,
      z: 0,
    };
    return Object.values(pos);
  },
};

const cleanup = () => {
  controls.destroy();
};

// const initControls = ()

const Mountain = () => {
  const greenMountain = createRef();

  useEffect(() => {
    controls = new dat.GUI();
    const folder = controls.addFolder('Bottom Mountain');
    folder.add(greenMountain.current.position, 'y', 0, 20, 1);
    folder.open();

    return cleanup;
  }, []);

  return (
    <BaseMountain
      ref={greenMountain}
      position={bottomMountain.getPosition()}
      args={bottomMountain.getArgs()}
      color={'#68a95e'}
    />
  );
};

export default Mountain;
