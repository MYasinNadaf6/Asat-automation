import React from 'react'
import { Routes, Route, useLocation, BrowserRouter as Router } from 'react-router-dom'
import Navbar from './Navbar'
import Hero from './Hero'
import Home2 from './Home2'
import Model from './Model'
import Featured from './Featured'
import Footer from './Footer'
import Products from './Products'


import About from './About'

import Contact from './Contact'
import Form from './Form'
import Login from './pages/Login'
import ResetPassword from './pages/ResetPassword'
import Dashboard from './pages/Dashboard'
import AdminLayout from './admin/AdminLayout'
import AddProduct from './admin/AddProduct'
import ManageProducts from './admin/ManageProducts'
// Add this line at the top of App.jsx
import ProductDetail from './ProductDetail'
import UserMonitoring from './admin/UserMonitoring'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import PageWrapper from './pages/PageWrapper' // Import the new wrapper

function Home() {
  return (
    <div className="overflow-hidden"> {/* Extra safety for Hero glitches */}
      <Hero />
      <Home2 />
      <Model />
      <Featured />
      <Footer />
    </div>
  )
}

function AppContent() {
  const location = useLocation();

  const hideNavbarRoutes = ["/login", "/register", "/dashboard", "/reset-password", "/admin"];
  const shouldHideNavbar = hideNavbarRoutes.some(path => location.pathname.startsWith(path));

  return (
    <>
      {!shouldHideNavbar && <Navbar />}

      <Routes>
        {/* Public Website Routes - Wrapped for Mobile Consistency */}
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<PageWrapper><Products /></PageWrapper>} />
        <Route path='/contact' element={<PageWrapper><Contact /></PageWrapper>} />
        <Route path="/aboutus" element={<PageWrapper><About /></PageWrapper>} />
        <Route path="/product/:id" element={<PageWrapper><ProductDetail /></PageWrapper>} />
        <Route path="/bookingform" element={<PageWrapper><Form /></PageWrapper>} />
      
        {/* Auth & Admin: Usually have their own internal layout/padding */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Login />} />
        <Route path="/reset-password/:token" element={<ResetPassword />} />
        <Route path="/dashboard" element={<Dashboard />} />

        <Route path="/admin" element={<AdminLayout />}>
          <Route path="add-product" element={<AddProduct />} />
          <Route path="manage-products" element={<ManageProducts />} />
          <Route path="monitoring" element={<UserMonitoring />} />
        </Route>
      </Routes>

      {/* Floating WhatsApp Button: Adjusted for smaller screens */}
      {!shouldHideNavbar && (
        <div className='fixed bottom-6 right-6 md:bottom-10 md:right-10 bg-green-500 text-white h-12 w-12 md:w-40 rounded-full flex items-center justify-center gap-2 cursor-pointer z-50 shadow-lg'>
          <FontAwesomeIcon icon={faWhatsapp} className='text-2xl' />
          <a className="hidden md:block text-sm font-bold" href="https://wa.me/+918275957199">GET QUOTE</a>
        </div>
      )}
    </>
  );
}

export default function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}