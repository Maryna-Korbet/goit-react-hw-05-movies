import { fetchMovieById } from 'services/fetchDataApi';
import { HiArrowLeft } from "react-icons/hi";
import { useState, useEffect, useRef } from 'react';
import { useParams, useLocation, Outlet } from 'react-router-dom';
import MovieInfo  from 'components/MovieInfo/MovieInfo';
import Loader from 'components/Loader/Loader';
import { StyledLink } from "pages/MoviesDetails.styled";

const ERROR_MESSAGE = 'No movie info.'; 

const MoviesDetails = () => {
  const [movieInfo, setMovieInfo] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const { movieId } = useParams();
  const location = useLocation();
  const BackLinkHref = useRef(location.state?.from);
  
  useEffect(() => {

    setError(null);
    setIsLoading(true);

    if (!movieId) {
      return;
    }

    async function getSearchInfo() {
      try{
        const response = await fetchMovieById(movieId);
        const info = response.data;

        if (info.length === 0) {
          return;
        }

        setMovieInfo(info);
        setIsLoading(false);
      } catch {
        setError(ERROR_MESSAGE);
      } finally {
        setIsLoading(false);
      }
    }
    getSearchInfo(); 
  }, [movieId]);

  return (
    <div>
      <StyledLink to={BackLinkHref.current ?? '/'}>
        <HiArrowLeft size="24" />
        <p>Go back</p>
      </StyledLink>

      {error && <p style={{ color: 'red'}}>{ERROR_MESSAGE}</p>}
      {isLoading && <Loader />}
      {!isLoading && !error && <MovieInfo movieInfo={movieInfo} />}
      <Outlet />
    </div>
  );
};

export default MoviesDetails;


