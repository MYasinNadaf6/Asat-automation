import React from 'react'
import { Link } from 'react-router-dom'
import Footer from './Footer'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import { Pagination } from 'swiper/modules'



function Lazer() {
  return (
    <div className='h-screen w-full heading'>
       <div>

           <div className="h-14 w-full rounded-xl"></div>

           <Link to='/products'>
            <h1 className='p-5 text-xl  text-white align-text-bottom hover:text-blue-500'>
              <span><FontAwesomeIcon icon={faArrowLeft} /></span>.. Back to products page
            </h1>
           </Link>

           <div className='mt-6 mx-auto w-[95%] max-w-6xl bg-white p-2 sm:p-3 flex flex-col lg:flex-row justify-evenly rounded-2xl'>
              {/* Product Image */}
              <div className='w-full lg:w-[50%] p-2 lg:mb-20 border-b-2 lg:border-b-0  flex-shrink:0 flex justify-center items-center'>
              <Swiper
              slidesPerView={1}
              spaceBetween={20}
              pagination={{dynamicBullets:true}}
              modules={[Pagination]}
              className='flex justify-center items-center'
              
              >
              <SwiperSlide className='w-full max-w-[600px] h-full sm:h-96 object-cover rounded-xl'>
              <img 
                  src="machine1.jpg" 
                  className='w-full max-w-[600px] h-56 sm:h-96 object-cover rounded-xl' 
                  alt="CNC Precision Milling Machine" 
                />
              </SwiperSlide>
              <SwiperSlide className='w-full max-w-[600px] h-56 sm:h-96 object-cover rounded-xl'>
              <img 
                  src="machine2.jpg" 
                  className='w-full max-w-[600px] h-56 sm:h-96 object-cover rounded-xl' 
                  alt="CNC Precision Milling Machine" 
                />
              </SwiperSlide>

              </Swiper>
              </div>

              {/* Product Description and Specs */}
              <div className='w-full lg:w-[45%] mt-4 lg:mt-6 flex flex-col'>
                 <h1 className='text-2xl sm:text-3xl font-bold mb-3 lg:mt-8 border-b-2 border-b-blue-600 p-2'>
                  Laser Cutting System
                 </h1>
                 <p className='text-base sm:text-lg lg:text-xl mb-5'>
                   Advanced fiber laser cutting system offering high-speed, precise cutting of various metal materials. Features automatic focusing, intelligent nesting software, and minimal maintenance requirements.
                 </p>
                 
                 {/* Technical Specification */}
                 <div className='mt-5 sm:mt-7'>
                   <h2 className='pt-2 text-shadow-black text-xl sm:text-2xl font-semibold p-2 sm:p-5'>
                      Technical Specification
                   </h2>
                   <div className='space-y-2 sm:space-y-3 '>
                     <div className='flex justify-between py-2 sm:py-3 border-b border-gray-400'>
                       <span className='text-gray-600'>Lazer power</span>
                       <span className='text-gray-600'>6000W</span>
                     </div>
                     <div className='flex justify-between py-2 sm:py-3 border-b border-gray-400'>
                       <span className='text-gray-600'>Cutting area</span>
                       <span className='text-gray-600'>3000 x 1500 mm</span>
                     </div>
                     <div className='flex justify-between py-2 sm:py-3 border-b border-gray-400'>
                       <span className='text-gray-600'>Maximum Thickness (Steel)</span>
                       <span className='text-gray-600'>25 mm</span>
                     </div>
                     <div className='flex justify-between py-2 sm:py-3 border-b border-gray-400'>
                       <span className='text-gray-600'>Positioning Accuracy</span>
                       <span className='text-gray-600'>+0.03 mm</span>
                     </div>
                   </div>
                 </div>

                 {/* Buttons */}
                 <div className='pt-6 flex flex-col sm:flex-row gap-4 sm:gap-8 items-center justify-start'>
                   <Link to='/bookingform'>
                   <button  className='bg-blue-600 text-white p-3 w-full sm:w-auto rounded-2xl hover:scale-105 transition-transform duration-200'>
                    click for booking
                   </button>
                   </Link>
                   
                   <button className='border-2 border-blue-700  p-3 w-full sm:w-auto text-blue-700 rounded-2xl'>
                     contact us
                   </button>
                 </div>
              </div>
           </div>

           </div>
           <div>
           <Footer/>
           </div>
    </div>
  )
}

export default Lazer