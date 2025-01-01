import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';

import HomePage from './pages/HomePage';
import BlogDetails from './pages/BlogDetails';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/blog/:id" element={<BlogDetails />} />
      </Routes>
    </Router>
  );
}

export default App;

