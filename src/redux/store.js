import { configureStore } from '@reduxjs/toolkit';
import { movies } from './movies';
import { tv } from './tv';

const store = configureStore({
  reducer: {
    movies: movies,
    tv: tv,
  },
});

export default store;
