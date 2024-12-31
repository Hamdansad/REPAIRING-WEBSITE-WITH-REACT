import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faScrewdriverWrench, faPlugCircleBolt, faToilet } from '@fortawesome/free-solid-svg-icons'
import { useInView } from 'react-intersection-observer'
function Service() {
  const [ref6, inView6]= useInView({
    threshold: 0.20,
  });
  const [ref8, inView8] = useInView({
    threshold: 0.20
  });
  const [ref9, inView9] = useInView({
    threshold: 0.20
  });
  
  return (
    <div>
      <section>
        <h1 ref={ref8} className={`text-center text-3xl font-semibold mt-20 translate-x-0 transform duration-1000 ${inView8 ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-40"}`}>OUR SERVICES</h1>
        <div ref={ref6} className="lg:flex justify-evenly items-center py-20 space-y-5">
          <div className="text-center ">
            <p><FontAwesomeIcon icon={faScrewdriverWrench} className='text-6xl' /></p>
            <h3 className='text-lg font-semibold '>Maintenance</h3>
            <p className='lg:text-lg text-sm'>when looking at its layout. The point of using <br /> Lorem Ipsum is that it has a more-or-less <br />normal</p>
          </div>
          <div className='text-center'>
            <p><FontAwesomeIcon icon={faPlugCircleBolt} className='text-6xl' /></p>
            <h3 className='text-lg font-semibold'>Electrical</h3>
            <p className='lg:text-lg text-sm'>when looking at its layout. The point of using <br /> Lorem Ipsum is that it has a more-or-less <br /> normal</p>
          </div>
          <div className="text-center">
            <p><FontAwesomeIcon icon={faToilet} className='text-6xl' /></p>
            <h3 className='text-lg font-semibold'>Plumbing</h3>
            <p className='lg:text-lg text-sm'>when looking at its layout. The point of using <br /> Lorem Ipsum is that it has a more-or-less <br />normal</p>
          </div>
        </div>
        <div className='w-full  flex justify-center'>
          <button className='px-12 py-2 bg-[#0355CC] border border-[#0355CC] hover:bg-white hover:text-[#0355CC]  text-white '>VIEW MORE</button>

        </div>
      </section>

    </div>
  )
}

export default Service