import React, { useEffect, useState } from 'react';
import HeroVideo from 'components/organisms/HeroVideo/HeroVideo';
import axios from 'axios';
import { Paragraph } from 'components/atoms/Paragraph/Paragraph.js';
export default function Dashboard() {
  const [nowPlaying, setNowPlaying] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get(
        'https://api.themoviedb.org/3/movie/now_playing?language=pl-PL&page=2',

        {
          headers: {
            authorization: `Bearer ${process.env.REACT_APP_TMDB_TOKEN}`,
          },
        }
      )
      .then((data) => {
        let id = Math.floor(Math.random() * data.data.results.length);
        setNowPlaying(data.data.results[id]);
      })
      .catch(() => {
        setError(`Przepraszamy, nie mogliśmy załadować filmów i seriali dla Ciebie.`);
      });
  }, []);

  useEffect(() => {}, []);

  return (
    <div>
      {nowPlaying && <HeroVideo image={nowPlaying.backdrop_path} title={nowPlaying.title} desc={nowPlaying.overview} video={nowPlaying.id} />}
      {!nowPlaying && <Paragraph>{error}</Paragraph>}
      <div id="player"></div>
    </div>
  );
}
