import axios from 'axios';

const api_key = '4ee590f8afe314c87c8a374d8548e25b';
const BASE_URL = 'https://api.themoviedb.org/3';

export async function fetchMoviesData(type, id, query) {
  const response = await axios.get(
    `${BASE_URL}${endpointByType[type]}?api_key=${api_key}&${
      type === 'searchByQuery' ? searchParams : ''
    }`
  );
  return response.data;
}
