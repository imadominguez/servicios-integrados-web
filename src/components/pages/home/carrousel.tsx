'use client';

import Image from 'next/image';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export const Carrousel = () => {
  return (
    <div>
      <Swiper
        pagination={true}
        modules={[Pagination]}
        loop={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        className="max-h-[80dvh]"
      >
        <SwiperSlide>
          <Image
            src="/imgs/fondo.jpg"
            alt="Carrousel 1"
            width={1920}
            height={1080}
            className="h-full object-cover"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="/imgs/fondo.jpeg"
            alt="Carrousel 2"
            width={1920}
            height={1080}
            className="h-full object-cover"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="/imgs/fondo.jpg"
            alt="Carrousel 3"
            width={1920}
            height={1080}
            className="h-full object-cover"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};
