import { Trailer } from '../Trailer/Trailer';
import { Cast } from '../Cast/Cast';
import { posterUrl } from '../../api'
import defaultImg from '../../images/no-image.jpeg'

export const Details = ({ details, trailer, cast }) => {
  const bgStyle = details.backdrop_path
    ? posterUrl + details.backdrop_path
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
          src={details.poster_path?posterUrl + `${details.poster_path}` : defaultImg}
          alt={details.title ? details.title : details.name}
        />

        <div className='ml-8'>
          <h1 className='text-7xl text-white font-semibold mb-8'>
            {details.title ? details.title : details.name}
          </h1>

          <ul className='flex items-center mb-8'>
            {details.genres
              ? details.genres.map((g) => {
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

          <p className='text-white font-normal text-lg'>{details.overview}</p>
        </div>
      </div>

      <div>
        <Trailer trailer={trailer} />
        <Cast cast={cast} />
      </div>
    </div>
  );
};
