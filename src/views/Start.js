import React from 'react';

import HeroStatic from 'components/organisms/HeroStatic/HeroStatic';
import Section from 'components/molecules/Section/Section';
import Faq from 'components/organisms/Faq/Faq';
import { Wrapper } from './Start.styles.js';

import tv from 'assets/img/tv.png';
import appleDevice from 'assets/img/device-pile.png';
import mobile from 'assets/img/mobile-0819.jpeg';
import children from 'assets/img/children.png';
import video1 from 'assets/video/video-tv-0819.m4v';
import video2 from 'assets/video/video-devices.m4v';
export default function Start() {
  return (
    <Wrapper>
      <HeroStatic />
      <Section
        title="Enjoy on your TV."
        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus."
        videoimg={tv}
        video={video1}
      />

      <Section
        title="Download your shows to watch offline."
        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam."
        image={mobile}
        download={true}
      />

      <Section
        apple={true}
        title="Watch everywhere."
        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam."
        videoimg={appleDevice}
        video={video2}
      />

      <Section
        title="Create profile for children."
        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis."
        image={children}
      />

      <Faq />
    </Wrapper>
  );
}
