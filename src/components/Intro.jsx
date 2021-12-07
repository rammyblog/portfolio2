import IntroStyle from './Intro.styles';
import Pacman from '../assets/images/pacman.png';
import Arrow from '../assets/images/arrow.png';
import Rammy from '../assets/images/rammy.png';

function Intro() {
  return (
    <IntroStyle>
      <div className="intro-section">
        <p className='hello'>Hello there, I’m</p>
        <p className="name">Babatunde Onasanya</p>
        <p className="summary">
          I'm a motivated full stack engineer 🏽‍💻 with great passion for
          building excellent softwares.
        </p>
        <button className="work-btn">Check out my work</button>
      </div>
      <div className="picture-section">
        <img src={Rammy} alt="Babatunde" />
      </div>

    </IntroStyle>
  );
}

export default Intro;
