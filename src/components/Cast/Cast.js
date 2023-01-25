import { fetchMovieCast } from 'services/fetchDataApi';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Loader  from 'components/Loader/Loader';
import { Container, NoPosterImg } from 'components/Cast/Cast.styled';

const ERROR_MESSAGE = 'Error information loading'; 

const Cast = () => {
  const { movieId } = useParams();
  const [castInfo, setCastInfo] = useState([]);
  const [error, setError] = useState(null);
  const [notFound, setNotFound] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    async function getSearchCast() {
      try {
          const response = await fetchMovieCast(movieId);
          const castInfo = response.data.cast;
          
          if (castInfo.length === 0) {
              setNotFound(true);
              return;
          }
          setCastInfo(castInfo);
      } catch {
          setError(ERROR_MESSAGE);
      } finally{
        setIsLoading(false);
      }
    }
  getSearchCast();
  }, [movieId]);
  
  return (
    <div>
      {error && <p style={{ color: 'red'}}>{ERROR_MESSAGE}</p>}
      {notFound && <p style={{ color: 'orangered'}}>No character information</p>}
      {castInfo && isLoading && <Loader />}

      {castInfo && !notFound && !isLoading && (
        <Container>
        {castInfo.map(({ id, profile_path, character, name }) => {
          return (
            <li key={id}>
              {profile_path ? (
                <img
                  src={'https://image.tmdb.org/t/p/w500' + profile_path}
                  alt={name}
                  width={200}
                />
                ) : (<NoPosterImg>No poster</NoPosterImg>)
                }
                <p>
                  <b>Character: </b>
                  {character}
                </p>
                <p>
                  <b>Name:</b> {name}
                </p>
              </li>
            );
          })}
        </Container>
      )}
    </div>
  );
}

export default Cast;