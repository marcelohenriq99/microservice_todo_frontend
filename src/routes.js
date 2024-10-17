import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/home';
import Login from './pages/login';

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}

export default AppRoutes;