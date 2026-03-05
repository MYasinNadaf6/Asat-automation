import React from 'react'
import Navbar from './Navbar'
import Hero from './Hero'
import Products from './Products'
import { Routes, Route, useLocation } from 'react-router-dom'
import Home2 from './Home2'
import Model from './Model'
import Featured from './Featured'
import Footer from './Footer'
import Milling from './Milling'
import Robotic from './Robotic'
import Press from './Press'
import About from './About'
import Conveyour from './Conveyour'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import Form from './Form'
import Login from './pages/Login'
import ResetPassword from './pages/ResetPassword'
import Dashboard from './pages/Dashboard'
import Contact from './Contact'
import Lazer from './Lazer'


// Home page component that includes Hero and Home2
function Home() {
  return (
    <>
      <Hero />
      <Home2 />
      <Model />
      <Featured />
      <Footer />
    </>
  )
}

function App() {
  const location = useLocation();

  const hideNavbarRoutes = [
    "/login",
    "/register",
    "/dashboard",
    "/reset-password"
  ];

  const shouldHideNavbar = hideNavbarRoutes.some(path =>
    location.pathname.startsWith(path)
  );

  return (
    <>
      {!shouldHideNavbar && <Navbar />}

      <Routes>
        {/* public pages */}
        <Route path='/contact' element={<Contact />} />
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/aboutus" element={<About />} />
        <Route path="/milling" element={<Milling />} />
        <Route path="/roboticarm" element={<Robotic />} />
        <Route path="/pressmachine" element={<Press />} />
        <Route path="/conveyour" element={<Conveyour />} />
        <Route path="/bookingform" element={<Form />} />
        <Route path="/lazer" element={<Lazer />} />
    

        {/* auth pages */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Login />} />
        <Route path="/reset-password/:token" element={<ResetPassword />} />

        {/* dashboard */}
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
      <div className=' absolute bottom-29 right-10 bg-green-500 position-relative text-white h-12 w-40 rounded-full p-2 cursor-pointer pt-2'>
        <div className='flex items-center justify-center gap-1'>
          <FontAwesomeIcon icon={faWhatsapp} className='text-2xl' />
          <a className="text-1.5xl font-bold mt-1" href="https://wa.me/+917741814620">GET QUOTE</a>
        </div>
      </div>
    </>
  );
}


export default App