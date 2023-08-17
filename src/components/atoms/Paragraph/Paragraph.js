import styled from 'styled-components';

export const Paragraph = styled.p`
  font-size: ${({ theme, big }) => (big ? theme.fontSize.l : theme.fontSize.m)};
  color: ${({ theme }) => theme.colors.white};
  text-align: ${({ center }) => (center ? 'center' : 'none')};
  letter-spacing: 1.5px;
  font-weight: 400;
`;
