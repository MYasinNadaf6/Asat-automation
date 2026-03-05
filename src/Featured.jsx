import React from 'react'
import { Link } from 'react-router-dom'

function Featured() {
  return (
    <div className="  w-full heading">
      <div className="w-full">
        <h1 className="text-4xl sm:text-4xl h-22 w-[97%] pt-4 p-3 word text-bold text-white rounded-2xl ">Featured Products</h1>
        <div className="flex flex-col sm:flex-row flex-wrap justify-center items-center gap-6 pt-5 mt-4 pb-14">
        <div className="w-11/12 sm:w-72 md:w-80 h-auto bg-gray-100 rounded-2xl hover:shadow-2xl transition-shadow mb-6 sm:mb-0">
            <div className="h-60 sm:h-68 w-full bg-amber-700 rounded-2xl overflow-hidden">
              <img className="h-full w-full object-cover rounded-t-2xl" src="machine3.jpg" alt="" />
            </div>
            <h1 className="text-lg sm:text-xl p-2">
              CNC Precision Milling Machine
            </h1>
            <p className="text-gray-400 mx-2 text-sm sm:text-base">
              High-precision 5-axis CNC milling machine for complex industrial components
            </p>
            <Link to="/products" className="text-blue-500 pr-1 block px-2 pb-2">
             learn more..
           </Link>
          </div>
          <div className="w-11/12 sm:w-72 md:w-80 h-auto bg-gray-100 rounded-2xl hover:shadow-2xl transition-shadow mb-6 sm:mb-0">
            <div className="h-60 sm:h-68 w-full bg-amber-700 rounded-2xl overflow-hidden">
              <img className="h-full w-full object-cover rounded-t-2xl" src="machine3.jpg" alt="" />
            </div>
            <h1 className="text-lg sm:text-xl p-2">
              Industrial Robotiic Arm
            </h1>
            <p className="text-gray-400 mx-2 text-sm sm:text-base">
             This industrial robotic arm provides flexible automation solutions for assembly lines, material handling, and precision tasks.
            </p>
           <Link to="/products" className="text-blue-500 pr-1 block px-2 pb-2">
             learn more..
           </Link>
          </div>
          <div className="w-11/12 sm:w-72 md:w-80 h-auto bg-gray-100 rounded-2xl hover:shadow-2xl transition-shadow mb-6 sm:mb-0">
            <div className="h-60 sm:h-68 w-full bg-amber-700 rounded-2xl overflow-hidden">
              <img className="h-full w-full object-cover rounded-t-2xl" src="machine3.jpg" alt="" />
            </div>
            <h1 className="text-lg sm:text-xl p-2">
              Hydrolic Press machine 
            </h1>
            <p className="text-gray-400 mx-2 text-sm sm:text-base">
              Heavy-duty hydraulic press designed for high-force metal forming, stamping, and compression operations
            </p>
            <Link to="/products" className="text-blue-500 pr-1 block px-2 pb-2">
             learn more..
           </Link>
          </div>
          <div className="w-11/12 sm:w-72 md:w-80 h-auto bg-gray-100 rounded-2xl hover:shadow-2xl transition-shadow  sm:mb-0">
            <div className="h-60 sm:h-68 w-full bg-amber-700 rounded-2xl overflow-hidden">
              <img className="h-full w-full object-cover rounded-t-2xl" src="machine4.jpg" alt="" />
            </div>
            <h1 className="text-lg sm:text-xl p-2 mr-2">
              Automated Conveyor System
            </h1>
            <p className="text-gray-400 mx-2 text-sm sm:text-base">
              Flexible and scalable conveyor system designed for industrial material handling.
            </p>
             <Link to="/products" className="text-blue-500 pr-1 block px-2 pb-2">
             learn more..
           </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Featured
