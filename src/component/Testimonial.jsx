import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import {Autoplay} from 'swiper/modules'
import T1 from '../images/T1.jpg'
import T2 from '../images/T2.jpg'
import T3 from '../images/T3.jpg'

const Testimonial = () => {
    const data = [
        {
            id: 1,
            src : T1,
            name: 'Alexander Walker',
            job : 'Graphic Designer',
            test : 'These people really know what they are doing! Great customer support availability and supperb kindness.'
        },
        {
            id: 2,
            src : T2,
            name: 'Baraka Clinton',
            job : 'English Teacher',
            test : 'These people really know what they are doing! Great customer support availability and supperb kindness.'
        },
        {
            id: 3,
            src:T3,
            name: 'Isabelle Smith',
            job : 'Content Writer',
            test : 'These people really know what they are doing! Great customer support availability and supperb kindness.'
        },
    ]
  return (
    <div>
       <div className="container px-5 md:px-2 pt-[50px] pb-[40px]">
            <Swiper
              modules={[Autoplay]}
              autoplay={{
                delay:2000,
                disableOnInteraction: false,
              }}
              spaceBetween={1}
              slidesPerView={1}
              loop={true}
              breakpoints={{
                768: {
                  slidesPerView: 2, // Show two slides on screens wider than 768px
                },
              }}
            >
                {data?.map(slide => {
                    return(
                        <SwiperSlide>
                        <div key={slide.id} className=" grid grids-row-2 gap-2 md:gap-5 w-[350px] md:w-[550px]">
                            <div className="border-2 border-white w-[400px]">
                             <p className=" text-[#BBBBBB] px-8 py-5 text-sm md:text-[15px] mx-2 leading-10"> {slide.test} </p>
                            </div>
                          <div className=" md:col-span-3 flex items-center gap-7 ml-5 mt-4">
                          <img
                            src={slide.src}
                            alt=""
                            className=" w-[70px] md:w-[70px] col-span-2 md:col-span-1 h-auto md:h-[70px] overflow-hidden rounded-full"
                          />
                          <div className="">
                            <h4 className=" font-semibold text-lg text-white">{slide.name}</h4>
                            <p className=" text-[#BBBBBB] text-[14px]">{slide.job}</p>
                          </div>
                          </div>
                        </div>
                      </SwiperSlide>
                    )
                })}
            </Swiper>
          </div>
    </div>
  )
}

export default Testimonial
