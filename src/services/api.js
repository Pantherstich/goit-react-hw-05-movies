import axios from 'axios';

const api_key = '4ee590f8afe314c87c8a374d8548e25b';
const BASE_URL = 'https://api.themoviedb.org/3';

export async function fetchData(type, id, query) {
  const byType = {
    trending: '/trending/movie/day',
    movieByName: '/search/movie',
    movieDetailsById: `/movie/${id}`,
    credits: `/movie/${id}/credits`,
    reviews: `/movie/${id}/reviews`,
  };
  const params = new URLSearchParams({
    query: query,
  });

  const resp = await axios.get(
    `${BASE_URL}${byType[type]}?api_key=${api_key}&${
      type === 'searchByQuery' ? params : ''
    }`
  );
  return resp.data;
}
