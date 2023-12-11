import MoviesList from 'components/MovieList/MovieList';
import { useEffect, useState } from 'react';

import { fetchData } from 'services/api';

import { Title } from './Home.styled';

const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetchData('trending').then(({ results }) => {
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
