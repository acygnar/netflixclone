import React from 'react';

import { DownloadWrapper, Gif, ImgWrapper, ContentWrapper } from './Download.styles';
import image from 'assets/img/boxshot.png';

export default function Download() {
  return (
    <DownloadWrapper>
      <ImgWrapper>
        <img src={image} alt="" />
      </ImgWrapper>
      <ContentWrapper>
        <h3>Stranger Things</h3>
        <p>Pobieranie...</p>
      </ContentWrapper>
      <Gif></Gif>
    </DownloadWrapper>
  );
}
