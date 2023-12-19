import { PageTitle } from './Home.styled';
import MovieList from 'components/MoviesList/MoviesList';
import { useState, useEffect } from 'react';
import { fetchTrend } from 'services/api';
// import { Loader } from 'components/Loader/Loader';

const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetchTrend().then(movies => {
      if (movies.results.length > 0) {
        setMovies(movies.results);
      }
    });
  }, []);
  return (
    <main>
      {/* <Loader></Loader> */}
      <PageTitle>Popular today:</PageTitle>
      <MovieList movies={movies}></MovieList>
    </main>
  );
};
export default Home;
