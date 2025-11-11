import React from 'react';
import { Link } from 'react-router-dom';
import '../CssFolder/Navbar.css';

function Navbar({ cartCount }) {
  return (
    <div>
      <nav id='nav-bar'>
        <ul id='ulo'>
          <li><Link to={"/"}>Home</Link></li>
          <li><Link to={"/Shop"}>Shop</Link></li>
          <li><Link to={'/Cart'}>
            <img src='Cart.png' alt="Cart" />
            ({cartCount})
          </Link></li>
          <li><Link to={"/About"}>About</Link></li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
