import {
  Container,
  Information,
  LineHeader,
  Poster,
  Title,
} from './MovieInfo.styled';
const baseUrl = 'https://image.tmdb.org/t/p/w300';
const defaultImg = '//public/logo192.png';

const dateOptions = {
  year: 'numeric',
  month: 'long',
  day: 'numeric',
};

const MovieInfo = ({ movieData }) => {
  return (
    <Container>
      <Poster
        src={
          movieData.poster_path
            ? `${baseUrl}${movieData.poster_path}`
            : defaultImg
        }
        alt={movieData.title}
      />
      <Information>
        <Title>{`${movieData.title} (${
          movieData.release_date
            ? new Date(movieData.release_date).getFullYear()
            : 'unknown year'
        })`}</Title>
        <p>
          <LineHeader>Release date:</LineHeader>{' '}
          {new Date(movieData.release_date).toLocaleDateString(
            'en-US',
            dateOptions
          )}
        </p>
        <p>
          <LineHeader>Rating: </LineHeader>
          {movieData.vote_average === 0
            ? 'unknow rate'
            : `${Math.round(movieData.vote_average * 10)}%`}
        </p>
        <p>
          <LineHeader>Genres:</LineHeader>{' '}
          {movieData.genres.map(({ name }) => name).join(', ') || 'None'}
        </p>
        <p>
          <LineHeader>Promo:</LineHeader> {movieData.tagline || 'None'}
        </p>
        <p>
          <LineHeader>Overview:</LineHeader> {movieData.overview || 'None'}
        </p>
      </Information>
    </Container>
  );
};
export default MovieInfo;
