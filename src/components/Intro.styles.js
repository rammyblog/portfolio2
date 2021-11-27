import styled from 'styled-components';
import { device } from '../helpers/mediaQueries';

const IntroStyle = styled.div`
  color: #fff;
  height: 100vh;
  position: relative;

  .pacman {
    position: absolute;
    top: 108px;
    left: 189px;
  }
  .name-section {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: auto;
    width: 60%;
    height: 60vh;
    position: relative;
  }
  .intro {
    font-family: 'Clash Display', sans-serif;
    font-style: normal;
    font-weight: bold;
    font-size: 2.25rem;
    line-height: 44px;
    letter-spacing: 0.03em;

    color: #edff7d;
    margin-bottom: 0;
  }

  .name {
    font-family: 'Clash Display', sans-serif;
    font-style: normal;
    font-weight: bold;
    font-size: 6rem;
    line-height: 118px;

    /* identical to box height */
    letter-spacing: 0.03em;

    color: #ffffff;
    margin: 0;
  }
  .pull-right {
    position: relative;
  }
  .bio {
    font-family: Montserrat;
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    line-height: 22px;

    color: #ffffff;
    width: 45%;
    margin-right: 0;
    position: absolute;
    right: 112px;
    top: -11px;
  }

  .gradient {
    background: #e8ff5a;
    opacity: 0.5;
    filter: blur(200px);
    border-radius: 50px;
    position: absolute;
    bottom: 147px;
    width: 193px;
    height: 193px;
  }
  .work-section {
    display: flex;

    align-items: center;
    position: absolute;
    bottom: 70px;
    left: 158px;
  }
  .brown-circle {
    background: rgba(0, 0, 0, 0.35);
    width: 77px;
    height: 77px;
    border-radius: 38.5px;
  }

  .work-link {
    font-family: Montserrat;
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    line-height: 22px;
    margin-left: -40px;
    /* identical to box height */

    color: #ffffff;
    text-decoration: none;

    :hover {
      text-decoration: none;
      color: #fff;
    }
    & img {
      margin-left: 12px;
    }
  }

  @media only screen and ${device.laptop} {
    .name {
      font-size: 5rem;
    }

    .bio {
      right: 0;
    }

    .pacman {
      left: 140px;
    }
  }

  @media only screen and ${device.tablet} {
    .name {
      font-size: 3.7rem;
    }
    .bio {
      width: 60%;
      text-align: justify;
    }
  }

  @media only screen and ${device.mobile} {
    .name {
      font-size: 2rem;
    }
    .bio {
      width: 100%;
    }

    .pacman {
      left: 50px;
    }

    .work-section {
      left: 30px;
    }

    .intro {
      font-size: 1.4rem;
    }
  }

  @media only screen and ${device.iPhoneX} {
    .name {
      font-size: 1.5rem;
    }
    .bio {
      font-size: 0.8rem;
    }

    .pacman {
      left: 50px;
    }

    .work-section {
      left: 30px;
    }
  }
`;

export default IntroStyle;
