import { MovieList, MovieItem, MovieImg } from './MoviesList.styled';
import { Link, useLocation } from 'react-router-dom';

const MoviesList = ({ movies }) => {
  const location = useLocation();
  const baseUrl = 'https://image.tmdb.org/t/p/w300';
  const defaultImg =
    'https://cdn.pixabay.com/photo/2018/11/03/15/51/here-3792307_1280.png';

  return (
    <MovieList>
      {movies.map(movie => {
        const name = movie.name ?? movie.title;

        return (
          <MovieItem key={movie.id}>
            <Link to={`/movies/${movie.id}`} key={movie.id} state={location}>
              <>
                {movie.poster_path ? (
                  <MovieImg
                    src={`${baseUrl}${movie.poster_path}`}
                    alt="poster"
                  />
                ) : (
                  defaultImg
                )}
              </>
              {name}{' '}
            </Link>
          </MovieItem>
        );
      })}
    </MovieList>
  );
};

export default MoviesList;