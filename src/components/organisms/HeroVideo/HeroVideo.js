import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { HeroWrapper, VideoWrapper, Hero } from './HeroVideo.styles';
import PlayButton from 'components/atoms/PlayButton/PlayButton';
import InfoButton from 'components/atoms/InfoButton/InfoButton';
import truncateString from 'helpers/truncateString';
export default function HeroVideo({ image, video, title, desc }) {
  const baseUrl = 'https://image.tmdb.org/t/p/original';
  const [videoUrl, setVideoUrl] = useState(null);
  const VIDEO_WIDTH = 1920;
  const VIDEO_HEIGHT = 1080;
  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${video}/videos`,

        {
          headers: {
            authorization: `Bearer ${process.env.REACT_APP_TMDB_TOKEN}`,
          },
        }
      )
      .then((data) => {
        const videos = data.data.results;
        console.log(videos);
        const officialTrailer = videos.find((video) => video.type === 'Trailer' && video.site === 'YouTube' && video.official === true);
        if (officialTrailer) {
          const videoKey = officialTrailer.key;
          const videoUrlYT = `https://www.youtube.com/embed/${videoKey}?autoplay=1&mute=1&controls=0&disablekb=1&loop=1&playlist=${videoKey}&start=10`;
          setVideoUrl(videoUrlYT);
        } else {
          setVideoUrl(false);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, [video]);

  return (
    <Hero>
      <HeroWrapper>
        <img src={baseUrl + '/' + image} alt="" />
        {videoUrl && (
          <VideoWrapper>
            <iframe
              width={VIDEO_WIDTH}
              height={VIDEO_HEIGHT}
              src={videoUrl}
              title="YouTube video player"
              allow="accelerometer; autoplay;clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            />
          </VideoWrapper>
        )}
        <div className="hero-info">
          <h2>{title}</h2>
          <p>{truncateString(desc, 18)}</p>
          <div className="buttons-wrapper">
            <PlayButton />
            <InfoButton />
          </div>
        </div>
        <div className="hero-vignette"></div>
      </HeroWrapper>
    </Hero>
  );
}
