import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  color: ${({ theme }) => theme.colors.white};
  text-align: center;
  height: 100%;
  box-sizing: border-box;
  padding: 3.5rem 0;
  position: relative;
  @media screen and (min-width: 600px) {
    min-height: auto;
    padding: 4.5rem 0;
  }
`;

export const Container = styled.div`
  margin: auto;
  max-width: calc(100% - 3rem);
  display: flex;
  align-items: center;
  flex-direction: column;
  text-align: center;
  @media screen and (min-width: 600px) {
    max-width: calc(100% - 4rem);
  }
  @media screen and (min-width: 960px) {
    max-width: calc(100% - 4rem);
    flex-direction: row;
  }
  @media screen and (min-width: 1280px) {
    max-width: calc(83.33333333333334% - 6rem);
  }
  @media screen and (min-width: 1920px) {
    max-width: calc(66.66666666666666% - 6rem);
  }
`;

export const DividerBottom = styled.div`
  width: 100%;
  height: 0.5rem;
  position: absolute;
  bottom: -0.5rem;
  background-color: rgb(35, 35, 35);
`;

export const VideoWrapper = styled.div`
  position: relative;
  z-index: 2;
  img {
    width: 100%;
  }
`;
export const Video = styled.div`
  z-index: -1;
  overflow: hidden;
  width: 100%;
  height: 100%;
  max-width: 73%;
  max-height: 54%;
  position: absolute;
  top: 46%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
