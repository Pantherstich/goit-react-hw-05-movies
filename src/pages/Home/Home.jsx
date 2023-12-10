import MoviesList from 'components/MoviesList/MoviesList';
import { useEffect, useState } from 'react';

import { fetchMoviesData } from 'services/api';

import { Title } from './Home.styled';

const HomePage = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetchMoviesData('trending').then(({ results }) => {
      if (results.length > 0) {
        setMovies(results);
      }
    });
  }, []);

  return (
    <main>
      <Title>Trending today</Title>
      <MoviesList movies={movies}></MoviesList>
    </main>
  );
};
export default Home;
