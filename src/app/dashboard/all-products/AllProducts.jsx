'use client';
import React, { useRef, useState, useTransition } from 'react';
import Modal from '@/app/components/Modal';
import ManageSingleProduct from '../manage-product/ManageSingleProduct';
import useProducts from '@/Hooks/useProducts';
const AllProducts = () => {
    const { products, isLoading, isValidating, mutate } = useProducts()
    // const isLoading = false
    const modalRef = useRef(null)
    const [updateData, setUpdateData] = useState(null)

    const openModal = (product) => {
        setUpdateData(product)
        modalRef.current.showModal()
    }
    const closeModal = () => {
        setUpdateData(null);
        modalRef.current.close()
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const price = form.price.value
        const data = {
            name, price
        }
        if (name && price) {
            try {
                const res = await fetch(`http://localhost:5000/products/${updateData?.id}`, {
                    method: "PATCH",
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(data)
                })
                const result = await res.json()
                console.log(result)
                mutate()
                form.reset();
                closeModal();

                // startTransition(() => {
                //     router.refresh()
                // })
            }

            catch (error) {

                console.log(error)
            }


        }
    }
    const handleDelete = async (id) => {
        try {
            const res = await fetch(`http://localhost:5000/products/${id}`, {
                method: "DELETE",

            })
            const result = await res.json()
            mutate()
            // startTransition(() => {
            //     router.refresh()
            // })

        }

        catch (error) {

            console.log(error)
        }


    }
    return (

        <>
            {isLoading && <h1 className='text-3xl  font-semibold text-red-950'>Loading ------</h1>}
            {!isLoading && <table className={`border-collapse w-[1000px] ${isValidating ? 'opacity-50' : 'opacity-100'}`}>
                <thead>
                    <tr>
                        <th className='border border-s-amber-500'>Title </th>
                        <th className='border border-s-amber-500'>price</th>
                        <th className='border border-s-amber-500'>Update </th>
                        <th className='border border-s-amber-500'>Delete </th>
                    </tr>
                </thead>
                <tbody>
                    {
                        products.map((product) => {
                            return <ManageSingleProduct openModal={openModal} handleDelete={handleDelete} key={product.id} product={product} />
                        })
                    }
                </tbody>
            </table>}
            <Modal closeModal={closeModal} handleSubmit={handleSubmit} updateData={updateData} ref={modalRef} />
        </>

    );
};

export default AllProducts;