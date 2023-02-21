import { posterUrl } from '../../api'

import defaultImg from '../../images/no-image.jpeg'

export const MovieCard = ({ data, path }) => {

  const url = path === 'movies' ? 'movies' : 'tv-shows'

  return (
    <div className='group w-[248px] mb-8 hover:scale-110 ease-in-out duration-300 '>
          <a href={`/${url}/${data.id}`}>
        <img
          className='object-cover h-[370px]'
          src={data.poster_path ? posterUrl + `${data.poster_path}` : defaultImg}
          alt={data.original_title}
        />
        <h4 className='text-white text-xl group-hover:text-purple-500 mt-2'>
          {!data.title ? data.name : data.title}
        </h4>
      </a>
    </div>
  );
};
