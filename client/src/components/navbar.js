import React from 'react';
import { Link } from 'react-router-dom';
import '../style/estilo1.css';

function NavBar() {
  return (
    <div>
      <h1>Estas en header.</h1>

      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        
        <li>
          <Link to="/new">Nuevo Usuario</Link>
        </li>
      </ul>
    </div>
  )
}

export default NavBar