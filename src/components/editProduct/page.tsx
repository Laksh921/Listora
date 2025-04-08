import React from 'react';
import { useParams } from 'react-router-dom';

const editProduct = () => {
  const { id } = useParams();

  return (
    <section className="p-6">
      <h2 className="text-2xl font-bold mb-4">Edit Product #{id}</h2>
      <p className="text-gray-600">This is just a placeholder. You can add form logic later.</p>
    </section>
  );
};

export default editProduct;
