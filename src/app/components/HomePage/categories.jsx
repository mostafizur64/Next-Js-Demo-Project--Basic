import getAllCategories from '@/app/utils/getAllCategories';
import React from 'react';
import SingleCategories from './SingleCategories';

const Categories = async() => {
    const categories = await getAllCategories()
    return (
        <div>
            <h1>Category</h1>
           <div className='container mx-auto grid grid-cols-1 md:grid-cols-5 gap-3'>
           {
                categories.map((category)=><SingleCategories key={category.id} category={category}></SingleCategories>)
            }
           </div>
        </div>
    );
};

export default Categories;