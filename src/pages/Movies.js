import { fetchSearchMovies } from 'services/fetchDataApi';
import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { BsSearch } from 'react-icons/bs';
import Loader from 'components/Loader/Loader';
import MoviesGallery from 'components/MoviesGallery/MoviesGallery';

const ERROR_MESSAGE = 'Error fetch movies.'; 

const Movies = () => {
    const [movies, setMovies] = useState('');
    const [notFound, setNotFound] = useState(false);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [searchParams, setSearchParams] = useSearchParams();
    const query = searchParams.get('search') ?? '';

    useEffect(() => {
        const controller = new AbortController();
        const signal = controller.signal;

        setIsLoading(true);

        if (query === '') {
            return;
        };

        async function getSearchMovies() {
            try {
                const response = await fetchSearchMovies(query, {signal});
                const movies = response.data.results;
                
                if (movies.length === 0) {
                    setNotFound(true);
                    return;
                }

                setMovies(movies);
            } catch {
                setError(ERROR_MESSAGE);
            } 
            finally{
                setIsLoading(false);
            }
        }
        getSearchMovies();

        return() => {
            controller.abort();
        }   
    }, [query]);

    function handlerSubmit(e) {
        const searchQuery = e.currentTarget.elements.search.value;
        setSearchParams({ search: searchQuery });
        setMovies('');
    }   

    return (
        <div>
            <form onSubmit={handlerSubmit}>
            <input
                name="search"
                type="text"
                autoComplete="off"
                autoFocus
                placeholder="Search movie"
            />
            <button type="submit">
                <BsSearch size={10} />
            </button>
            </form>

            {query && isLoading && <Loader />}
            {error && <p style={{ color: 'red'}}>{ERROR_MESSAGE}</p>}
            {movies.length > 0 && !notFound && !isLoading && (<MoviesGallery movies={movies} />)}
            {query && notFound && !isLoading && <p style={{ color: 'orangered'}}>Movie with this title not found</p>}
        </div>
    );
};

export default Movies;






