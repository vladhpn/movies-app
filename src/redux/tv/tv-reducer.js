import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';

import {
  fetchPopuladTvShowSuccess,
  fetchTopTvShowSuccess,
  fetchTrendingTvShowsSuccess,
  fetchTvByTitleSuccess,
  fetchTvDetailsSuccess,
  fetchTvTrailerSuccess,
  fetchTvCastSuccess,
} from './tv-action';

const popularTvShowReducer = createReducer([], {
  [fetchPopuladTvShowSuccess]: (_, action) => action.payload,
});

const topTvShowReducer = createReducer([], {
  [fetchTopTvShowSuccess]: (_, action) => action.payload,
});

const trendingTvShowReducer = createReducer([], {
  [fetchTrendingTvShowsSuccess]: (_, action) => action.payload,
});

const tvByTitleReducer = createReducer([], {
  [fetchTvByTitleSuccess]: (_, action) => action.payload,
});

const tvDetailsReducer = createReducer([], {
  [fetchTvDetailsSuccess]: (_, action) => action.payload,
});

const tvTrailerReducer = createReducer([], {
  [fetchTvTrailerSuccess]: (_, action) => action.payload,
});

const tvCastReducer = createReducer([], {
  [fetchTvCastSuccess]: (_, action) => action.payload,
});

export default combineReducers({
  popularTvShowReducer,
  topTvShowReducer,
  trendingTvShowReducer,
  tvByTitleReducer,
  tvDetailsReducer,
  tvTrailerReducer,
  tvCastReducer,
});
