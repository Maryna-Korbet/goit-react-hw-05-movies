import { fetchTrendingMovies } from "services/fetchDataApi";
import { useEffect, useState } from "react";
import MoviesGallery from "components/MoviesGallery/MoviesGallery";

const ERROR_MESSAGE = 'Error fetch trending movies.';

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(false);

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
      {movies && (<MoviesGallery movies={movies} />)}
      {error && <p style={{ color: 'red'}}>{ERROR_MESSAGE}</p>}
    </div>
  );
};

export default Home;