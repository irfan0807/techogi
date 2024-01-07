import React, { useState } from "react";
import logo from '../imgs/logo.png';
import { Link, Outlet } from "react-router-dom";

const NavBar = () => {
    const [searchBoxVisibility, setSearchBoxVisibility] = useState(false);

    return (
        <>
            <nav className="navbar">
                <Link to="/" className="flex-none w-10">
                    <img src={logo} className="w-full" alt="Logo" />
                </Link>

                <div className={`absolute bg-white w-full left-0 top-full mt-0.5 border-b border-gray-500 p-4 py-4 px-[5vw] md:border-0 md:block md:relative md:inset-0 md:p-0 md:w-auto ${searchBoxVisibility ? "block" : "hidden"}`}>
                    <input type="text" placeholder="search" className="w-full md:w-auto bg-gray-200 p-4 pl-6 pr-[12%] md:pr-6 rounded-full placeholder-gray-700 md:pl-12" />
                    <i className="fi fi-rr-search absolute right-[10%] md:pointer-events-none top-1/2 -translate-y-1/2 text-xl text-gray-700"></i>
                </div>

                <div className="flex items-center gap-3 md:gap-0 ml-auto">
                    <button className="md:hidden bg-gray-200 w-12 h-12 rounded-full flex items-center justify-center" onClick={() => setSearchBoxVisibility(prevState => !prevState)}>
                        <i className="fi fi-rr-search text-xl"></i>
                    </button>
                    <Link to="/editor" className="hidden md:flex gap-2 link"> 
                        <i className="fi fi-rr-file-edit"></i>
                        <p>Write</p>
                    </Link>
                    <Link className="btn-dark py-2" to="/signin">
                        SignIn
                    </Link>
                    <Link className="btn-light py-2 hidden md:block" to="/signup">
                        SignUp
                    </Link>
                </div>
            </nav>

            <Outlet /> {/* Nested routes (signin and signup) will render here */}
        </>
    );
}

export default NavBar;
