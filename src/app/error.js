'use client'
import { useEffect } from 'react';

const error = ({ error, reset }) => {
    useEffect(() => {
        console.log(error)
    }, [error])
    return (
        <>
            <div className='text-center'>
                <h1 className='text-2xl font-semibold'>
                    {error.message || 'Somethings wen wrong happen!'}
                </h1>
                <button onClick={() => reset()}>Reset</button>
            </div></>
    );
};

export default error;