// import React from 'react';
import { Link } from 'react-router';
import heroLogo from '../assets/logo.png'
import { FaGithub } from "react-icons/fa";

const Navbar = () => {
    return (
       <div className="navbar bg-base-100 shadow-sm">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex={-1}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        <Link>Home</Link>
        <Link>App</Link>
        <Link>Installation</Link>
      </ul>
    </div>
    <div className='flex'>
        
        <Link className="btn bg-linear-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent text-xl border-none"> <img className='w-10 h-10' src={heroLogo} alt="" /> Hero Apps </Link>
        
    </div>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1 gap-8">
      <Link>Home</Link>
        <Link>App</Link>
        <Link>Installation</Link>
    </ul>
  </div>
  <div className="navbar-end">
   <a href=""><button className='btn bg-linear-to-r from-[#632EE3] to-[#9F62F2] text-white '>{<FaGithub className='text-white' />}Contribute</button></a>
  </div>
</div>
    );
};

export default Navbar;