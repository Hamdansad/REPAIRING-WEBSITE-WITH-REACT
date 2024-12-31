import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { faEnvelope, faLocationDot, faPhone } from '@fortawesome/free-solid-svg-icons'
function Footer() {
    return (
        <div>
            <section>
                <div className='w-full py-12 bg-[#0A0A45]'>
                    <h3 className='text-center font-semibold text-2xl text-white'>GET IN TOUCH</h3>
                    <div className='lg:flex justify-evenly items-center text-center lg:ml-[-100px] py-12 text-white space-y-5'>
                        <div>
                            <p><FontAwesomeIcon icon={faLocationDot} className='bg-[#0355CC] lg:w-[37%] lg:py-8 rounded-full w-[20%] py-7' /></p>
                            <p>Lorem Ipsum is simply dummy text</p>
                        </div>
                        <div>
                            <p><FontAwesomeIcon icon={faPhone} className='bg-[#0355CC] lg:w-[70%] lg:py-8 rounded-full w-[20%] py-7'/></p>
                            <p>+02 1234567890</p>
                        </div>
                        <div>
                            <p><FontAwesomeIcon icon={faEnvelope} className='bg-[#0355CC] lg:w-[70%] lg:py-8 rounded-full w-[20%] py-7'/></p>
                            <p>demo@gmail.com</p>
                        </div>
                    </div>
                    <h3 className='text-center font-bold ml-5 text-2xl text-white'>FOLLOW US</h3>
                </div>
            </section>
        </div>
    )
}

export default Footer