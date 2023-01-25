import { Link, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';

const MoviesGallery = ({ movies }) => {
  const location = useLocation();
  
  return (
    <ul>
        {movies?.map(({id, title, name}) => (
          <li key={id}>
            <Link to={`/movies/${id}`} state={{from: location}}>
            {title ?? name}
            </Link>
          </li>
        ))}
      </ul>
  );
};

MoviesGallery.protoTypes ={
  movies: PropTypes.shape ({
    id: PropTypes.number.isRequired, 
    title: PropTypes.string,
    name: PropTypes.string,
  })
};

export default MoviesGallery;