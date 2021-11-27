import React, { useState } from 'react';
import NavbarStyle from './Navbar.style';

const Navbar = ({ open }) => {
  return (
    <>
      
      <NavbarStyle open={open}>
        <ul>
          <li>
            <a href="#">Work</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
      </NavbarStyle>
      
    </>
  );
};

export default Navbar;
