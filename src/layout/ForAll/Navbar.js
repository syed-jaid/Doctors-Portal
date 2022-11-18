import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const manu = <>
        <Link to="/"><li><a>Home</a></li></Link>
        <li><a>About</a></li>
        <Link to="/appointment"><li><a>Appointment</a></li></Link>
        <li><a>Reviews</a></li>
        <li><a>Contact Us</a></li>
        <li><a>Login</a></li>
    </>
    return (
        <div className="navbar lg:px-[100px]">
            <div className="navbar-start">
                <a className="normal-case text-[18px]">Doctors Portal</a>
            </div>
            <div className="navbar-end hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    {manu}
                </ul>
            </div>
            <div className="navbar-end lg:hidden">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content w-[100px] ml-[-40px] mt-3 p-2 shadow bg-base-100 rounded-box">
                        {manu}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;