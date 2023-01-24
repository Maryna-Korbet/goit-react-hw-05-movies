import { fetchSearchMovies } from "services/fetchDataApi";
import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { BsSearch } from 'react-icons/bs';
import { MoviesGallery } from "components/MoviesGallery/MoviesGallery";
import { Loader } from "components/Loader/Loader";

const ERROR_MESSAGE = 'Error fetch movies.';

export const Movies = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const query = searchParams.get('query') ?? '';
    const [movies, setMovies] = useState([]);
    const [totalResults, settotalResults] = useState(null);
    const [searchQuery, setSearchQuery] = useState('');
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    
    useEffect(() => {
        const controller = new AbortController();

        if (query === '') {
            return;
        };
        setIsLoading(true);
        setError(null);
        
        fetchSearchMovies(query)
        .then(({results, total_results}) => {
            setMovies(results);
            settotalResults(total_results);
            setIsLoading(true);
        })
        .catch(() => {
            setError(ERROR_MESSAGE);
        })
        .finally(() => {
            setIsLoading(false);
        });

        return() => {
            controller.abort();
        }
    }, [query]);
    
    const handleChange = e => {
        setSearchQuery(e.currentTarget.value.toLowerCase());
    };
    
    const handleSubmit = e => {
        e.preventDefault();
        if (searchQuery.trim() === '') {
            return alert('Missing search parameters, please write them');
        }
        setSearchParams({ query: searchQuery});
        setSearchQuery('')
    };
    
    return (
	<div>
        <form onSubmit={handleSubmit}>
		<input
            type="text"
            autoComplete="off"
            placeholder="Enter movie name"
            name="searchQuery"
            value={searchQuery}
            onChange={handleChange}
        />
        <button type="submit">
			<BsSearch size={10} />
        </button>
        </form>

		{movies.length > 0 && !isLoading && (<MoviesGallery movies={movies} />)}
        {movies && totalResults === 0 && <p style={{ color: 'orangered'}}>Movie with this title not found</p>}
        {isLoading && <Loader />}
        {error && <p style={{ color: 'red'}}>{ERROR_MESSAGE}</p>}
    </div>
    );
};




