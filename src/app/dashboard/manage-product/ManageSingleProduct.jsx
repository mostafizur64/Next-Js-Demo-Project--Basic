import React from 'react';

const ManageSingleProduct = ({product,openModal,handleDelete}) => {
    const {id,name,description,price}  =product
    return (
   
          <tr className='text-center'>
            <td className='border border-slate-500 p-2'>{name}</td>
            <td className='border border-slate-500'>${price}</td>
            <td className='border border-slate-500'>
                <button onClick={()=>openModal(product)} className='bg-orange-500 px-3 py-2 text-white'>
                    update
                </button>
            </td>
            <td className='border border-slate-500'>
               <button onClick={()=>handleDelete(id)} className='bg-orange-500 px-3 py-2 text-white'>delete</button>
            </td>
          </tr>
       
    );
};

export default ManageSingleProduct;