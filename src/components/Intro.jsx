import React from 'react';
import ReactTyped from 'react-typed';
import IntroStyle from './Intro.styles';
import Babatunde from '../assets/images/babatunde.png';

function Intro() {
  return (
    <IntroStyle>
      <div className="name-section">
        <h1 className="name">
          Hey👋🏾! I'm <span className="name-span">Babatunde</span>
        </h1>
        <ReactTyped
          strings={[
            "I'm a full-stack developer.",
            'Motivated, Passionate, Talented',
          ]}
          loop={true}
          typeSpeed={50}
          backSpeed={20}
          backDelay={3000}
          smartBackspace={false}
          cursorChar={'_'}
          className="typed"
        />
        <div className="social-icons">
          <i class="fab fa-github"></i>
          <i class="fab fa-linkedin"></i>
          <i class="fab fa-twitter"></i>
          <i class="fas fa-envelope"></i>
        </div>
        <button className="btn">
          <i class="fas fa-download"></i>Download My Resume
        </button>
      </div>
      <div className="image-section">
        <div className="image-circle">
          <img src={Babatunde} alt="Babatunde" />
        </div>
        <div className="ellipse"></div>
      </div>
    </IntroStyle>
  );
}

export default Intro;
