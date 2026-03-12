import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone, faEnvelope, faLocationDot, faGears, faIndustry, faInfoCircle, faHouse,faSprayCan,faHammer } from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faInstagram, faTwitter, faWhatsapp, faXTwitter, } from '@fortawesome/free-brands-svg-icons'
import { Link } from 'react-router-dom'


function Footer() {
  return (
    <div className="pt-10">
      <div className="h-80 bg-gray-800 text-white p-5 sm:p-7 flex flex-col sm:flex-row justify-evenly items-start sm:items-stretch gap-8 sm:gap-0 ">
        {/* Contact Info */}
        <div className="p-2 sm:p-4 w-full sm:w-auto lg:">
        <div className="h-18 w-auto ml-2 sm:ml-4 md:ml-6 lg:ml-10 p-1 sm:p-1.5  items-center gap-1 sm:gap-2 md:gap-3">
          <span></span>
          <h1 className="text-xs sm:text-sm md:text-base lg:text-4xl text-white font-bold"> <img src="logo.png" alt="" className="h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12" />|  ASAT </h1>
          <div className="flex flex-col sm:flex-row gap-0 sm:gap-1  border-white pb-2"><span></span>
           
            <h1 className="text-xs sm:text-sm md:text-base lg:text-4xl text-white font-bold">AUTOMATION</h1>
          </div>
          <div className="flex items-center gap-2 mt-2">
            <FontAwesomeIcon icon={faLocationDot} />
            <span className="text-gray-200">ASAT Plaza Kulsum Coloney Infront of Madrasa,<br></br> Wagnaka, Waghwadi, Taluka- Walwa, District-Sangli, Maharashtra, India, PIN 415407</span>
          </div>
          <div className="flex items-center gap-2 mt-2">
            <FontAwesomeIcon icon={faPhone} />
            <span className="text-gray-200">+91 9876543210</span>
          </div>
          <div className="flex items-center gap-2 mt-2">
            <FontAwesomeIcon icon={faEnvelope} />
            <span className="text-gray-200">info@asatautomation.com</span>
          </div>
          
        </div>
        </div>

        {/* Quick Links */}
        <div className="w-full sm:w-auto ">
          <h1 className="text-xl sm:text-2xl font-bold p-2 sm:p-4  border-b-2 border-white">QUICK LINKS</h1>
          <ul className="text-gray-200 flex flex-col">
            <li className="p-2 flex items-center gap-2">
            <FontAwesomeIcon icon={faHouse} />
              <Link to="/">Home</Link>
            </li>
            <li className="p-2 flex items-center gap-2">
              <FontAwesomeIcon icon={faGears} />
              <Link to="/products">Products</Link>
            </li>
            <li className="p-2 flex items-center gap-2">
              <FontAwesomeIcon icon={faEnvelope} />
              <Link to="/contact">Contact</Link>
            </li>
            <li className="p-2 flex items-center gap-2">
              <FontAwesomeIcon icon={faInfoCircle} />
              <Link to="/about">About</Link>
            </li>
          </ul>
        </div>

        {/* Servises */}
        <div className="flex flex-col gap-3 w-full sm:w-auto mt-4 sm:mt-0">
          <h1 className="text-xl sm:text-2xl font-bold p-2 sm:p-4  border-b-2 border-white">SERVICES</h1>
          <div className="flex items-center gap-2">
            <FontAwesomeIcon icon={faInstagram} />
            <span className="text-gray-200">Autamation</span>
          </div>
          <div className="flex items-center gap-2">
          <FontAwesomeIcon icon={faIndustry} />
            <span className="text-gray-200">OEM & R&D</span>
          </div>
          <div className="flex items-center gap-2">
          <FontAwesomeIcon icon={faSprayCan} />
            <span className="text-gray-200">Powder Coating</span>
          </div>
          <div className="flex items-center gap-2">
          <FontAwesomeIcon icon={faHammer} />
            <span className="text-gray-200">Sheet Metal Work</span>
          </div>
        </div>

         {/**location */}
         <div>
          <h1 className='text-xl sm:text-2xl font-bold p-2 sm:p-4  border-b-2 border-white'>
            LOCATION
          </h1>
          <div className='h-40 w-80 bg-white'>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3814.7321150811454!2d74.23762177456621!3d17.03680518379183!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc10b793912b745%3A0xabe30ba5229791b4!2sASAT%20AUTOMATIONS!5e0!3m2!1sen!2sin!4v1769541110968!5m2!1sen!2sin" className=' h-full w-full border-white'></iframe>

          </div>

         </div>
         


        </div>
            <div className='border-t-2 border-gray-200 bg-gray-800 text-white p-5 flex justify-between gap-9'>
                <p className='text-center text-gray-400'>© 2026 ASAT Automation. All rights reserved.</p>
                <div className='text-xl flex gap-8'>
                <FontAwesomeIcon icon={faInstagram} />
                <FontAwesomeIcon icon={faXTwitter} />
                <FontAwesomeIcon icon={faFacebook} />
                <FontAwesomeIcon icon={faWhatsapp} />
                </div>
               
            </div>


    </div>
  )
}

export default Footer