import React from 'react';
import useSWR from 'swr'
const fetcher = (...args) => fetch(...args).then(res => res.json())
const useProducts = (categoryId) => {
    const path = 'http://localhost:5000/products'
    const {
        data: products = [],
        error,
        isLoading,
        mutate,
        isValidating
    } = useSWR(
        categoryId ? `${path}?categoryId=${path}` : path, fetcher)
        console.log('ddddd',products)
        return {
            products, error, isLoading, mutate, isValidating,
        }

    };

export default useProducts;