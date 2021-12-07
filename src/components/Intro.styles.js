import styled from 'styled-components';
import { device } from '../helpers/mediaQueries';

const IntroStyle = styled.div`
  color: #fff;
  height: 100vh;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .intro-section {
    font-family: Montserrat;
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    line-height: 20px;
    color: #333333;
    width: 30%;
    margin: 0;
    margin-left: 160px;
  }

  .name {
    font-family: Clash Display;
    font-style: normal;
    font-weight: bold;
    font-size: 72px;
    line-height: 63px;
    color: #000000;
    margin: 0;
  }

  .summary {
    font-size: 16px;
    line-height: 22px;
    color: #000000;
  }

  .work-btn {
    background: #eebb06;
    box-shadow: 0px 4px 30px rgba(238, 187, 6, 0.2);
    border-radius: 30px;
    border: none;
    font-family: Montserrat;
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    line-height: 20px;

    /* identical to box height */

    color: #000000;
    padding: 20px 34px;
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
  .picture-section {
    margin-right: 105px;
    position: absolute;
    top: -41px;
    right: 0;

    img {
      width: 100%;
      height: 80vh;
    }
  }

  @media only screen and ${device.laptop} {
    .name {
      font-size: 5rem;
      line-height: normal;
    }

    .bio {
      right: 0;
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
      margin-bottom: 10px;
    }
    .bio {
      width: 100%;
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
      font-size: 1.7rem;
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
