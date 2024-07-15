import React from 'react'
import HeroImg from "../picture/heroimg.svg";

const HeroSection = () => {
  return ( 
    <div className='w-full h-full flex flex-col lg:flex-row flex-wrap items-center justify-center m-5'  >
       <div className="w-full lg:w-2/4 flex flex-col flex-wrap items-center justify-center  slideInRight">
            <div className=' text-4xl  xl:text-8xl md:text-6xl my-6  tracking-in-expand text-transparent bg-gradient-to-r bg-clip-text  from-blue-500 to-green-500 '>Response</div>
            <div className=' text-2xl  xl:text-3xl my-3 text-focus-in text-blue-gray-500 text-wrap' >Your online shopping app</div>
            <div className=' text-1xl  xl:text-2xl text-pop-up-top my-16 text-wrap text-blue-gray-300' >Fullfilling your all needs</div>

       </div>
       <div className=" w-full lg:w-2/4 flex items-center justify-center slideInLeft">
         <img src={HeroImg} alt="heroimg" className=' rounded-3xl'  /> 
       </div>
    </div>
  )
}

export default HeroSection
