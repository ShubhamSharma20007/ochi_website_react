import React, { useState, useEffect } from 'react';

function Eyes() {
    const [rotate, setRotate] = useState(0);

    useEffect(() => {
        const handleMouseMove = (e) => {
            const mouseX = e.clientX;
            const mouseY = e.clientY;

            // Calculate difference
            const deltaX = mouseX - window.innerWidth / 2;
            const deltaY = mouseY - window.innerHeight / 2;

            // Calculate angle
            const angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);
            setRotate(angle - 180);
        };
        window.addEventListener("mousemove", handleMouseMove);
  

      
    }, []);

    return (
        <div>
            <div className="eyes w-full h-screen relative" data-scroll data-scroll-speed="-.7">
                <div  className="absolute left-[37%] flex gap-10 top-[25%]">
                    <div className="w-[12vw] h-[12vw] rounded-full bg-zinc-100 relative">
                        <div className="w-[8vw] h-[8vw] absolute left-1/2 top-1/2 -translate-x-[50%] -translate-y-[50%] rounded-full bg-zinc-800 overflow-hidden flex justify-center items-center">
                            <div className="line w-full  absolute left-[50%] top-[50%]" style={{ transform: `translate(-50%, -50%) rotate(${rotate}deg)` }}>
                                <div className="w-6 h-6 rounded-full bg-zinc-100"></div>
                            </div>
                        </div>
                    </div>
                    <div className="w-[12vw] h-[12vw]  rounded-full bg-zinc-100 relative">
                        <div className="w-[8vw] h-[8vw] absolute left-1/2 flex justify-center items-center top-1/2 -translate-x-[50%] -translate-y-[50%] rounded-full bg-zinc-800">
                        <div className="line w-full  absolute left-[50%] top-[50%]" style={{ transform: `translate(-50%, -50%) rotate(${rotate}deg)` }}>
                                <div className="w-6 h-6 rounded-full bg-zinc-100"></div>
                            </div>
                        </div>
                    </div>
                </div>
                <img src="https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-1440x921.jpg" className='object-cover w-full h-full' alt="" />
            </div>
        </div>
    );
}

export default Eyes;
