import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import * as motion from 'motion/react-client'

import React, { useRef } from 'react'

import Image from 'next/image';
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
    variableWidth: true,
    adaptiveHeight: true,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover:true,
    centerMode: false,
    arrows: false,
    responsive: [
      {breakpoint: 640, settings:{slidesToShow:1, variableWidth: false, centerMode:false}}
    ]
  }


  return (
    <>
    <div className='slider-container  '>
      <Slider ref={c => { sliderRef.current = c }} {...setting}>
        <div className='slides'>

        <ImageSlides 
        title={'wap 2.2'} 
        image={'/premium_photo-1752766980657-d2266aa2a7a1.avif'} 
        heading={'Image generation'}
        textDesc='Generate complete Images with the brand new and powerful WAN 2.2 model. '
        overlay={true}
        model='NEW AI MODEL'
        button='Try WAN 2.2'
        />
        </div>
        <div className='slides'>

         <ImageSlides 
        title={'flux.1'} 
        image={'/photo-1581833971358-2c8b550f87b3.avif'} 
        heading={'FLUX.1 Krea'}
        textDesc="We're making the weights to our FLUX.1 Krea model open-source."
        overlay={true}
        model='NEW AI MODEL'
        button='Try FLUX.1'
        />
        </div>
        <div className='slides'>

         <ImageSlides 
        title={'krea.1'} 
        image={'/igor-omilaev-X4S-G_Q9U9g-unsplash.jpg'} 
        heading={'Krea AI'}
        textDesc='Krea AI for generating new models for construction related works. '
        overlay={true}
        model='NEW AI MODEL'
        button='Try Krea AI'
        />
        </div>
        <div className='slides'>

         <ImageSlides 
        title={'Claude'} 
        image={'/photo-1753622118655-136a65245d89.avif'} 
        heading={'Claude Language'}
        textDesc='Claude is a family of large language models developed by Anthropic, known for its helpful approach.'
        overlay={true}
        model='NEW AI MODEL'
        button='Try Claude'
        />
        </div>
        <div className='slides'>

         <ImageSlides 
        title={'Eliza'} 
        image={'/ryan-yao-hhBvtVxDV_I-unsplash.jpg'} 
        heading={'ELIZA Chatbot'}
        textDesc='ELIZA was an early chatbot from the 1960s that simulated a psychotherapist.'
        overlay={true}
        model='NEW AI MODEL'
        button='Try ELIZA'
        />
        </div>

      </Slider>
    </div>
         <div className="mt-6 sm:mr-10 flex sm:mt-4 justify-end gap-2">
        <motion.button
        whileHover={{scale: 1.2}}
        whileTap={{scale: 0.85}}
        transition={{ease: ["easeIn", "easeOut"]}}
        onClick={() => sliderRef.current?.slickPrev()} className="p-1 bg-amber-50 rounded-full border border-gray-300 cursor-pointer"><Image src={'/left-arrow-backup-2-svgrepo-com.svg'} alt={'left arrow'} width={10} height={10}/></motion.button>
        <motion.button
        whileHover={{scale: 1.2}}
        whileTap={{scale: 0.85}}
        transition={{ease: ["easeIn", "easeOut"]}}
        onClick={() => sliderRef.current?.slickNext()} className="p-1 bg-amber-50 rounded-full border border-gray-300 cursor-pointer"><Image src={'/right-arrow-backup-2-svgrepo-com.svg'} alt={'right arrow'} width={10} height={10}/></motion.button>
      </div>
    </>
  )
}

export default Carousel