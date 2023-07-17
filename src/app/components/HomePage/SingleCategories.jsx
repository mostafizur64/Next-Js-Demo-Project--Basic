import Link from 'next/link';
import React from 'react';

const SingleCategories = ({category}) => {
    const {id,name} = category;
    return (
        <div className='border border-sky-500 py-2 px-3 rounded-lg'> 
          <Link href={`/products?categoryId=${id}`}>{name}</Link>
    
          {/* <Link href={`/products?categoryId=${id}`}>{name}</Link> */}
        </div>
    );
};

export default SingleCategories;