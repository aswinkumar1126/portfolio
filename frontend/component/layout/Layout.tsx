"use client";


import Header from "./header/Header";
import Footer from "./footer/Footer";

const LayoutWrapper = ({ children }: any) => {
    return (
        <>
            <Header />
                <main className="min-h-screen pt-20 pb-10 px-4 bg-primary dark:bg-primary">
                    {children}
                </main>
            <Footer />
        </>
    )
};

export default LayoutWrapper;