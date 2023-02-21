import { createAction } from '@reduxjs/toolkit';

export const fetchPopuladMoviesRequest = createAction(
  'movies/fetchPopuladMoviesRequest'
);
export const fetchPopuladMoviesSuccess = createAction(
  'popularMovies/fetchPopuladMoviesSuccess'
);
export const fetchPopuladMoviesError = createAction(
  'movies/fetchPopuladMoviesError'
);

export const fetchTopMoviesRequest = createAction(
  'movies/fetchTopMoviesRequest'
);
export const fetchTopMoviesSuccess = createAction(
  'movies/fetchTopMoviesSuccess'
);
export const fetchTopMoviesError = createAction('movies/fetchTopMoviesError');

export const fetchTrendingMoviesRequest = createAction(
  'movies/fetchTrendingMoviesRequest'
);
export const fetchTrendingMoviesSuccess = createAction(
  'movies/fetchTrendingMoviesSuccess'
);
export const fetchTrendingMoviesError = createAction(
  'movies/fetchTrendingMoviesError'
);

export const fetchMovieByTitleRequest = createAction(
  'movies/fetchMovieByTitleRequest'
);

export const fetchMovieByTitleSuccess = createAction(
  'movies/fetchMovieByTitleSuccess'
);
export const fetchMovieByTitleError = createAction(
  'movies/fetchMovieByTitleError'
);

export const fetchMovieDetailsSuccess = createAction(
  'movies/fetchMovieDetailsSuccess'
);

export const fetchMovieDetailsError = createAction(
  'movies/fetchMovieDetailsError'
);
export const fetchMovieDetailsRequest = createAction(
  'movies/fetchMovieDetailsRequest'
);

export const fetchMovieTrailerRequest = createAction(
  'movies/fetchMovieTrailerRequest'
);

export const fetchMovieTrailerSuccess = createAction(
  'movies/fetchMovieTrailerSuccess'
);
export const fetchMovieTrailerError = createAction(
  'movies/fetchMovieTrailerError'
);

export const fetchMovieCastRequest = createAction(
  'movies/fetchMovieCastRequest'
);

export const fetchMovieCastSuccess = createAction(
  'movies/fetchMovieCastSuccess'
);
export const fetchMovieCastError = createAction('movies/fetchMovieCastError');
