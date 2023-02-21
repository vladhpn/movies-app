import { Swiper, SwiperSlide } from 'swiper/react';
import { MovieCardForSlider } from '../../components/MovieCardForSlider/MovieCardForSlider';
import 'swiper/swiper-bundle.min.css';

export const Slider = ({ slides, title }) => {
  return (
    <>
      <h3 className='text-white text-4xl mt-8'>{title}</h3>
      <Swiper spaceBetween={slides.length} slidesPerView={4}>
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <MovieCardForSlider data={slide} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};
