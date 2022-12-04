import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import NewsCard from '../NewsCard/NewsCard';
import s from './SwiperCard.module.scss'
import {data} from '../../data'

const SwiperCard = () => {


  let articles = data.map( ar =>
    <SwiperSlide key={ar.id} className={s.swiperItem}>
      <NewsCard linkTo={`/news/${ar.id}`}  title={ar.title} scrImg={ar.scrImg} description={ar.description} text={'Читать'} date={ar.date}/>
    </SwiperSlide>
)
  return (
      <>
        <Swiper 
        spaceBetween={50}
        slidesPerView={3}
        grabCursor={true}
        breakpoints={{
          0: {
            slidesPerView: 1,
          },
          798: {
            slidesPerView: 2,
          },
          992:{
            slidesPerView: 3,
          },

        }}
        className={s.swiper}>
        {articles}
      </Swiper>
      </>
  )
}

export default SwiperCard