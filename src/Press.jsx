import React from 'react'
import Footer from './Footer'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import { Pagination } from 'swiper/modules'



function Press() {
  return (
    <div className='h-220 w-full bg-gray-300 heading'>
    <div>

        <div className="h-14 w-full rounded-xl"></div>

        <Link to='/products'>
         <h1 className='p-5 text-xl align-text-bottom text-black hover:text-blue-500'>
        <span><FontAwesomeIcon icon={faArrowLeft} /></span>
            
             Back to products page
         </h1>
        </Link>

        <div className='mt-6 mx-auto w-[99%] max-w-7xl bg-white p-2 sm:p-3 flex flex-col lg:flex-row justify-evenly rounded-2xl'>
           {/* Product Image */}
           <div className='w-full lg:w-[55%] p-2 lg:mb-20 border-b-2 lg:border-b-0   flex-shrink:0 flex justify-center items-center'>
             <Swiper
              slidesPerView={1}
              spaceBetween={20}
              pagination={{dynamicBullets:true}}
              modules={[Pagination]}
              className='flex justify-center items-center'
              
              >
              <SwiperSlide className='w-full max-w-[700px] h-full sm:h-96 object-cover rounded-xl'>
              <img 
                  src="machine1.jpg" 
                  className='w-full max-w-[700px] h-56 sm:h-96 object-cover rounded-xl' 
                  alt="CNC Precision Milling Machine" 
                />
              </SwiperSlide>
              <SwiperSlide className='w-full max-w-[700px] h-56 sm:h-96 object-cover rounded-xl'>
              <img 
                  src="machine2.jpg" 
                  className='w-full max-w-[700px] h-56 sm:h-96 object-cover rounded-xl' 
                  alt="CNC Precision Milling Machine" 
                />
              </SwiperSlide>

              </Swiper>
           </div>

           {/* Product Description and Specs */}
           <div className='w-full lg:w-[45%] mt-4 lg:mt-6 flex flex-col'>
              <h1 className='text-2xl sm:text-3xl font-bold mb-3 lg:mt-8'>
              Hydraulic Press Machine
              </h1>
              <p className='text-base sm:text-lg lg:text-xl mb-5 text-gray-800'>
              Heavy-duty hydraulic press designed for high-force metal forming, stamping, and compression operations. Built with precision components and safety features for reliable industrial production.
              </p>
              
              {/* Technical Specification */}
              <div className='mt-5 sm:mt-7'>
                <h2 className='pt-2 text-shadow-black text-xl sm:text-2xl font-semibold p-2 sm:p-5'>
                   Technical Specification
                </h2>
                <div className='space-y-2 sm:space-y-3'>
                  <div className='flex justify-between py-2 sm:py-3 border-b border-gray-200'>
                    <span className='text-gray-900'>Maximun force </span>
                    <span className='text-gray-900'>500 tons</span>
                  </div>
                  <div className='flex justify-between py-2 sm:py-3 border-b border-gray-200'>
                    <span className='text-gray-900'>Working Area </span>
                    <span className='text-gray-900'>1500 x 1000 mm</span>
                  </div>
                  <div className='flex justify-between py-2 sm:py-3 border-b border-gray-200'>
                    <span className='text-gray-900'>Stroke Length</span>
                    <span className='text-gray-900'>800mm</span>
                  </div>
                  <div className='flex justify-between py-2 sm:py-3 border-b border-gray-200'>
                    <span className='text-gray-900'>Power Supply</span>
                    <span className='text-gray-900 mr-3'>25 MPa</span>
                  </div>
                  <div className='flex justify-between py-2 sm:py-3 border-b border-gray-200'>
                    <span className='text-gray-900'>Hydraulic Pressure</span>
                    <span className='text-gray-900'>25 MPa</span>
                  </div>
                </div>
              </div>

              {/* Buttons */}
              <div className='pt-6 flex flex-col sm:flex-row gap-4 sm:gap-8 items-center justify-start'>
                <Link to='/bookingform'>
                 <button className='bg-blue-600 text-white p-3 w-full sm:w-auto rounded-2xl hover:scale-105 transition-transform duration-200'>
                  request to booking
                </button>
                </Link>
               
                <button className='border-2 border-blue-700 p-3 w-full sm:w-auto text-blue-600 rounded-2xl'>
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

export default Press