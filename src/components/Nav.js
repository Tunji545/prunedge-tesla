import React from 'react';
import Logo from '../images/tesla-9-logo.png';
import { Link } from 'react-router-dom';

const Nav = () => {
  const navLink = {
    color: '#222',
    textDecoration: 'none',
  };
  return (
    <nav>
      <Link to='/'>
        <img src={Logo} alt='tesla-9-logo.png' width='100' height='100' />
      </Link>
      <h1 class='display'>Menu</h1>
      <ul className='nav-middle'>
        <Link style={navLink} to='/models'>
          <li>ModelS</li>
        </Link>
        <Link style={navLink} to='/model3'>
          <li>Model3</li>
        </Link>
        <Link style={navLink} to='/modelx'>
          <li>ModelX</li>
        </Link>
        <Link style={navLink} to='/modely'>
          <li>ModelY</li>
        </Link>
        <Link style={navLink} to='/solarRoof'>
          <li>Solar Roof</li>
        </Link>
        <Link style={navLink} to='/solarPanels'>
          <li>Solar Panel</li>
        </Link>
      </ul>
      <ul className='nav-right'>
        <Link style={navLink} to='/shop'>
          <li>Shop</li>
        </Link>
        <Link style={navLink} to='/account'>
          <li>Account</li>
        </Link>
        <Link style={navLink} to='menu'>
          <li>Menu</li>
        </Link>
      </ul>
    </nav>
  );
};

export default Nav;
