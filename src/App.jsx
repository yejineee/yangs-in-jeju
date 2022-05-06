import React, { useEffect } from 'react';
import { Routes, Route, Link } from 'react-router-dom';

import HelloThreePlain from './routes/HelloThreePlain';
import HelloThreeFiber from './routes/HelloThreeFiber';
import HumbleButtonDemo from './routes/HumbleButton';
import JejuAlbum from './routes/JejuAlbum';

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
      <li>
        <Link to="/jeju-album">Jeju Album</Link>
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
    <Route path="/jeju-album" element={<JejuAlbum />} />
  </Routes>
);

export default App;
