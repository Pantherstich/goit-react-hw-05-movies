import { SearchForm, SearchFormInput, SearchBtn } from './Movies.styled';
import MoviesList from 'components/MoviesList/MoviesList';
import { useState, useEffect } from 'react';
import { useParams, useSearchParams } from 'react-router-dom';

import { fetchSearch } from 'services/api';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const { movieId } = useParams();
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query') || '';
  const [inputValue, setInputValue] = useState('');
  const handleSubmit = e => {
    e.preventDefault();
    setSearchParams({ query: inputValue });
    if (inputValue.trim() === '') {
      return;
    }
  };

  const handleChange = e => {
    setInputValue(e.currentTarget.value);
  };

  useEffect(() => {
    if (!movieId) return;
  }, [movieId]);

  useEffect(() => {
    if (query) {
      fetchSearch(query).then(movies => {
        if (movies.results.length > 0) {
          setMovies(movies.results);
        }
      });
    }
  }, [query]);

  return (
    <main>
      <SearchForm onSubmit={handleSubmit}>
        <SearchFormInput
          type="text"
          autoComplete="off"
          autoFocus
          value={inputValue}
          onChange={handleChange}
        ></SearchFormInput>
        <SearchBtn type="submit">Search</SearchBtn>
      </SearchForm>
      <MoviesList movies={movies}></MoviesList>
    </main>
  );
};
export default Movies;
