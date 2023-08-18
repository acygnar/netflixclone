import styled from 'styled-components';
import gif from 'assets/icons/download-icon.gif';
export const DownloadWrapper = styled.div`
  z-index: -1;
  overflow: hidden;
  position: absolute;
  left: 50%;
  bottom: 8%;
  transform: translateX(-50%);
  margin: 0 auto;
  background: rgb(0, 0, 0);
  display: flex;
  align-items: center;
  width: 60%;
  min-width: 15rem;
  padding: 0.25rem 0.65rem;
  border: 2px solid rgba(128, 128, 128, 0.7);
  box-shadow: 0 0 2em 0 rgb(0, 0, 0);
  border-radius: 0.75rem;
  z-index: 1;
  media screen and (min-width: 600px) {
    padding: 0.35rem 0.75rem;
  }
`;

export const Gif = styled.div`
width: 3rem;
height: 3rem;
outline: 2px solid rgb(0,0,0);
outline-offset: -2px;
display: block;
background: url(${gif}) center center no-repeat;
background-size: 100%;
content: '';
flex-grow: 0;
flex-shrink: 0;
}
`;

export const ImgWrapper = styled.div`
  margin: 0 1rem 0 0;
  flex-grow: 0;
  flex-shrink: 0;
  img {
    height: 3rem;
    @media screen and (min-width: 600px) {
      height: 4rem;
    }
  }
`;

export const ContentWrapper = styled.div`
  text-align: left;
  flex-grow: 1;
  flex-shrink: 1;
  margin: 0.3rem 0;

  h3 {
    padding: 0;
    margin: 0;
    color: rgb(255, 255, 255);
    font-weight: 500;
    font-size: 0.875rem;
    @media screen and (min-width: 600px) {
      font-size: 1rem;
    }
  }
  p {
    padding: 0;
    margin: 0;
    font-size: 0.75rem;
    font-weight: 400;
    color: #0071eb;
    @media screen and (min-width: 600px) {
      font-size: 0.875rem;
    }
  }
`;
