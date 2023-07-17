import getAllProducts from '@/app/utils/getAllProducts';
import React from 'react';
import SingleProduct from './SingleProduct';

const ProductPage = async ({ searchParams }) => {
    const products = await getAllProducts(searchParams.categoryId)
    return (
        <div className='container mx-auto grid grid-cols-1 md:grid-cols-3 gap-4'>
           {products.map((product)=><SingleProduct key={product.id} product={product}/>)}
        </div>
    );
};

export default ProductPage;