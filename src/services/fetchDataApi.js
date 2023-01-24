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
        });
        return response.data.results;
      } catch {
        console.log(ERROR_MESSAGE);
      }
}

// Request for Movies
export async function fetchSearchMovies (fetchQuery) {
  try{
    const response = await axios.get(`/search/movie`, {
    params: {
      api_key: KEY,
      query: fetchQuery,
    },
  });
  return response.data;
  }catch {
    console.log(ERROR_MESSAGE);
  }
};




