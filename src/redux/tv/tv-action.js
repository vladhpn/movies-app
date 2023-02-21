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

export const fetchTrendingTvShowsRequest = createAction(
  'tvShow/fetchTrendingTvShowsRequest'
);
export const fetchTrendingTvShowsSuccess = createAction(
  'tvShow/fetchTrendingTvShowsSuccess'
);
export const fetchTrendingTvShowsError = createAction(
  'tvShow/fetchTrendingTvShowsError'
);

export const fetchTvByTitleRequest = createAction(
  'tvShow/fetchTvByTitleRequest'
);
export const fetchTvByTitleSuccess = createAction(
  'tvShow/fetchTvByTitleSuccess'
);
export const fetchTvByTitleError = createAction('tvShow/fetchTvByTitleError');

export const fetchTvDetailsSuccess = createAction(
  'tvShow/fetchTvDetailsSuccess'
);

export const fetchTvDetailsError = createAction('tvShow/fetchTvDetailsError');
export const fetchTvDetailsRequest = createAction(
  'tvShow/fetchTvDetailsRequest'
);

export const fetchTvTrailerRequest = createAction(
  'tvShow/fetchTvTrailerRequest'
);

export const fetchTvTrailerSuccess = createAction(
  'tvShow/fetchTvTrailerSuccess'
);
export const fetchTvTrailerError = createAction('tvShow/fetchTvTrailerError');

export const fetchTvCastRequest = createAction('tvShow/fetchTvCastRequest');

export const fetchTvCastSuccess = createAction('tvShow/fetchTvCastSuccess');
export const fetchTvCastError = createAction('tvShow/fetchTvCastError');
