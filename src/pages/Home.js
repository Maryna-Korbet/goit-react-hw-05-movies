import { fetchTrendingMovies } from "services/fetchDataApi";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

const ERROR_MESSAGE = 'Error fetch trending movies.';

export const Home = () => {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(false);
  const location = useLocation();

  useEffect(() => {
    async function getTrendingMovies() {
      try {
        const movies = await fetchTrendingMovies();
        if (movies.length > 0) {
          setMovies(
            movies.map(({id, original_title, name}) => ({
              id: id,
              name: name,
              title: original_title,
            }))
          );
        }
      } catch {
        setError(ERROR_MESSAGE);
      }
    }
    getTrendingMovies();
  }, []);

  return (
    <div>
      <h1>Trending today</h1>
      <ul>
        {movies?.map(({id, title, name}) => (
          <li key={id}>
            <Link to={`/movies/${id}`} state={{from: location}}>
            {title ?? name}
            </Link>
          </li>
        ))}
      </ul>
      {error && <p style={{ color: 'red'}}>{ERROR_MESSAGE}</p>}
    </div>
  );
};
