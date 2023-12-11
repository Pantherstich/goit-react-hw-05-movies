import { useState, useEffect } from 'react';
import { Suspense, useRef } from 'react';

import { Outlet, useLocation, useParams } from 'react-router-dom';
import { fetchData } from 'services/api';
import MovieInfo from 'components/MovieInfo/MovieInfo';
import {
  AdditionalInfo,
  NavLinkInfo,
  NavListInfo,
} from './MovieDetails.styled';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movieData, setMovieData] = useState(null);
  const { state } = useLocation();
  const navigate = useRef(state?.from ?? '/');

  useEffect(() => {
    fetchData('movieById', Number(movieId))
      .then(data => {
        setMovieData(data);
      })
      .catch(err => {
        console.error('Error:', err);
        setMovieData(null);
        setTimeout(() => {
          // navigate('/');
        }, 5000);
      });
  }, [movieId, navigate]);

  return (
    <>
      <MovieInfo movieData={movieData} />

      <AdditionalInfo>Additional information:</AdditionalInfo>
      <NavListInfo>
        <li>
          <NavLinkInfo to="cast" state={{ from: state?.from }}>
            Cast
          </NavLinkInfo>
        </li>
        <li>
          <NavLinkInfo to="reviews" state={{ from: state?.from }}>
            Reviews
          </NavLinkInfo>
        </li>
      </NavListInfo>
      <Suspense fallback={<div>Loading page...</div>}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default MovieDetails;
