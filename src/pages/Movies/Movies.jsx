import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { fetchData } from 'services/api';

const MoviesPage = () => {
  const [searchParams] = useSearchParams();
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const query = searchParams.get('query');
    if (!query) return;

    fetchData('searchByQuery', 0, query)
      .then(({ data }) => {
        if (data.length > 0) {
          setMovies(data);
        }
      })
      .catch(err => {
        console.error('Error:', err);
        setMovies(null);
        setTimeout(() => {
          // navigate('/');
        }, 5000);
      });
  }, [searchParams]);

  return <div></div>;
};

export default MoviesPage;
