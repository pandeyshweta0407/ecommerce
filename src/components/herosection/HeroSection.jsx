import React from 'react'
import HeroImg from "../picture/heroimg.svg";

const HeroSection = () => {
  return ( 
    <div className='w-full h-full home m-5'  >
       <div className="w-2/4 flex flex-col flex-wrap items-center justify-center  slideInRight">
            <div className='lg:text-8xl  md:text-6xl sm:text-6xl my-6  tracking-in-expand text-transparent bg-gradient-to-r bg-clip-text  from-blue-500 to-green-500 '>R e s p o n s e</div>
            <div className='lg:text-4xl  md:text-2xl sm:text-2xl my-3 text-focus-in text-blue-gray-500 text-wrap' >Your online shopping app</div>
            <div className='lg:text-2xl  md:text-1xl sm:text-1xl text-pop-up-top my-16 text-wrap text-blue-gray-300' >Fullfilling your all needs</div>

       </div>
       <div className="w-2/4 flex items-center justify-center">
         <img src={HeroImg} alt="heroimg" className='slideInLeft rounded-3xl '  /> 
       </div>
    </div>
  )
}

export default HeroSection
