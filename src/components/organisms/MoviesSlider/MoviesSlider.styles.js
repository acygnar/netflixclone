import styled from 'styled-components';
import { SwiperSlide } from 'swiper/react';

export const SliderWrapper = styled.div`
  z-index: 2;
  position: relative;
  box-sizing: border-box;
  margin: 3vw 0;
  padding-right: 4%;
`;

export const SliderTitle = styled.h3`
  color: #e5e5e5;
  font-size: clamp(16px, 5vw, 24px);
`;

export const StyledSwiperSlide = styled(SwiperSlide)`
  background: gray;
  width: 50%;
  aspect-ratio: 296 / 166.75;
  @media screen and (min-width: 800px) {
    width: 25%;
  }
  @media screen and (min-width: 1100px) {
    width: 20%;
  }
  @media screen and (min-width: 1400px) {
    width: calc(100% / 6);
  }
  transition: transform 0.54s cubic-bezier(0.5, 0, 0.1, 1) 0s;
  cursor: pointer;
  .desc {
    visibility: hidden;
  }
  &:hover {
    transform: scale(1.3);
    z-index: 3;
  }
`;

export const ImageWrapper = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
  position: relative;
  h4 {
    position: absolute;
    z-index: 2;
    bottom: 1px;
    left: 5%;
  }
  img {
    object-fit: cover;
    width: 100%;
    height: 100%;
  }
`;
