import React, { useEffect, useState } from 'react';
import HeroVideo from 'components/organisms/HeroVideo/HeroVideo';
import axios from 'axios';
import { Paragraph } from 'components/atoms/Paragraph/Paragraph.js';
export default function Dashboard() {
  const [nowPlaying, setNowPlaying] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    console.log(process.env.REACT_APP_TMDB_TOKEN);
    axios
      .get(
        'https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1',

        {
          headers: {
            authorization: `Bearer ${process.env.REACT_APP_TMDB_TOKEN}`,
          },
        }
      )
      .then((data) => {
        setNowPlaying(data.data.results[Math.floor(Math.random() * data.data.results.length)]);
        console.log(data.data.results[Math.floor(Math.random() * data.data.results.length)]);
      })
      .catch(() => {
        setError(`Przepraszamy, nie mogliśmy załadować filmów i seriali dla Ciebie.`);
      });
  }, []);

  return (
    <div>
      {nowPlaying && <HeroVideo image={nowPlaying.backdrop_path} title={nowPlaying.title} desc={nowPlaying.overview} />}
      {!nowPlaying && <Paragraph>{error}</Paragraph>}
    </div>
  );
}
