'use client'

import Image from 'next/image'
import React from 'react'

interface CardProps{
    title: string;
    description: string;
    imageSrc?: string;
    imageAlt?: string;
    className?: string;
    status?: string;
    open?: string;
}

export const Card = ({
    title,
    description,
    imageAlt='',
    imageSrc='',
    className='',
    status='',
    open=''
    
}: CardProps) => {
  return (
    <>
    
    <div className=' flex gap-4 items-center  w-fit py-2.5'>
        <div className={`px-2 py-1 rounded-lg bg-white w-fit ${className}`}>

        <Image src={imageSrc} alt={imageAlt} width={30} height={30}/>
        </div>
        <div className='w-2/4 '>
            <div className='flex items-center gap-3'>
                <p className='font-bold text-base'>
                  {title} 
                </p>
                    <span className='bg-blue-600 text-sm px-1 text-white rounded font-medium'>{status}</span>
            </div>
            <p className=' leading-tight text-sm'>
                {description}
            </p>
        </div>
        <button className='bg-gray-200 px-5 text-sm font-medium text-[#131212] py-1 rounded-2xl'>{open}</button>
    </div>
    
    </>
  )
}
