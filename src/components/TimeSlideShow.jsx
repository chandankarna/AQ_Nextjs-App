'use client'
import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Image from 'next/image';
import Link from 'next/link';

import { Pagination, Autoplay } from 'swiper/modules';

import slide1 from '../assets/images/time1.jpg'
import slide2 from '../assets/images/time2.jpg'
import slide3 from '../assets/images/time3.jpg'
// import slide4 from '../assets/images/ca4.jpg'

const TimeSlideShow = () => {
  return (
    <>
      <Swiper
       pagination={{
        clickable: true
      }
      }
      modules={[Pagination, Autoplay]}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
      className="banner-swiper career-swiper">
        {/* {
          [...Array(5)].map((item, index)=>{
            return( */}
            <SwiperSlide >
              <div className="ta-slide">
                <Image src={slide2} alt="" />
              </div>
            </SwiperSlide>
            <SwiperSlide >
              <div className="ta-slide">
                <Image src={slide3} alt="" />
              </div>
            </SwiperSlide>
            <SwiperSlide >
              <div className="ta-slide">
                <Image src={slide1} alt="" />
              </div>
            </SwiperSlide>
            {/* )
          })
        } */}
      </Swiper>
    </>
  )
}

export default TimeSlideShow