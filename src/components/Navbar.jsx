import React, {Component} from 'react';
import logo from '../images/Mondo Logo.png';
import { Link } from 'react-router-dom';
import {MdKeyboardArrowDown} from 'react-icons/md';
import {FaBars} from 'react-icons/fa';

function Navbar() {
  return (
    <div className='container font-pop'>
        <div className='flex justify-around items-center gap-x-4'>
            {/* Logo */}
                <img className='lg:w-[10%] w-[30%] md:w-[30%] ' src={logo} alt="Mondo Logo" />

            {/* Mobile*/}
                <FaBars className='lg:hidden block w-5 h-5' />

            {/* Nav Right */}
            <div className='lg:flex hidden'>
                <ul className='flex gap-x-6 text-sm'>
                    <li className='flex items-center gap-1'> Demo<span className=''><MdKeyboardArrowDown /></span></li>
                    <li className='flex items-center gap-1'> Why Mondu</li>
                    <li className='flex items-center gap-1'> Resources<span className=''><MdKeyboardArrowDown /></span></li>
                    <li className='flex items-center gap-1'> Contact Us</li>
                </ul>
            </div>
            <div className='lg:flex gap-x-6 hidden'>
                <button className='hover:font-semibold text-sm'>Log In</button>
                <button className='btn text-sm hover:font-semibold'>Get Started</button>
            </div>

        </div>
    </div>
  )
}

export default Navbar