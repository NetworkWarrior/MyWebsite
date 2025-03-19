import React from 'react'
import { Spotlight } from './ui/Spotlight'
import { cn } from '@/lib/utils'

const Hero = () => {
  return (
    <div className='pb-20 pt-36'>
        <div>
            <Spotlight
                className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
                fill="white"
            />
            <Spotlight
                className="h-[80vh] w-[50vw] top-10 left-full"
                fill="purple"
            />
            <Spotlight className="left-80 top-28 h-[80vh] w-[50vw]" fill="blue" />
        </div>
      

        <div className="absolute top-0 left-0 flex h-screen w-full items-center justify-center bg-white dark:bg-black-100">
            <div
                className={cn(
                    "absolute inset-0",
                    "[background-size:100px_100px]",
                    "[background-image:linear-gradient(to_right,#f7f7f9_2px,transparent_2px),linear-gradient(to_bottom,#f7f7f9_2px,transparent_2px)]",
                    "dark:[background-image:linear-gradient(to_right,#262626_2px,transparent_2px),linear-gradient(to_bottom,#262626_2px,transparent_2px)]",
                  )}
                  
            />
            <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black-100"></div>
        </div>
        
        <div className='flex justify-center relative my-20 z-10'>
            <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
                <h2 className="uppercase tracking-widest text-xs text-center text-blue-100 max-w-80">
                    Dynamic Web Magic with Next.js
                </h2>
            </div>
        </div>

    </div>
  )
}

export default Hero
