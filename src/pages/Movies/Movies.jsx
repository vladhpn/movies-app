import { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { MovieCard } from '../../components/MovieCard/MovieCard';
import { SearchForm } from '../../components/SearchForm/SearchForm';

import {
  fetchTrendingMovies,
  fetchMovieByTitle,
} from '../../redux/movies/movies-operations';

const Movies = () => {
  const [movieTitle, setMovieTitle] = useState('');
  const [isSearch, setIsSearch] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTrendingMovies());
  }, [dispatch]);

  const handleInputChange = useCallback((event) => {
    setMovieTitle(event.currentTarget.value);
  }, []);

  const handleSubmit = useCallback(
    (event) => {
      event.preventDefault();
      dispatch(fetchMovieByTitle(movieTitle));
      setMovieTitle('');
      setIsSearch(true);
    },
    [dispatch, movieTitle]
  );

  const trendingMovies = useSelector(
    (state) => state.movies.trendingMoviesReducer
  );
  const moviesByTitle = useSelector(
    (state) => state.movies.moviesByTitleReducer
  );

  const movies = !isSearch ? trendingMovies : moviesByTitle;

  return (
    <div className='mx-20'>
      <SearchForm
        handleSubmit={handleSubmit}
        movieTitle={movieTitle}
        handleInputChange={handleInputChange}
      />

      <div className='flex flex-wrap'>
        {movies.map((movie) => (
          <div key={movie.id} className='mr-2'>
            <MovieCard data={movie} path='movies' />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Movies;
