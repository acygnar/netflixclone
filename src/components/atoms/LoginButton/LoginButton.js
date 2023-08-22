import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { StyledButtonLogin } from './LoginButton.styles';
const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  return <StyledButtonLogin onClick={() => loginWithRedirect()}>Zaloguj się</StyledButtonLogin>;
};

export default LoginButton;
