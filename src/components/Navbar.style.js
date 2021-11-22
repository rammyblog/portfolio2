import styled from 'styled-components';
import ActiveBg from '../assets/images/active-bg.png';

const NavbarStyle = styled.div`
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  .logo {
    font-family: Homemade Apple, cursive;
    font-style: normal;
    font-weight: bold;
    font-size: 24px;
    line-height: 29px;

    /* identical to box height */
    letter-spacing: 0.1em;
    color: #000000;
  }
  ul {
    display: flex;
    list-style: none;
    align-items: center;
    justify-content: end;
    margin-right: 59px;
  }
  li:last-child {
    color: #fff;
    z-index: 1;
  }
  li:not(:last-child) {
    margin-right: 44px;
  }

  li a {
    // width: 100%;
    display: block;
  }

  .active {
  }

  .box {
    position: absolute;
    width: 154px;
    height: 62px;
    right: 0;
    top: 0px;
    background: #a0b6ef;
    color: #fff;
  }
`;

export default NavbarStyle;
