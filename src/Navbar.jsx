import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();
  const isLoggedIn = !!localStorage.getItem("token");

  useGSAP(()=>{
    gsap.from("nav h1",{
      y:-100,
      duration:1,
      stagger:0.5
    })
    
      gsap.from("nav ul li",{
        y:-100,
        duration:1,
        stagger:0.5
      })
    
  })
  return (
    <div>
      <nav className="bg-black/30 backdrop-blur-md h-17 w-full flex justify-between items-center p-2 fixed z-50 navbar">
        <div className="h-18 w-auto ml-2 sm:ml-4 md:ml-6 lg:ml-10 p-1 sm:p-1.5 flex items-center gap-1 sm:gap-2 md:gap-3">
          <img src="logo.png" alt="" className="h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12" />
          <div className="flex flex-col sm:flex-row gap-0 sm:gap-1 leading-3">
            <h1 className="text-xs sm:text-sm md:text-base lg:text-2xl text-white font-bold"> |  ASAT </h1>
            <h1 className="text-xs sm:text-sm md:text-base lg:text-2xl text-white font-bold">AUTOMATION</h1>
          </div>
        </div>
        <div className="flex mr-2 sm:mr-4 md:mr-6 lg:mr-10 gap-10">
          <ul className="flex space-x-2 sm:space-x-4 md:space-x-6 items-center text-white font-serif">
            <li>
              <Link to="/" className="text-xs sm:text-sm md:text-base">HOME</Link>
            </li>
            <li>
              <Link to="/products" className="text-xs sm:text-sm md:text-base">PRODUCTS</Link>
            </li>
            <li>
              <Link to="/aboutus" className="text-xs sm:text-sm md:text-base">ABOUT US</Link>
            </li>
          
          </ul>
          <div className='h-10 w-23 bg-purple-600 text-white flex items-center justify-center rounded-2xl hover:shadow-2xl shadow-fuchsia-700'>
         {isLoggedIn ? (
        <button
          onClick={() => navigate("/dashboard")}
          className="login-btn"
        >
          Dashboard
        </button>
      ) : (
        <button
          onClick={() => navigate("/login")}
          className="login-btn"
        >
          Log In
        </button>
      )}

          </div>
         
        </div>
        
      </nav>
    </div>
  )
}

export default Navbar