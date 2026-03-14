import React, { useState } from 'react';
import axios from 'axios';

const AddProduct = () => {
  const [formData, setFormData] = useState({ 
    title: '', description: '', image: '', category: 'Industrial Automation',
    specs: { tableSize: '', spindleSpeed: '', powerRating: '', accuracy: '' }
  });

  // Helper to convert file to Base64
  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setFormData({ ...formData, image: reader.result });
    };
    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("https://asat-backend.onrender.com/api/products/add", formData);
      alert("Machine Published to ASAT Inventory!");
      setFormData({ 
        title: '', description: '', image: '', category: 'Industrial Automation',
        specs: { tableSize: '', spindleSpeed: '', powerRating: '', accuracy: '' }
      });
    } catch (err) {
      alert("Upload failed. Check backend connection.");
    }
  };

  return (
    <div className="min-h-screen bg-black text-white p-10">
      <h2 className="text-3xl font-bold text-amber-500 mb-8 uppercase tracking-widest">Add New Machine</h2>
      <form onSubmit={handleSubmit} className="max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-8">
        
        {/* General Info */}
        <div className="space-y-6">
          <h3 className="text-xl font-semibold border-b border-zinc-800 pb-2">General Info</h3>
          
          {/* IMAGE UPLOAD BUTTON */}
          <div className="bg-zinc-900 p-6 rounded-2xl border border-zinc-800 text-center">
             {formData.image ? (
               <img src={formData.image} className="h-40 mx-auto object-cover rounded-xl mb-4" alt="Preview" />
             ) : (
               <div className="h-40 w-full bg-black rounded-xl mb-4 flex items-center justify-center text-zinc-700">No Photo Selected</div>
             )}
             <label className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-bold cursor-pointer transition inline-block">
               Upload Machine Photo
               <input type="file" className="hidden" accept="image/*" onChange={handleFileUpload} />
             </label>
          </div>

          <input className="w-full p-4 bg-zinc-900 border border-zinc-800 rounded-xl" placeholder="Product Title" value={formData.title} onChange={(e) => setFormData({...formData, title: e.target.value})} />
          <textarea className="w-full p-4 bg-zinc-900 border border-zinc-800 rounded-xl h-32" placeholder="Technical Description" value={formData.description} onChange={(e) => setFormData({...formData, description: e.target.value})} />
        </div>

        {/* Technical Specs */}
        <div className="space-y-4">
          <h3 className="text-xl font-semibold border-b border-zinc-800 pb-2">Technical Specs</h3>
          <input className="w-full p-4 bg-zinc-900 border border-zinc-800 rounded-xl" placeholder="Work Table Size" value={formData.specs.tableSize} onChange={(e) => setFormData({...formData, specs: {...formData.specs, tableSize: e.target.value}})} />
          <input className="w-full p-4 bg-zinc-900 border border-zinc-800 rounded-xl" placeholder="Spindle Speed" value={formData.specs.spindleSpeed} onChange={(e) => setFormData({...formData, specs: {...formData.specs, spindleSpeed: e.target.value}})} />
          <input className="w-full p-4 bg-zinc-900 border border-zinc-800 rounded-xl" placeholder="Power Rating" value={formData.specs.powerRating} onChange={(e) => setFormData({...formData, specs: {...formData.specs, powerRating: e.target.value}})} />
          <input className="w-full p-4 bg-zinc-900 border border-zinc-800 rounded-xl" placeholder="Positioning Accuracy" value={formData.specs.accuracy} onChange={(e) => setFormData({...formData, specs: {...formData.specs, accuracy: e.target.value}})} />
        </div>

        <button type="submit" className="md:col-span-2 bg-amber-600 p-5 font-bold rounded-2xl hover:bg-amber-500 transition shadow-lg text-lg">
          Publish Machine to Website
        </button>
      </form>
    </div>
  );
};

export default AddProduct;