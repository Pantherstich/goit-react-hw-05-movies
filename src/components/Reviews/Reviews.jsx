import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Author, ReviewList, ReviewItem, ReviewText } from './Reviews.styled';
import { fetchData } from 'services/api';

const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    if (!movieId) {
      return;
    }
    fetchData('reviews', movieId).then(({ results }) => {
      if (!results.length) {
        console.log('Error');
        return;
      }
      setReviews(results);
    });
  }, [movieId]);

  return (
    <div>
      <ReviewList>
        {reviews.length > 0 ? (
          reviews.map(review => (
            <ReviewItem key={review.id}>
              <Author>Author: {review.author}</Author>
              <ReviewText>{review.content}</ReviewText>
            </ReviewItem>
          ))
        ) : (
          <ReviewItem key="no-reviews">
            There is no review for this movie.
          </ReviewItem>
        )}
      </ReviewList>
    </div>
  );
};

export default Reviews;
