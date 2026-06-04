"use client";

import React, { useState, useEffect } from "react";
import { Trash2, Plus, Image as ImageIcon, X } from "lucide-react";

export default function AdminCMS() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState("");
  const [content, setContent] = useState(null);
  const [activeTab, setActiveTab] = useState("brand");
  const [statusMsg, setStatusMsg] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const ADMIN_PASSWORD = "teamhustlers123"; // Change this to your secure password

  const handleLogin = (e) => {
    e.preventDefault();
    if (password === ADMIN_PASSWORD) {
      setIsAuthenticated(true);
      loadData();
    } else {
      alert("Incorrect password");
    }
  };

  const loadData = async () => {
    setIsLoading(true);
    try {
      const res = await fetch("/api/admin/content");
      const data = await res.json();
      setContent(data);
      setStatusMsg("");
    } catch (error) {
      setStatusMsg("Failed to load data.");
    } finally {
      setIsLoading(false);
    }
  };

  const saveData = async () => {
    setIsLoading(true);
    try {
      const res = await fetch("/api/admin/content", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(content),
      });
      const result = await res.json();
      if (result.success) {
        setStatusMsg("✅ Successfully saved!");
        setTimeout(() => setStatusMsg(""), 3000);
      } else {
        setStatusMsg("❌ Error saving data.");
      }
    } catch (error) {
      setStatusMsg("❌ Failed to save.");
    } finally {
      setIsLoading(false);
    }
  };

  const updateField = (path, value) => {
    const newContent = JSON.parse(JSON.stringify(content));
    const keys = path.split(".");
    let obj = newContent;
    for (let i = 0; i < keys.length - 1; i++) obj = obj[keys[i]];
    obj[keys[keys.length - 1]] = value;
    setContent(newContent);
  };

  const tabs = [
    { id: "brand", label: "Brand & Hero" },
    { id: "about", label: "About & Contact" },
    { id: "services", label: "Services" },
    { id: "gallery", label: "Gallery" },
    { id: "people", label: "Our People" },
    { id: "testimonials", label: "Testimonials" },
    { id: "units", label: "Available Units" },
  ];

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gray-900 flex items-center justify-center p-4">
        <form onSubmit={handleLogin} className="bg-gray-800 p-8 rounded-lg shadow-xl w-full max-w-md border border-gray-700">
          <h1 className="text-2xl font-bold text-white mb-6 text-center">Team HUSTLERS CMS</h1>
          <input type="password" placeholder="Enter Admin Password" value={password} onChange={(e) => setPassword(e.target.value)} className="w-full p-3 bg-gray-700 text-white rounded border border-gray-600 focus:border-[#D4AF37] outline-none mb-4" />
          <button type="submit" className="w-full py-3 bg-[#D4AF37] text-black font-bold rounded hover:bg-white transition">Access Dashboard</button>
        </form>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <header className="bg-black text-white p-4 flex justify-between items-center shadow-md sticky top-0 z-50">
        <h1 className="text-xl font-bold tracking-wider"><sup className="text-[#D4AF37]">Team</sup> HUSTLERS CMS</h1>
        <div className="flex gap-4">
          <button onClick={loadData} className="px-4 py-2 bg-gray-700 hover:bg-gray-600 rounded text-sm">↺ Reload</button>
          <button onClick={saveData} disabled={isLoading} className="px-6 py-2 bg-[#D4AF37] text-black font-bold rounded hover:bg-white transition text-sm">{isLoading ? "Saving..." : "💾 Save to Database"}</button>
        </div>
      </header>

      {statusMsg && <div className={`p-3 text-center font-medium ${statusMsg.includes("✅") ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"}`}>{statusMsg}</div>}

      <div className="flex flex-1 overflow-hidden">
        <aside className="w-64 bg-white border-r border-gray-200 overflow-y-auto hidden md:block">
          {tabs.map((tab) => (
            <button key={tab.id} onClick={() => setActiveTab(tab.id)} className={`w-full text-left px-6 py-4 border-b border-gray-100 hover:bg-gray-50 transition ${activeTab === tab.id ? "bg-[#D4AF37]/10 text-[#D4AF37] font-bold border-l-4 border-l-[#D4AF37]" : "text-gray-700"}`}>{tab.label}</button>
          ))}
        </aside>

        {/* Mobile Tabs */}
        <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 flex overflow-x-auto z-40">
          {tabs.map((tab) => (
            <button key={tab.id} onClick={() => setActiveTab(tab.id)} className={`flex-1 px-4 py-3 text-xs whitespace-nowrap ${activeTab === tab.id ? "text-[#D4AF37] font-bold border-b-2 border-[#D4AF37]" : "text-gray-600"}`}>{tab.label}</button>
          ))}
        </div>

        <main className="flex-1 p-4 md:p-8 overflow-y-auto pb-24 md:pb-8">
          {isLoading && !content ? (
            <div className="flex justify-center items-center h-full"><div className="animate-spin h-10 w-10 border-4 border-[#D4AF37] border-t-transparent rounded-full"></div></div>
          ) : (
            <>
              {activeTab === "brand" && content && <BrandEditor content={content} updateField={updateField} />}
              {activeTab === "about" && content && <AboutEditor content={content} updateField={updateField} />}
              {activeTab === "services" && content && <SimpleArrayEditor title="Services" items={content.services} onChange={(items) => updateField("services", items)} fields={["icon", "title", "description"]} />}
              {activeTab === "gallery" && content && <SimpleArrayEditor title="Gallery" items={content.gallery} onChange={(items) => updateField("gallery", items)} fields={["image", "caption"]} hasImage />}
              {activeTab === "people" && content && <SimpleArrayEditor title="Our People" items={content.people} onChange={(items) => updateField("people", items)} fields={["image", "name", "role", "bio"]} hasImage />}
              {activeTab === "testimonials" && content && <SimpleArrayEditor title="Testimonials" items={content.testimonials} onChange={(items) => updateField("testimonials", items)} fields={["quote", "author", "role", "rating"]} />}
              {activeTab === "units" && content && <UnitsEditor content={content} updateField={updateField} />}
            </>
          )}
        </main>
      </div>
    </div>
  );
}

// ==========================================
// REUSABLE COMPONENTS
// ==========================================

function ImageUploadField({ label, value, onChange }) {
  // Limit set to 1.5MB to prevent hitting MongoDB's 16MB document limit
  const MAX_SIZE = 1.5 * 1024 * 1024; 

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    // Frontend size check
    if (file.size > MAX_SIZE) {
      alert(`⚠️ File is too large! Maximum size is 1.5MB to save directly to MongoDB. Your file is ${(file.size / (1024*1024)).toFixed(2)}MB.`);
      e.target.value = ""; // Reset input
      return;
    }

    // Convert image to Base64 string directly in the browser
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      onChange(reader.result); // This is the Base64 string!
    };
    reader.onerror = (error) => {
      alert("❌ Error reading file");
      console.error(error);
    };
  };

  return (
    <div className="mb-4">
      <label className="block text-sm font-medium text-gray-700 mb-1">{label}</label>
      <div className="flex flex-col sm:flex-row gap-4 items-start">
        {value && value.startsWith('data:') && (
          <img src={value} alt="Preview" className="w-20 h-20 object-cover rounded border border-gray-300 bg-gray-100" />
        )}
        <div className="flex-1 w-full">
          {/* Only show text input if it's NOT a base64 string (e.g. if they want to paste an external link) */}
          {!value?.startsWith('data:') && (
            <input 
              type="text" 
              value={value || ""} 
              onChange={(e) => onChange(e.target.value)} 
              className="w-full p-2 border border-gray-300 rounded mb-2 text-sm" 
              placeholder="Or paste an external image URL..." 
            />
          )}
          <label className="cursor-pointer inline-flex px-3 py-1.5 bg-blue-600 text-white text-xs rounded hover:bg-blue-700 items-center gap-2">
             Choose Image (Max 1.5MB)
            <input type="file" accept="image/*" onChange={handleFileChange} className="hidden" />
          </label>
          {value?.startsWith('data:') && (
             <p className="text-[10px] text-gray-500 mt-1 truncate max-w-[200px]">Image saved directly to Database</p>
          )}
        </div>
      </div>
    </div>
  );
}

function InputField({ label, value, onChange, type = "text" }) {
  return (
    <div className="mb-4">
      <label className="block text-sm font-medium text-gray-700 mb-1">{label}</label>
      <input type={type} value={value || ""} onChange={(e) => onChange(type === "number" ? Number(e.target.value) : e.target.value)} className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-[#D4AF37] outline-none text-sm" />
    </div>
  );
}

function TextAreaField({ label, value, onChange }) {
  return (
    <div className="mb-4">
      <label className="block text-sm font-medium text-gray-700 mb-1">{label}</label>
      <textarea value={value || ""} onChange={(e) => onChange(e.target.value)} rows="3" className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-[#D4AF37] outline-none text-sm" />
    </div>
  );
}

// ==========================================
// SECTION EDITORS
// ==========================================

function BrandEditor({ content, updateField }) {
  return (
    <div className="space-y-6 max-w-3xl">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Brand & Hero Settings</h2>
      <div className="bg-white p-6 rounded-lg shadow space-y-2">
        <h3 className="font-semibold text-gray-600 border-b pb-2 mb-4">Brand Info</h3>
        <InputField label="Tagline" value={content.brand.tagline} onChange={(v) => updateField("brand.tagline", v)} />
        <InputField label="Sub-Headline" value={content.brand.subHeadline} onChange={(v) => updateField("brand.subHeadline", v)} />
        <InputField label="Partner Name" value={content.brand.partner} onChange={(v) => updateField("brand.partner", v)} />
        <InputField label="Footer Tagline" value={content.brand.footerTagline} onChange={(v) => updateField("brand.footerTagline", v)} />
        <InputField label="Hashtag" value={content.brand.hashtag} onChange={(v) => updateField("brand.hashtag", v)} />
      </div>
      <div className="bg-white p-6 rounded-lg shadow space-y-2">
        <h3 className="font-semibold text-gray-600 border-b pb-2 mb-4">Hero Section & Logos</h3>
        <ImageUploadField label="Hero Background Image" value={content.hero.backgroundImage} onChange={(v) => updateField("hero.backgroundImage", v)} />
        <ImageUploadField label="Header Logo" value={content.logos.header} onChange={(v) => updateField("logos.header", v)} />
        <ImageUploadField label="Hero Logo" value={content.logos.hero} onChange={(v) => updateField("logos.hero", v)} />
        <InputField label="CTA Button Text" value={content.hero.ctaText} onChange={(v) => updateField("hero.ctaText", v)} />
      </div>
    </div>
  );
}

function AboutEditor({ content, updateField }) {
  return (
    <div className="space-y-6 max-w-3xl">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">About & Contact Settings</h2>
      <div className="bg-white p-6 rounded-lg shadow space-y-2">
        <h3 className="font-semibold text-gray-600 border-b pb-2 mb-4">About Us</h3>
        <InputField label="Heading" value={content.about.heading} onChange={(v) => updateField("about.heading", v)} />
        <TextAreaField label="Paragraph 1" value={content.about.paragraphs[0]} onChange={(v) => { const p = [...content.about.paragraphs]; p[0] = v; updateField("about.paragraphs", p); }} />
        <TextAreaField label="Paragraph 2" value={content.about.paragraphs[1]} onChange={(v) => { const p = [...content.about.paragraphs]; p[1] = v; updateField("about.paragraphs", p); }} />
      </div>
      <div className="bg-white p-6 rounded-lg shadow space-y-2">
        <h3 className="font-semibold text-gray-600 border-b pb-2 mb-4">Contact Info</h3>
        <InputField label="Phone" value={content.contact.phone} onChange={(v) => updateField("contact.phone", v)} />
        <InputField label="Email" value={content.contact.email} onChange={(v) => updateField("contact.email", v)} />
        <InputField label="Office Address" value={content.contact.address} onChange={(v) => updateField("contact.address", v)} />
        <InputField label="Business Hours" value={content.contact.hours} onChange={(v) => updateField("contact.hours", v)} />
        <InputField label="Instagram URL" value={content.contact.socials.instagram} onChange={(v) => updateField("contact.socials.instagram", v)} />
        <InputField label="Facebook URL" value={content.contact.socials.facebook} onChange={(v) => updateField("contact.socials.facebook", v)} />
      </div>
    </div>
  );
}

function SimpleArrayEditor({ title, items, onChange, fields, hasImage }) {
  const addItem = () => {
    const newItem = {};
    fields.forEach(f => { newItem[f] = f === "rating" ? 5 : ""; });
    onChange([...items, newItem]);
  };

  const updateItem = (index, field, value) => {
    const newItems = [...items];
    newItems[index][field] = value;
    onChange(newItems);
  };

  const removeItem = (index) => {
    if (confirm("Are you sure you want to delete this item?")) {
      onChange(items.filter((_, i) => i !== index));
    }
  };

  return (
    <div className="max-w-4xl">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-800">{title}</h2>
        <button onClick={addItem} className="px-4 py-2 bg-[#D4AF37] text-black font-bold rounded hover:bg-white transition text-sm flex items-center gap-2"><Plus size={16} /> Add New</button>
      </div>
      <div className="space-y-4">
        {items.map((item, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow relative border border-gray-200">
            <button onClick={() => removeItem(index)} className="absolute top-4 right-4 text-red-500 hover:text-red-700"><Trash2 size={18} /></button>
            <h3 className="text-sm font-bold text-gray-500 uppercase tracking-wide mb-4">Item {index + 1}</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {fields.map(field => (
                <div key={field} className={field === "description" || field === "quote" || field === "bio" ? "md:col-span-2" : ""}>
                  {hasImage && field === "image" ? (
                    <ImageUploadField label={field.charAt(0).toUpperCase() + field.slice(1)} value={item[field]} onChange={(v) => updateItem(index, field, v)} />
                  ) : field === "rating" ? (
                    <InputField label="Rating (1-5)" type="number" value={item[field]} onChange={(v) => updateItem(index, field, v)} />
                  ) : (
                    <InputField label={field.charAt(0).toUpperCase() + field.slice(1)} value={item[field]} onChange={(v) => updateItem(index, field, v)} />
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function UnitsEditor({ content, updateField }) {
  const units = content.units;
  const updateUnits = (newUnits) => updateField("units", newUnits);

  const addUnit = () => {
    const newUnit = { id: Date.now(), title: "", location: "", price: "", image: "", description: "", amenities: [], gallery: [] };
    updateUnits([...units, newUnit]);
  };

  const updateUnit = (index, field, value) => {
    const newUnits = [...units];
    newUnits[index][field] = value;
    updateUnits(newUnits);
  };

  const removeUnit = (index) => {
    if (confirm("Delete this entire unit?")) updateUnits(units.filter((_, i) => i !== index));
  };

  const addAmenity = (index) => {
    const newUnits = [...units];
    newUnits[index].amenities.push("");
    updateUnits(newUnits);
  };

  const updateAmenity = (uIndex, aIndex, value) => {
    const newUnits = [...units];
    newUnits[uIndex].amenities[aIndex] = value;
    updateUnits(newUnits);
  };

  const removeAmenity = (uIndex, aIndex) => {
    const newUnits = [...units];
    newUnits[uIndex].amenities.splice(aIndex, 1);
    updateUnits(newUnits);
  };

  const addGalleryImg = (index) => {
    const newUnits = [...units];
    newUnits[index].gallery.push({ label: "", image: "" });
    updateUnits(newUnits);
  };

  const updateGalleryImg = (uIndex, gIndex, field, value) => {
    const newUnits = [...units];
    newUnits[uIndex].gallery[gIndex][field] = value;
    updateUnits(newUnits);
  };

  const removeGalleryImg = (uIndex, gIndex) => {
    const newUnits = [...units];
    newUnits[uIndex].gallery.splice(gIndex, 1);
    updateUnits(newUnits);
  };

  return (
    <div className="max-w-5xl">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-800">Available Units</h2>
        <button onClick={addUnit} className="px-4 py-2 bg-[#D4AF37] text-black font-bold rounded hover:bg-white transition text-sm flex items-center gap-2"><Plus size={16} /> Add New Unit</button>
      </div>
      <div className="space-y-6">
        {units.map((unit, uIndex) => (
          <div key={unit.id || uIndex} className="bg-white p-6 rounded-lg shadow relative border border-gray-200">
            <button onClick={() => removeUnit(uIndex)} className="absolute top-4 right-4 text-red-500 hover:text-red-700"><Trash2 size={18} /></button>
            <h3 className="text-lg font-bold text-[#D4AF37] mb-4">Unit {uIndex + 1}: {unit.title || "Untitled"}</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <InputField label="Title" value={unit.title} onChange={(v) => updateUnit(uIndex, "title", v)} />
              <InputField label="Location" value={unit.location} onChange={(v) => updateUnit(uIndex, "location", v)} />
              <InputField label="Price" value={unit.price} onChange={(v) => updateUnit(uIndex, "price", v)} />
              <ImageUploadField label="Main Image" value={unit.image} onChange={(v) => updateUnit(uIndex, "image", v)} />
              <div className="md:col-span-2"><TextAreaField label="Description" value={unit.description} onChange={(v) => updateUnit(uIndex, "description", v)} /></div>
            </div>

            {/* Amenities Section */}
            <div className="mt-6 pt-4 border-t border-gray-200">
              <div className="flex justify-between items-center mb-3">
                <h4 className="font-semibold text-gray-700">Amenities</h4>
                <button onClick={() => addAmenity(uIndex)} className="text-xs bg-blue-100 text-blue-700 px-3 py-1 rounded hover:bg-blue-200">+ Add Amenity</button>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {unit.amenities.map((amenity, aIndex) => (
                  <div key={aIndex} className="flex gap-2">
                    <input type="text" value={amenity} onChange={(e) => updateAmenity(uIndex, aIndex, e.target.value)} className="flex-1 p-2 border border-gray-300 rounded text-sm" placeholder="e.g. Swimming Pool" />
                    <button onClick={() => removeAmenity(uIndex, aIndex)} className="text-red-500 hover:text-red-700"><X size={18} /></button>
                  </div>
                ))}
              </div>
            </div>

            {/* Gallery Section */}
            <div className="mt-6 pt-4 border-t border-gray-200">
              <div className="flex justify-between items-center mb-3">
                <h4 className="font-semibold text-gray-700">Mini Gallery (Kitchen, Living Room, etc.)</h4>
                <button onClick={() => addGalleryImg(uIndex)} className="text-xs bg-blue-100 text-blue-700 px-3 py-1 rounded hover:bg-blue-200">+ Add Image</button>
              </div>
              <div className="space-y-3">
                {unit.gallery.map((img, gIndex) => (
                  <div key={gIndex} className="flex flex-col sm:flex-row gap-2 items-start sm:items-center bg-gray-50 p-3 rounded">
                    <input type="text" value={img.label} onChange={(e) => updateGalleryImg(uIndex, gIndex, "label", e.target.value)} className="w-full sm:w-32 p-2 border border-gray-300 rounded text-sm" placeholder="Label (e.g. Kitchen)" />
                    <div className="flex-1 w-full"><ImageUploadField label="" value={img.image} onChange={(v) => updateGalleryImg(uIndex, gIndex, "image", v)} /></div>
                    <button onClick={() => removeGalleryImg(uIndex, gIndex)} className="text-red-500 hover:text-red-700 mt-2 sm:mt-0"><X size={18} /></button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}