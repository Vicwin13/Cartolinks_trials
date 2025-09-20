import Image from 'next/image'
import React from 'react'

const Footer = () => {
  return (
    <>
        <footer>
            <div className='flex items-center justify-between pb-2'>
                <p className='font-bold'>Gallery</p>

                <div className='flex items-center gap-1'>
                    <div className='rounded-xl bg-gray-100 font-medium px-2 py-1 flex items-center gap-1cursor-pointer'>
                        <Image src={'\legalmajor-svgrepo-com.svg'} alt={'legal icon'} width={20} height={20}/>
                        Legal
                    </div>
                    <div className='rounded-xl bg-gray-100 font-medium px-2 py-1 flex items-center gap-1 cursor-pointer'>
                        <Image src={'\payment-svgrepo-com.svg'} alt={'pricing'} width={20} height={20}/>
                        Pricing
                    </div>
                </div>
            </div>
            <div className='flex items-center justify-between py-2 bg-[#111111] text-white'>
                <div className='flex items-center gap-2'>
                    <Image className='bg-white rounded-full' src={'\logo-waveform-svgrepo-com.svg'} alt={'logo'} width={50} height={45}/>
                    <span className='font-bold text-3xl'>Krea AI</span>
                </div>
                <div className='flex items-center gap-4'>
                    <p className='font-bold text-3xl'>curated by</p>
                    <div className='flex items-center gap-2 font-extrabold text-3xl'>
                        <Image src={'\deezer-logo-svgrepo-com.svg'} alt={'mobbin'} width={30} height={30}/>
                        Mobbin
                    </div>
                </div>
            </div>
        </footer>
    
    </>
  )
}

export default Footer