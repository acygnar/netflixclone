import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Wrapper = styled.nav`
  position: absolute;
  top: 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 50px;
  padding-right: 40px;
  margin-top: 30px;
  height: 68px;
  gap: 24px;
  z-index: 2;
`;

export const WrapperLogIn = styled.div`
  display: flex;
  gap: 30px;
`;

export const StyledLink = styled(NavLink)`
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  color: ${({ theme }) => theme.colors.white};
  text-decoration: none;
  transition: 0.3s;
  &.active {
    font-weight: bold;
  }
  &:hover {
    opacity: 0.7;
  }
`;
