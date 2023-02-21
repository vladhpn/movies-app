const imageUrl = 'https://image.tmdb.org/t/p/original';

export const MovieCardForSlider = ({ data }) => { 
  return (
    <div>
      <div className='group w-[320px] mt-4'>
        <a href={`/movies/${data.id}`}>
          <img
            src={imageUrl + `${data.backdrop_path}`}
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
