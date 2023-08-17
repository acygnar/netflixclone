import styled from 'styled-components';

export const StyledButtonLogin = styled.button`
  border-radius: 4px;
  background: #db202c;
  width: 90px;
  height: 38px;
  flex-shrink: 0;
  border: none;
  color: ${({ theme }) => theme.colors.white};
  cursor: pointer;
`;
