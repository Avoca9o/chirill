import React from 'react';
import Default from './Default';
import Video from './Video';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const App = () => (
  <Router>
    <div>
      <Routes>
        <Route path="/" element={<Default />} />
        <Route path="/video" element={<Video />} />
      </Routes>
    </div>
  </Router>
);

export default App;
