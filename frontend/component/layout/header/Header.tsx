"use client";

import REact from 'react';
import { useTheme } from '@/frontend/context/theme/themeContext';

const Header = () =>{
    const {theme , toggleTheme} = useTheme();

    return(
        <header className='bg-black text-white p-4 flex justify-between items-center top-0 w-full fixed'>
            <h1>My Portfolio</h1>
            <button onClick={toggleTheme}>
                Switch to {theme === "light" ? "dark" : "light"} mode
            </button>
        </header>
    )
}

export default Header;