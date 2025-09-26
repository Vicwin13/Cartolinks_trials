'use client';

import * as motion from 'motion/react-client'

import { useEffect, useState } from "react";

import Image from "next/image";

export default function ThemeToggle(){
    const [isDark, setIsDark] = useState<boolean> (()=> {
        if (typeof window === 'undefined') return false;

        const stored = localStorage.getItem('theme')
        if (stored === 'dark') return true
        if (stored === 'light') return false
        return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
    })

    useEffect(()=>{
        const html = document.documentElement
        if (isDark){
            html.classList.add('dark')
            localStorage.setItem('theme', 'dark')
        } else {
            html.classList.remove('dark')
            localStorage.setItem('theme', 'light')
        }
    },[isDark])

    return(
        <>
        <motion.button 
        onClick={()=> setIsDark(d => !d)}
        whileHover={{scale: 1.1}}
        whileTap={{scale: 0.9}}
        transition={{ease: ["easeIn", "easeOut"]}}
        aria-pressed={isDark}
        className="px-1 py-1 border rounded-full cursor-pointer"
        
        >
            { isDark ? <Image src={"/light-svgrepo-com.svg"} alt={"light mode"}width={20} height={20} />:
            <Image src={"/crescent-moon-phase-svgrepo-com.svg"} alt={"dark mode"} width={20} height={20}/>}
        </motion.button>
        
       
            </>
    )



}