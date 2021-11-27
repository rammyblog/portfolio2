import React, { useState } from 'react';
import HeroStyle from './Hero.style';
import Intro from './Intro';
import Navbar from './Navbar';
import OpenBar from '../assets/images/menu-btn.png';
import CloseBar from '../assets/images/close-menu.png';

const Hero = () => {
  const [open, setOpen] = useState(false);
  return (
    <HeroStyle>
      <div className="lines">
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>
      {!open ? (
        <img
          className="menu"
          src={OpenBar}
          alt="open menu"
          onClick={() => setOpen(true)}
        />
      ) : (
        <img
          className="menu"
          src={CloseBar}
          alt="close-menu"
          onClick={() => setOpen(false)}
        />
      )}
      <Navbar open={open} />
      <Intro />
    </HeroStyle>
  );
};

export default Hero;
