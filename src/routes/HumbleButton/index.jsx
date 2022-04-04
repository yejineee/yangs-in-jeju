import { useEffect, useRef, useState, useMemo } from 'react';
import * as THREE from 'three';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, useHelper } from '@react-three/drei';

const Light = () => {
  const lightRef = useRef();

  useHelper(lightRef, THREE.DirectionalLightHelper, 1);

  useEffect(() => {
    const { camera: shadowCamera } = lightRef.current.shadow;
    shadowCamera.left = -30;
    shadowCamera.right = 30;
    shadowCamera.top = 30;
    shadowCamera.bottom = -30;
  }, []);

  return <directionalLight ref={lightRef} position={[20, 40, 0]} castShadow={true} />;
};

const ButtonSwitch = (props) => {
  const [hovered, hover] = useState(false);

  return (
    <mesh
      {...props}
      onPointerOver={(event) => hover(true)}
      onPointerOut={(event) => hover(false)}
      onPointerDown={props.onDown}
      onPointerUp={props.onUp}
      onClick={props.onClick}
    >
      <cylinderBufferGeometry args={[10, 10, 5, 64, , false]} />
      <meshLambertMaterial color={hovered ? 'hotpink' : 'red'} wireframe={false} />
    </mesh>
  );
};

const ButtonBorder = (props) => {
  return (
    <mesh {...props}>
      <cylinderBufferGeometry args={[13, 13, 5, 64, , false]} />
      <meshLambertMaterial color={'gray'} wireframe={false} />
    </mesh>
  );
};

const SWITCH_Y_NORMAL = 4;
const SWITCH_Y_PRESSED = 1;
const SWITCH_SPEED_TO_PRESS = 400;
const SWITCH_SPEED_TO_NORMAL = 10;

const HumbleButton = (props) => {
  const [switchY, setSwitchY] = useState(SWITCH_Y_NORMAL);
  const [switchPressed, setSwitchPressed] = useState(false);

  const handleSwitchDown = () => {
    setSwitchPressed(true);
  };
  const handleSwitchUp = () => {
    setSwitchPressed(false);
  };

  useFrame((_state, delta) => {
    if (switchPressed && switchY > SWITCH_Y_PRESSED) {
      setSwitchY(Math.max(switchY - SWITCH_SPEED_TO_PRESS * delta, SWITCH_Y_PRESSED));
    }

    if (!switchPressed && switchY < SWITCH_Y_NORMAL) {
      setSwitchY(Math.min(switchY + SWITCH_SPEED_TO_NORMAL * delta, SWITCH_Y_NORMAL));
    }
  });

  return (
    <>
      <ButtonSwitch
        position={[0, switchY, 0]}
        onDown={handleSwitchDown}
        onUp={handleSwitchUp}
        onClick={props.onClick}
      />
      <ButtonBorder />
    </>
  );
};

const HumbleButtonDemo = () => {
  const handleClick = () => {
    console.log('switch click');
  };
  return (
    <Canvas camera={{ fov: 50, near: 0.1, far: 1000, position: [20, 40, 40] }} shadows={true}>
      <Light />
      <HumbleButton onClick={handleClick} />
      <OrbitControls />
    </Canvas>
  );
};

export default HumbleButtonDemo;
