import React from 'react';
import logo from '../images/Mondo Trans.png';
import { BsWhatsapp, BsFacebook, BsTwitter, BsInstagram } from 'react-icons/bs';
import Bounce from 'react-reveal/Bounce';


function Footer() {
  return (
    <Bounce bottom duratio={3000}>
    <div className='lg:p-20 md:p-12 p-8 bg-teal-950 font-pop'>
        <div className="flex justify-between sm:flex-wrap flex-col sm:flex-row md:flex-nowrap">
            <div className="mt-3">
                <h3 className="font-bold text-white text-lg">Products</h3>
                <ul className='text-white text-lg mt-4'>
                    <li className='cursor-pointer py-1'>Global Account</li>
                    <li className='cursor-pointer py-1'>Multi-Currency Wallet</li>
                    <li className='cursor-pointer py-1'>Payment Links - Payins</li>
                    <li className='cursor-pointer py-1'>FX</li>
                </ul>
            </div>
            <div className="mt-3">
            <h3 className="font-bold text-white text-lg">Services</h3>
                <ul className='text-white text-lg mt-4'>
                    <li className='cursor-pointer py-1'>Wallet-to-Wallet</li>
                    <li className='cursor-pointer py-1'>Corporate Cards</li>
                    <li className='cursor-pointer py-1'>Treasury Management</li>
                    <li className='cursor-pointer py-1'>API</li>
                </ul>
            </div>
            <div className="mt-3">
            <h3 className="font-bold text-white text-lg">Resources</h3>
                <ul className='text-white text-lg mt-4'>
                    <li className='cursor-pointer py-1'>Partners</li>
                    <li className='cursor-pointer py-1'>Developers</li>
                    <li className='cursor-pointer py-1'>Community</li>
                </ul>
            </div>
            <div className="mt-3">
            <h3 className="font-bold text-white text-lg">Company</h3>
                <ul className='text-white text-lg mt-4'>
                    <li className='cursor-pointer py-1'>FAQ</li>
                    <li className='cursor-pointer py-1'>Privacy Policy</li>
                </ul>
            </div>
        </div>
        <div className="flex flex-col md:flex-row text-white justify-between items-center mt-16">
            <div>
                <img className='w-28' src={logo} alt="Mondo Logo" />
            </div>

            <div className='py-3 md:py-0'>
            <li className='cursor-pointer py-1 list-none'>&copy; 2023 Mondo. All Rights Reserved</li>
            </div>

            <div className='flex lg:gap-4 md:gap-6 gap-10'>
                <BsFacebook />
                <BsTwitter />
                <BsWhatsapp />
                <BsInstagram />
            </div>
        </div>
    </div>
    </Bounce>
  )
}

export default Footer