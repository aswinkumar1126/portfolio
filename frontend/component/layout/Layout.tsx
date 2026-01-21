"use client";


import Header from "./header/Header";
import Footer from "./footer/Footer";

const LayoutWrapper = ({ children }) => {
    return (
        <>
            <Header />
                <main className="min-h-screen pt-20 pb-10 px-4 bg-black dark:bg-black">

                    
                    {children}
                </main>
            <Footer />
        </>
    )
};

export default LayoutWrapper;