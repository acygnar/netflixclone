import React from 'react';

import HeroStatic from 'components/organisms/HeroStatic/HeroStatic';
import Section from 'components/atoms/Section/Section';
import { Wrapper } from './Start.styles.js';

import tv from 'assets/img/tv.png';
import video1 from 'assets/video/video-tv-0819.m4v';
export default function Start() {
  return (
    <Wrapper>
      <HeroStatic />
      <Section
        title="Enjoy on your TV."
        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus"
        img={tv}
        video={video1}
      />
    </Wrapper>
  );
}
