import { useSelector } from 'react-redux';

import { Trailer } from '../Trailer/Trailer';
import{ Cast} from '../Cast/Cast'

const imageUrl = 'https://image.tmdb.org/t/p/original';
export const Details = () => {
  const movieDetails = useSelector((state) => state.movies.movieDetailsReducer);

  const bgStyle = movieDetails.backdrop_path
    ? imageUrl + movieDetails.backdrop_path
    : null;

  return (
      <div
        className='h-screen pt-[160px] bg-cover bg-no-repeat flex
    flex-col px-20
  '
        style={{
          backgroundImage: ` linear-gradient(to top, rgb(33, 33, 33),rgba(33, 33, 33, 0.6)), url(${bgStyle})`,
        }}
      >
        <div className='flex justify-center'>
          <img
            className='object-fill w-72'
            src={imageUrl + `${movieDetails.poster_path}`}
            alt={movieDetails.original_title}
          />

          <div className='ml-8'>
            <h1 className='text-7xl text-white font-semibold mb-8'>
              {movieDetails.title}
            </h1>

            <ul className='flex items-center mb-8'>
              {movieDetails.genres
                ? movieDetails.genres.map((g) => {
                    return (
                      <li
                        key={g.id}
                        className='text-white font-normal text-lg mr-3'
                      >
                        {g.name}
                      </li>
                    );
                  })
                : null}
            </ul>

            <p className='text-white font-normal text-lg'>
              {movieDetails.overview}
            </p>
          </div>
        </div>

        <div>
        <Trailer />
        <Cast />
        </div>
      </div>
  );
};
