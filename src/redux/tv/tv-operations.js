import axios from 'axios';
import {
  fetchPopuladTvShowRequest,
  fetchPopuladTvShowSuccess,
  fetchPopuladTvShowError,
  fetchTopTvShowRequest,
  fetchTopTvShowSuccess,
  fetchTopTvShowError,
  fetchTrendingTvShowsRequest,
  fetchTrendingTvShowsSuccess,
  fetchTrendingTvShowsError,
  fetchTvByTitleRequest,
  fetchTvByTitleSuccess,
  fetchTvByTitleError,
  fetchTvDetailsRequest,
  fetchTvDetailsSuccess,
  fetchTvDetailsError,
  fetchTvTrailerRequest,
  fetchTvTrailerSuccess,
  fetchTvTrailerError,
  fetchTvCastRequest,
  fetchTvCastSuccess,
  fetchTvCastError,
} from './tv-action';

const apiKey = process.env.REACT_APP_API_KEY;

export const fetchPopularTvShow = () => async (dispatch) => {
  dispatch(fetchPopuladTvShowRequest());
  try {
    const response = await axios.post(
      `https://api.themoviedb.org/3/tv/popular?api_key=${apiKey}&language=en-US`
    );

    dispatch(fetchPopuladTvShowSuccess(response.data.results));
  } catch (error) {
    dispatch(fetchPopuladTvShowError(error.message));
  }
};

export const fetchTopTvShow = () => async (dispatch) => {
  dispatch(fetchTopTvShowRequest());
  try {
    const response = await axios.post(
      `https://api.themoviedb.org/3/tv/top_rated?api_key=${apiKey}&language=en-US`
    );

    dispatch(fetchTopTvShowSuccess(response.data.results));
  } catch (error) {
    dispatch(fetchTopTvShowError(error.message));
  }
};

export const fetchTrendingTvShows = () => async (dispatch) => {
  dispatch(fetchTrendingTvShowsRequest());
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/trending/tv/day?api_key=${apiKey}`
    );

    dispatch(fetchTrendingTvShowsSuccess(response.data.results));
  } catch (error) {
    dispatch(fetchTrendingTvShowsError(error.message));
  }
};

export const fetchTvByTitle = (query) => async (dispatch) => {
  dispatch(fetchTvByTitleRequest());
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/search/tv?api_key=${apiKey}&query=${query}`
    );

    dispatch(fetchTvByTitleSuccess(response.data.results));
  } catch (error) {
    dispatch(fetchTvByTitleError(error.message));
  }
};

export const fetchTvDetails = (id) => async (dispatch) => {
  dispatch(fetchTvDetailsRequest());
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/tv/${id}?api_key=${apiKey}&language=en-US`
    );

    dispatch(fetchTvDetailsSuccess(response.data));
  } catch (error) {
    dispatch(fetchTvDetailsError(error.message));
  }
};

export const fetchTvTrailer = (id) => async (dispatch) => {
  dispatch(fetchTvTrailerRequest());
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/tv/${id}/videos?api_key=${apiKey}&language=en-US`
    );

    dispatch(fetchTvTrailerSuccess(response.data.results));
  } catch (error) {
    dispatch(fetchTvTrailerError(error.message));
  }
};

export const fetchTvCast = (id) => async (dispatch) => {
  dispatch(fetchTvCastRequest());
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/tv/${id}/credits?api_key=${apiKey}&language=en-US`
    );

    dispatch(fetchTvCastSuccess(response.data.cast));
  } catch (error) {
    dispatch(fetchTvCastError(error.message));
  }
};
