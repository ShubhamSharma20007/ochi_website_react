import React from 'react'

function Cards() {
  return (
    <div>
      <div className="w-full h-screen bg-zinc-100 flex gap-5 items-center px-20">
        <div className="cardcontainer  h-[50vh] w-1/2 ">
            <div className="card w-full h-full bg-[#004D43] rounded-lg flex justify-center items-center">
                <img className='' src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg" alt="" />
            </div>

        </div>
        <div className="cardcontainer flex w-1/2 h-[50vh] gap-5">
        <div className="card w-full  bg-[#192826]  rounded-lg  "></div>
        <div className="card w-full  bg-[#192826]  rounded-lg "></div>
</div>
      </div>
    </div>
  )
}

export default Cards
