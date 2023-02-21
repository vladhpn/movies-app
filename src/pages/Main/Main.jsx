import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
  fetchPopularMovies,
  fetchTopMovies,
} from '../../redux/movies/movies-operations';
import {
  fetchPopularTvShow,
  fetchTopTvShow,
} from '../../redux/tv/tv-operations';
import { Slider } from '../../components/Slider/Slider';

const Main = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPopularMovies());
    dispatch(fetchTopMovies());
    dispatch(fetchPopularTvShow());
    dispatch(fetchTopTvShow());
  }, [dispatch]);

  const popularMovies = useSelector(
    (state) => state.movies.popularMoviesReducer
  );

  const topMovies = useSelector((state) => state.movies.topMoviesReducer);

  const popularTvShow = useSelector((state) => state.tv.popularTvShowReducer);

  const topTvShow = useSelector((state) => state.tv.topTvShowReducer);

  return (
    <div className='mx-20 pb-10'>
      <Slider slides={popularMovies} title={'Popular Movies'} />
      <Slider slides={topMovies} title={'Top Rated Movies'} />
      <Slider slides={popularTvShow} title={'Popular TV Shows'} />
      <Slider slides={topTvShow} title={'Top Rated TV Shows'} />
    </div>
  );
};

export default Main;
