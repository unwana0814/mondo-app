import React from 'react';
import fiat from '../images/fiat republic.png';
import clearjunction from '../images/Clear Junction Limited - png.png';
import providusbank from '../images/path7.png';
import circle from '../images/Circle.png';
import freemarket from '../images/freemarketfinancial.net - png.png';
import {BsBuildingFillLock, BsPersonCheck, BsCurrencyDollar, BsCurrencyRupee, BsImageFill} from 'react-icons/bs';
import { MdKeyboardArrowDown } from 'react-icons/md';
import {BiEuro} from 'react-icons/bi';
import { FaGlobe } from 'react-icons/fa';
import {AiOutlineCheck} from 'react-icons/ai';
import {TbSettings2} from 'react-icons/tb';
import {HiGlobeAlt} from 'react-icons/hi';
import success from '../images/Payment Succes Mobile.jpg';
import gbp from '../images/Mobile a.jpg';
import eur from '../images/Mobile a.png';
import graph from '../images/Mobile b.png';
import Slide from 'react-reveal/Slide';
import LightSpeeed from 'react-reveal/LightSpeed';
// import {Swiper, SwiperSlide} from 'swiper/react';

// import 'swiper/css';

function Main() {
  return (
    <div className='font-pop'>
        <div className='bg-[#06B3A8] bg-opacity-25 mt-4'>
            <p className='text-center text-sm py-4 md:block hidden'>The trusted way to pay and get paid globally</p>
            <p className='text-center text-sm py-4 md:hidden block'>Join 4,000+ companies already growing</p>
            <Slide left duration={1500}>
            <div className='flex justify-center flex-wrap items-center gap-8 pb-8 pt-4'>
                <div className='flex gap-2 items-align'>
                    <img className='w-10' src={fiat} alt="" />
                    <p className='text-orange-500 font-semibold'>Fiat Republic</p>
                </div>
                {/* <div> */}
                    <img className='w-36' src={clearjunction} alt="" />
                {/* </div> */}
                <div className='flex items-center gap-1'>
                    <img className='w-8' src={providusbank} alt="" />
                    <p className='uppercase text-sm text-gray-800'>Providusbank</p>
                </div>
                {/* <div> */}
                    <img className='w-16' src={circle} alt="" />
                {/* </div> */}
                <div className='flex'>
                    <img className='w-12' src={freemarket} alt="" />
                    <p className='text-orange-900 font-semibold'>Freemarket Financial</p>
                </div>
            </div>
            </Slide>
        </div>

        <div className='mt-12 mx-12 sm:mx-20 lg:mx-0'>
            <div className="">
            <p className='text-[#06B3A8] font-semibold text-sm text-center '>Features</p>
            <h1 className='mt-6 text-2xl lg:text-xl font-semibold text-center '>Discover the Advantages of  <br />Using Mondu</h1>
            <p className='text-sm py-2 text-center md:block hidden'>Make informed decisions for your online business with our real-time analytics and insights. <br /> stay ahead of the competition in a fast-paced online marketplace with mondo</p>

            <p className='text-sm py-2 text-center md:hidden block'>Make informed decisions for your online business with our real-time analytics and insights. stay ahead of the competition in a fast-paced online marketplace with mondo</p>
            </div>


            <div className='container'>
                <div className='grid md:grid-cols-3 grid-row my-12 md:gap-x-16 justify-items-center gap-y-8'>
                    <div className='span-col-1 text-center md:max-w-[80%]'>
                        <div className='w-10 p-3 rounded-full bg-[#06B3A8] bg-opacity-25 inline-block justify-center'>
                            <BsBuildingFillLock className=' text-[#06B3A8]' />
                        </div>
                        <p className='font-semibold text-sm my-2'>Advance Cutting Edge Tech</p>
                        <p className='text-gray-700 leading-relaxed my-3 text-sm'>Leveraging on the best and advanced information processing techniques to ensure Zero or no transactions timeouts with speed</p>
                    </div>

                    <div className='span-col-1 text-center md:max-w-[80%]'>
                        <div className='w-10 p-3 rounded-full bg-[#06B3A8] bg-opacity-25 inline-block justify-center'>
                            <FaGlobe className=' text-[#06B3A8]' />
                        </div>
                        <p className='font-semibold text-sm my-3'>Global reach and support</p>
                        <p className='text-gray-700 leading-relaxed my-2 text-sm'>Leveraging on the best and advanced information processing techniques to ensure Zero or no transactions timeouts with speed</p>
                    </div>

                    <div className='span-col-1 text-center md:max-w-[80%]'>
                        <div className='w-10 p-3 rounded-full bg-[#06B3A8] bg-opacity-25 inline-block justify-center'>
                            <BsPersonCheck className=' text-[#06B3A8]' />
                        </div>
                        <p className='font-semibold text-sm my-3'>User-friendly interface</p>
                        <p className='text-gray-700 leading-relaxed my-2 text-sm'>Leveraging on the best and advanced information processing techniques to ensure Zero or no transactions timeouts with speed</p>
                    </div>
                </div>
            </div>
        </div>

        {/* 3rd Section */}
        <div className="xl:mx-20 lg:mx-12 mx-12 w-[90%]">
            <div className="grid lg:grid-cols-2 grid-row lg:gap-x-6 gap-y-6 lg:place-items-center">
                <div className="col-span-1 w-[90%] lg:w-[95%] lg:order-first order-last">
                    <img className='md:hidden block' src={success} alt="" />
                <div className='bg-[#06B3A8] bg-opacity-25 p-4 rounded-xl relative hidden md:block'>
                <div className='xl:w-[90%] lg:w-[100%] w-[90%] bg-white rounded-2xl shadow-lg px-8 py-8 '>
                    <h1 className='md:text-xl text-xs font-semibold  '>Global Accounts</h1>
                    <p className='md:text-sm text-xs font-semibold text-gray-600 pt-1'>Get paid in up to 25 currencies in 170+ countries </p>

                  <div className='mt-6 py-4 flex justify-between items-center bg-[#06B3A8] bg-opacity-25 w-[100%] h-[20%] rounded-xl'>
                  <div className="flex items-center gap-x-4">
                        <div className='p-3 ml-4 rounded-lg bg-white inline-block justify-center'>
                            <BiEuro className=' text-gray-400 text-2xl ' />
                        </div>
                        <p className='xl:text-base md:text-sm text-xl font-semibold text-gray-600 pt-1'>GBP account</p>
                  </div>

                    <div className="flex items-center mx-4 gap-4">
                        <p className='xl:text-base md:text-sm text-xl font-semibold text-gray-600'>$20,000</p>
                        <div className=' bg-[#06B3A8] rounded-full'>
                        <MdKeyboardArrowDown className='text-white p-[2px] rounded-full' />
                        </div>
                    </div>
                  </div>

                  <div className='mt-[9rem] lg:mt-[7.8rem] py-4 flex justify-between items-center bg-gray-200 w-[100%] h-[20%] rounded-xl'>
                  <div className="flex items-center gap-x-4">
                        <div className='p-3 ml-4 rounded-lg bg-white inline-block justify-center'>
                            <BsCurrencyDollar className=' text-gray-400 text-2xl ' />
                        </div>
                        <p className='xl:text-base md:text-sm text-xl font-semibold text-gray-600 pt-1'>USD account</p>
                  </div>

                    <div className="flex items-center mx-4 gap-4">
                        <div className='bg-gray-300 w-[140px] h-2 rounded-full'></div>
                        <div className=' bg-[#06B3A8] rounded-full'>
                        <MdKeyboardArrowDown className='text-white p-[2px] rounded-full' />
                        </div>
                    </div>
                  </div>

                  <div className='mt-4 mb-2 py-4 flex justify-between items-center bg-gray-200 w-[100%] h-[20%] rounded-xl'>
                  <div className="flex items-center gap-x-4">
                        <div className='p-3 ml-4 rounded-lg bg-white inline-block justify-center'>
                            <BsCurrencyRupee className=' text-gray-400 text-2xl ' />
                        </div>
                        <p className='xl:text-base md:text-sm text-xl font-semibold text-gray-600 pt-1'>JYP account</p>
                  </div>

                    <div className="flex items-center mx-4 gap-4">
                        <div className='bg-gray-300 w-[110px] h-2 rounded-full'></div>
                        <div className=' bg-[#06B3A8] rounded-full'>
                        <MdKeyboardArrowDown className='text-white p-[2px] rounded-full' />
                        </div>
                    </div>
                  </div>


                <div className="card xl:w-[68%] lg:w-[70%] py-2 lg:py-0 absolute top-[13rem] lg:top-[12rem] left-36 lg:left-32">
                    <div className="text-center">
                        <div className='p-3 mt-2 ml-4 rounded-full bg-[#06B3A8] inline-block justify-center'>
                            <AiOutlineCheck className=' text-white text-2xl ' />
                        </div>
                        <p className='xl:text-[1rem] text-lg lg:text-xl font-semibold text-gray-700 py-2'>Payment Successfully Received</p>
                    </div>
                </div>

                </div>
              </div>
                </div>

                <div className="">
                    <h1 className='md:text-4xl text-2xl font-bold my-4'>Recieve Payment</h1>
                    <p className='text-base text-gray-600 leading-loose'>Say Goodbye to Late Payments and Long Processing Times - Our Streamlined Payment System Makes Getting Paid Faster and Easier Than Ever Beforez</p>
                </div>
            </div>
        </div>

        {/* Another segment */}

        <div className="xl:mx-20 lg:mx-12 mx-12 w-[90%] md:mt-8 mt-3 lg:mt-20">
            <div className="grid lg:grid-cols-2 grid-row lg:gap-x-6 gap-y-6 lg:place-items-center">
                <div className="col-span-1">
                    <h1 className='md:text-4xl text-2xl font-bold my-4'>Global Account</h1>
                    <p className='text-base text-gray-600 leading-loose'>Expand Your Business Globally with One Account for Worldwide Payments - Collect Payments from Customers in Any Country, Currency or Language.</p>
                </div>

                <div className="col-span-1 w-[90%] lg:w-[95%]">
                    <img className='md:hidden block'  src={gbp} alt="" />
                <div className='bg-[#06B3A8] bg-opacity-25 p-4 rounded-xl relative hidden md:block'>
                <div className='xl:w-[90%] lg:w-[100%] w-[90%] bg-white rounded-2xl shadow-lg px-8 py-8 '>
                    <h1 className='md:text-xl text-xs font-semibold  '>Global Accounts</h1>
                    <p className='md:text-sm text-xs font-semibold text-gray-600 pt-1'>Get paid in up to 25 currencies in 170+ countries </p>

                  <div className='mt-6 py-4 flex justify-between items-center bg-[#06B3A8] bg-opacity-25 w-[100%] h-[20%] rounded-xl'>
                  <div className="flex items-center gap-x-4">
                        <div className='p-3 ml-4 rounded-lg bg-white inline-block justify-center'>
                            <BiEuro className=' text-gray-400 text-2xl ' />
                        </div>
                        <p className='xl:text-base md:text-sm text-xl font-semibold text-gray-600 pt-1'>GBP account</p>
                  </div>

                    <div className="flex items-center mx-4 gap-4">
                        <p className='xl:text-base md:text-sm text-xl font-semibold text-gray-600'>$20,000</p>
                        <div className=' bg-[#06B3A8] rounded-full'>
                        <MdKeyboardArrowDown className='text-white p-[2px] rounded-full' />
                        </div>
                    </div>
                  </div>

                  <div className='mt-[9rem] lg:mt-[7.8rem] py-4 flex justify-between items-center bg-gray-200 w-[100%] h-[20%] rounded-xl'>
                  <div className="flex items-center gap-x-4">
                        <div className='p-3 ml-4 rounded-lg bg-white inline-block justify-center'>
                            <BsCurrencyDollar className=' text-gray-400 text-2xl ' />
                        </div>
                        <p className='xl:text-base md:text-sm text-xl font-semibold text-gray-600 pt-1'>USD account</p>
                  </div>

                    <div className="flex items-center mx-4 gap-4">
                        <div className='bg-gray-300 w-[140px] h-2 rounded-full'></div>
                        <div className=' bg-[#06B3A8] rounded-full'>
                        <MdKeyboardArrowDown className='text-white p-[2px] rounded-full' />
                        </div>
                    </div>
                  </div>

                  <div className='mt-4 mb-2 py-4 flex justify-between items-center bg-gray-200 w-[100%] h-[20%] rounded-xl'>
                  <div className="flex items-center gap-x-4">
                        <div className='p-3 ml-4 rounded-lg bg-white inline-block justify-center'>
                            <BsCurrencyRupee className=' text-gray-400 text-2xl ' />
                        </div>
                        <p className='xl:text-base md:text-sm text-xl font-semibold text-gray-600 pt-1'>JYP account</p>
                  </div>

                    <div className="flex items-center mx-4 gap-4">
                        <div className='bg-gray-300 w-[110px] h-2 rounded-full'></div>
                        <div className=' bg-[#06B3A8] rounded-full'>
                        <MdKeyboardArrowDown className='text-white p-[2px] rounded-full' />
                        </div>
                    </div>
                  </div>


                <div className="card xl:w-[68%] lg:w-[70%]  py-2 lg:py-0 absolute top-[13rem] lg:top-[12rem] left-36 lg:left-32">
                    <p className='text-xs md:text-sm font-semibold text-gray-700 pt-4 pb-2'>GBP <span className='text-gray-500'>Account details</span>  </p>
                    <div className="flex justify-between items-center">
                        <p className='text-xs md:text-sm font-semibold text-gray-500 py-1'>Account name</p>
                        <div className='bg-gray-300 w-[100px] h-2 rounded-full'></div>
                    </div>

                    <div className="flex justify-between items-center">
                        <p className='text-xs md:text-sm font-semibold text-gray-500 py-1'>Account name</p>
                        <p className='text-xs md:text-sm font-semibold text-gray-500 py-2'>00243******</p>
                    </div>

                    <div className="flex justify-between items-center">
                        <p className='text-xs md:text-sm font-semibold text-gray-500 pb-4 py-1'>Sort Code</p>
                        <div className='bg-gray-300 w-[70px] h-2 rounded-full'></div>
                    </div>

                </div>

                </div>
              </div>
                </div>

            </div>
        </div>

    {/* Another Segment */}
    <div className="xl:mx-20 md:mt-8 lg:mt-20 mt-6 lg:mx-12 mx-12 w-[90%]">
            <div className="grid lg:grid-cols-2 grid-row lg:gap-x-6 gap-y-6 lg:place-items-center">
                <div className="col-span-1 w-[90%] lg:w-[95%] lg:order-first order-last">
                <img className='md:hidden block' src={eur} alt="" />
                <div className='bg-[#06B3A8] bg-opacity-25 p-4 rounded-xl relative hidden md:block'>
                <div className='xl:w-[90%] lg:w-[100%] w-[90%] bg-white rounded-2xl shadow-lg px-8 py-8 '>
                    <h1 className='md:text-xl text-xs font-semibold  '>Global Accounts</h1>
                    <p className='md:text-sm text-xs font-semibold text-gray-600 pt-1'>Get paid in up to 25 currencies in 170+ countries </p>

                  <div className='mt-6 py-4 flex justify-between items-center bg-[#06B3A8] bg-opacity-25 w-[100%] h-[20%] rounded-xl'>
                  <div className="flex items-center gap-x-4">
                        <div className='p-3 ml-4 rounded-lg bg-white inline-block justify-center'>
                            <BiEuro className=' text-gray-400 text-2xl ' />
                        </div>
                        <p className='xl:text-base md:text-sm text-xl font-semibold text-gray-600 pt-1'>GBP account</p>
                  </div>

                    <div className="flex items-center mx-4 gap-4">
                        <p className='xl:text-base md:text-sm text-xl font-semibold text-gray-600'>$20,000</p>
                        <div className=' bg-[#06B3A8] rounded-full'>
                        <MdKeyboardArrowDown className='text-white p-[2px] rounded-full' />
                        </div>
                    </div>
                  </div>

                  <div className='mt-[9rem] lg:mt-[7.8rem] py-4 flex justify-between items-center bg-gray-200 w-[100%] h-[20%] rounded-xl'>
                  <div className="flex items-center gap-x-4">
                        <div className='p-3 ml-4 rounded-lg bg-white inline-block justify-center'>
                            <BsCurrencyDollar className=' text-gray-400 text-2xl ' />
                        </div>
                        <p className='xl:text-base md:text-sm text-xl font-semibold text-gray-600 pt-1'>USD account</p>
                  </div>

                    <div className="flex items-center mx-4 gap-4">
                        <div className='bg-gray-300 w-[140px] h-2 rounded-full'></div>
                        <div className=' bg-[#06B3A8] rounded-full'>
                        <MdKeyboardArrowDown className='text-white p-[2px] rounded-full' />
                        </div>
                    </div>
                  </div>

                  <div className='mt-4 mb-2 py-4 flex justify-between items-center bg-gray-200 w-[100%] h-[20%] rounded-xl'>
                  <div className="flex items-center gap-x-4">
                        <div className='p-3 ml-4 rounded-lg bg-white inline-block justify-center'>
                            <BsCurrencyRupee className=' text-gray-400 text-2xl ' />
                        </div>
                        <p className='xl:text-base md:text-sm text-xl font-semibold text-gray-600 pt-1'>JYP account</p>
                  </div>

                    <div className="flex items-center mx-4 gap-4">
                        <div className='bg-gray-300 w-[110px] h-2 rounded-full'></div>
                        <div className=' bg-[#06B3A8] rounded-full'>
                        <MdKeyboardArrowDown className='text-white p-[2px] rounded-full' />
                        </div>
                    </div>
                  </div>


                <div className="card xl:w-[68%] lg:w-[70%]  py-2 lg:py-0 absolute top-[13rem] lg:top-[12rem] left-36 lg:left-32">
                    <div className="text-center">
                        <div className='p-3 mt-2 ml-4 rounded-full bg-[#06B3A8] inline-block justify-center'>
                            <AiOutlineCheck className=' text-white text-2xl ' />
                        </div>
                        <p className='xl:text-[1rem] text-lg lg:text-xl font-semibold text-gray-700 py-2'>Payment Successfully Received</p>
                    </div>
                </div>

                </div>
              </div>
                </div>

                <div className="">
                    <h1 className='md:text-4xl text-2xl font-bold my-4'>Hold</h1>
                    <p className='text-base text-gray-600 leading-loose'>Say Goodbye to Late Payments and Long Processing Times - Our Streamlined Payment System Makes Getting Paid Faster and Easier Than Ever Beforez</p>
                </div>
            </div>
        </div>

        {/* Another Segment */}
        <div className="xl:mx-20 lg:mx-12 mx-12 w-[90%] md:mt-8 mt-3 lg:my-20">
            <div className="grid lg:grid-cols-2 grid-row lg:gap-x-6 gap-y-6 lg:place-items-center">
                <div className="col-span-1">
                    <h1 className='md:text-4xl text-2xl font-bold my-4'>Convert</h1>
                    <p className='text-base text-gray-600 leading-loose'>Expand Your Business Globally with One Account for Worldwide Payments - Collect Payments from Customers in Any Country, Currency or Language.</p>
                </div>

                <div className="col-span-1 w-[90%] lg:w-[95%]">
                <img className='md:hidden block'  src={graph} alt="" />
                <div className='bg-[#06B3A8] bg-opacity-25 p-4 rounded-xl relative hidden md:block'>
                <div className='xl:w-[90%] lg:w-[100%] w-[90%] bg-white rounded-2xl shadow-lg px-8 py-8 '>
                    <h1 className='md:text-xl text-xs font-semibold  '>Global Accounts</h1>
                    <p className='md:text-sm text-xs font-semibold text-gray-600 pt-1'>Get paid in up to 25 currencies in 170+ countries </p>

                  <div className='mt-6 py-4 flex justify-between items-center bg-[#06B3A8] bg-opacity-25 w-[100%] h-[20%] rounded-xl'>
                  <div className="flex items-center gap-x-4">
                        <div className='p-3 ml-4 rounded-lg bg-white inline-block justify-center'>
                            <BiEuro className=' text-gray-400 text-2xl ' />
                        </div>
                        <p className='xl:text-base md:text-sm text-xl font-semibold text-gray-600 pt-1'>GBP account</p>
                  </div>

                    <div className="flex items-center mx-4 gap-4">
                        <p className='xl:text-base md:text-sm text-xl font-semibold text-gray-600'>$20,000</p>
                        <div className=' bg-[#06B3A8] rounded-full'>
                        <MdKeyboardArrowDown className='text-white p-[2px] rounded-full' />
                        </div>
                    </div>
                  </div>

                  <div className='mt-[9rem] lg:mt-[7.8rem] py-4 flex justify-between items-center bg-gray-200 w-[100%] h-[20%] rounded-xl'>
                  <div className="flex items-center gap-x-4">
                        <div className='p-3 ml-4 rounded-lg bg-white inline-block justify-center'>
                            <BsCurrencyDollar className=' text-gray-400 text-2xl ' />
                        </div>
                        <p className='xl:text-base md:text-sm text-xl font-semibold text-gray-600 pt-1'>USD account</p>
                  </div>

                    <div className="flex items-center mx-4 gap-4">
                        <div className='bg-gray-300 w-[140px] h-2 rounded-full'></div>
                        <div className=' bg-[#06B3A8] rounded-full'>
                        <MdKeyboardArrowDown className='text-white p-[2px] rounded-full' />
                        </div>
                    </div>
                  </div>

                  <div className='mt-4 mb-2 py-4 flex justify-between items-center bg-gray-200 w-[100%] h-[20%] rounded-xl'>
                  <div className="flex items-center gap-x-4">
                        <div className='p-3 ml-4 rounded-lg bg-white inline-block justify-center'>
                            <BsCurrencyRupee className=' text-gray-400 text-2xl ' />
                        </div>
                        <p className='xl:text-base md:text-sm text-xl font-semibold text-gray-600 pt-1'>JYP account</p>
                  </div>

                    <div className="flex items-center mx-4 gap-4">
                        <div className='bg-gray-300 w-[110px] h-2 rounded-full'></div>
                        <div className=' bg-[#06B3A8] rounded-full'>
                        <MdKeyboardArrowDown className='text-white p-[2px] rounded-full' />
                        </div>
                    </div>
                  </div>


                <div className="card xl:w-[68%] lg:w-[70%]  py-2 lg:py-0 absolute top-[13rem] lg:top-[12rem] left-36 lg:left-32">
                    <p className='text-xs md:text-sm font-semibold text-gray-700 pt-4 pb-2'>GBP <span className='text-gray-500'>Account details</span>  </p>
                    <div className="flex justify-between items-center">
                        <p className='text-xs md:text-sm font-semibold text-gray-500 py-1'>Account name</p>
                        <div className='bg-gray-300 w-[100px] h-2 rounded-full'></div>
                    </div>

                    <div className="flex justify-between items-center">
                        <p className='text-xs md:text-sm font-semibold text-gray-500 py-1'>Account name</p>
                        <p className='text-xs md:text-sm font-semibold text-gray-500 py-2'>00243******</p>
                    </div>

                    <div className="flex justify-between items-center">
                        <p className='text-xs md:text-sm font-semibold text-gray-500 pb-4 py-1'>Sort Code</p>
                        <div className='bg-gray-300 w-[70px] h-2 rounded-full'></div>
                    </div>

                </div>

                </div>
              </div>
                </div>
            </div>
        </div>

        {/* Section 2 */}

        <div className="bg-blue-200 mt-12">
            <div className="lg:mx-20 md:mx-12 mx-8 flex flex-wrap-reverse lg:flex-nowrap items-center pt-28 pb-8 justify-around ">
                <div className="mt-12 lg:mt-0">
                    <h1 className='lg:text-2xl text-3xl font-semibold text-black leading-snug'> <span className='text-[#06B3A8]'>Build</span> on our global <pre className='font-pop' >financial infrastructure</pre></h1>
                    <p className='lg:text-xs text-sm py-4'>Build custom payments experiences with well-documented APIs</p>
                    <button className='btn2 lg:text-xs text-sm'>Expore the Docs</button>
                </div>

                <LightSpeeed right duration={1500}>
                <div className="bg-gray-800 rounded-xl p-6 xl:-ml-40 lg:-ml-28 -ml-8 relative">
                    <div className="flex items-center md:gap-4 gap-2">
                    <p className='bg-gray-400 rounded-full px-3 py-2 text-xs'>Node.js</p>
                    <p className='text-gray-400 text-xs'>Ruby</p>
                    </div>
                    <div className="flex gap-8 mt-6">
                        <div className="">
                            <p className="text-white text-[10px] py-1">1</p>
                            <p className="text-white text-[10px] py-1">2</p>
                            <p className="text-white text-[10px] py-1">3</p>
                            <p className="text-white text-[10px] py-1">4</p>
                            <p className="text-white text-[10px] py-1">5</p>
                            <p className="text-white text-[10px] py-1">6</p>
                            <p className="text-white text-[10px] py-1">7</p>
                            <p className="text-white text-[10px] py-1">8</p>
                            <p className="text-white text-[10px] py-1">9</p>
                            <p className="text-white text-[10px] py-1">10</p>

                        </div>

                        <div>
                            <div className='text-teal-700 text-[10px] pt-1'>&lt;script&gt;</div>
                                <p className='text-purple-700 text-[10px] px-4 pt-1'>function getNumber &#123;</p>
                                <p className='text-green-700 text-[10px] px-6 pt-1'>window.get</p>
                                <p className='text-blue-700 text-[10px] px-8 pt-1'>key.generate.document.getEl</p>
                                <p className='text-red-700 text-[10px] pt-1'>*pk_live_******</p>
                                <p className='text-blue-700 text-[10px] px-8 pt-1'>awesome</p>
                                <p className='text-purple-700 text-[10px] px-8 pt-1'>curly-braces</p>
                                <p className='text-purple-700 text-[10px] px-10 pt-1'>name.get</p>
                                <p className='text-purple-700 text-[10px] px-10 pt-1'>name.get</p>
                                <p className='text-green-700 text-[10px] px-6 pt-1'>window.get</p>
                                <p className='text-blue-700 text-[10px] px-8 pt-1'>key.generate</p>
                                <p className='text-purple-700 text-[10px] px-4 pt-1'>&#125;</p>
                            <div className='text-teal-700 text-[10px] py-1'>&lt;/script&gt;</div>
                        </div>
                    </div>

                    <div className="bg-white rounded-2xl px-8 py-4 absolute bottom-16 left-28">
                    <p className='text-xs font-bold text-gray-800 py-1'>Payment to Growpay LLC</p>
                    <div className='bg-gray-100 rounded-xl p-4 flex gap-2 my-4'>
                           <div className=' bg-blue-200 rounded-lg p-2 flex items-center mt-2'>
                        <BsImageFill className='text-white' />
                        </div>

                        <div className=''>
                            <h3 className='text-xs font-semibold text-gray-600 py-1'>Building Materials</h3>
                            <div className='bg-gray-300 w-[100px] h-2 rounded-full'></div>
                            <div className='bg-gray-300 w-[60px] mt-2 h-2 rounded-full'></div>
                        </div>
                    </div>

                    <div className='rounded-xl p-4  border'>
                    <p className='text-xs text-gray-500'>Card Number</p>
                    </div>

                    <div className=' flex gap-2 justify-between my-4'>
                    <p className='text-xs text-gray-500 p-2 rounded-xl border border-gray-500'>Expiry date</p>
                    <p className='text-xs text-gray-500 pl-2 pr-8 pt-2 rounded-xl border border-gray-500'>CVV</p>
                    </div>

                    <div className='rounded-xl bg-[#06B3A8] p-2 text-center my-4'>
                    <p className='text-xs text-white'>Pay $10,000</p>
                    </div>
                    </div>
                </div>
                </LightSpeeed>
            </div>
        </div>

        {/* Another Segment */}
        <div className="bg-gray-100 lg:p-20 md:p-12 p-8">
        <h1 className='md:text-xl text-lg font-semibold text-center'>Why global brands choose us?</h1>

        <div className='flex flex-wrap md:flex-nowrap flex-rows md:flex-cols my-8 gap-8'>
            <div className="bg-white shadow-lg rounded p-6">
                <div className=' bg-[#06B3A8] p-3 rounded-sm relative inline-block'>
                    <TbSettings2 className='text-gray-600 top-2 left-2 absolute w-7 h-7' />
                </div>
                <p className='lg:text-xs text-sm text-bold py-2'>Protection</p>
                <p className='lg:text-xs text-sm text-semibold py-2'>Robust security features and protocols to guarantee the safety of your funds and accounts</p>
            </div>

            <div className="bg-white shadow-lg rounded p-6">
                <div className=' bg-[#06B3A8] p-3 rounded-sm relative inline-block'>
                    <HiGlobeAlt className='text-gray-600 top-2 left-2 absolute w-7 h-7' />
                </div>
                <p className='lg:text-xs text-sm text-bold py-2'>Security</p>
                <p className='lg:text-xs text-sm text-semibold py-2'>Robust security features and protocols to guarantee the safety of your funds and accounts</p>
            </div>

            <div className="bg-white shadow-lg rounded p-6">
                <div className=' bg-[#06B3A8] p-3 rounded-sm relative inline-block'>
                    <TbSettings2 className='text-gray-600 top-2 left-2 absolute w-7 h-7' />
                </div>
                <p className='lg:text-xs text-sm text-bold py-2'>Seamless Integration</p>
                <p className='lg:text-xs text-sm text-semibold py-2'>Robust security features and protocols to guarantee the safety of your funds and accounts</p>
            </div>

            <div className="bg-white shadow-lg rounded p-6">
                <div className=' bg-[#06B3A8] p-3 rounded-sm relative inline-block'>
                    <AiOutlineCheck className='text-gray-600 top-2 left-2 absolute w-7 h-7' />
                </div>
                <p className='lg:text-xs text-sm text-bold py-2'>Compliance</p>
                <p className='lg:text-xs text-sm text-semibold py-2'>Robust security features and protocols to guarantee the safety of your funds and accounts</p>
            </div>
        </div>
        </div>

        {/* Another Segment */}
        <div className="bg-[#06B3A8] lg:p-20 md:p-12 p-8">
            <div className="grid grid-row lg:grid-cols-2 place-items-center">
                <div className='my-2'>
                    <h1 className="lg:text-5xl text-3xl text-white font-semibold leading-relaxed">Welcome to your new digital reality that will rock your world</h1>
                    <p className='text-white leading-relaxed py-3 hidden md:block'>Let is help you take you from zero to serious business and beyound. Our no-strings attached free trial lets you test our product today.</p>
                </div>

                <div className='sm:flex sm:flex-row gap-4'>
                    <input type="name" className='w-full p-4 rounded-lg lg:rounded-l-lg lg:text-base text-sm text-center lg:text-left' placeholder='Enter your email' />
                    <button className='text-white font-medium bg-blue-400 rounded-lg lg:rounded-l-lg w-full p-4 mt-3 md:mt-0 lg:text-base text-sm'>Create an account</button>
                </div>

            </div>
        </div>
    </div>
  )
}

export default Main