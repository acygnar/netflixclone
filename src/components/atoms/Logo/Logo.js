import React from 'react';
import { ReactComponent as LogoSvg } from 'assets/svgs/logo.svg';
import { Wrapper } from './Logo.styles';

export default function Logo() {
  return (
    <Wrapper>
      <LogoSvg />
    </Wrapper>
  );
}
