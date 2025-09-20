import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import React, { useRef } from 'react'

import ImageSlides from './ImageSlides';
import Slider from "react-slick";

const Carousel = () => {

  const sliderRef = useRef<Slider |null>(null)

  const setting = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow:1,
    slidesToScroll:1,
    variableWidth:true,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover:true,
    centerMode: false,
    arrows: false,
    responsive: [
      {breakpoint: 640, settings:{slidesToShow:1, variableWidth: false}}
    ]
  }


  return (
    <>
    <div className='slider-container'>
      <Slider ref={c => { sliderRef.current = c }} {...setting}>
        <ImageSlides 
        title={'wap 2.2'} 
        image={'/premium_photo-1752766980657-d2266aa2a7a1.avif'} 
        heading={'lorem'}
        textDesc='loremiuytfcvbs yioyt iyutras  tyyuyuityas tryui'
        overlay={true}
        />
         <ImageSlides 
        title={'wap 2.2'} 
        image={'/photo-1581833971358-2c8b550f87b3.avif'} 
        heading={'lorem'}
        textDesc='loremiuytfcvbs yioyt iyutras  tyyuyuityas tryui'
        overlay={true}
        />
         <ImageSlides 
        title={'wap 2.2'} 
        image={'/igor-omilaev-X4S-G_Q9U9g-unsplash.jpg'} 
        heading={'lorem'}
        textDesc='loremiuytfcvbs yioyt iyutras  tyyuyuityas tryui'
        overlay={true}
        />
         <ImageSlides 
        title={'wap 2.2'} 
        image={'/photo-1753622118655-136a65245d89.avif'} 
        heading={'lorem'}
        textDesc='loremiuytfcvbs yioyt iyutras  tyyuyuityas tryui'
        overlay={true}
        />
         <ImageSlides 
        title={'wap 2.2'} 
        image={'/ryan-yao-hhBvtVxDV_I-unsplash.jpg'} 
        heading={'lorem'}
        textDesc='loremiuytfcvbs yioyt iyutras  tyyuyuityas tryui'
        overlay={true}
        />

      </Slider>
    </div>
         <div className="mt-4 flex gap-2">
        <button onClick={() => sliderRef.current?.slickPrev()} className="px-3 py-1 rounded border">Prev</button>
        <button onClick={() => sliderRef.current?.slickNext()} className="px-3 py-1 rounded border">Next</button>
      </div>
    </>
  )
}

export default Carousel