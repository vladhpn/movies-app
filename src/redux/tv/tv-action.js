import { createAction } from '@reduxjs/toolkit';

export const fetchPopuladTvShowRequest = createAction(
  'tvShow/fetchPopuladTvShowRequest'
);
export const fetchPopuladTvShowSuccess = createAction(
  'tvShow/fetchPopuladTvShowSuccess'
);
export const fetchPopuladTvShowError = createAction(
  'tvShow/fetchPopuladTvShowError'
);
export const fetchTopTvShowRequest = createAction(
  'tvShow/fetchTopTvShowRequest'
);
export const fetchTopTvShowSuccess = createAction(
  'tvShow/fetchTopTvShowSuccess'
);
export const fetchTopTvShowError = createAction('tvShow/fetchTopTvShowError');
