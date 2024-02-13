import React from 'react'

const Featured = () => {
  return (
    <div className=' w-full py-10'>
      <div className=" w-full px-10  border-b-[1px] border-zinc-600 ">
        <h1 className='text-white text-4xl pb-8'>Features Project </h1>
      </div>
      <div className="cards w-full flex gap-10 px-10 my-10">
        <div className="card w-1/2 h-[80vh] relative">
          <h1 className='absolute z-[9] top-[50%] text-white  -translate-x-1/2 left-full text-6xl font-bold'>{
            "FYDE".split("").map((e, i) =><span>{e}</span> )
}</h1>
        <div className="w-full h-full rounded-xl overflow-hidden">
      <img className='object-cover w-full h-full' src="https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-663x551.png" alt="" />
        </div>
        </div>
        <div className="card w-1/2 h-[80vh] relative ">
        <h1 className='absolute z-[9] top-[50%] text-white translate-x-1/2  right-full text-6xl font-bold'>
         {
          "VISE".split('').map(item=><span>{item}</span>)
         }
        </h1>
        <div className="w-full h-full  rounded-xl overflow-hidden bg-zinc-200 ">
<img className='object-cover w-full h-full' src="https://ochi.design/wp-content/uploads/2022/09/Vise_front2-663x551.jpg" alt="" />
</div>
</div>
    </div>
    </div>
  )
}

export default Featured
