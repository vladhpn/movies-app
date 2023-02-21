import { posterUrl } from '../../api'
import defaultImg from '../../images/no-image-main.jpeg'

export const MovieCardForSlider = ({ data, path }) => { 

   const url = path === 'movies' ? 'movies' : 'tv-shows'
  return (
    <div>
      <div className='group w-[320px]  mt-4'>
        <a href={`/${url}/${data.id}`}>
          <img
            className='object-cover'
            src={data.backdrop_path ? posterUrl + `${data.backdrop_path}` : defaultImg}
            alt={data.original_title}
          />
          <h4 className='text-white text-xl group-hover:text-purple-500 mt-2'>
            {!data.title ? data.name : data.title}
          </h4>
        </a>
      </div>
    </div>
  );
};
