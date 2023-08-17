import React from 'react';
import Logo from 'components/atoms/Logo/Logo';
import { StyledLink, Wrapper, WrapperLogIn } from 'components/organisms/Navigation/Navigation.styles';

import { useAuth0 } from '@auth0/auth0-react';

import LoginButton from 'components/atoms/LoginButton/LoginButton';
import SecondaryNav from 'components/molecules/SecondaryNav/SecondaryNav';

const Navigation = () => {
  const { isAuthenticated } = useAuth0();
  return (
    <Wrapper>
      <Logo />
      {isAuthenticated && (
        <WrapperLogIn>
          <StyledLink exact="true" to="/browse">
            Home
          </StyledLink>
          <StyledLink exact="true" to="/browse/???">
            TV Shows
          </StyledLink>
          <StyledLink exact="true" to="/browse/??">
            Movies
          </StyledLink>
          <StyledLink exact="true" to="/browse/latest">
            New & Popular
          </StyledLink>
          <StyledLink exact="true" to="/browse/my-list">
            My List
          </StyledLink>
        </WrapperLogIn>
      )}
      {!isAuthenticated && <LoginButton />}
      {isAuthenticated && <SecondaryNav />}
    </Wrapper>
  );
};

export default Navigation;
