import getAllProducts from '@/app/utils/getAllProducts';
import React from 'react';
import ManageProduct from './ManageProduct';
export const metadata = {
    title: 'Manage Product |Dashboard | Next Hero',
    description: 'Generated by create next app',
  }
const ManageProductPage = async() => {
    const product = await getAllProducts()
    return (
        <div>
          <h1 className='text-3xl '>Manage Product </h1>
          <ManageProduct products={product}/>
        </div>
    );
};

export default ManageProductPage;