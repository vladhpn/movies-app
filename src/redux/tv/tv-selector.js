import { createSelector } from '@reduxjs/toolkit';

export const getTrailer = (state) => state.tv.tvTrailerReducer;

export const tvTrailer = createSelector([getTrailer], (tvTrailerReducer) => {
  return tvTrailerReducer.find(({ type }) => type === 'Trailer');
});
