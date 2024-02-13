import React from 'react'
import { MdArrowOutward } from "react-icons/md";
function LandingPage() {
  return (
    <div>
        <div className="w-full min-h-screen text-white bg-zinc-900 pt-1">
            <div className="textstructure mt-32 px-20">
                <div className="masker font-bold text-8xl  leading-none  -tracking-normal ">
                    <h1>We Create </h1>
                </div>
                <div className="masker font-bold text-8xl flex gap-4 items-center  leading-none  tracking-tight ">
                    <div className='w-[7vw] h-[5vw] bg-red-800 rounded-md'></div>
                    <h1>Eye Opening </h1>
                </div>
                <div className="masker font-bold text-8xl  leading-none  tracking-tight ">
                    <h1>Presentation </h1>
                </div>
            </div>

            <div className="border-t-[1px] border-zinc-700 mt-32 px-20 flex justify-between items-center py-5">
            {["For public and private companies", " From the first pitach to IPO"].map((item,index)=>(
            
                <p className='text-xl font-light tracking-tight leading-none'>{item}</p>
            ))}
            <div className='start flex gap-3'>
                <div className='px-4 py-2 border-[1px] rounded-full border-zinc-700 uppercase'>start the project</div>
                <div className="rounded-full border-[1px] p-2 px-3  border-zinc-700">
                <MdArrowOutward />
                </div>
            </div>
            </div>
        </div>
      
    </div>
  )
}

export default LandingPage
