import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar/Navbar';
import Welcome from './pages/Welcome/Welcome';
import Vendors from './pages/Vendors/Vendors';
import VendorDetail from './pages/VendorDetail/VendorDetail';
import Login from './pages/Login/Login';

const App = () => {
  return (
    <Router>
      <Navbar />
      <main style={{ paddingTop: '70px', minHeight: 'calc(100vh - 70px)' }}>
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/vendors" element={<Vendors />} />
          <Route path="/vendor/:id" element={<VendorDetail />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </main>
    </Router>
  );
};

export default App;
