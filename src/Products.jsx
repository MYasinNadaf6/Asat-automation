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
      <h1 className='text-4xl text-white border-b-2 border-blue-600 pb-2 mb-10 mt-7 h'>OUR PRODUCTS</h1>
      
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