import axios from 'axios';
import {
  fetchPopuladTvShowRequest,
  fetchPopuladTvShowSuccess,
  fetchPopuladTvShowError,
  fetchTopTvShowRequest,
  fetchTopTvShowSuccess,
  fetchTopTvShowError,
} from './tv-action';

export const fetchPopularTvShow = () => async (dispatch) => {
  dispatch(fetchPopuladTvShowRequest());
  try {
    const response = await axios.post(
      'https://api.themoviedb.org/3/tv/popular?api_key=98e87da0e762537a8cb63c18dd13caee&language=en-US'
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
      'https://api.themoviedb.org/3/tv/top_rated?api_key=98e87da0e762537a8cb63c18dd13caee&language=en-US'
    );

    dispatch(fetchTopTvShowSuccess(response.data.results));
  } catch (error) {
    dispatch(fetchTopTvShowError(error.message));
  }
};
