import React from 'react'
import {motion} from "framer-motion"
function Marquee() {
  return (
    <div>
        <div data-scroll data-scroll-section data-scroll-speed=".1" className=" w-full h-[50vh] bg-[#004d43] rounded-tl-lg rounded-tr-lg">
           <div className=" whitespace-nowrap flex marquee  overflow-x-auto  py-10 pr-20 ">
           <motion.h1 initial={{x:0}} animate={{x:"-100%"}} transition={{ease:"linear",repeat:Infinity,duration:10,}}  className='text-[13vw] text-white font-extrabold tracking-tight px-5 border-white-800 border-t-[1px] border-b-[1px] border-y-2 '>We Are Ochi</motion.h1>
           <motion.h1 initial={{x:0}} animate={{x:"-100%"}} transition={{ease:"linear",repeat:Infinity,duration:10}}  className='text-[13vw] text-white font-extrabold tracking-tight px-5 border-white-800 border-t-[1px] border-b-[1px] border-y-2 '>We Are Ochi</motion.h1>
           <motion.h1 initial={{x:0}} animate={{x:"-100%"}} transition={{ease:"linear",repeat:Infinity,duration:10}}  className='text-[13vw] text-white font-extrabold tracking-tight px-5 border-white-800 border-t-[1px] border-b-[1px] border-y-2 '>We Are Ochi</motion.h1>

           </div>

        </div>
      
    </div>
  )
}

export default Marquee
