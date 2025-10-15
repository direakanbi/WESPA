"use client";

import React from 'react'
import {Swiper, SwiperSlide} from "swiper/react"

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';



import { Autoplay, Pagination,  } from 'swiper/modules';

type SliderProps = {
  children: React.ReactNode;
  autoplayDelay?: number;
  slidesPerView?: number;
  className?: string;
}

function SliderComponent({children,autoplayDelay=4000,slidesPerView=3,className=""}:SliderProps) {
  return (
    <div className={className}>
      <Swiper
        spaceBetween={30}
        centeredSlides={false}
        autoplay={{
          delay: autoplayDelay,
          disableOnInteraction: false,
        }}
        pagination={false}
        modules={[Autoplay, Pagination]}
        className="mySwiper"
        breakpoints={{
          0: { slidesPerView: 3 },
          640: { slidesPerView: 4 },
          1024: { slidesPerView: slidesPerView },
        }}
      >
        {children}
      </Swiper>
    </div>
  )
}

export default SliderComponent