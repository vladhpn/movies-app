import axios from 'axios';
import {
  fetchPopuladMoviesRequest,
  fetchPopuladMoviesSuccess,
  fetchPopuladMoviesError,
  fetchTopMoviesRequest,
  fetchTopMoviesSuccess,
  fetchTopMoviesError,
  fetchTrendingMoviesRequest,
  fetchTrendingMoviesSuccess,
  fetchTrendingMoviesError,
  fetchMovieByTitleRequest,
  fetchMovieByTitleSuccess,
  fetchMovieByTitleError,
  fetchMovieDetailsSuccess,
  fetchMovieDetailsError,
  fetchMovieDetailsRequest,
  fetchMovieTrailerRequest,
  fetchMovieTrailerSuccess,
  fetchMovieTrailerError,
  fetchMovieCastRequest,
  fetchMovieCastSuccess,
  fetchMovieCastError,
} from './movies-action.js';

const apiKey = process.env.REACT_APP_API_KEY;

export const fetchPopularMovies = () => async (dispatch) => {
  dispatch(fetchPopuladMoviesRequest());
  try {
    const response = await axios.post(
      `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US`
    );

    dispatch(fetchPopuladMoviesSuccess(response.data.results));
  } catch (error) {
    dispatch(fetchPopuladMoviesError(error.message));
  }
};

export const fetchTopMovies = () => async (dispatch) => {
  dispatch(fetchTopMoviesRequest());
  try {
    const response = await axios.post(
      `https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}&language=en-US`
    );

    dispatch(fetchTopMoviesSuccess(response.data.results));
  } catch (error) {
    dispatch(fetchTopMoviesError(error.message));
  }
};

export const fetchTrendingMovies = () => async (dispatch) => {
  dispatch(fetchTrendingMoviesRequest());
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/trending/movie/day?api_key=${apiKey}`
    );

    dispatch(fetchTrendingMoviesSuccess(response.data.results));
  } catch (error) {
    dispatch(fetchTrendingMoviesError(error.message));
  }
};

export const fetchMovieByTitle = (query) => async (dispatch) => {
  dispatch(fetchMovieByTitleRequest());
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${query}`
    );

    dispatch(fetchMovieByTitleSuccess(response.data.results));
  } catch (error) {
    dispatch(fetchMovieByTitleError(error.message));
  }
};

export const fetchMovieDetails = (id) => async (dispatch) => {
  dispatch(fetchMovieDetailsRequest());
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}&language=en-US`
    );

    dispatch(fetchMovieDetailsSuccess(response.data));
  } catch (error) {
    dispatch(fetchMovieDetailsError(error.message));
  }
};

export const fetchMovieTrailer = (id) => async (dispatch) => {
  dispatch(fetchMovieTrailerRequest());
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/${id}/videos?api_key=${apiKey}&language=en-US`
    );

    dispatch(fetchMovieTrailerSuccess(response.data.results));
  } catch (error) {
    dispatch(fetchMovieTrailerError(error.message));
  }
};

export const fetchMovieCast = (id) => async (dispatch) => {
  dispatch(fetchMovieCastRequest());
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${apiKey}&language=en-US`
    );

    dispatch(fetchMovieCastSuccess(response.data.cast));
  } catch (error) {
    dispatch(fetchMovieCastError(error.message));
  }
};
