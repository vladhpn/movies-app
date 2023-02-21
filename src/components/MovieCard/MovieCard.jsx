const imageUrl = 'https://image.tmdb.org/t/p/original';

export const MovieCard = ({ data }) => {
  return (
    <div className='group w-[248px] mb-8 hover:scale-110 ease-in-out duration-300 '>
          <a href={`/movies/${data.id}`}>
        <img
          className='object-fill'
          src={imageUrl + `${data.poster_path}`}
          alt={data.original_title}
        />
        <h4 className='text-white text-xl group-hover:text-purple-500 mt-2'>
          {!data.title ? data.name : data.title}
        </h4>
      </a>
    </div>
  );
};
