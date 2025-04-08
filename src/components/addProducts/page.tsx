import React, { useState } from 'react';

const AddProduct = () => {
  const [form, setForm] = useState({
    name: '',
    category: '',
    price: '',
    rating: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(form);
    alert('Product added (not really, just dummy)');
  };

  return (
    <section className="p-6 max-w-xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">Add Product</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input name="name" value={form.name} onChange={handleChange} placeholder="Name" className="w-full p-2 border rounded" />
        <input name="category" value={form.category} onChange={handleChange} placeholder="Category" className="w-full p-2 border rounded" />
        <input name="price" value={form.price} onChange={handleChange} placeholder="Price" className="w-full p-2 border rounded" />
        <input name="rating" value={form.rating} onChange={handleChange} placeholder="Rating" className="w-full p-2 border rounded" />
        <button type="submit" className="bg-green-600 text-white px-4 py-2 rounded">Submit</button>
      </form>
    </section>
  );
};

export default AddProduct;
