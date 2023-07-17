import Link from 'next/link';
import React from 'react';

import NavLink from './NavLink';
const navbarLinks = [
    {
        path: '/',
        title: 'Home'
    },
    {
        path: '/about',
        title: 'About'
    },
    {
        path: '/profile',
        title: 'Profile'
    },
    {
        path: '/products',
        title: 'Products'
    },
    {
        path: '/blog',
        title: 'Blog'
    },
    {
        path: '/dashboard',
        title: 'Dashboard'
    },
]
const Navbar = () => {
    return (
        <nav className='flex justify-between items-center container mx-auto '>
            <h1 className='text-3xl text-black'>Next hero</h1>
            <ul className='flex justify-between items-center '>
                {
                    navbarLinks.map(({ path, title }) => <li className='mx-2' key={path}>
                        <NavLink exact={path==='/'} activeClassName='text-blue-500' href={path}>{title}</NavLink>
                    </li>)
                }
            </ul>

        </nav>

    );
};

export default Navbar;