/* eslint-disable no-unused-vars */
import React from 'react'
import PropTypes from 'prop-types';
import reactLogo from '../assets/react.svg'
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import { EffectFade, Navigation } from 'swiper/modules';

const ThumbnailSlider = (props) => {
  const { 
    colSpan,
    style,
  } = props;
  // const swiper = useSwiper();
  return (
    <Swiper
    loop={true}
    modules={[EffectFade, Navigation]}
    spaceBetween={0}
    effect={'fade'}
    navigation={true}
    slidesPerView={1}
    onSlideChange={() => console.log('slide change')}
    onSwiper={(swiper) => console.log(swiper)} 
    className={`${style}`}>
        <SwiperSlide className='w-full h-full relative z-10'>
            <div className="absolute z-10 w-[20rem] p-8 top-[50%] -translate-y-[50%] max-md:left-[50%] max-md:-translate-x-[50%] bg-stone-100 rounded-lg shadow-md">
                <div className='flex gap-2 items-center'>
                    <img src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="" className='w-8 aspect-square object-contain rounded' />
                    <p className="text-xl font-semibold">Figo Dev</p>
                    <p> • </p>
                    <p className='text-gray-700'>10 mins ago</p>
                </div>
                <div className="mt-5">
                    <p className="text-3xl">
                        Villa Intan Kebanjiran Lagi, Walaupun Musim Kemarau
                    </p>
                    <p className="mt-4">
                        <span className=' text-gray-700'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestias, obcaecati quidem saepe delectus maxime omnis explicabo corporis. Deleniti eveniet magni, numquam ab commodi ipsam, odio nostrum cupiditate sunt voluptate reiciendis. &nbsp;</span> 
                        <Link to={'/'} className='font-semibold'>Read more</Link>
                    </p>
                    {/* <div>
                        <div className="flex gap-2">
                            <button onClick={() => swiper.slidePrev()}>Slide to the prev slide</button>
                            <button className='swiper-slide-next'>Slide to the next slide</button>
                        </div>
                    </div> */}
                </div>
            </div>
            <div className='ms-auto relative md:w-[80%] w-full h-full rounded-xl overflow-hidden'>
                <div className='h-36 absolute bottom-0 bg-gradient-to-t from-black to-transparent w-full'></div>
                <img src="https://images.unsplash.com/photo-1498598457418-36ef20772bb9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dmlld3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="" className="w-full h-[90vh] object-cover max-md:aspect-square" />
            </div>
        </SwiperSlide>
    </Swiper>
  )
}

ThumbnailSlider.propTypes = {
    colSpan: PropTypes.number.isRequired,
    style: PropTypes.string.isRequired,
}

export default ThumbnailSlider