import React from 'react';
import { HeroWrapper } from './HeroVideo.styles';
export default function HeroVideo({ image, video }) {
  const baseUrl = 'https://image.tmdb.org/t/p/original';
  return (
    <HeroWrapper>
      <img src={baseUrl + '/' + image} alt="" />
    </HeroWrapper>
  );
}
