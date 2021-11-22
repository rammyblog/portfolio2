import React from 'react';
import HeroStyle from './Hero.style';
import Intro from './Intro';
import Navbar from './Navbar';

const Hero = () => {
  return (
    <HeroStyle>
      <Navbar />
      <Intro />
    </HeroStyle>
  );
};

export default Hero;
