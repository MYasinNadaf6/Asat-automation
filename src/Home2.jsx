import { useGSAP } from '@gsap/react'
import { useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function IndustrialPage() {
  useGSAP(() => {
    gsap.from('.word', {
      x:300,
      opacity:0, // start from x=300
      // go to x=0 (its default position)
      duration: 2, // duration is only used if no scrub
      scrollTrigger: {
        trigger: '.word',
        start: 'top 100%',
        end: 'top 30%',
        markers: false,
        scrub: 1,
      },
    })
    gsap.from('.head',{
      x:-300,
      opacity:0,
      duration:3,
      scrollTrigger:{
        trigger:'.head',
        start:'top 100%',
        end:'top 30%',
        markers:false,
        scrub:1,
      },
    })
    gsap.from('.feature-card',{
      y:100,
      opacity:0,
      duration:5,
      scrollTrigger:{
        trigger:'.head',
        start:'top 100%',
        end:'top 30%',
        markers:false,
        scrub:1,
      },
    })
  })
  const [popupData, setPopupData] = useState(null);

  const data = {
    technology: {
      title: "Advanced Technology",
      content:
        "Our advanced technology integrates smart automation, high-speed systems, and intelligent monitoring to maximize productivity and efficiency,Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis dicta temporibus officia laboriosam eligendi necessitatibus aliquid quibusdam ducimus sed odit dolor fugiat laudantium, cum eveniet placeat voluptatum sapiente provident exercitationem!"
    },
    solutions: {
      title: "Custom Solutions",
      content:
        "We deliver tailor-made industrial solutions designed to meet your exact production requirements and business goals.",
    },
    quality: {
      title: "Proven Quality",
      content:
        "ISO-certified manufacturing with strict quality control ensures reliability, durability, and long-term performance.",
    },
  };

  return (
    <>
    <div className="p-4 sm:p-5 md:p-6 lg:p-3 bg-linear-210 heading">
    <h1 className="text-2xl sm:text-4xl w-[97%] md:text-5xl lg:text-6xl xl:text-6xl  p-1 sm:p-4 md:p-5 lg:p-5 ml-6 word text-white font-mono rounded-2xl">WHAT WE DO</h1>
      <div className="container text-white mt-3 sm:mt-8 md:mt-10 lg:mt-4">
     <div className=" rounded-xl p-9 mb-5 mt-3 word">
       <h1 className="title">
         Engineering Excellence in Industrial Manufacturing
       </h1>

       <p className="description">
         With over 25 years of experience, IndustrialTech has been at the
         forefront of manufacturing innovation. We design, build, and support
         advanced machinery that powers production facilities worldwide.
       </p>
     </div>
       
        <div className="features">
          <div
            className="feature-card hover:bg-amber-50 text-zinc-950 "
            onClick={() => setPopupData(data.technology)}
          >
            <div className="icon">⚙️</div>
            <h3>Advanced Technology</h3>
            <p>State-of-the-art machinery with automation features</p>
          </div>

          <div
            className="feature-card "
            onClick={() => setPopupData(data.solutions)}
          >
            <div className="icon">🛠️</div>
            <h3>Custom Solutions</h3>
            <p>Tailored systems for specific production needs</p>
          </div>

          <div
            className="feature-card "
            onClick={() => setPopupData(data.quality)}
          >
            <div className="icon">🏅</div>
            <h3>Proven Quality</h3>
            <p>ISO certified manufacturing standards</p>
          </div>
        </div>
      </div>

      {/* POPUP MODAL */}
      {popupData && (
        <div className="overlay" onClick={() => setPopupData(null)}>
          <div
            className="popup"
            onClick={(e) => e.stopPropagation()}
          >
            <h2>{popupData.title}</h2>
            <p>{popupData.content}</p>
            <button onClick={() => setPopupData(null)}>Close</button>
          </div>
        </div>
      )}
    </div>
   
    </>
  );
}
