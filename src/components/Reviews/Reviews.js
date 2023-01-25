import { fetchMovieReviews } from 'services/fetchDataApi';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Loader  from 'components/Loader/Loader';
import { Container } from 'components/Reviews/Reviews.styled';

const ERROR_MESSAGE = 'Error information loading'; 

const Reviews = () => {
  const { movieId } = useParams();
  const [reviewsInfo, setReviewsInfo] = useState([]);
  const [error, setError] = useState(null);
  const [notFound, setNotFound] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    async function getSearchReviews() {
      try {
          const response = await fetchMovieReviews(movieId);
          const reviewsInfo = response.data.results;
          
          if (reviewsInfo.length === 0) {
              setNotFound(true);
              return;
          }
          setReviewsInfo(reviewsInfo);
      } catch {
          setError(ERROR_MESSAGE);
      } finally{
        setIsLoading(false);
      }
  }
  getSearchReviews();
  }, [movieId]);
  
  return (
    <div>
      {error && <p style={{ color: 'red'}}>{ERROR_MESSAGE}</p>}
      {notFound && <p style={{ color: 'orangered'}}>No information about actors</p>}
      {reviewsInfo && isLoading && <Loader />}

      {reviewsInfo && !notFound && !isLoading && (
        <Container>
        {reviewsInfo.map(({ id, author, content }) => (
            <li key={id}>
              <p>
                <b>Author: </b>
                {author}
              </p>
              <p>{content}</p>
            </li>
          ))}
        </Container>
      )}
    </div>
  );
}

export default Reviews;

