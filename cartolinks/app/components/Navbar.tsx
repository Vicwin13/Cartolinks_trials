'use client'

import * as motion from 'motion/react-client'

import React, { useState } from 'react'

import Image from 'next/image'
import ThemeToggle from './ThemeToggle'

const Navbar = () => {

const [open, setOpen] = useState(false)




  return (
    <>
     <nav className='flex relative justify-between p-2 items-center'>
        <div className='flex items-center gap-2 '>
            <div className='logo'>
                <Image src={'/logo-waveform-svgrepo-com.svg'} alt={'logo'} width={35} height={30}/>
            </div>
            <div className='flex items-center justify-center gap-1 p-2 border border-gray-200 rounded logo-div'>
                <Image  src={'/avatar-svgrepo-com.svg'} alt={'avartar'} width={15} height={15} className='rounded-full avatar'/>
                <span className='avatar-user'>thisavataruser</span>
                <Image className='icon icon-avt' src={'/arrow-down-svgrepo-com.svg'} alt={'arrow-down'} width={10} height={10}/>
            </div>
        </div>

        <div className='flex items-center home-nav  justify-center  gap-1.5 bg-gray-300 rounded-lg p-1 '>
            <Image className='middle-icon' src={'/home-svgrepo-com.svg'} alt={'home'} width={10} height={10}/>
            <Image className='middle-icon' src={'/image-picture-973-svgrepo-com.svg'} alt={'image icon'} width={10} height={10}/>
            <Image className='middle-icon' src={'/video-svgrepo-com.svg'} alt={'video'} width={10} height={10}/>
            <Image className='middle-icon' src={'/brush-svgrepo-com.svg'} alt={'stroke'} width={10} height={10}/>
            <Image className='middle-icon' src={'/brush-stroke-svgrepo-com.svg'} alt={'brush'} width={10} height={10}/>
            <Image className='middle-icon' src={'/pencil-svgrepo-com.svg'} alt={'pencil'} width={10} height={10}/>
            <Image className='middle-icon' src={'/file-svgrepo-com.svg'} alt={'file'} width={10} height={10}/>
        </div>


            <button
            type='button'
            aria-controls='mobile-nav'
            className='dropdown animate__animated animate-bounce absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2'
            onClick={()=> setOpen(prev => !prev)}
            >
                <Image  src={'/arrow-down-svgrepo-com.svg'} alt={'arrow down'} width={20} height={20}/>
            </button>

        <div
        id='mobile-nav'
        className={` mt-11 z-100 min-w-max absolute transform -translate-y-1/2 top-1/2 left-1/2 -translate-x-1/2  duration-200 origin-top transition-all ${ open ? 'scale-y-100':'scale-y-0 pointer-events-none'}`}
        style={{transformOrigin: 'top'}}
        >

        <div className=' flex  items-center justify-center gap-1.5 bg-gray-300 rounded-lg p-1 '>
            <Image className='middle-icon' src={'/home-svgrepo-com.svg'} alt={'home'} width={10} height={10}/>
            <Image className='middle-icon' src={'/image-picture-973-svgrepo-com.svg'} alt={'image icon'} width={10} height={10}/>
            <Image className='middle-icon' src={'/video-svgrepo-com.svg'} alt={'video'} width={10} height={10}/>
            <Image className='middle-icon' src={'/brush-svgrepo-com.svg'} alt={'stroke'} width={10} height={10}/>
            <Image className='middle-icon' src={'/brush-stroke-svgrepo-com.svg'} alt={'brush'} width={10} height={10}/>
            <Image className='middle-icon' src={'/pencil-svgrepo-com.svg'} alt={'pencil'} width={10} height={10}/>
            <Image className='middle-icon' src={'/file-svgrepo-com.svg'} alt={'file'} width={10} height={10}/>
        </div>
        
        </div>

        <div className='flex items-center justify-center gap-3'>
            <button className='flex items-center justify-center gap-1.5'>
                <Image className='icon w-6 p-1' src={'/image-picture-973-svgrepo-com.svg'} alt={'image icon'} width={10} height={10}/>
                <span className='gallery'>
                    Gallery
                </span>
            </button>
            <button className='flex items-center justify-center gap-1.5'>
                <Image className='icon w-6 p-1' src={'/headphones-alt-2-svgrepo-com.svg'} alt={'headphones'} width={10} height={10}/>
                <span className='support'>
                    Support
                </span>
            </button>
            <button className='flex items-center justify-center gap-1.5'>
                <Image className='icon w-6 p-1' src={'/notifications-svgrepo-com.svg'} alt={'bells'} width={10} height={10}/>

            </button>
            <ThemeToggle/>
            <button className='flex items-center justify-center gap-1.5'>
                <Image className='icon w-6 p-1' src={'/avatar-svgrepo-com.svg'} alt={'avatar'} width={10} height={10}/>
            </button>
        </div>
     </nav>
    </>
  )
}

export default Navbar