import React, { useState } from 'react'
import aboutimg from '../assets/about-img.jpg'
import { useInView } from 'react-intersection-observer'

function Abouts() {
  const [ref3,inView3]=useInView({
    threshold:0.20
  })
  const [ref4,inView4]=useInView({
    threshold:0.20
  })
  return (
    <div>
              <section>
                <div  className='w-[100%] lg:flex '>
                  <div ref={ref3} className={`lg:px-40 lg:py-22 lg:space-y-6 lg:[w-60%] text-center lg:text-left py-20 space-y-3 transition-all transform duration-700 ${inView3?"opacity-100 translate-x-0" : "opacity-0 -translate-x-40"} `}>
                    <h1 className='text-3xl font-bold'>ABOUT US</h1>
                    <p>There are many variations of passages of Lorem Ipsum available, <br />but the majority have suffered alteration in some form, by <br /> injected humour, or randomisedThere are many variations of <br /> passages of Lorem Ipsum available, but the majority have suffered <br /> alteration in some form, by injected humour, or randomised</p>
                    <button className='px-12 py-2 bg-[#0355CC] border border-[#0355CC] hover:bg-white hover:text-[#0355CC] text-white'>READ MORE</button>
                  </div>
                  <div ref={ref4} className={`lg:w-[40%] transition-all transform duration-700 ${inView4?"opacity-100 translate-x-0":"opacity-0 translate-x-40"}`}>
                    <img className='md:ml-10 lg:pt-10 lg:px-0  lg:w-[450px]'  src={aboutimg} alt="" />
                  </div>
                </div>
              </section>
    </div>
  )
}

export default Abouts