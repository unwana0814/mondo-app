import React from 'react';
import usa from '../images/usa.png';
import shopify from '../images/shopify.png';
import udemy from '../images/udemy-logo-5315F166A4-seeklogo.com.png';
import { MdKeyboardArrowDown } from 'react-icons/md';
import hero from '../images/Hero Mobile.jpg';
import { useState, useEffect } from 'react';
import textChange from './data';
import Zoom from 'react-reveal/Zoom'
import Fade from 'react-reveal/Fade'

const Hero_section = () => {
  const[currentState, setCurrentState] = useState(0)
  // useEffect(() => {
  //   const timer = setTimeOut(() => {
  //     if(currentState===2){
  //       setCurrentState(currentState+1)
  //     }else{
  //       setCurrentState()
  //     }

  //   },5000)
  // },[currentState])
  // return() => clearTimeout(timer)

  const goToNext = (currentState)=> {
    setCurrentState(currentState)
  }

  return (
    <div className='font-pop w-[90%]'>
        <div className="container lg:mt-12 mt-8 grid lg:grid-cols-2 grid-rows md:gap-6 place-items-center">
          <Zoom right duration={1500}>
              <div className="col-span-1">
                  <button className='lg:text-xs text-[12px] px-4 py-1 tracking-tight bg-[#06B3A8] rounded-full bg-opacity-25 text-[#06B3A8]'>Mondu's offering</button>
                  <h1 className='md:hidden lg:block text-4xl text-[#06B3A8] mt-6 font-semibold leading-snug'>{textChange[currentState].header}<span className='text-black'> {textChange[currentState].header_one}</span><pre className='font-pop text-black md:hidden block'>{textChange[currentState].header_five}</pre>
                  <pre className='font-pop text-black hidden md:block'>{textChange[currentState].header_two}</pre><pre className='text-black font-pop hidden md:block'>{textChange[currentState].header_three} <br />{textChange[currentState].header_four}</pre></h1>

                  {/* Medium */}
                  <h1 className='text-center md:block hidden lg:hidden text-5xl text-[#06B3A8] mt-6 font-semibold leading-tight'>{textChange[currentState].header} <span className='text-black'>{textChange[currentState].header_two}  <br/>{textChange[currentState].header_six}</span> </h1>

                  <p className='leading-loose text-sm my-4 md:text-base lg:text-sm md:text-center lg:text-left'>{textChange[currentState].paragraph}</p>
                  <h3 className='tracking-widest mt-8 lg:mt-0 text-xl  font-semibold md:text-center lg:text-left'>{textChange[currentState].paragraph2} <pre className='lg:text-[8px] text-sm tracking-tight font-pop'>{textChange[currentState].paragraph3}</pre></h3>

                    <div className="mt-4 ">
                    <input className='bg-[#06B3A8] bg-opacity-25 p-2 md:py-4 pl-6 md:pl-4 md:pr-20 pr-10 text-sm rounded-2xl' type="type" value="" placeholder='Enter your email address' /> <span className='px-4 py-2 lg:py-3 rounded-full bg-[#06B3A8] -ml-12 text-xs md:text-sm text-white border-2'>Get an account</span>
                  </div>
              </div>
              </Zoom>

              <img className='md:hidden block mt-4' src={hero} alt="" />

              <div className='bg-[#06B3A8] bg-opacity-25 p-4 rounded-xl w-[90%] md:block hidden'>
                <div className='w-[70%] bg-white rounded-2xl shadow-lg p-6 '>
                  <div className='flex justify-between'>
                     <h1 className='text-xl font-semibold'>$500,000.00</h1>

                     <div className='flex items-center gap-2'>
                        {/* <img className=' rounded-full' src={usa} alt="" /> */}
                        <p className='text-xs font-semibold'>USD</p>
                        <div className=' bg-[#06B3A8] rounded-full'>
                        <MdKeyboardArrowDown className='text-white p-[2px] rounded' />
                        </div>

                     </div>
                  </div>
                  <p className='text-[9px] py-2 text-gray-500'>Available balance</p>
                  <div className="flex gap-6">
                    <div className="p-5 bg-blue-200 bg-opacity-25 rounded-full">
                      {/* <img className='w-[10%]' src={shopify} alt="" title='Shopify' /> */}
                    </div>
                    <div className="p-5 bg-blue-200 bg-opacity-25 rounded-full">
                      {/* <img className='w-[10%]' src={udemy} alt="" title='Shopify' /> */}
                    </div>
                    <div className="p-5 bg-blue-200 bg-opacity-25 rounded-full">
                      {/* <img className='w-[10%]' src={udemy} alt="" title='Shopify' /> */}
                    </div>
                    <div className="p-5 bg-blue-200 bg-opacity-25 rounded-full">
                      {/* <img className='w-[10%]' src={udemy} alt="" title='Shopify' /> */}
                    </div>
                    <div className="p-5 bg-blue-200 bg-opacity-25 rounded-full">
                      {/* <img className=' w-[10%]' src={udemy} alt="" title='Shopify' /> */}
                    </div>
                  </div>
                  <div className='mt-6 flex gap-5'>
                  <div className="bg-gray-100 w-[43px] h-2 rounded-full"></div>
                    <div className="bg-gray-100 w-[43px] h-2 rounded-full"></div>
                    <div className="bg-gray-100 w-[43px] h-2 rounded-full"></div>
                    <div className="bg-gray-100 w-[43px] h-2 rounded-full"></div>
                    <div className="bg-gray-100 w-[43px] h-2 rounded-full"></div>
                  </div>

                  <div className="my-4 border-2 border-gray-200 rounded-full flex items-center justify-between px-5">
                    <p className='pr-8 text-gray-400 py-3 text-sm lg:text-xs'>Search a business on mondo</p>
                    <div className='p-2 bg-blue-500 w-7 h-7 rounded-full'></div>
                  </div>

                  <div className='border-2 border-gray-200 bg-gray-50 rounded-xl p-4 bg-opacity-25'>
                  <div className='bg-gray-200 w-[50%] h-2 rounded-full mb-4'></div>
                  <div className='bg-gray-200 w-[90%] h-2 rounded-full mb-4'></div>
                  <div className='bg-gray-200 w-[30%] h-2 rounded-full'></div>
                  </div>

                  <div className="my-3 border-2 border-gray-200 rounded-full px-5">
                    <h1 className='pr-8 text-sm text-gray-800 py-4'>$<span className='text-gray-500 ml-2'>Amount</span></h1>
                  </div>

                  <div className='flex gap-2'>
                    <div className='px-6 pt-1 pb-2 bg-gray-200 shadow-sm rounded-full'>
                      <button className='w-16 h-1 bg-white rounded-full'></button>
                    </div>
                    <button className='btn text-xs hover:font-semibold'>Send now</button>
                  </div>
                </div>

              </div>
        </div>

         {/* TextSlider */}
          <Fade>
        <div className='flex justify-center items-center gap-1 mt-8'>
          {
             textChange.map((textChange, currentState) => (
              <span className='bg-[#06B3A8] p-[5px] bg-opacity-25 rounded-full mb-4 hover:cursor-pointer'  key={currentState} onClick={() => goToNext(currentState)}  ></span>
              // <span className='bg-[#06B3A8] p-[5px] bg-opacity-25 rounded-full mb-4'></span>
              // <span className='bg-[#06B3A8] p-[5px] bg-opacity-25 rounded-full mb-4'></span>

             ))
          }
            {/* <div className='bg-[#06B3A8] md:w-[4%] w-[6%] h-2 rounded-full mb-4'></div>
            <div className='bg-[#06B3A8] p-[5px] bg-opacity-25 rounded-full mb-4'></div>
            <div className='bg-[#06B3A8] p-[5px] bg-opacity-25 rounded-full mb-4'></div> */}
        </div>
        </Fade>

    </div>
  )
}

export default Hero_section