import React from 'react';
import { Link } from 'react-router-dom';

const dummyProducts = [
  { id: 1, name: 'Laptop', category: 'Electronics', price: 45000, rating: 4.5 },
  { id: 2, name: 'Shoes', category: 'Fashion', price: 2500, rating: 4.2 },
];

const ProductList = () => {
  return (
    <section className="p-6">
      <h2 className="text-2xl font-bold mb-4">Product List</h2>
      <table className="w-full bg-white shadow rounded">
        <thead>
          <tr className="border-b">
            <th className="p-2">Name</th>
            <th className="p-2">Category</th>
            <th className="p-2">Price</th>
            <th className="p-2">Rating</th>
            <th className="p-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {dummyProducts.map((product) => (
            <tr key={product.id} className="text-center border-b hover:bg-gray-50">
              <td className="p-2">{product.name}</td>
              <td className="p-2">{product.category}</td>
              <td className="p-2">₹{product.price}</td>
              <td className="p-2">{product.rating}</td>
              <td className="p-2">
                <Link to={`/edit/${product.id}`} className="text-blue-600 hover:underline mr-2">Edit</Link>
                <button className="text-red-600 hover:underline">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
};

export default ProductList;
