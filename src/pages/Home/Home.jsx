import { PageTitle } from './Home.styled';
import MovieList from 'components/MoviesList/MoviesList';
import { useState, useEffect } from 'react';
import { fetchTrend } from 'services/api';

const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetchTrend()
      .then(movies => {
        if (!movies.results.length) {
          console.log('sorry, something go wrong, try later');
          return;
        }

        // if (movies.results.length > 0) {
        setMovies(movies.results);
      })
      .catch(() => console.log('sorry, something go wrong, try later'));
  }, []);
  return (
    <main>
      <PageTitle>Popular today:</PageTitle>
      <MovieList movies={movies}></MovieList>
    </main>
  );
};
export default Home;
