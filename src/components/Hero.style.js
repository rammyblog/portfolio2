import styled from 'styled-components';
import { device } from '../helpers/mediaQueries';

const HeroStyle = styled.div`
  min-height: 100vh;
  background: #e72222;

  .lines {
    display: grid;
    grid-template-columns: repeat(8, 1fr);
    height: 100vh;
    position: absolute;
    width: 100%;
  }

  .line {
    border-left: 1px solid #ffffff;
    opacity: 0.1;
  }

  .menu {
    cursor: pointer;
    position: absolute;
    top: 0;
    right: 150px;
    z-index: 9999;
  }

  @media only screen and ${device.mobile} {
    .menu {
      right: 0;
      width: 50px;
      height: 50px;
    }
  }
`;

export default HeroStyle;
