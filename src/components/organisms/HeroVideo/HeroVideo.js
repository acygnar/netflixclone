import React from 'react';
import { HeroWrapper } from './HeroVideo.styles';
import PlayButton from 'components/atoms/PlayButton/PlayButton';
export default function HeroVideo({ image, video, title, desc }) {
  const baseUrl = 'https://image.tmdb.org/t/p/original';
  return (
    <HeroWrapper>
      <img src={baseUrl + '/' + image} alt="" />
      <div className="hero-info">
        <h2>{title}</h2>
        <p>{desc.split('. ', 1)[0]}.</p>
        <div>
          <PlayButton>Odtwórz</PlayButton>
          <button>Więcej informacji</button>
        </div>
      </div>
      <div className="hero-vignette"></div>
    </HeroWrapper>
  );
}
