import React, { Suspense } from 'react'
import { Center, useGLTF } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { Environment, OrbitControls } from '@react-three/drei'

function Model3D() {
  const { scene } = useGLTF('/head.glb')
  
  return (
    <primitive object={scene} />
  )
}

function Model() {
  return (
    <div className="w-full min-h-screen  model">
      <div className='p-3 word w-[96%] ml-6 text-white rounded-2xl'>
      <h1 className='text-6xl sm:text-4xl  md:text-5xl lg:text-4xl xl:text-4xl  sm:p-4 md:p-5 lg:p-4 font-sans'>GET A CLOSER LOOK</h1>
      </div>
      
      <div className="w-full p-4" style={{ height: "calc(110vh - 120px)" }}>
        <Canvas
          camera={{ fov: 80, position: [80, 5, 20]}}
          style={{ width: "100%", height: "100%" }}
        >
          <Suspense fallback={null}>
            <Environment files={['https://dl.polyhaven.org/file/ph-assets/HDRIs/hdr/1k/blue_photo_studio_1k.hdr']} background />
            <ambientLight intensity={0.5} />
            <directionalLight position={[3, 10, 20]} intensity={1} />
            <Center>
            <Model3D />
            </Center>
            <OrbitControls enableZoom={false} enablePan={false} enableRotate={true} />
          </Suspense>
        </Canvas>
      </div>
    </div>
  )
}

export default Model