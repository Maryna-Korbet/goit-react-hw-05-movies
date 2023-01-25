import axios from 'axios';

const KEY = 'd1974eedcccfa08b3dec022ac0b9b390';
axios.defaults.baseURL= 'https://api.themoviedb.org/3/';

const ERROR_MESSAGE = 'Error. Request failed.';

// Request for Home
export async function fetchTrendingMovies() {
    try {
        const response = await axios.get(`trending/all/day?api_key=${KEY}`, {
          params: {
            api_key: KEY,
          },
        },
        );
        return response.data.results;
      } catch {
        console.log(ERROR_MESSAGE);
      }
}

// Request for Movies
export async function fetchSearchMovies(search) {
  try {
    const response = await axios.get(`search/movie`, {
      params: {
        api_key: KEY,
        query: search,
      },
    });
    return response;
  } catch (error) {
    console.log(ERROR_MESSAGE);
  }
}

// Request for MovieDetails
export async function fetchMovieById(movieId) {
  try {
    const response = await axios.get(`movie/${movieId}`, {
      params: {
        api_key: KEY,
      },
    });
    return response;
  } catch {
    console.log(ERROR_MESSAGE);
  }
}

// Request for Cast
export async function fetchMovieCast(movieId) {
  try {
    const response = await axios.get(`movie/${movieId}/credits`, {
      params: {
        api_key: KEY,
      },
    });
    return response;
  } catch (error) {
    console.log(ERROR_MESSAGE);
  }
}

// Request for Reviews
export async function fetchMovieReviews(movieId) {
  try {
    const response = await axios.get(`movie/${movieId}/reviews`, {
      params: {
        api_key: KEY,
      },
    });
    return response;
  } catch (error) {
    console.log(ERROR_MESSAGE);
  }
}