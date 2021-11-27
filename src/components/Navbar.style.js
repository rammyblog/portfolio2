import styled, { css } from 'styled-components';
import ActiveBg from '../assets/images/active-bg.png';
import { device } from '../helpers/mediaQueries';

const NavbarStyle = styled.div`
  background: #fff;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 1;
  justify-content: center;
  align-items: center;
  display: flex;
  ${(props) =>
    props.open
      ? css`
          transform: translateX(0px);
          transition: transform 1s ease-in, visibility 0s;
          visibility: visible;
        `
      : css`
          transform: translateX(-1500px);
          transition: transform 1s ease-out, visibility 1s;
          visibility: hidden;
        `}

  ul {
    list-style: none;
    text-align: center;
  }
  li {
    margin-top: 73px;
  }
  a {
    font-family: Montserrat;
    font-style: normal;
    font-weight: bold;
    font-size: 36px;
    line-height: 44px;

    /* identical to box height */

    color: #000000;
    text-decoration: none;

    &:hover {
      border-bottom: 3px solid #000000;
    }
  }

  @media only screen and ${device.tablet} {
    ${(props) =>
      props.open
        ? css`
            transform: translateX(0px);
            transition: transform 0.5s ease-in, visibility 1s;
            visibility: visible;
          `
        : css`
            transform: translateX(-500px);
            transition: transform 1s ease-out, visibility 1s;
            visibility: hidden;
          `}
  }
`;

export default NavbarStyle;
