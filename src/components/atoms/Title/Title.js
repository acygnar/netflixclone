import styled from 'styled-components';

export const Title = styled.h1`
  font-size: ${({ theme }) => theme.fontSize.xl};
  color: ${({ theme }) => theme.colors.white};
  text-align: ${({ center }) => (center ? 'center' : 'left')};
  letter-spacing: 2.5px;
  font-weight: ${({ bold }) => (bold ? '700' : '500')};
`;
