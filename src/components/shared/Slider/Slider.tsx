import {Navigation} from 'swiper/modules';
import {Swiper, SwiperSlide} from 'swiper/react';
import Controllers from './Controllers/Controllers'

import styles from './Slider.module.scss';
import 'swiper/css';

type ISlideItem = {id: string};

interface ISliderProps<T> {
  slides: T[],
  renderSlide: (slideItem: T) => JSX.Element;
}


export default function Slider<T extends ISlideItem>({slides, renderSlide}: ISliderProps<T>) {
  return (
    <div className={styles.slider__container}>
      <Swiper
        modules={[Navigation]}
        spaceBetween={20}
        breakpoints={{
          430: {
            slidesPerView: 1
          }
        }}
      >
        {slides.map(item => (
          <SwiperSlide
            key={item.id}
            className={styles.slide}
          >
            {renderSlide(item)}
          </SwiperSlide>
        ))}
        <Controllers/>
      </Swiper>
    </div>
  )
}