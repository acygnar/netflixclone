import styled from 'styled-components';

export const Title = styled.h1`
  font-size: ${({ theme }) => theme.fontSize.l};
  color: ${({ theme }) => theme.colors.white};
  text-align: center;
  letter-spacing: 2.5px;
  font-weight: ${({ bold }) => (bold ? '700' : '500')};
  @media (min-width: 960px) {
    font-size: ${({ theme }) => theme.fontSize.xl};
    text-align: ${({ center }) => (center ? 'center' : 'left')};
  }
`;
