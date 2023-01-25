import { Container } from 'components/MovieInfo/MovieInfo.styled';
import PropTypes from 'prop-types';

const MovieInfo = ({ movieInfo }) => {
  const {
    poster_path,
    title,
    release_date,
    popularity,
    status,
    overview,
    genres = [],
  } = movieInfo;

  const data = new Date(release_date).getFullYear();

  return (
    <Container>
      
      {poster_path ? (
        <img
          src={'https://image.tmdb.org/t/p/w500' + poster_path}
          alt={title}
        />
      ) : (<div>No poster</div>)
      }

      <div>
        <h1>
        {title ? title : 'Title missing'} 
        </h1>
        <p>
          <b>Release date:</b> {data}
        </p>
        <p>
          <b>User Scote: </b>
          {Math.round(popularity)}%
        </p>
        <p>
          <b>Status:</b> {status}
        </p>
        <h2>Overview</h2>
        <p>{overview}</p>
        <h2>Genres</h2>
        <ul>
          {genres.map(({id, name}) => (
            <li key={id}>{name}</li>
          ))}
        </ul>
      </div>
    </Container>
  );
};

MovieInfo.protoTypes ={
  movieInfo: PropTypes.shape ({
    poster_path: PropTypes.object,
    title: PropTypes.string.isRequired,
    release_date: PropTypes.string,
    popularity: PropTypes.number,
    status: PropTypes.string,
    overview: PropTypes.string,
    genres: PropTypes.array,
  })
};

export default MovieInfo;

