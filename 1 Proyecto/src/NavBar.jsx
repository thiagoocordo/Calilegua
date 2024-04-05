import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';


const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark" data-bs-theme="light">
    <div className='ms-2'>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav">
        <Link class="nav-item nav-link" to={'/'}>Paises</Link>
        <Link class="nav-item nav-link" to={'/about'}>Información</Link>
        <Link class="nav-item nav-link" to={'/contact'}>Ubicación</Link>
      </div>
    </div>
  </div>
  </nav>
  );
};

export default NavBar;
