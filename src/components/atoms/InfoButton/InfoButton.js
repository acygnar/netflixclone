import React from 'react';
import { ReactComponent as InfoIcon } from 'assets/icons/info.svg';
import { StyledInfoButton } from './InfoButton.styles';

export default function InfoButton() {
  return (
    <StyledInfoButton>
      <InfoIcon />
      <span>Więcej informacji</span>
    </StyledInfoButton>
  );
}
