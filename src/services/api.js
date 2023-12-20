import axios from 'axios';
axios.defaults.params = { api_key: '4ee590f8afe314c87c8a374d8548e25b' };
axios.defaults.baseURL = 'https://api.themoviedb.org/3';

export const getMovies = async (endpoint, queryParams = {}) => {
  const response = await axios.get(endpoint, { params: queryParams });
  return response.data;
};

export const fetchTrend = async () => {
  const endpoint = 'trending/movie/day';
  return await getMovies(endpoint);
};
// export async function fetchTrend() {
//   try {
//     const result = await axios.get(
//       `${BASE_URL}/trending/all/day?api_key=${api_key}&language=en-US`
//     );
//     return result.data;
//   } catch (error) {
//     throw error;
//   }
// }
export const fetchSearch = async query => {
  const endpoint = `search/movie`;
  return await getMovies(endpoint, { query });
};

// export async function fetchSearch(value) {
//   try {
//     const result = await axios.get(
//       `${BASE_URL}/search/movie?query=${value}&include_adult=false&api_key=${api_key}&language=en-US&page=1`
//     );
//     return result.data;
//   } catch (error) {
//     throw error;
//   }
// }
export const fetchMovieDetails = async movieId => {
  const endpoint = `movie/${movieId}`;
  return await getMovies(endpoint);
};
// export async function fetchMovieDetails(id) {
//   try {
//     const result = await axios.get(
//       `${BASE_URL}/movie/${id}?api_key=${api_key}&language=en-US`
//     );
//     return result.data;
//   } catch (error) {
//     throw error;
//   }
// }
export const fetchCast = async movieId => {
  const endpoint = `movie/${movieId}/credits`;
  return await getMovies(endpoint);
};
// export async function fetchCast(id) {
//   try {
//     const result = await axios.get(
//       `${BASE_URL}/movie/${id}/credits?api_key=${api_key}&language=en-US`
//     );
//     return result.data;
//   } catch (error) {
//     throw error;
//   }
// }
export const fetchReview = async movieId => {
  const endpoint = `movie/${movieId}/reviews`;
  return await getMovies(endpoint);
};
// export async function fetchReview(id) {
//   try {
//     const result = await axios.get(
//       `${BASE_URL}/movie/${id}/reviews?api_key=${api_key}&language=en-US&page=1`
//     );
//     return result.data;
//   } catch (error) {
//     throw error;
//   }
// }
