import styled from 'styled-components';

export const StyledPlayButton = styled.button`
  background-color: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.black};
  padding: 0.8rem 2.4rem 0.8rem 2rem;
  margin-bottom: 1rem;
  margin-right: 1rem;
  border: 0;
  border-radius: 4px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  svg {
    margin-right: 0.8rem;
  }
`;
