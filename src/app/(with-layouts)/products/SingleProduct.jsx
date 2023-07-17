import Link from 'next/link';
import React from 'react';

const SingleProduct = ({ product }) => {
  const { id, description, name } = product
  return (
    <div className=' shadow-2xl p-4 w-full'>
     <h1 className='text-bold text-2xl'> {name}</h1>
     <p> {description}</p>
      <br />
      <Link href={`/products/${id}`} className="bg-orange-500 py-2 px-4 mt-4">Details</Link>
    </div>
  );
};

export default SingleProduct;