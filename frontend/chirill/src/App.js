import React from 'react';
import Default from './Default';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const App = () => (
  <Router>
    <div>
      <Routes>
        <Route path="/" element={<Default />} />
      </Routes>
    </div>
  </Router>
);

export default App;
