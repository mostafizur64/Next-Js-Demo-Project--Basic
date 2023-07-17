'use client';
import React, { useRef, useState, useTransition } from 'react';
import ManageSingleProduct from './ManageSingleProduct';
import Modal from '@/app/components/Modal';
import { useRouter } from 'next/navigation';


const ManageProduct = ({ products }) => {
    const modalRef = useRef(null);
    const router = useRouter();
    const [isPending, startTransition] = useTransition()
    const [updateData, setUpdateData] = useState(null)
    const [loading, setLoading] = useState(false)
    const isLoading = isPending || loading;
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
            setLoading(true)
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
                form.reset();
                closeModal();
                setLoading(false)
                startTransition(() => {
                    router.refresh()
                })
            }

            catch (error) {
                setLoading(false)
                console.log(error)
            }


        }
    }
    const handleDelete = async (id) => {
        setLoading(true)
        try {
            const res = await fetch(`http://localhost:5000/products/${id}`, {
                method: "DELETE",

            })
            const result = await res.json()
            startTransition(() => {
                router.refresh()
            })
            setLoading(false)
        }

        catch (error) {
            setLoading(false)
            console.log(error)
        }


    }
    return (

        <>

            <table className={`border-collapse w-[1000px] ${isLoading ? 'opacity-50' : 'opacity-100'}`}>
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
            </table>
            <Modal closeModal={closeModal} handleSubmit={handleSubmit} updateData={updateData} ref={modalRef} />
        </>

    );
};

export default ManageProduct;