import React from 'react'
import Footer from './Footer'
import { Link } from 'react-router-dom'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'


function Products() {
  useGSAP(()=>{
    gsap.from('.video',{
      opacity:0,
      y:100,
      duration:1,
      ease:'power2.inOut'
    })
    gsap.from('.products',{
      opacity:0,
      y:100,
      duration:1.5,
      ease:'power2.inOut',
      stagger:0.5
    })
   
  })
  return (
    <div className='h-full w-full heading'>
      
       <div className="w-full pt-2 px-2 sm:px-6">
         <div className="relative w-full h-48 sm:h-80 md:h-96 video rounded-xl overflow-hidden">
           <video
             src="cutting.mp4"
             className="w-full h-full object-cover z-0 hover:shadow-2xl"
             autoPlay
             muted
             loop
             playsInline
           />
           <div className="absolute inset-0 flex items-center justify-center pt-2 sm:pt-4 ">
             <h1 className="text-3xl sm:text-3xl md:text-4xl text-amber-50 z-10 text-center text-shadow-2xs font-bold">
               Our Popular Products
             </h1>
           </div>
         </div>
       </div>

       <div>
        <h1 className='ml-5 p-5 text-4xl  text-white w-100 border-b-2 mb-3 border-b-blue-600 '>
        OUR PRODUCTS
        </h1>


        {/**Products */}
        <div className=" flex  flex-wrap products back mt-5 pr-8 pl-8">
          <div className='p-5 basis-1/4 word rounded-tl-2xl pro'>
            <Link to='/milling'>
              <div className='h-95 w-80 bg-white rounded-2xl hover:shadow-2xl hover:scale-105 transition-transform duration-300'>
                <img className='h-70 w-full object-cover rounded-t-2xl ' src="machine1.jpg" alt="" />
                <h1 className='p-2 text-xl'>
                CNC Precision Milling Machine
                </h1>
                <button className=' p-1 rounded-2xl text-blue-600 ml-2 mt-3'>click to view details...</button>

              </div>
            </Link>
          </div>
          <div className='p-5 basis-1/4 word pro'>
            <Link to='/roboticarm'>
              <div className='h-95 w-80 bg-white rounded-2xl hover:shadow-2xl hover:scale-105 transition-transform duration-300'>
                <img className='h-70 w-full object-cover rounded-t-2xl' src="machine2.jpg" alt="" />
                <h1 className='p-2 text-xl'>
                Industrial Robotic Arm
                </h1>
                <button className=' p-1 rounded-2xl text-blue-600 ml-2 mt-3'>click to view details...</button>

              </div>
            </Link>
          </div>
          <div className='p-5 basis-1/4 word pro'>
            <Link to='/pressmachine'>
              <div className='h-95 w-80 bg-white rounded-2xl hover:shadow-2xl hover:scale-105 transition-transform duration-300'>
                <img className='h-70 w-full object-cover rounded-t-2xl' src="machine3.jpg" alt="" />
                <h1 className='p-2 text-xl'>
                Hydraulic Press Machine
                </h1>
                <button className=' p-1 rounded-2xl text-blue-600 ml-2 mt-3'>click to view details...</button>

              </div>
            </Link>
          </div>
          <div className='p-5 basis-1/4 word rounded-tr-2xl pro'>
            <Link to='/conveyour'>
              <div className='h-95 w-80 bg-white rounded-2xl hover:shadow-2xl hover:scale-105 transition-transform duration-300'>
                <img className='h-70 w-full object-cover rounded-t-2xl' src="machine4.jpg" alt="" />
                <h1 className='p-2 text-xl'>
                Automated Conveyor System
                </h1>
                <button className=' p-1 rounded-2xl text-blue-600 ml-2 mt-3'>click to view details...</button>

              </div>
            </Link>
          </div>
          <div className='p-5 basis-full word rounded-b-2xl pro'>
            <Link to='/lazer'>
              <div className='h-95 w-80 bg-white rounded-2xl hover:shadow-2xl hover:scale-105 transition-transform duration-300'>
                <img className='h-70 w-full object-cover rounded-t-2xl' src="machine1.jpg" alt="" />
                <h1 className='pl-2 pt-2 text-xl'>
                Laser Cutting System
                </h1>
                <button className=' p-1 rounded-2xl text-blue-600 ml-2 mt-3'>click to view details...</button>

              </div>
            </Link>
          </div>
          


         
        </div>
        
       </div>
    
       <Footer/>




      </div>



    
  )
}

export default Products