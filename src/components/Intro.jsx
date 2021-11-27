import IntroStyle from './Intro.styles';
import Pacman from '../assets/images/pacman.png';
import Arrow from '../assets/images/arrow.png';

function Intro() {
  return (
    <IntroStyle>
      <img src={Pacman} alt="Pacman" className="pacman" />
      <div className="name-section">
        <p className="intro">Hello there,</p>
        <div className="gradient"></div>
        <p className="name">I’m Babatunde</p>
        <div className="pull-right">
          <p className="bio">
            I'm a motivated full stack engineer 🧑🏽‍💻 with great passion for
            building excellent softwares. I build fun stuffs using mostly Python
            and JavaScript. I offer strong aptitude for learning new
            technologies, and a proven track record of meeting aggressive goals.
          </p>
        </div>
      </div>
      <div className="work-section">
        <div className="brown-circle"></div>
        <a className="work-link" href="#">
          Check out my work <img src={Arrow} alt="arrow" />
        </a>
      </div>
    </IntroStyle>
  );
}

export default Intro;
