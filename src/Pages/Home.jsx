import React from 'react'
import Header from '../Components/Header'
import silder from '../assets/slider-img.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWrench, faHouse, faPaintRoller } from '@fortawesome/free-solid-svg-icons'
import { useInView } from 'react-intersection-observer'
import Abouts from '../Components/Abouts'
import sit from '../assets/aa.png'
import Service from '../Components/Service'
import Contactus from '../Components/Contactus'
import Footer from '../Components/Footer'


function Home() {
  const [ref, inView] = useInView({
    threshold: 0.20,
  });
  const [ref1, inView1] = useInView({
    threshold: 0.10,
  });
  const [ref2, inView2] = useInView({
    threshold: 0.10,
  })
  const [ref5,inView5]=useInView({
    threshold:0.20
  })
  return (
    <div className='w-screen  '>
      <Header />
      <div className='w-[100%]  bg-[#D1E3FF] lg:flex '>
        <div ref={ref1} className={`lg:w-[60%] lg:py-36 lg:px-36 lg:space-y-3 px-5 py-14 space-y-5  transform duration-700 transition-all  md:text-center lg:text-left  ${inView1 ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-40"} `}>
          <h1 className='text-4xl font-bold text-[#0355CC]'>Repair and <br />Maintenance <br /> Services</h1>
          <p>Prevent breakdowns before they happen! Trust our expert repair <br /> and maintenance services to keep your systems running at their best. <br />From minor fixes to major overhauls  were here to ensure your equipment.</p>
          <button className='bg-[#ff9500]  px-8 py-2 rounded-md text-white font-semibold hover:bg-transparent border border-[#ff9500] hover:text-[#ff9500]  lg:ml-0'>CONTACT US</button>
        </div>
        <div ref={ref2} className={`lg:w-[40%] lg:flex justify-center items-end md:flex transform duration-700 transition-all ${inView2 ? "opacity-100 translate-x-0" : "opacity-0 translate-x-40"}`}>
          <img className='lg:w-[65%] md:w-[40%]' src={silder} alt="" />
        </div>
      </div>
      <div
        ref={ref}
        className={`lg:flex justify-center  gap-7   text-center p-10 transform duration-700 transition-all   ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-40"} `}>
        <div className=' shadow-2xl shadow-black rounded-2xl hover:bg-[#ff9500] px-20 py-20 delay-200 hover:text-white'>
          <p><FontAwesomeIcon icon={faWrench} className='text-[80px] text-[#0e4193]' /></p>
          <p className='font-bold'>REPAIR</p>
        </div>
        <div className='shadow-2xl shadow-black rounded-2xl  hover:bg-[#ff9500] px-20 delay-200 py-20 hover:text-white'>
          <p><FontAwesomeIcon icon={faHouse} className='text-[80px] text-[#0e4193]' /></p>
          <p className='font-bold'>IMPROVE</p>
        </div>
        <div className='shadow-2xl shadow-black rounded-2xl px-20   hover:bg-[#ff9500] ease-in-out hover:text-white delay-200 py-20'>
          <p><FontAwesomeIcon icon={faPaintRoller} className='text-[80px] text-[#073989]' /></p>
          <p className='font-bold'>MAINTAIN</p>
        </div>
      </div>
        <Abouts/>
        <section>
          <div className='lg:w-[full] bg-[#D1E3FF] lg:flex text-center lg:text-left'>
              <div className='lg:w-[40%] lg:pt-24'>
                  <img className='hidden lg:block'  src={sit} alt="" />
              </div>
              <div ref={ref5} className={`lg:w-[60%] lg:py-64 space-y-6 translate-x-0 transform duration-1000 py-20 ${inView5?"opacity-100 translate-x-0":"opacity-0 translate-x-40"}`}>
                  <h1 className='font-semibold text-4xl'>WE PROVIDE PROFESSIONAL <br />HOME SERVICES.</h1>
                  <p>randomised words which don't look even slightly believable. If you are going to <br /> use a passage of Lorem Ipsum, you need to be sure there isn't anything <br /> embarrassing hidden in the middle of text. All randomised words which don't <br /> look even slightly</p>
                  <button className='px-12 py-2 bg-[#ff9500] border border-[#ff9500] hover:bg-white hover:text-[#ff9500] text-white hover:font-bold'>READ MORE</button>
              </div>
          </div>
        </section>
        <Service/>
        <Contactus/>
        <Footer/>
    </div>
  )
}

export default Home