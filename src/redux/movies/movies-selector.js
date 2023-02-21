import { createSelector } from '@reduxjs/toolkit';

export const getTrailer = (state) => state.movies.movieTrailerReducer;

export const movieTrailer = createSelector(
  [getTrailer],
  (movieTrailerReducer) => {
    return movieTrailerReducer.find(({ type }) => type === 'Trailer');
  }
);
