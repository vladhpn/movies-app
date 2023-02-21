import { useSelector } from "react-redux";

import { Slider } from "../Slider/Slider";
import { Swiper, SwiperSlide } from 'swiper/react';

const imageUrl = 'https://image.tmdb.org/t/p/w500';

export const Cast = () => {

    const cast = useSelector((state) => state.movies.movieCastReducer);

    return (<div className="h-[300px]">

        <h3 className='text-white font-bold text-2xl my-11'> Cast</h3>

         <Swiper spaceBetween={cast.length} slidesPerView={10}>
        {cast.map((slide) => (
          <SwiperSlide key={slide.id} >
          <div className="w-[130px] pr-2 ">
               <img
            src={imageUrl + `${slide.profile_path}`}
                        alt={slide.name}
                        className="rounded-lg"
                    />

                    <p className='text-white font-normal text-sm'>{slide.name}</p>
                     <p className='text-stone-300 font-light text-xs'>{slide.character}</p>
                     </div> 
          </SwiperSlide>
        ))}
      </Swiper>


      
        
          
    

        {/* <Slider slides={cast} title={'Cast'} /> */}

    </div>)

}