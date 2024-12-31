import React from 'react'
import { useInView } from 'react-intersection-observer'
function Contactus() {
  const [ref7,inView7]=useInView({
    threshold:0.30 
    })
  return (
    <div>
      <section>
        <div ref={ref7} className='w-full py-10'>
          <div className='w-full lg:py-16 lg:flex justify-evenly lg:px-36 flex-col lg:gap-5 space-y-4 px-11'>
            <h2 className={`text-4xl font-semibold  translate-x-0 transform duration-1000 ${inView7?"opacity-100 translate-x-0":"opacity-0 -translate-x-80"}`}>CONTACT US</h2>
            <input type="text" placeholder="Name" className={` shadow-xl px-3 lg:w-full w-[90%] h-[50px] translate-x-0 transform duration-1000 ${inView7?"opacity-100 translate-x-0":"opacity-0 translate-x-80"}`} />
            <input type="number" placeholder="Number" className={` shadow-xl px-3 lg:w-full w-[90%] h-[50px] translate-x-0 transform duration-1000 ${inView7?"opacity-100 translate-x-0":"opacity-0 -translate-x-80"}`} />
            <input type="email" placeholder="Gmail" className={` shadow-xl px-3 lg:w-full w-[90%] h-[50px] translate-x-0 transform duration-1000 ${inView7?"opacity-100 translate-x-0":"opacity-0 translate-x-80"}`} />
            <input type="text" placeholder="Massege" className={` shadow-xl px-3 lg:w-full w-[90%] h-[150px] translate-x-0 transform duration-1000 ${inView7?"opacity-100 translate-x-0":"opacity-0 -translate-x-80"}`} />
            <button className={`lg:w-[20%] w-20% px-12 py-2 bg-[#0355CC] border border-[#0355CC] hover:bg-white hover:text-[#0355CC]  text-white translate-x-0 transform duration-1000  ${inView7?"opacity-100 translate-x-0":"opacity-0 translate-x-80"}`}>SEND</button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contactus