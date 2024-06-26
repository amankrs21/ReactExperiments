import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import Home from './pages/home/Home';
import PasswordVal from './pages/password/PasswordVal';
import Navbar from './pages/navbar/Navbar';
import Weather from './pages/weather/Weather';
import Bmi from './pages/bmi/Bmi';
import Calculator from './pages/calculator/Calculator';
import Todo from './pages/todo/Todo';

export default function App() {
  useEffect(() => {
    console.log('App component mounted');
  }, []);
  console.log('App component rendered');
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Navigate to='/home' />} />
        <Route path="/home" element={<Home />} />
        <Route path="/password" element={<PasswordVal />} />
        <Route path='/weather' element={<Weather />} />
        <Route path='/bmi' element={<Bmi />} />
        <Route path='/calculator' element={<Calculator />} />
        <Route path='/todo' element={<Todo />} />
      </Routes>
    </BrowserRouter>
  );
}
