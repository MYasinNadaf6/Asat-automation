import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import Footer from './Footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Pagination } from 'swiper/modules';

function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await axios.get(`https://asat-backend.onrender.com/api/products/${id}`);
        setProduct(res.data);
        setLoading(false);
      } catch (err) {
        console.error("Error fetching product details:", err);
        setLoading(false);
      }
    };
    fetchProduct();
  }, [id]);

  if (loading) return <div className="h-screen bg-black text-white flex items-center justify-center text-2xl font-mono">LOADING ASAT SPECS...</div>;
  if (!product) return <div className="h-screen bg-black text-white flex items-center justify-center">Machine Not Found</div>;

  return (
    <div className='min-h-screen w-full bg-gradient-to-b from-[#3a003a] to-black heading'>
        <div className="h-14 w-full"></div>
        <Link to='/products'>
          <h1 className='p-5 text-xl text-white hover:text-amber-500 transition duration-300'>
            <FontAwesomeIcon icon={faArrowLeft} className="mr-2" />
            Back to products page
          </h1>
        </Link>

        <div className='mt-6 mx-auto w-[98%] max-w-7xl bg-white p-4 lg:p-8 flex flex-col lg:flex-row gap-10 rounded-3xl shadow-2xl mb-20'>
            {/* Image Section */}
            <div className='w-full lg:w-[50%]'>
              <Swiper pagination={{dynamicBullets:true}} modules={[Pagination]} className='rounded-2xl overflow-hidden shadow-lg border border-gray-100'>
                <SwiperSlide>
                  <img src={product.image} className='w-full h-64 sm:h-96 object-cover' alt={product.title} />
                </SwiperSlide>
              </Swiper>
            </div>

            {/* Content Section */}
            <div className='w-full lg:w-[50%] flex flex-col'>
               <h1 className='text-3xl font-bold mb-4 border-b-4 border-blue-600 pb-2 inline-block text-zinc-900'>
                  {product.title}
               </h1>
               <p className='text-lg text-gray-700 leading-relaxed mb-8'>
                  {product.description}
               </p>
               
               {/* DYNAMIC TECHNICAL SPECIFICATIONS */}
               <div className='bg-gray-50 p-6 rounded-2xl border border-gray-200'>
                 <h2 className='text-xl font-bold mb-4 flex items-center text-zinc-800'>
                    <span className="w-2 h-8 bg-blue-600 mr-3 rounded-full"></span>
                    Technical Specifications
                 </h2>
                 <div className='space-y-3'>
                    <div className='flex justify-between border-b border-gray-200 py-2'>
                      <span className='font-bold text-gray-500 uppercase text-xs'>Work Table size</span>
                      <span className='text-gray-900'>{product.specs?.tableSize || 'N/A'}</span>
                    </div>
                    <div className='flex justify-between border-b border-gray-200 py-2'>
                      <span className='font-bold text-gray-500 uppercase text-xs'>Spindle speed</span>
                      <span className='text-gray-900'>{product.specs?.spindleSpeed || 'N/A'}</span>
                    </div>
                    <div className='flex justify-between border-b border-gray-200 py-2'>
                      <span className='font-bold text-gray-500 uppercase text-xs'>Power Rating</span>
                      <span className='text-gray-900'>{product.specs?.powerRating || 'N/A'}</span>
                    </div>
                    <div className='flex justify-between border-b border-gray-200 py-2'>
                      <span className='font-bold text-gray-500 uppercase text-xs'>Positioning Accuracy</span>
                      <span className='text-gray-900'>{product.specs?.accuracy || 'N/A'}</span>
                    </div>
                    <div className='flex justify-between border-b border-gray-200 py-2'>
                      <span className='font-bold text-gray-500 uppercase text-xs'>Category</span>
                      <span className='text-gray-900 font-medium'>{product.category || 'Industrial Automation'}</span>
                    </div>
                    <div className='flex justify-between py-2'>
                      <span className='font-bold text-gray-500 uppercase text-xs'>Status</span>
                      <span className='text-green-600 font-black'>Available for Booking</span>
                    </div>
                 </div>
               </div>

               {/* Action Buttons */}
               <div className='pt-10 flex flex-col sm:flex-row gap-4'>
                 <Link to='/bookingform' className="w-full sm:w-auto">
                    <button className='bg-blue-600 text-white py-4 px-10 w-full rounded-2xl font-bold hover:bg-blue-700 transition shadow-lg transform active:scale-95'>
                      Request Booking
                    </button>
                 </Link>
                 <button className='border-2 border-blue-700 py-4 px-10 w-full sm:w-auto text-blue-700 rounded-2xl font-bold hover:bg-blue-50 transition'>
                    Contact Sales
                 </button>
               </div>
            </div>
        </div>
        <Footer/>
    </div>
  );
}

export default ProductDetail;