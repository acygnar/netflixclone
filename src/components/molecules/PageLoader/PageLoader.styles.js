import styled from 'styled-components';
import img from 'assets/img/site-spinner.png';

export const Background = styled.div`
  width: 100vw;
  height: 100vh;
  background: #000;
  position: fixed;
  z-index: 10;
  top: 0;
  left: 0;
`;

export const PageLoaderWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  margin: 37px 0 0 -25px;
  width: 50px;
  height: 50px;

  &:after {
    content: '';
    background-image: url(${img});
    background-repeat: no-repeat;
    background-position-x: 50%;
    background-position-y: 50%;
    background-size: 100%;
    position: absolute;
    margin: -6px;
    width: inherit;
    height: inherit;
    animation: nfLoader-spin 1.1s linear infinite;
  }
  @keyframes nfLoader-spin {
    100% {
      transform: rotate(360deg);
    }
  }
`;
