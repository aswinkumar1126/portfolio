"use client";

import REact from 'react';
import { useTheme } from '@/frontend/context/theme/themeContext';

const Footer = () =>{
    const {theme , toggleTheme} = useTheme();

    return(
        <footer className='flex p-2 justify-between items-center bottom-0 w-full bg-black text-white   '>
            <h1>My Portfolio</h1>
            <p>All rights reserved.</p>
        </footer>
    )
}

export default Footer;