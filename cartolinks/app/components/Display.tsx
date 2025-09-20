'use client'

import { Card } from './Card'
import  Carousel from './Carousel'
import ImageSlides from './ImageSlides'
import Navbar from './Navbar'
import React from 'react'

const Display = () => {
  return (
    <>
    {/* This is the navbar area  */}
     <Navbar/>
     

         <Carousel/>

        <div className='grid justify-center items-center grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2'>

            <Card 
            title="Image" 
            description="Generate Images with custom styles in Flus and ideogram."
            imageSrc='/image-picture-973-svgrepo-com.svg'
            imageAlt='image icon'
            open='Open'
            status='New'
            className='img-grad'
            
            />
               <Card 
            title="Video" 
            description="Generate Videos with custom styles in Hulu and Pica and many more."
            imageSrc='\video-svgrepo-com.svg'
            imageAlt='video icon'
            open='Open'
            className='video-grad'
            
            />

               <Card 
            title="Realtime" 
            description="Realtime AI rendering on a canvas. Instant feedback loops"
            imageSrc='\real-time-strategy-svgrepo-com.svg'
            imageAlt='realtime  icon'
            open='Open'
            className='real-grad'
            
            />

               <Card 
            title="Enhance" 
            description="Upscale and enhance images and videos up to 22k"
            imageSrc='\enhance-effect-svgrepo-com.svg'
            imageAlt='enhancer icon'
            open='Open'
            status='New'
            className='enhance-grad'
            
            />

               <Card 
            title="Edit" 
            description="Add objects, change style or expand photos and clarifications"
            imageSrc='\edit-tools-art-svgrepo-com.svg'
            imageAlt='edit icon'
            open='Open'
            status='New'
            className='edit-grad'
            
            />

               <Card 
            title="Video Lipsync" 
            description="Lip sync any video to any audio"
            imageSrc='\mic-svgrepo-com.svg'
            imageAlt='lip sync icon'
            open='Open'
            status='New'
            className='lip-grad'
            
            />

               <Card 
            title="Motion Transfer" 
            description="Transfer motion to images and imitate characters"
            imageSrc='\surrender-give-up-throw-hands-up-in-the-air-give-in-svgrepo-com.svg'
            imageAlt='motion icon'
            open='Open'
            status='New'
            className='motion-grad'
            
            />

               <Card 
            title="Train" 
            description="Teach kids to replicate your style, products or characters"
            imageSrc='\brain-svgrepo-com.svg'
            imageAlt='brain icon'
            open='Open'
           
            />

        </div>
     
    
    
    </>
  )
}

export default Display