import React, { useEffect } from 'react';
import * as THREE from 'three';
import Stats from 'stats.js';

const stats = new Stats();
stats.showPanel(0);

const animate = () => {
  stats.begin();

  stats.end();

  requestAnimationFrame(animate);
};

const App = () => {
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    requestAnimationFrame(animate);
    document.body.appendChild(stats.dom);
    return () => {
      document.body.removeChild(stats.dom);
    };
  }, []);

  return <div>Hello Three.js</div>;
};

export default App;
