import React, { useState } from 'react';
import axios from 'axios';

const AddProduct = () => {
  const [formData, setFormData] = useState({ 
    title: '', 
    description: '', 
    image: '', 
    category: 'Industrial Automation',
    specs: {
      tableSize: '',
      spindleSpeed: '',
      powerRating: '',
      accuracy: ''
    }
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("https://asat-backend.onrender.com/api/products/add", formData);
      alert("Machine added to ASAT Database!");
      // Reset form including specs
      setFormData({ 
        title: '', description: '', image: '', category: 'Industrial Automation',
        specs: { tableSize: '', spindleSpeed: '', powerRating: '', accuracy: '' }
      });
    } catch (err) {
      console.error("Save Error:", err.response?.data || err.message);
      alert("Failed to save machine.");
    }
  };

  return (
    <div className="min-h-screen bg-black text-white p-10">
      <h2 className="text-3xl font-bold text-amber-500 mb-8">Add New Machine</h2>
      <form onSubmit={handleSubmit} className="max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-6">
        
        {/* Basic Info */}
        <div className="space-y-4">
          <h3 className="text-xl font-semibold border-b border-zinc-800 pb-2">General Info</h3>
          <input 
            className="w-full p-3 bg-zinc-900 border border-amber-900 rounded"
            placeholder="Product Title" 
            onChange={(e) => setFormData({...formData, title: e.target.value})} 
            value={formData.title} 
          />
          <textarea 
            className="w-full p-3 bg-zinc-900 border border-amber-900 rounded h-32"
            placeholder="Technical Description" 
            onChange={(e) => setFormData({...formData, description: e.target.value})} 
            value={formData.description}
          />
          <input 
            className="w-full p-3 bg-zinc-900 border border-amber-900 rounded"
            placeholder="Image URL" 
            onChange={(e) => setFormData({...formData, image: e.target.value})} 
            value={formData.image}
          />
        </div>

        {/* Technical Specs Info */}
        <div className="space-y-4">
          <h3 className="text-xl font-semibold border-b border-zinc-800 pb-2">Technical Specs</h3>
          <input 
            className="w-full p-3 bg-zinc-900 border border-zinc-700 rounded"
            placeholder="Work Table Size (e.g. 1200 x 600 mm)" 
            onChange={(e) => setFormData({...formData, specs: {...formData.specs, tableSize: e.target.value}})} 
            value={formData.specs.tableSize}
          />
          <input 
            className="w-full p-3 bg-zinc-900 border border-zinc-700 rounded"
            placeholder="Spindle Speed (e.g. 8000 RPM)" 
            onChange={(e) => setFormData({...formData, specs: {...formData.specs, spindleSpeed: e.target.value}})} 
            value={formData.specs.spindleSpeed}
          />
          <input 
            className="w-full p-3 bg-zinc-900 border border-zinc-700 rounded"
            placeholder="Power Rating (e.g. 15 Kw)" 
            onChange={(e) => setFormData({...formData, specs: {...formData.specs, powerRating: e.target.value}})} 
            value={formData.specs.powerRating}
          />
          <input 
            className="w-full p-3 bg-zinc-900 border border-zinc-700 rounded"
            placeholder="Positioning Accuracy (e.g. ±0.005)" 
            onChange={(e) => setFormData({...formData, specs: {...formData.specs, accuracy: e.target.value}})} 
            value={formData.specs.accuracy}
          />
        </div>

        <button type="submit" className="md:col-span-2 bg-amber-600 p-4 font-bold rounded hover:bg-amber-500 transition mt-4">
          Publish Machine to Website
        </button>
      </form>
    </div>
  );
};

export default AddProduct;