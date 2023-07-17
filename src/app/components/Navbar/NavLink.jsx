'use client'
import Link from 'next/link';
import React from 'react';
import {usePathname} from "next/navigation"
import ClassName from '@/app/utils/ClassName';

const NavLink = ({children,exact=false,href,activeClassName, ...props}) => {
    const path = usePathname();
    const active  = exact ? path===href:path.startsWith(href);
    const classes = ClassName(props.className,active && activeClassName)
    if(classes){
        props.className = classes
    }
    return (
        <Link href={href} {...props}>
            {children}
        </Link>
    );
};

export default NavLink;