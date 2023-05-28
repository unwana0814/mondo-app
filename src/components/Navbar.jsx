import React from 'react';
import logo from '../images/Mondo Logo.png';
import {MdKeyboardArrowDown} from 'react-icons/md';
import {FaBars} from 'react-icons/fa';
import { motion } from 'framer-motion';


function Navbar() {
  return (
    <motion.div className='font-pop lg:mx-20 md:mx-12 mx-8 lg:my-8 my-4' initial={{ opacity: 0, scale: 0.25 }}
    animate={{ opacity: 100, scale: 1 }}>
        <div className='flex justify-between items-center'>
            {/* Logo */}
                <img className='lg:w-[10%] w-[30%] md:w-[30%] ' src={logo} alt="Mondo Logo" />


            {/* Nav Right */}
            <div className='lg:flex hidden'>
                <ul className='hidden lg:flex gap-x-8 text-sm'>
                    <li className='flex items-center gap-1'> Demo<span className=''><MdKeyboardArrowDown /></span></li>
                    <li className='flex items-center gap-1'> Why Mondu</li>
                    <li className='flex items-center gap-1'> Resources<span className=''><MdKeyboardArrowDown /></span></li>
                    <li className='flex items-center gap-1'> Contact Us</li>
                </ul>
            </div>
            <div className='lg:flex gap-8 hidden'>
                <button className='hover:font-semibold text-sm'>Log In</button>
                <button className='btn text-sm hover:font-semibold'>Get Started</button>
            </div>

            <div className='lg:hidden block md:m-0'>
                <FaBars className=' w-5 h-5 text-gray-700' />
            </div>

        </div>
    </motion.div>
  )
}

export default Navbar