import React, { useEffect, useState } from 'react';
import axios from 'axios';

// Image conversion helper
const convertToBase64 = (file) => {
  return new Promise((resolve, reject) => {
    const fileReader = new FileReader();
    fileReader.readAsDataURL(file);
    fileReader.onload = () => resolve(fileReader.result);
    fileReader.onerror = (error) => reject(error);
  });
};

const ManageProducts = () => {
  const [products, setProducts] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentProduct, setCurrentProduct] = useState(null);

  const fetchProducts = async () => {
    const res = await axios.get("https://asat-backend.onrender.com/api/products/all");
    setProducts(res.data);
  };

  const openEditModal = (product) => {
    // Deep clone to ensure specs object exists for editing
    const clone = JSON.parse(JSON.stringify(product));
    clone.specs = clone.specs || { tableSize: '', spindleSpeed: '', powerRating: '', accuracy: '' };
    setCurrentProduct(clone);
    setIsModalOpen(true);
  };

  const handleImageUpload = async (e) => {
    const file = e.target.files[0];
    const base64 = await convertToBase64(file);
    setCurrentProduct({ ...currentProduct, image: base64 });
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`https://asat-backend.onrender.com/api/products/update/${currentProduct._id}`, currentProduct);
      alert("Machine Updated!");
      setIsModalOpen(false);
      fetchProducts();
    } catch (err) { alert("Update failed"); }
  };

  useEffect(() => { fetchProducts(); }, []);

  return (
    <div className="p-10 bg-zinc-950 min-h-screen text-white relative">
      <h2 className="text-3xl font-bold text-amber-500 mb-8 uppercase tracking-tighter">Inventory Control</h2>
      
      <div className="grid grid-cols-1 gap-4">
        {products.map(p => (
          <div key={p._id} className="flex justify-between items-center bg-zinc-900 p-4 rounded-xl border border-white/5">
            <div className="flex items-center gap-4">
              <img src={p.image} className="h-16 w-16 object-cover rounded" alt="" />
              <p className="font-bold">{p.title}</p>
            </div>
            <div className="flex gap-2">
              <button onClick={() => openEditModal(p)} className="bg-blue-600 px-6 py-2 rounded-lg font-bold">Edit</button>
              <button onClick={async () => { if(window.confirm("Delete?")) { await axios.delete(`https://asat-backend.onrender.com/api/products/${p._id}`); fetchProducts(); }}} className="bg-red-600 px-6 py-2 rounded-lg font-bold">Delete</button>
            </div>
          </div>
        ))}
      </div>

      {/* PROFESSIONAL EDIT MODAL */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/90 backdrop-blur-md flex items-center justify-center z-50 p-4">
          <div className="bg-zinc-900 w-full max-w-3xl rounded-3xl border border-white/10 shadow-2xl overflow-hidden">
            <div className="p-6 border-b border-white/10 flex justify-between items-center">
              <h3 className="text-xl font-bold">Edit Machine Details</h3>
              <button onClick={() => setIsModalOpen(false)} className="text-zinc-500 hover:text-white text-3xl">×</button>
            </div>
            
            <form onSubmit={handleUpdate} className="p-8 grid grid-cols-1 md:grid-cols-2 gap-6 max-h-[85vh] overflow-y-auto">
              {/* Image Preview and Upload */}
              <div className="md:col-span-2 flex flex-col items-center bg-black/20 p-6 rounded-2xl border border-white/5">
                <img src={currentProduct.image} className="h-40 w-64 object-cover rounded-xl mb-4 border border-zinc-700" alt="Preview" />
                <label className="bg-zinc-800 px-6 py-2 rounded-lg cursor-pointer hover:bg-zinc-700 transition font-bold border border-zinc-600">
                  Change Machine Photo
                  <input type="file" className="hidden" accept="image/*" onChange={handleImageUpload} />
                </label>
              </div>

              <div className="space-y-4">
                <label className="text-xs font-bold text-zinc-500 uppercase">Product Title</label>
                <input className="w-full bg-zinc-800 border border-white/5 p-3 rounded-xl" value={currentProduct.title} onChange={(e) => setCurrentProduct({...currentProduct, title: e.target.value})} />
                
                <label className="text-xs font-bold text-zinc-500 uppercase">Technical Description</label>
                <textarea className="w-full bg-zinc-800 border border-white/5 p-3 rounded-xl h-40" value={currentProduct.description} onChange={(e) => setCurrentProduct({...currentProduct, description: e.target.value})} />
              </div>

              <div className="space-y-4 bg-white/5 p-6 rounded-2xl">
                <h4 className="font-bold text-amber-500 mb-2">Specifications</h4>
                <div>
                   <label className="text-[10px] uppercase text-zinc-400">Table Size</label>
                   <input className="w-full bg-zinc-800 border border-white/5 p-2 rounded-lg" value={currentProduct.specs.tableSize} onChange={(e) => setCurrentProduct({...currentProduct, specs: {...currentProduct.specs, tableSize: e.target.value}})} />
                </div>
                <div>
                   <label className="text-[10px] uppercase text-zinc-400">Spindle Speed</label>
                   <input className="w-full bg-zinc-800 border border-white/5 p-2 rounded-lg" value={currentProduct.specs.spindleSpeed} onChange={(e) => setCurrentProduct({...currentProduct, specs: {...currentProduct.specs, spindleSpeed: e.target.value}})} />
                </div>
                <div>
                   <label className="text-[10px] uppercase text-zinc-400">Power Rating</label>
                   <input className="w-full bg-zinc-800 border border-white/5 p-2 rounded-lg" value={currentProduct.specs.powerRating} onChange={(e) => setCurrentProduct({...currentProduct, specs: {...currentProduct.specs, powerRating: e.target.value}})} />
                </div>
                <div>
                   <label className="text-[10px] uppercase text-zinc-400">Accuracy</label>
                   <input className="w-full bg-zinc-800 border border-white/5 p-2 rounded-lg" value={currentProduct.specs.accuracy} onChange={(e) => setCurrentProduct({...currentProduct, specs: {...currentProduct.specs, accuracy: e.target.value}})} />
                </div>
              </div>

              <div className="md:col-span-2 pt-6 flex gap-3">
                <button type="button" onClick={() => setIsModalOpen(false)} className="flex-1 bg-zinc-800 p-4 rounded-xl font-bold">Cancel</button>
                <button type="submit" className="flex-1 bg-blue-600 p-4 rounded-xl font-bold hover:bg-blue-700 transition">Update Machine</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default ManageProducts;