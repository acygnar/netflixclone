import styled from 'styled-components';

export const Section = styled.div`
  display: flex;
  justify-content: center;
  color: ${({ theme }) => theme.colors.white}
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
