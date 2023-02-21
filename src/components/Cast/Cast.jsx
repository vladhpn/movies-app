import { Slider } from '../Slider/Slider';
import { Swiper, SwiperSlide } from 'swiper/react';
import { imageUrl } from '../../api'
import defaultImg from '../../images/profile.jpeg'

export const Cast = ({ cast }) => {
  return (
    <div className='h-[300px]'>
      <h3 className='text-white font-bold text-2xl my-11'> Cast</h3>

      <Swiper spaceBetween={cast.length} slidesPerView={10}>
        {cast.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className='w-[130px] pr-2 '>
              <img
                src={slide.profile_path ? imageUrl + `${slide.profile_path}` :defaultImg}
                alt={slide.name}
                className='rounded-lg h-[186px] object-cover'
              />

              <p className='text-white font-normal text-sm'>{slide.name}</p>
              <p className='text-stone-300 font-light text-xs'>
                {slide.character}
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
