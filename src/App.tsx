import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Auth } from './pages/auth';
import { Dashboard } from './pages/dashboard/layout';
import { Home } from './pages/home';
import { ProtectedRoutes } from './configs/protectedRoutes';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Auth />}></Route>
        <Route path='/home' element={<Home />}></Route>
        <Route element={<ProtectedRoutes />}>
          <Route path='/dashboard' element={<Dashboard />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
