import styled from 'styled-components';

export const StyledPlayButton = styled.button`
  background-color: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.black};
  padding: 5px 10px;
  @media (min-width: 1500px) {
    padding: 0.8rem 2.4rem 0.8rem 2rem;
  }
  margin-bottom: 1rem;
  border: 0;
  border-radius: 4px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 10px;
  @media (min-width: 768px) {
    font-size: 18px;
  }
  svg {
    height: auto;
    width: 14px;
    margin-right: 0.8rem;
    @media (min-width: 768px) {
      width: 24px;
    }
  }
  trasition: 0.3s;
  &:hover {
    opacity: 0.7;
  }
`;
