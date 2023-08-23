import styled from 'styled-components';

export const HeroWrapper = styled.div`
  width: 100%;
  position: relative;
  background-color: #000;
  height: 56.25vw;
  position: absolute;
  width: 100%;
  z-index: 0;
  img {
    object-fit: cover;
    width: 100%;
    height: auto;
  }
  .hero-info {
    bottom: 35%;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    left: 4%;
    position: absolute;
    top: 0;
    width: 36%;
    z-index: 10;
    h2 {
      margin-bottom: 1.2vw;
      min-height: 13.2vw;
      position: relative;
      font-size: clamp(24px, 5vw, 90px);
      display: flex;
      flex-direction: column;
      justify-content: flex-end;
      text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.45);
    }
    p {
      color: #fff;
      font-size: 1.2vw;
      font-weight: 400;
      line-height: normal;
      margin-top: 0.1vw;
      text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.45);
    }
  }
  .hero-vignette {
    left: 0;
    position: absolute;
    right: 0;
    z-index: 8;
    background-color: transparent;
    background-image: linear-gradient(
      180deg,
      hsla(0, 0%, 8%, 0) 0,
      hsla(0, 0%, 8%, 0.15) 15%,
      hsla(0, 0%, 8%, 0.35) 29%,
      hsla(0, 0%, 8%, 0.58) 44%,
      #141414 68%,
      #141414
    );
    background-position: 0 top;
    background-repeat: repeat-x;
    background-size: 100% 100%;
    bottom: -1px;
    height: 14.7vw;
    opacity: 1;
    top: auto;
    width: 100%;
  }
`;
