import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchData } from 'services/api';
import { List, Item, Photo, Name, Info } from './Cast.styled';

const imgUrl = 'https://image.tmdb.org/t/p/w200';
const defaultImg = '//public/logo192.png';

const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);

  useEffect(() => {
    if (movieId) {
      fetchData('cast', movieId).then(({ cast }) => {
        if (cast.length > 0) {
          setCast(cast);
        }
      });
    }
  }, [movieId]);

  return (
    <div>
      <List>
        {cast.map(star => (
          <Item key={star.id}>
            <Photo
              src={
                star.profile_path ? `${imgUrl}${star.profile_path}` : defaultImg
              }
              alt={star.name}
            />
            <Name>{star.name}</Name>
            <Info>as {star.character}</Info>
          </Item>
        ))}
      </List>
    </div>
  );
};
export default Cast;
