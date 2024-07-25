import React from "react";
import Link from "next/link";

function Layout({children}) {
    return (
        <>
            <header className="max-w-[900px]:p-5 max-w-[600px]:p-2.5 m-auto flex justify-between items-center p-png">
                <div>
                    <Link className="text-color font-bold text-base ml-4" href="/oceanBurger">Ocean Burger</Link>
                </div>
                <div>
                    <Link className="ml-4 text-colorDimgrey font-medium" href="/menu">Menu</Link>
                    <Link className="ml-4 text-colorDimgrey font-medium" href="/categories">Categories</Link>
                </div>
            </header>
            <div className="min-h-[1000px]">{children}</div>
            <footer className="bg-color text-colorFff text-center p-padFooter">
                <a className="text-colorLink decoration-0" href="https://oceanBurger.ir" target="_blank"
                   rel="noreferrer">Ocean Burger Project </a>
                &copy;
            </footer>
        </>
    )
}

export default Layout;