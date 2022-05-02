import React, { useEffect } from 'react';
import { Routes, Route, Link } from 'react-router-dom';

import HelloThreePlain from './routes/HelloThreePlain';
import HelloThreeFiber from './routes/HelloThreeFiber';
import HumbleButtonDemo from './routes/HumbleButton';

const NavExamples = () => (
  <nav>
    <ul>
      <li>
        <Link to="/hello-three-plain">Hello Three Plain</Link>
      </li>
      <li>
        <Link to="/hello-three-fiber">Hello Three with Fiber</Link>
      </li>
      <li>
        <Link to="/humble-button">Humble Button</Link>
      </li>
    </ul>
  </nav>
);

const App = () => (
  <Routes>
    <Route path="/" element={<NavExamples />} />
    <Route path="/hello-three-fiber" element={<HelloThreeFiber />} />
    <Route path="/hello-three-plain" element={<HelloThreePlain />} />
    <Route path="/humble-button" element={<HumbleButtonDemo />} />
  </Routes>
);

export default App;
