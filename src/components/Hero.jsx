import { useState } from 'react';
import HeroStyle from './Hero.style';
import Intro from './Intro';
import Navbar from './Navbar';
import OpenBar from '../assets/images/menu-btn.png';
import CloseBar from '../assets/images/close-menu.png';
import Gradient from './Gradient';

const Hero = () => {
  const [open, setOpen] = useState(false);
  return (
    <HeroStyle>
      <Gradient />
      <Navbar />
      <Intro />
    </HeroStyle>
  );
};

export default Hero;
