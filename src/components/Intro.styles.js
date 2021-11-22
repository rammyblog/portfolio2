import styled from 'styled-components';

const IntroStyle = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 1rem 4rem;
  .name-section {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  .name {
    font-family: Inter;
    font-style: normal;
    font-weight: 900;
    font-size: 64px;
    line-height: 77px;
    letter-spacing: 0.01em;

    color: rgba(0, 0, 0, 0.6);
  }
  .name-span {
    color: #a0b6ef;
  }

  .typed {
    font-family: Inter;
    font-style: normal;
    font-weight: 500;
    font-size: 40px;
    line-height: 48px;
    letter-spacing: 0.01em;

    color: rgba(0, 0, 0, 0.6);
  }
  .image-section {
    position: relative;
  }
  .image-circle img {
    width: 500px;
    height: 500px;
    border-radius: 50%;
    object-fit: cover;
  }
  .ellipse {
    background: #a0b6ef;
    filter: blur(200px);
    width: 398px;
    height: 406px;
    position: absolute;
    top: 13rem;
    z-index: -1;
    left: 50px;
  }

  .btn {
    font-family: Inter;
    display: flex;
    align-items: center;
    padding: 21px 30px;
    width: 256px;
    height: 76px;
    background: #8092bf;
    border: 1px solid #a0b6ef;
    box-sizing: border-box;
    border-radius: 100px;
    color: #fff;
    font-weight: 500;
    font-size: 16px;
    line-height: 29px;
    letter-spacing: 0.01em;
    color: #fcfcfc;
    margin-top: 6rem;
  }
  .btn i {
    color: #fff;
    margin-right: 5px;
  }
  .social-icons {
    display: flex;
    justify-content: space-between;
    width: 30%;
    margin-top: 2rem;
  }
  .social-icons i {
    color: #a0b6ef;
    font-size: 30px;
  }
`;

export default IntroStyle;
