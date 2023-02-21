import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { Details } from '../../components/Details/Details';
import { tvTrailer } from '../../redux/tv/tv-selector';

import {
  fetchTvCast,
  fetchTvDetails,
  fetchTvTrailer,
} from '../../redux/tv/tv-operations';

const TvShowDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTvCast(id));
    dispatch(fetchTvDetails(id));
    dispatch(fetchTvTrailer(id));
  }, [dispatch, id]);

  const details = useSelector((state) => state.tv.tvDetailsReducer);
  const cast = useSelector((state) => state.tv.tvCastReducer);
  const trailer = useSelector(tvTrailer);

  return <Details details={details} trailer={trailer} cast={cast} />;
};

export default TvShowDetails;
