import React from 'react'
import { Routes, Route, useLocation, BrowserRouter as Router } from 'react-router-dom'
import Navbar from './Navbar'
import Hero from './Hero'
import Home2 from './Home2'
import Model from './Model'
import Featured from './Featured'
import Footer from './Footer'
import Products from './Products'
import Milling from './Milling'
import Robotic from './Robotic'
import Press from './Press'
import About from './About'
import Conveyour from './Conveyour'
import Lazer from './Lazer'
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

// Home page component
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

// Wrapper to handle Navbar visibility and Routes
function AppContent() {
  const location = useLocation();

  // Hide Navbar on specific routes
  const hideNavbarRoutes = [
    "/login",
    "/register",
    "/dashboard",
    "/reset-password",
    "/admin" // Hide for all admin sub-routes
  ];

  const shouldHideNavbar = hideNavbarRoutes.some(path =>
    location.pathname.startsWith(path)
  );

  return (
    <>
      {!shouldHideNavbar && <Navbar />}

      <Routes>
        {/* Public Website Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path='/contact' element={<Contact />} />
        <Route path="/aboutus" element={<About />} />
        
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/milling" element={<Milling />} />
        <Route path="/roboticarm" element={<Robotic />} />
        <Route path="/pressmachine" element={<Press />} />
        <Route path="/conveyour" element={<Conveyour />} />
        <Route path="/bookingform" element={<Form />} />
        <Route path="/lazer" element={<Lazer />} />

        {/* Auth Pages */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Login />} />
        <Route path="/reset-password/:token" element={<ResetPassword />} />
        <Route path="/dashboard" element={<Dashboard />} />

        {/* Dynamic Admin Panel Routes */}
        <Route path="/admin" element={<AdminLayout />}>
          <Route path="add-product" element={<AddProduct />} />
          // Add this to your Routes in App.jsx
          
          <Route path="manage-products" element={<ManageProducts />} />
          <Route path="monitoring" element={<UserMonitoring />} />
        </Route>
      </Routes>

      {/* Floating WhatsApp Button */}
      {!shouldHideNavbar && (
        <div className='fixed bottom-10 right-10 bg-green-500 text-white h-12 w-40 rounded-full flex items-center justify-center gap-2 cursor-pointer z-50 shadow-lg'>
          <FontAwesomeIcon icon={faWhatsapp} className='text-2xl' />
          <a className="text-sm font-bold" href="https://wa.me/+918275957199">GET QUOTE</a>
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