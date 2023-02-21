import { useSelector } from 'react-redux';
import { movieTrailer } from '../../redux/movies/movies-selector';

export const Trailer = () => {
  const trailer = useSelector(movieTrailer);

  return (
    <>
      <h3 className='text-white font-bold text-2xl mt-8'> Trailer</h3>
      {trailer ? (
        <iframe
          className='w-[640px] aspect-video ml-auto mr-auto'
          title='trailer'
          src={`https://www.youtube.com/embed/${trailer.key}`}
          frameBorder='0'
          allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
        ></iframe>
      ) : null}
    </>
  );
};
