import React from 'react';
import { ReactComponent as PlayIcon } from 'assets/icons/play.svg';
import { StyledPlayButton } from './PlayButton.styles';

export default function PlayButton() {
  return (
    <StyledPlayButton>
      <PlayIcon />
      <span>Odtwórz</span>
    </StyledPlayButton>
  );
}
