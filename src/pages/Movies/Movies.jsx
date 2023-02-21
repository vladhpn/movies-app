import { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { MovieCard } from '../../components/MovieCard/MovieCard';

import {
  fetchTrendingMovies,
  fetchMovieByTitle,
} from '../../redux/movies/movies-operations';

const Movies = () => {
  const [movieTitle, setMovieTitle] = useState('');
  const [test, setTest] = useState(false);

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
      setTest(true);
    },
    [dispatch, movieTitle]
  );

  const trendingMovies = useSelector(
    (state) => state.movies.trendingMoviesReducer
  );
  const moviesByTitle = useSelector(
    (state) => state.movies.moviesByTitleReducer
  );

  const movies = !test ? trendingMovies : moviesByTitle;

  return (
    <div className='mx-20'>
      <h1 className='text-center m-8 text-6xl text-white'>Trending Today</h1>

      <div className='w-2/5  ml-auto mr-auto mb-10'>
        <form onSubmit={handleSubmit}>
          <label className='relative block'>
            <span className='sr-only text-white'>Search</span>
            <span className='absolute inset-y-0 left-0 flex items-center pl-2'>
              <button>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  strokeWidth={1.5}
                  stroke='white'
                  className='w-6 h-6 stroke-white hover:stroke-purple-500'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z'
                  />
                </svg>
              </button>
            </span>
            <input
              className='placeholder:italic placeholder:text-slate-400 block bg-zinc-800 w-full h-12 border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-purple-500 focus:shadow-md focus:shadow-purple-500 focus:ring-purple-500 focus:ring-1 sm:text-sm text-white'
              placeholder='Search movies'
              type='text'
              name='search'
              value={movieTitle}
              onChange={handleInputChange}
            />
          </label>
        </form>
      </div>

      <div className='flex flex-wrap'>
        {movies.map((movie) => (
          <div key={movie.id} className='mr-2'>
            <MovieCard data={movie} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Movies;
