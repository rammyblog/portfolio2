import React from 'react';
import NavbarStyle from './Navbar.style';

const Navbar = () => {
  return (
    <NavbarStyle>
      <div className='logo'>Babatunde Onasanya</div>
      <ul>
        <li>
          <a className="active">Home</a>
        </li>
        <li>
          <a className="">About</a>
        </li>
        <li>
          <a>Skills</a>
        </li>
        <li>
          <a>Works</a>
        </li>
        <li>
          <a>Contact</a>
        </li>
      </ul>
      <div className="box"></div>
    </NavbarStyle>
  );
};

export default Navbar;
