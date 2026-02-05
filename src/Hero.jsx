import React from 'react'
import { DotLottieReact } from '@lottiefiles/dotlottie-react'
import walkingAnimation from './Walking.json?url'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

function Hero() {
  useGSAP(() => {
    gsap.from('video', {
      opacity: 0,
      duration: 6,
    })

    gsap.from(' p', {
      x: 100,
      duration: 1,
    })

    gsap.from('.walk', {
      x: 400,
      duration: 5,
    })
   
  })

  return (
    <div >
      <div className="h-screen w-screen bg-black relative asat">
        <div className="h-full w-full relative hero">
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-4 md:p-5 lg:p-5 w-full md:w-auto px-4 md:px-5 z-10">
            <h1 className="text-white text-6xl sm:text-5xl md:text-6xl lg:text-8xl font-bold text-center md:text-left">
              ASAT{' '}
            </h1>
            <br />
            <h1 className="text-white text-6xl sm:text-5xl md:text-6xl lg:text-8xl font-bold text-center md:text-left">
              AUTOMATION
            </h1>
            <p className="text-white p-2 md:p-5 text-sm sm:text-base md:text-lg mt-4 text-center md:text-left max-w-2xl mx-auto md:mx-0">
              We are a team of experts who are dedicated to providing the best possible
              service to our clients.We deliver robust and reliable industrial
              automation solutions that improve productivity, accuracy, safety, and
              operational efficiency across manufacturing and industrial processes. Our
              systems are engineered to reduce manual intervention, minimize downtime,
              and ensure consistent quality.
            </p>
          </div>

          <video
            src="Lframe.mp4"
            className="h-full w-screen object-cover vido"
            autoPlay
            muted
            loop
            style={{ minWidth: "100vw" }}
          ></video>

          {/* Walking Animation at Bottom */}
          <div className="absolute walk bottom-4 left-1/2 transform -translate-x-1/2 h-35 z-20 w-40 sm:w-40 md:w-48">
            <DotLottieReact
              src={walkingAnimation}
              background="transparent"
              speed="1"
              style={{ width: "100%", height: "100%" }}
              loop
              autoplay
            ></DotLottieReact>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero