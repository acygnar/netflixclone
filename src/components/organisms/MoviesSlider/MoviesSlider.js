import React from 'react';
import { SliderWrapper, StyledSwiperSlide, SliderTitle, ImageWrapper } from './MoviesSlider.styles';

// Import Swiper React components
import { Swiper } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
export default function MoviesSlider({ movies, title }) {
  const baseUrl = 'https://image.tmdb.org/t/p/original';
  return (
    <SliderWrapper>
      <SliderTitle>{title}</SliderTitle>
      <Swiper
        spaceBetween={10}
        slidesPerView={'auto'}
        loop={'tue'}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
      >
        {movies &&
          movies.length > 0 &&
          movies.map((movie) => {
            return (
              <StyledSwiperSlide>
                <ImageWrapper>
                  <img src={baseUrl + '/' + movie.backdrop_path} alt="movie.backdrop_path" />
                  <h4>{movie.title}</h4>
                </ImageWrapper>
                <div className="desc">Testesttestestest</div>
              </StyledSwiperSlide>
            );
          })}
      </Swiper>
    </SliderWrapper>
  );
}
