import React from 'react'
import Header from '../Components/Header'
import Abouts from '../Components/Abouts'
import Footer from '../Components/Footer'

function About() {
  return (
    <div>
      <Header />
      
      <div className='mt-20'>
      <Abouts/>
      <Footer/>
      </div>
    </div>
  )
}

export default About