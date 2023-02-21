import { useEffect, useState, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { MovieCard } from '../../components/MovieCard/MovieCard';
import { SearchForm } from '../../components/SearchForm/SearchForm';

import {
  fetchTrendingTvShows,
  fetchTvByTitle,
} from '../../redux/tv/tv-operations';

const TvShows = () => {
  const [tvTitle, setTvTitle] = useState('');
  const [isSearch, setIsSearch] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTrendingTvShows());
  }, [dispatch]);

  const trendingTvShows = useSelector(
    (state) => state.tv.trendingTvShowReducer
  );

  const tvByTitle = useSelector((state) => state.tv.tvByTitleReducer);

  const handleInputChange = useCallback((event) => {
    setTvTitle(event.currentTarget.value);
  }, []);

  const handleSubmit = useCallback(
    (event) => {
      event.preventDefault();
      dispatch(fetchTvByTitle(tvTitle));
      setTvTitle('');
      setIsSearch(true);
    },
    [dispatch, tvTitle]
  );

  console.log(trendingTvShows);

  const tvShows = !isSearch ? trendingTvShows : tvByTitle;

  return (
    <div className='mx-20'>
      <SearchForm
        handleSubmit={handleSubmit}
        movieTitle={tvTitle}
        handleInputChange={handleInputChange}
      />

      <div className='flex flex-wrap'>
        {tvShows.map((tv) => (
          <div key={tv.id} className='mr-2'>
            <MovieCard data={tv} path='tv-show' />
          </div>
        ))}
      </div>
    </div>
  );
};

export default TvShows;
