import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { faCloudUpload } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// Base64 helper function
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
  const [loading, setLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentProduct, setCurrentProduct] = useState({ 
    specs: { tableSize: '', spindleSpeed: '', powerRating: '', accuracy: '' } 
  });
  const [currentImage, setCurrentImage] = useState("");

  const fetchProducts = async () => {
    try {
      setLoading(true);
      const res = await axios.get("https://asat-backend.onrender.com/api/products/all");
      setProducts(res.data);
      setLoading(false);
    } catch (err) { console.error("Fetch error", err); setLoading(false); }
  };

  const openEditModal = (product) => {
    // We create a deep clone with nested specs to prevent state bugs
    const clone = JSON.parse(JSON.stringify(product));
    // Ensure specs object exists
    clone.specs = clone.specs || { tableSize: '', spindleSpeed: '', powerRating: '', accuracy: '' };
    setCurrentProduct(clone);
    setCurrentImage(clone.image); // Set the current image in the state
    setIsModalOpen(true);
  };

  const handleImageChange = async (e) => {
    const file = e.target.files[0];
    const base64 = await convertToBase64(file);
    setCurrentImage(base64);
    setCurrentProduct({...currentProduct, image: base64}); // Update the object to save
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.put(`https://asat-backend.onrender.com/api/products/update/${currentProduct._id}`, currentProduct);
      console.log("Updated Product:", response.data);
      alert("Machine details updated for ASAT Inventory!");
      setIsModalOpen(false);
      fetchProducts();
    } catch (err) { console.error("Update Error:", err.response?.data || err.message); alert("Update failed. Check technical specifications."); }
  };

  const deleteProduct = async (id) => {
    if (window.confirm("Delete this machine from ASAT database?")) {
      try {
        await axios.delete(`https://asat-backend.onrender.com/api/products/${id}`);
        fetchProducts();
      } catch (err) { alert("Delete failed!"); }
    }
  };

  useEffect(() => { fetchProducts(); }, []);

  if (loading) return <div className="h-screen bg-black text-white flex items-center justify-center font-mono">LOADING ASAT INVENTORY...</div>;

  return (
    <div className="p-10 bg-zinc-950 min-h-screen text-white relative">
      <h2 className="text-3xl font-bold text-amber-500 mb-8 uppercase tracking-widest">Inventory Management</h2>
      
      <div className="grid grid-cols-1 gap-5">
        {products.map(p => (
          <div key={p._id} className="flex justify-between items-center bg-zinc-900 p-6 rounded-2xl border border-white/5 shadow-2xl transition hover:border-amber-900/30">
            <div className="flex items-center gap-5">
              <img src={p.image} className="h-20 w-20 object-cover rounded-lg border border-zinc-700" alt={p.title} />
              <div>
                <p className="text-xl font-bold text-zinc-50">{p.title}</p>
                <p className="text-sm text-zinc-500">{p.category || "Uncategorized Machine"}</p>
              </div>
            </div>
            <div className="flex gap-3">
              <button onClick={() => openEditModal(p)} className="bg-blue-600 px-6 py-2 rounded-lg font-bold hover:bg-blue-700 transition">Edit Details</button>
              <button onClick={() => deleteProduct(p._id)} className="bg-red-600 px-6 py-2 rounded-lg font-bold hover:bg-red-700 transition">Delete</button>
            </div>
          </div>
        ))}
        {products.length === 0 && <div className="text-zinc-600 p-10 text-center">No machines found. Go to "Add Product" to populate inventory.</div>}
      </div>

      {/* PROFESSINAL EDIT MODAL OVERLAY */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-md flex items-center justify-center z-50 p-4">
          <div className="bg-zinc-900 w-full max-w-3xl rounded-3xl border border-white/10 shadow-3xl overflow-hidden">
            <div className="p-6 border-b border-white/10 flex justify-between items-center bg-black/20">
              <h3 className="text-2xl font-bold text-blue-50">Edit Machine Specs</h3>
              <button onClick={() => setIsModalOpen(false)} className="text-zinc-500 hover:text-white text-3xl font-light">×</button>
            </div>
            
            <form onSubmit={handleUpdate} className="p-10 grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6 max-h-[80vh] overflow-y-auto">
              
              {/* IMAGE UPLOAD SECTION */}
              <div className="md:col-span-2 bg-white/5 p-6 rounded-2xl border border-white/10 flex items-center gap-6 mb-4">
                <img src={currentImage} className="h-28 w-28 object-cover rounded-xl border-2 border-amber-900/40 shadow-xl" alt="Preview" />
                <div className="flex flex-col gap-2">
                    <label className="text-sm font-bold text-amber-500 uppercase tracking-widest">Update Machine Photo</label>
                    <label htmlFor="image-upload" className="cursor-pointer bg-zinc-800 p-3 rounded-lg border border-zinc-700 flex gap-2 items-center text-zinc-300 hover:bg-zinc-700 transition">
                      <FontAwesomeIcon icon={faCloudUpload} className="text-amber-600" />
                      {currentProduct.image ? "Change Photo" : "Upload Photo"}
                    </label>
                    <input id="image-upload" type="file" accept="image/*" onChange={handleImageChange} className="hidden" />
                    <p className="text-xs text-zinc-500">Max size 2MB. Use professional photos.</p>
                </div>
              </div>

              {/* GENERAL INFO SECTION */}
              <div className="space-y-4">
                <label className="text-xs font-bold text-zinc-500 uppercase tracking-widest block">Product Title</label>
                <input className="w-full bg-zinc-800 border border-white/5 p-4 rounded-xl mt-1 text-lg font-medium" value={currentProduct.title} onChange={(e) => setCurrentProduct({...currentProduct, title: e.target.value})} />
                
                <label className="text-xs font-bold text-zinc-500 uppercase tracking-widest block">Category</label>
                <input className="w-full bg-zinc-800 border border-white/5 p-4 rounded-xl mt-1" value={currentProduct.category} onChange={(e) => setCurrentProduct({...currentProduct, category: e.target.value})} />

                <label className="text-xs font-bold text-zinc-500 uppercase tracking-widest block mt-4">Technical Description</label>
                <textarea className="w-full bg-zinc-800 border border-white/5 p-4 rounded-xl mt-1 h-32 leading-relaxed" value={currentProduct.description} onChange={(e) => setCurrentProduct({...currentProduct, description: e.target.value})} />
              </div>

              {/* TECHNICAL SPECS SECTION (Fixed Data Flow) */}
              <div className="space-y-4 bg-zinc-800/30 p-6 rounded-2xl border border-amber-900/10">
                <h4 className="text-xl font-semibold text-amber-50 mb-4 flex items-center gap-3">
                   <span className="w-2 h-6 bg-amber-600 rounded-full"></span> Technical Details
                </h4>
                <div>
                  <label className="text-xs text-zinc-400 font-medium">Work Table Size (e.g. 1200 x 600 mm)</label>
                  <input className="w-full bg-zinc-800 border border-white/5 p-3 rounded-lg mt-1" value={currentProduct.specs?.tableSize} onChange={(e) => setCurrentProduct({...currentProduct, specs: {...currentProduct.specs, tableSize: e.target.value}})} />
                </div>
                <div>
                  <label className="text-xs text-zinc-400 font-medium">Spindle Speed (e.g. 8000 RPM)</label>
                  <input className="w-full bg-zinc-800 border border-white/5 p-3 rounded-lg mt-1" value={currentProduct.specs?.spindleSpeed} onChange={(e) => setCurrentProduct({...currentProduct, specs: {...currentProduct.specs, spindleSpeed: e.target.value}})} />
                </div>
                <div>
                  <label className="text-xs text-zinc-400 font-medium">Power Rating (e.g. 15 Kw)</label>
                  <input className="w-full bg-zinc-800 border border-white/5 p-3 rounded-lg mt-1" value={currentProduct.specs?.powerRating} onChange={(e) => setCurrentProduct({...currentProduct, specs: {...currentProduct.specs, powerRating: e.target.value}})} />
                </div>
                <div>
                  <label className="text-xs text-zinc-400 font-medium">Positioning Accuracy (e.g. ±0.005)</label>
                  <input className="w-full bg-zinc-800 border border-white/5 p-3 rounded-lg mt-1" value={currentProduct.specs?.accuracy} onChange={(e) => setCurrentProduct({...currentProduct, specs: {...currentProduct.specs, accuracy: e.target.value}})} />
                </div>
              </div> 

              {/* ACTION BUTTONS */}
              <div className="md:col-span-2 pt-8 flex gap-4 border-t border-white/5 mt-6 bg-black/10 p-6 -mx-10 -mb-10 rounded-b-3xl">
                <button type="button" onClick={() => setIsModalOpen(false)} className="flex-1 bg-zinc-800 p-4 rounded-xl font-bold text-zinc-300 hover:bg-zinc-700 transition">Cancel and Discard Changes</button>
                <button type="submit" className="flex-1 bg-blue-600 p-4 rounded-xl font-bold text-white hover:bg-blue-700 transition shadow-lg transform active:scale-95">Update ASAT Machine Details</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default ManageProducts;