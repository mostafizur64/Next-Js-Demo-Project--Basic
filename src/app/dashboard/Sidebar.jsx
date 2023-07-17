import Link from 'next/link';
import React from 'react';
import NavLink from '../components/Navbar/NavLink';
const navLinks = [
    {
        path: '/dashboard',
        title: 'Dashboard'
    },
    {
        path: '/dashboard/add-product',
        title: 'Add Product'
    },
    {
        path: '/dashboard/all-products',
        title: 'All Products'
    },
    {
        path: '/dashboard/manage-product',
        title: 'Manage Product'
    },
    {
        path: '/',
        title: 'Home'
    },
]
const Sidebar = () => {
    return (
        <aside className='mr-10'>
            <h1 className='text-3xl font-semibold'>Dashboard</h1>
            <ul >
                {
                    navLinks.map(({ title, path }) => <li className='my-2' key={path}>
                        <NavLink activeClassName='text-blue-500' exact href={path}>{title}</NavLink>
                    </li>)
                }
            </ul>
        </aside>
    );
};

export default Sidebar;