import Image from 'next/image'
import React from 'react'
import ThemeToggle from './ThemeToggle'

const Display = () => {
  return (
    <>
    {/* This is the navbar area  */}
     <nav className='flex justify-between p-2 items-center'>
        <div className='flex items-center gap-1'>
            <div><Image src={'/logo-waveform-svgrepo-com.svg'} alt={'logo'} width={45} height={40}/></div>
            <div className='flex items-center justify-center gap-1'>
                <Image src={'/avatar-svgrepo-com.svg'} alt={'avartar'} width={20} height={20} className='rounded-full'/>
                <span>thisavataruser</span>
                <Image src={'/arrow-down-svgrepo-com.svg'} alt={'arrow-down'} width={20} height={20}/>
            </div>
        </div>

        <div className='flex items-center justify-center gap-2 bg-gray-300 rounded-lg p-3'>
            <Image className='middle-icon' src={'/home-svgrepo-com.svg'} alt={'home'} width={20} height={20}/>
            <Image className='middle-icon' src={'/image-svgrepo-com.svg'} alt={'image icon'} width={20} height={20}/>
            <Image className='middle-icon' src={'/video-svgrepo-com.svg'} alt={'video'} width={20} height={20}/>
            <Image className='middle-icon' src={'/brush-svgrepo-com.svg'} alt={'stroke'} width={20} height={20}/>
            <Image className='middle-icon' src={'/brush-stroke-svgrepo-com.svg'} alt={'brush'} width={20} height={20}/>
            <Image className='middle-icon' src={'/pencil-svgrepo-com.svg'} alt={'pencil'} width={20} height={20}/>
            <Image className='middle-icon' src={'/file-svgrepo-com.svg'} alt={'file'} width={20} height={20}/>
        </div>

        <div className='flex items-center justify-center gap-3'>
            <button className='flex items-center justify-center'>
                <Image src={'/image-svgrepo-com.svg'} alt={'image icon'} width={20} height={20}/>
                Gallery
            </button>
            <button className='flex items-center justify-center'>
                <Image src={'/headphones-alt-2-svgrepo-com.svg'} alt={'headphones'} width={20} height={20}/>
                Support
            </button>
            <button className='flex items-center justify-center'>
                <Image src={'/notifications-svgrepo-com.svg'} alt={'bells'} width={20} height={20}/>

            </button>
            <ThemeToggle/>
            <button className='flex items-center justify-center'>
                <Image src={'/avatar-svgrepo-com.svg'} alt={'avatar'} width={20} height={20}/>
            </button>
        </div>
     </nav>
    
    
    </>
  )
}

export default Display