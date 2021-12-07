import styled from 'styled-components';

const GradientStyle = styled.div`
  .green-gradient {
    position: absolute;
    width: 300px;
    height: 300px;
    left: -54px;
    top: 0px;
    background: #49e722;
    filter: blur(300px);
    opacity: 0.4;
  }

  .yellow-gradient {
    position: absolute;
    width: 500px;
    height: 500px;
    left: 530px;
    top: 389px;

    background: #eebb06;
    filter: blur(300px);
    opacity: 0.2;
  }
`;

export default GradientStyle;
