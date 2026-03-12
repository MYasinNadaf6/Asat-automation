import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Footer from './Footer'


function Products() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await axios.get("https://asat-backend.onrender.com/api/products/all");
        setProducts(res.data);
        setLoading(false);
      } catch (err) {
        console.error("Error fetching products:", err);
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  if (loading) return <div className="h-screen bg-black text-white flex items-center justify-center">Loading ASAT Inventory...</div>;

  return (
    <div className='heading min-h-screen p-10'>
      <div className='relative w-full h-48 sm-80 md:h-96 video rounded-xl overflow-hidden mb-3'>
        <video 
        src="cutting.mp4"
        className='w-full h-full object-cover z-0 hover:shadow-2xl'
        autoPlay
        muted
        loop
        playsInline
        />
        <div className='absolute inset-0 flex items-center justify-center pt-2 sm:pt-4'>
          <h1 className='text-3xl sm:text-3xl md:text-4xl text-amber-50 z-10 text-center text-shadow-2xs font-bold'>
            OUR POPULAR PRODUCTS
          </h1>

        </div>

      </div>
      
      <div className="flex flex-wrap gap-10 justify-center">
        {products.map((product) => (
          <div key={product._id} className='hover:scale-105 transition-transform duration-300'>
            <Link to={`/product/${product._id}`}>
              <div className='h-95 w-80 bg-white rounded-2xl overflow-hidden shadow-xl'>
                <img className='h-70 w-full object-cover' src={product.image} alt={product.title} />
                <div className='p-4'>
                  <h1 className='text-xl font-bold text-black'>{product.title}</h1>
                  <button className='text-blue-600 mt-2 font-semibold'>View Details...</button>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
}

export default Products;