import React, { useEffect } from 'react';
import { Routes, Route, Link } from 'react-router-dom';

import HelloThreePlain from './routes/HelloThreePlain';
import HelloThreeFiber from './routes/HelloThreeFiber';
import FaceApiTest from './routes/FaceApiTest';

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
        <Link to="/face-api-test">Face API Test</Link>
      </li>
    </ul>
  </nav>
);

const App = () => (
  <Routes>
    <Route path="/" element={<NavExamples />} />
    <Route path="/hello-three-fiber" element={<HelloThreeFiber />} />
    <Route path="/hello-three-plain" element={<HelloThreePlain />} />
    <Route
      path="/face-api-test"
      element={
        <React.Suspense fallback={<>...</>}>
          <FaceApiTest />
        </React.Suspense>
      }
    />
  </Routes>
);

export default App;
