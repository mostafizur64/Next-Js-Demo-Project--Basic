import React, { forwardRef, useRef } from 'react';

const Modal = ({closeModal,updateData,handleSubmit}, ref) => {
    const formRef = useRef(null)
    return (
        <dialog ref={ref} className='w-[50%] mx-w-[500px] rounded-md'>
            <div className='text-right mb-4'>
                <button onClick={()=>{
                    closeModal();
                    formRef.current.reset()
                }
                }>close</button>
            </div>
            <form onSubmit={handleSubmit} ref={formRef} >
                <input className='w-full mb-2 p-2 focus:outline-none border border-sky-500' type="text" name='name' placeholder='title' defaultValue={updateData?.name} />
                <input className='w-full mb-2 p-2 focus:outline-none border border-sky-500' type="text" name='price' placeholder='title' defaultValue={updateData?.price}/>
                <button type='submit ' className='bg-orange-500 py-2 px-4'>submit</button>
            </form>

        </dialog>
    );
};

export default forwardRef(Modal);