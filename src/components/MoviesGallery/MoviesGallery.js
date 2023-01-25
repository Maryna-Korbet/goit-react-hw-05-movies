import { Link, useLocation } from 'react-router-dom';

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

export default MoviesGallery;