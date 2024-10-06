import {useSwiper} from 'swiper/react';
import ChevronLeftIcon from '@assets/chevronLeft.svg?react'
import ChevronRightIcon from '@assets/chevronRight.svg?react'

import styles from './Controllers.module.scss';

export default function Controllers() {
  const swiper = useSwiper();

  return (
    <div className={styles.controller__container}>
      <button className={styles.controller} onClick={() => swiper.slidePrev()}>
        <ChevronLeftIcon/>
      </button>
      <button className={styles.controller} onClick={() => swiper.slideNext()}>
        <ChevronRightIcon/>
      </button>
    </div>
  )
}
