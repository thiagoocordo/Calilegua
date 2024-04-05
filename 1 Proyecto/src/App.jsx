import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './NavBar';
import './App.css';
import Paises from './Paises';
import Info_Paises from './Info_Paises';
import Ubicacion from './Ubicacion';

function App() {

  return (
    <div className='dark'>
    <>
    <Router>
      <div>
        <NavBar />
        <Routes>
          <Route path="/" element={<Paises />} />
          <Route path="/about" element={<Info_Paises/>} />
          <Route path="/contact" element={<Ubicacion/>} />
        </Routes>
      </div>
    </Router>
    </>
    </div>
  )
}

export default App
