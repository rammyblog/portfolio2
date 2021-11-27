import styled from 'styled-components';

const IntroStyle = styled.div`
  color: #fff;
  height: 100vh;
  postion: relative;
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
    font-family: Clash Display;
    font-style: normal;
    font-weight: bold;
    font-size: 36px;
    line-height: 44px;
    letter-spacing: 0.03em;

    color: #edff7d;
    margin-bottom: 0;
  }

  .name {
    font-family: Clash Display;
    font-style: normal;
    font-weight: bold;
    font-size: 96px;
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
`;

export default IntroStyle;
