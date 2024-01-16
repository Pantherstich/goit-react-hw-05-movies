import { HomeMain, PageTitle } from './Home.styled';
import MovieList from 'components/MoviesList/MoviesList';
import { useState, useEffect } from 'react';
import { fetchTrend } from 'services/api';
const IMAGE_PATH = 'https://image.tmdb.org/t/p/original/';

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [homeBack, setHomeBack] = useState('');

  useEffect(() => {
    fetchTrend()
      .then(movies => {
        if (!movies.results.length) {
          console.log('sorry, something go wrong, try later');
          return;
        }

        setMovies(movies.results);
        const randomizer = Math.floor(
          Math.random() * movies.results.length + 0
        );
        setHomeBack(
          `${IMAGE_PATH}${movies.results[randomizer]?.backdrop_path}`
        );
      })
      .catch(() => console.log('sorry, something go wrong, try later'));
  }, []);
  return (
    <HomeMain>
      <PageTitle $homeBack={homeBack}>
        <h2> Welcome to our movie catalog!</h2>
        We’re excited to help you find the perfect movie to watch tonight.
        Whether you’re looking for a new release, a classic, or something in
        between, we have something for everyone.
      </PageTitle>
      <h2> Popular today:</h2>
      <MovieList movies={movies}></MovieList>
    </HomeMain>
  );
};
export default Home;
