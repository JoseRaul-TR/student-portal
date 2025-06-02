import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Courses from './pages/Courses';
import News from './pages/News';
import Register from './pages/Register';

function App() {

  return (
    <div  className='bg-light text-dark'>
      <Navbar />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/kurser' element={<Courses />} />
        <Route path='/nyheter' element={<News />} />
        <Route path='/registrering' element={<Register />} />
        <Route path='*' element={<div className=''><h2>404 - Sidan kunde inte hittas</h2></div>} /> {/* Wrong URL route */}
      </Routes>

    </div>
  )
}

export default App;
