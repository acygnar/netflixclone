import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { HeroWrapper } from './HeroVideo.styles';
import PlayButton from 'components/atoms/PlayButton/PlayButton';
import InfoButton from 'components/atoms/InfoButton/InfoButton';
import truncateString from 'helpers/truncateString';
export default function HeroVideo({ image, video, title, desc }) {
  const baseUrl = 'https://image.tmdb.org/t/p/original';
  const [videoUrl, setVideoUrl] = useState(null);
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
        const officialTrailer = videos.find((video) => video.type === 'Trailer' && video.site === 'YouTube' && video.official === true);
        if (officialTrailer) {
          const videoKey = officialTrailer.key;
          const videoUrlYT = `https://www.youtube.com/watch?v=${videoKey}`;
          setVideoUrl(videoUrlYT);
          console.log(videoUrl);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <HeroWrapper>
      <img src={baseUrl + '/' + image} alt="" />
      <div>
        <video>
          <source src={videoUrl} type="video/mp4" />
        </video>
      </div>
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
  );
}
