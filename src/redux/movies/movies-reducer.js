import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';

import {
  fetchPopuladMoviesRequest,
  fetchPopuladMoviesSuccess,
  fetchPopuladMoviesError,
  fetchTopMoviesRequest,
  fetchTopMoviesSuccess,
  fetchTopMoviesError,
  fetchTrendingMoviesSuccess,
  fetchTrendingMoviesRequest,
  fetchTrendingMoviesError,
  fetchMovieByTitleSuccess,
  fetchMovieDetailsSuccess,
  fetchMovieTrailerSuccess,
  fetchMovieCastSuccess,
  fetchMovieByTitleRequest,
  fetchMovieByTitleError,
  fetchMovieDetailsRequest,
  fetchMovieDetailsError,
  fetchMovieTrailerRequest,
  fetchMovieTrailerError,
  fetchMovieCastRequest,
  fetchMovieCastError,
} from './movies-action';

const popularMoviesReducer = createReducer([], {
  [fetchPopuladMoviesSuccess]: (_, action) => action.payload,
});

const topMoviesReducer = createReducer([], {
  [fetchTopMoviesSuccess]: (_, action) => action.payload,
});

const trendingMoviesReducer = createReducer([], {
  [fetchTrendingMoviesSuccess]: (_, action) => action.payload,
});

const moviesByTitleReducer = createReducer([], {
  [fetchMovieByTitleSuccess]: (_, action) => action.payload,
});

const movieDetailsReducer = createReducer([], {
  [fetchMovieDetailsSuccess]: (_, action) => action.payload,
});

const movieTrailerReducer = createReducer([], {
  [fetchMovieTrailerSuccess]: (_, action) => action.payload,
});

const movieCastReducer = createReducer([], {
  [fetchMovieCastSuccess]: (_, action) => action.payload,
});

const loading = createReducer(false, {
  [fetchPopuladMoviesRequest]: () => true,
  [fetchPopuladMoviesSuccess]: () => false,
  [fetchPopuladMoviesError]: () => false,
  [fetchTopMoviesRequest]: () => true,
  [fetchTopMoviesSuccess]: () => false,
  [fetchTopMoviesError]: () => false,
  [fetchTrendingMoviesRequest]: () => true,
  [fetchTrendingMoviesSuccess]: () => false,
  [fetchTrendingMoviesError]: () => false,
  [fetchMovieByTitleRequest]: () => true,
  [fetchMovieByTitleSuccess]: () => false,
  [fetchMovieByTitleError]: () => false,
  [fetchMovieDetailsRequest]: () => true,
  [fetchMovieDetailsSuccess]: () => false,
  [fetchMovieDetailsError]: () => false,
  [fetchMovieTrailerRequest]: () => true,
  [fetchMovieTrailerSuccess]: () => false,
  [fetchMovieTrailerError]: () => false,
  [fetchMovieCastRequest]: () => true,
  [fetchMovieCastSuccess]: () => false,
  [fetchMovieCastError]: () => false,
});

export default combineReducers({
  popularMoviesReducer,
  topMoviesReducer,
  trendingMoviesReducer,
  moviesByTitleReducer,
  movieDetailsReducer,
  movieTrailerReducer,
  movieCastReducer,
  loading,
});
