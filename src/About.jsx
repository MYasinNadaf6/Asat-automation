import { useGSAP } from '@gsap/react'
import React, { useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import  Footer from './Footer'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import { Pagination } from 'swiper/modules';
import 'swiper/css/pagination';
import { DotLottieReact } from '@lottiefiles/dotlottie-react'
import aboutanimation from './about-us.json?url'
import { faHouse, faBriefcase } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faIndustry } from '@fortawesome/free-solid-svg-icons'


// Register GSAP/ScrollTrigger ONCE at module level for correct behavior
gsap.registerPlugin(ScrollTrigger)

function About() {
    const imgDivRef = useRef(null)
    const imgRef = useRef(null)
   const imgArray = [
    './img1.jpeg',
    './img2.jpeg',
    './img3.jpeg',
    './img4.jpeg',
    './img6.jpeg',
    './img7.jpg',
    './machine1.jpg',
    './machine2.jpg',
    './machine3.jpg',
    './machine4.jpg'

   ]

 // Wrap the GSAP animation inside a useGSAP() hook (or useEffect), so it runs after refs are set up
 useGSAP(() => {
   if (!imgDivRef.current) return;

   gsap.to(imgDivRef.current, {
     y:80,
     scrollTrigger: {
       trigger: imgDivRef.current,
       start: 'top 10%',
       end: 'top -60%',
       scrub: true,
       markers: false, 
       pin: true,
       onUpdate: function (self) {
         let ImgIndex = Math.floor(self.progress * (imgArray.length - 1));
         ImgIndex = Math.max(0, Math.min(ImgIndex, imgArray.length - 1));

         if (
           imgRef.current &&
           !imgRef.current.src.endsWith(imgArray[ImgIndex].replace('./', ''))
         ) {
           imgRef.current.src = imgArray[ImgIndex];
         }
       },
     },
   });
 }, []);
 
    
    return (
        <div className='h-screen w-full heading text-white relative about'>
            <div
                ref={imgDivRef}
                className='absolute h-79 w-125 left-50 top-20  shadow-2xl shadow-black rounded-3xl bg-amber-400' >
                <img ref={imgRef}
                className="h-full w-full object-cover rounded-3xl" src="./img1.jpeg" alt="" />
            </div>
            <div className="absolute left-1/2 top-10 right-3 mr-4">
            <DotLottieReact
              src={aboutanimation}
              background="transparent"
              speed="1"
              style={{ width: "100%", height:"100%" }}
              loop
              autoplay
            ></DotLottieReact>
          </div>
            <div className='relative left-[21%] top-35 font-serif'>
           
                <h1 className='text-[8vw] top-6 font-bold border-purple-600 text-shadow-black '>ASAT </h1><h1 className='text-[10vw] top-6 font-bold border-b-2 border-purple-600 pb-3 '>AUTOMATION</h1>
            </div>


            <div className='text-2xl gap-2 absolute  top-[42vw] text-center mr-4 pl-[50%]'>
                <p>
                    <h1 className='text-4xl '>
                        WHO WE ARE
                    </h1>
                    ASAT Automations is a forward-thinking engineering and technology company specializing in Home, Office & Industrial Automation, Sheet Metal Manufacturing, and Research Projects.
                    We combine innovation, precision engineering, and advanced automation to deliver smart solutions that enhance productivity, efficiency, and quality. With in-house capabilities in laser cutting, CNC bending, fabrication, powder coating, and custom machine development, weserve a wide range of industries with reliability and excellence.
                    We are committed to delivering creative work, high-quality products, and trusted services that help our customers grow
                </p>
            </div>



            <div className=' h-1/2 w-full heading mt-[37vw] p-6 '>
              <h1 className='text-6xl'>WHAT WE DO</h1>
              <div className='w-full h-80 word p-4 mt-3 rounded-2xl'>
                <Swiper 
                pagination={{dynamicBullets:true}}
                modules={[Pagination]}
                className='h-60 w-full mt-3 rounded-2xl myswiper'
                slidesPerView={3}
                spaceBetween={10}
              
                >
                 <SwiperSlide className='bg-white text-black border-2 border-zinc-300 rounded-2xl'>
                 <div className='flex flex-col items-start justify-center p-5'>
                  <FontAwesomeIcon icon={faHouse} className='text-4xl' />
                  <h1 className='text-2xl font-bold mt-2'>Home Automation</h1>
                  <p className='text-base'>We provide home automation solutions for your home. We have a team of experts who are dedicated to providing you with the best home automation solutions. We have a team of experts who are dedicated to providing you with the best home automation solutions.</p>  
                 
                 </div>
                 </SwiperSlide>
                 <SwiperSlide className='bg-white text-black border-2 border-amber-50 rounded-2xl'>
                 <div className='flex flex-col items-start justify-center p-5'>
                 <FontAwesomeIcon icon={faBriefcase} className='text-4xl' />
                  <h1 className='text-2xl font-bold mt-2'>Office Automation</h1>
                  <p className='text-base'>We provide home automation solutions for your home. We have a team of experts who are dedicated to providing you with the best home automation solutions. We have a team of experts who are dedicated to providing you with the best home automation solutions.</p>  
                 
                 </div>
                 </SwiperSlide>
                 <SwiperSlide className='bg-white text-black border-2 border-zinc-300 rounded-2xl'>
                 <div className='flex flex-col items-start justify-center p-5'>
                  <FontAwesomeIcon icon={faIndustry} className='text-4xl' />
                  <h1 className='text-2xl font-bold mt-2'>Industrial Automation</h1>
                  <p className='text-base'>We provide home automation solutions for your home. We have a team of experts who are dedicated to providing you with the best home automation solutions. We have a team of experts who are dedicated to providing you with the best home automation solutions.</p>  
                 
                 </div>
                 </SwiperSlide>
                 <SwiperSlide className='bg-white text-black border-2 border-zinc-300 rounded-2xl'>
                 <div className='flex flex-col items-start justify-center p-5'>
                  <FontAwesomeIcon icon={faIndustry} className='text-4xl' />
                  <h1 className='text-2xl font-bold mt-2'>Laser Cutting</h1>
                  <p className='text-base'>We provide laser cutting solutions for your home. We have a team of experts who are dedicated to providing you with the best laser cutting solutions. We have a team of experts who are dedicated to providing you with the best laser cutting solutions.</p>  
                 
                 </div>
                 </SwiperSlide>
                </Swiper>
              </div>
              </div>

            {/**Vision */}
            <div className='h-40 w-[95%] mx-auto mt-[3vw] rounded-2xl text-white pt-10  border-zinc-300'>
              <h1 className='text-4xl font-bold mt-5'>OUR VISION</h1>
              <p className='text-base mt-3 '>Our vision is to be a leading provider of automation solutions for homes, offices, and industries. We aim to provide the best possible solutions to our customers and to be a trusted partner for them.</p>
            </div>

            {/**Certifications */}
            <div>
              <h1 className='text-4xl w-100 font-bold mt-5 border-b-2 pb-3 border-white'>OUR CERTIFICATIONS</h1>
              <div className='h-160 w-[93%] mx-auto mt-[3vw] rounded-2xl border-2 border-zinc-300'>
                <img src="./cert1.jpg" alt="" className='h-full w-full object-fill p-9' />
              </div>
            </div>



            {/*upported copaney*/}
            <div>
            <h1 className='text-6xl font-bold mt-8 pl-3 mb-3 '>SUPPORTED BRANDS</h1>
            <div className='flex flex-wrap p-5 word'>
              <img src="./comp1.webp" alt="" className='h-60 w-70 object-fill p-9 hover:scale-105 duration-300 hover:shadow-2xl' />
              <img src="./comp2.webp" alt="" className='h-60 w-70  object-fill p-9  hover:scale-105 duration-300 hover:shadow-2xl' />
              <img src="./comp3.webp" alt="" className='h-60 w-70 object-fill p-9  hover:scale-105 duration-300 hover:shadow-2xl' />
              <img src="./comp4.webp" alt="" className='h-60 w-70 object-fill p-9  hover:scale-105 duration-300 hover:shadow-2xl' />
              <img src="./comp5.webp" alt="" className='h-60 w-70 object-fill p-9  hover:scale-105 duration-300 hover:shadow-2xl' />
              <img src="./comp6.jpg" alt="" className='h-60 w-70 object-fill p-9  hover:scale-105 duration-300 hover:shadow-2xl' />
              <img src="./comp7.jpg" alt="" className='h-60 w-70 object-fill p-9  hover:scale-105 duration-300 hover:shadow-2xl' />
              <img src="./comp8.webp" alt="" className='h-60 w-70 object-contain p-9  hover:scale-105 duration-300 hover:shadow-2xl' />
              <img src="./comp9.webp" alt="" className='h-60 w-70 object-contain p-9  hover:scale-105 duration-300 hover:shadow-2xl' />
              <img src="./comp10.png" alt="" className='h-60 w-70 object-contain p-9  hover:scale-105 duration-300 hover:shadow-2xl' />
              
            </div>
            </div>


         
                <Footer />
            
            
        </div>
    )
}

export default About