import React from 'react'

interface ImageSlidesProps{
    title: string;
    image: string;
    heading: string;
    textDesc?: string;
    button?: string;
    model?: string;
    overlay?: boolean;
    imageAsBackground?: boolean;
    overlayOpacity?: number,
    
}
const ImageSlides = ({
    title,
    image,
    heading,
    textDesc,
    button,
    model,
    imageAsBackground=false,
    overlay=false,
    overlayOpacity= 0.4

}:ImageSlidesProps) => {
  return (
    <>
<div className='bg-cover p-3 w-[40rem] mx-auto h-[18rem] rounded-2xl text-teal-50 relative  border bg-no-repeat'
     style={{
        backgroundImage: `url(${image})`
     }}>

        {
            overlay && (
                <div className='absolute inset-0 rounded-2xl'
                style={{
                    backgroundColor: `rgba(0,0,0, ${overlayOpacity} )`
                }}
                >

                </div>
            )
        }
        <div className='relative z-10 h-full '>

                <p className='absolute top-0 left-0 text-xs font-light'>{model}</p>
                <h1 className=' title text-6xl font-black absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2'>{title}</h1>

            <div className='flex absolute bottom-0 items-end w-full  justify-between '>
                
                <div className=' w-[25rem]'>
                    <h2 className='font-bold text-xl'>{heading}</h2>
                    <p className='leading-tight text-sm'>{textDesc}</p>
                </div>
                <button className='border-0 rounded-3xl w-[10rem] cursor-pointer bg-white text-black text-sm py-2 px-4'>{button}</button>
            </div>
        </div>
    </div>
    
    </>
  )
}

export default ImageSlides