import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';

import { fetchPopuladTvShowSuccess, fetchTopTvShowSuccess } from './tv-action';

const popularTvShowReducer = createReducer([], {
  [fetchPopuladTvShowSuccess]: (_, action) => action.payload,
});

const topTvShowReducer = createReducer([], {
  [fetchTopTvShowSuccess]: (_, action) => action.payload,
});

export default combineReducers({
  popularTvShowReducer,
  topTvShowReducer,
});
