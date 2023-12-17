import axios from 'axios';
const api_key = '4ee590f8afe314c87c8a374d8548e25b';
const BASE_URL = 'https://api.themoviedb.org/3';

export async function fetchTrend() {
  try {
    const result = await axios.get(
      `${BASE_URL}/trending/all/day?api_key=${api_key}&language=en-US`
    );
    return result.data;
  } catch (error) {
    throw error;
  }
}

export async function fetchSearch(value) {
  try {
    const result = await axios.get(
      `${BASE_URL}/search/movie?query=${value}&include_adult=false&api_key=${api_key}&language=en-US&page=1`
    );
    return result.data;
  } catch (error) {
    throw error;
  }
}

export async function fetchMovieDetails(id) {
  try {
    const result = await axios.get(
      `${BASE_URL}/movie/${id}?api_key=${api_key}&language=en-US`
    );
    return result.data;
  } catch (error) {
    throw error;
  }
}

export async function fetchCast(id) {
  try {
    const result = await axios.get(
      `${BASE_URL}/movie/${id}/credits?api_key=${api_key}&language=en-US`
    );
    return result.data;
  } catch (error) {
    throw error;
  }
}

export async function fetchReview(id) {
  try {
    const result = await axios.get(
      `${BASE_URL}/movie/${id}/reviews?api_key=${api_key}&language=en-US&page=1`
    );
    return result.data;
  } catch (error) {
    throw error;
  }
}
