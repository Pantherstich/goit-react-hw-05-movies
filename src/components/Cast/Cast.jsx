import { Photo, Item, List, Name, Info, PhotoContainer } from './Cast.styled';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { fetchCast } from 'services/api';

const baseUrl = 'https://image.tmdb.org/t/p/w200';
const defaultImg =
  'https://cdn.pixabay.com/photo/2018/11/03/15/51/here-3792307_1280.png';

const Cast = () => {
  const { movieId } = useParams();
  const [movieCast, setMovieCast] = useState([]);

  useEffect(() => {
    if (movieId) {
      fetchCast(movieId).then(movies => {
        if (movies.cast.length > 0) {
          setMovieCast(movies.cast);
        }
      });
    }
  }, [movieId]);

  return (
    <div>
      <List>
        {movieCast.map(movie => {
          return (
            <Item key={movie.id}>
              <PhotoContainer>
                <Photo
                  src={
                    movie.profile_path
                      ? `${baseUrl}${movie.profile_path}`
                      : defaultImg
                  }
                  alt=""
                ></Photo>
              </PhotoContainer>

              <Name>{movie.name}</Name>
              <Info>Character: {movie.character}</Info>
            </Item>
          );
        })}
      </List>
    </div>
  );
};

export default Cast;
