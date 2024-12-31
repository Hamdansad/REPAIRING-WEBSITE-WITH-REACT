import { faBars, faEnvelope, faPhone, faX } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Header() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="w-full text-white">
            <div className="bg-black py-4">
                <div className="container mx-auto w-[90%] flex justify-between items-center">
                    <div className="flex gap-2 items-center">
                        <FontAwesomeIcon icon={faPhone} className='text-orange-500' />
                        <p>Call: +01 1212121212</p>
                    </div>
                    <div className="flex gap-2 items-center">
                        <FontAwesomeIcon icon={faEnvelope} className='text-orange-500'/>
                        <p>Email: demo@gmail.com</p>
                    </div>
                </div>
            </div>

            <div className="bg-[#D1E3FF] text-black py-3">
                <div className="container mx-auto w-[90%] flex justify-between items-center">
                    <div>
                        <a href="#" className="text-xl font-semibold text-[#0355CC]">INANCE</a>
                    </div>

                    <nav className="hidden lg:flex space-x-8">
                       <Link className='hover:text-[#0355CC]'  to='/'>Home</Link>
                       <Link className='hover:text-[#0355CC]'  to='/about'>About</Link>
                       <Link className='hover:text-[#0355CC]'  to='/services'>Services</Link>
                       <Link className='hover:text-[#0355CC]'  to='/contact'>Contact Us</Link>
                    </nav>

                    <div className="lg:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-2xl transition-transform duration-300 ease-in-out"
                        >
                            <FontAwesomeIcon icon={isOpen ? faX : faBars} />
                        </button>
                    </div>
                </div>
                <div className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-[500px]' : 'max-h-0'}`}>
                    <nav className="p-4 text-center">
                        <Link to='/' className='block transition-all duration-300 ease-in-out hover:text-blue-500'>
                            Home
                        </Link>
                        <Link to='/about' className='block transition-all duration-300 ease-in-out hover:text-blue-500'>
                            About
                        </Link>
                        <Link to='/services' className='block transition-all duration-300 ease-in-out hover:text-blue-500'>
                            Services
                        </Link>
                        <Link to='/contact' className='block transition-all duration-300 ease-in-out hover:text-blue-500'>
                            Contact Us
                        </Link>
                    </nav>
                </div>
            </div>
        </header>
    );
}

export default Header;
