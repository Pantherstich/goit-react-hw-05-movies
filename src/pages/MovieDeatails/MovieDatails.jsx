import { useParams, useLocation, Outlet } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Suspense, useRef } from 'react';
import {
  MovieContainer,
  MovieImg,
  MovieName,
  AdditionalNav,
  NavLinkStyled,
  OverviewText,
  GenresText,
  GoBackLink,
  NavList,
  Movie,
  MovieInfo,
  GenresStyles,
} from './MovieDetails.styled';
import { Loader } from 'components/Loader/Loader';

import { fetchMovieDetails } from 'services/api';

const baseUrl = 'https://image.tmdb.org/t/p/w300';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const location = useLocation();
  const backLink = useRef(location.state?.from ?? '/');

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (movieId) {
          const fetchedMovie = await fetchMovieDetails(movieId);
          const releaseYear = new Date(fetchedMovie.release_date).getFullYear();
          const percentage = (fetchedMovie.vote_average / 10) * 100;
          setMovie({ ...fetchedMovie, releaseYear, percentage });
        }
      } catch (error) {
        console.error('Error fetching movie details:', error);
        setMovie(null);
      }
    };
    fetchData();
  }, [movieId]);

  const defaultImg =
    'https://cdn.pixabay.com/photo/2018/11/03/15/51/here-3792307_1280.png';

  return (
    <main>
      {movie && (
        <MovieContainer>
          <GoBackLink to={backLink?.from ?? '/'}>Go back</GoBackLink>

          <Movie>
            <MovieImg
              src={
                movie.poster_path
                  ? `${baseUrl}${movie.poster_path}`
                  : defaultImg
              }
            ></MovieImg>

            <MovieInfo>
              <MovieName>
                {movie.title} ({movie.releaseYear})
              </MovieName>
              <h3>Rating: {Math.round(movie.percentage)}%</h3>
              <h3>Overview</h3>
              <OverviewText>{movie.overview}</OverviewText>
              <h3>Genres</h3>
              <GenresStyles>
                {movie.genres.map(genre => (
                  <GenresText key={genre.id}>{genre.name}</GenresText>
                ))}
              </GenresStyles>
            </MovieInfo>
          </Movie>
          <AdditionalNav>
            <h3>Additional information</h3>
            <NavList>
              <li>
                <NavLinkStyled to="cast">Cast</NavLinkStyled>
              </li>
              <li>
                <NavLinkStyled to="reviews">Reviews</NavLinkStyled>
              </li>
            </NavList>
          </AdditionalNav>

          <Suspense fallback={<Loader />}>
            <Outlet />
          </Suspense>
        </MovieContainer>
      )}
    </main>
  );
};

export default MovieDetails;
