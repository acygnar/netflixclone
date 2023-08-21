import styled from 'styled-components';

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
