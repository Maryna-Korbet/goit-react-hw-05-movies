import { fetchTrendingMovies } from "services/fetchDataApi";
import { useEffect, useState } from "react";

const ERROR_MESSAGE = 'Error fetch trending movies.';

export const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function getTrendingMovies() {
      try {
        const movies = await fetchTrendingMovies();
        if (movies.length > 0) {
          setMovies(
            movies.map(movie => ({
              id: movie.id,
              title: movie.original_title,
              name: movie.name,
            }))
          );
        }
      } catch (error){
        error(ERROR_MESSAGE);
      }
    }
    getTrendingMovies();
  }, []);

  return (
    <>
      <ul>
        <h1>Trending today</h1>
        {movies?.map(movie => (
          <li key={movie.id}>
            {movie.title ?? movie.name}
          </li>
        ))}
      </ul>
    </>
  );
};
