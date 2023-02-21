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
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-40 h-40">
  <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
</svg>

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
