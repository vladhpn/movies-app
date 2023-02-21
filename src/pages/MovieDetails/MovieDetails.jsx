import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { Details } from '../../components/Details/Details';

import {
  fetchMovieCast,
  fetchMovieDetails,
  fetchMovieTrailer,
} from '../../redux/movies/movies-operations';

const MovieDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMovieDetails(id));
    dispatch(fetchMovieTrailer(id));
    dispatch(fetchMovieCast(id));
  }, [dispatch, id]);

  return <Details />;
};

export default MovieDetails;
