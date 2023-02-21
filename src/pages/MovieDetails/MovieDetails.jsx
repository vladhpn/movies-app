import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { Details } from '../../components/Details/Details';

import {
  fetchMovieCast,
  fetchMovieDetails,
  fetchMovieTrailer,
} from '../../redux/movies/movies-operations';

import { movieTrailer } from '../../redux/movies/movies-selector';

const MovieDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMovieDetails(id));
    dispatch(fetchMovieTrailer(id));
    dispatch(fetchMovieCast(id));
  }, [dispatch, id]);

  const movieDetails = useSelector((state) => state.movies.movieDetailsReducer);
  const cast = useSelector((state) => state.movies.movieCastReducer);
    const trailer = useSelector(movieTrailer);

  return (<Details details={movieDetails} cast={cast} trailer={trailer}/> );
};

export default MovieDetails;
