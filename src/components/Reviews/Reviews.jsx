import { useParams } from 'react-router-dom';
import { Author, Item } from './Reviews.styled';
import { useEffect, useState } from 'react';
import { fetchReview } from 'services/api';

const Reviews = () => {
  const { movieId } = useParams();
  const [movieReview, setMovieReview] = useState([]);

  useEffect(() => {
    if (movieId) {
      fetchReview(movieId).then(movies => {
        if (movies.results && movies.results.length > 0) {
          setMovieReview(movies.results);
        }
      });
    }
  }, [movieId]);

  return (
    <div>
      <ul>
        {movieReview.length > 0 ? (
          movieReview.map(movie => (
            <Item key={movie.id}>
              <Author>Author: {movie.author}</Author>
              <p>{movie.content}</p>
            </Item>
          ))
        ) : (
          <Item key="no-reviews">There is no review yet </Item>
        )}
      </ul>
    </div>
  );
};

export default Reviews;
