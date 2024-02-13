import React from 'react'

function about() {
  return (
    <div>
       <div data-scroll data-scroll-speed="-.3" className="w-full min-h-20 p-20 bg-[#CDEA68] rounded-tl-3xl rounded-tr-3xl">
        <h1 className='text-[3vw] font-bold pr-10'>Ochi is a strategic partner for fast-grow­ing tech businesses that need to raise funds, sell prod­ucts, ex­plain com­plex ideas, and hire great peo­ple.</h1>
     
       <div className="border-t-[1px] my-5  border-zinc-700 "></div>

       <div className="flex flex-wrap w-full">
        <div className="left w-1/2 ">
          <h1 className='text-5xl font-bold  text-black '>Our approach:</h1>

          <button className='px-8 py-4 mt-5 items-center flex gap-4 text-white font-semibold bg-black rounded-full '>READ MORE
          <div className='w-2 h-2 bg-zinc-100 rounded-full'></div>
          </button>
        
        </div>
        <div className="right w-1/2">
          <img className='rounded-md' src="https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-1326x939.jpg" alt="" />
        </div>
       </div>
       </div>
    </div>
  )
}

export default about
