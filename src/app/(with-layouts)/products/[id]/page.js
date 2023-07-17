import getSingleProduct from '@/app/utils/getSingleProduct';
import React from 'react';

const SingleProductPage =async ({params}) => {
   const product  = await getSingleProduct(params.id);
   return <div className='container mx-auto'>
   <h1 className='text-3xl font-bold'> {product.name}</h1>
   <p>{product.description}</p>
   </div>
};


export default SingleProductPage;