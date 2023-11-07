import React, { useState } from 'react'
import { BsDiscFill } from "react-icons/bs";
import {  FaTimes } from "react-icons/fa";
import {   GiHamburgerMenu   } from "react-icons/gi";


const NavBar = () => {

  const [nav,setNav]=useState(false);
  const handleOnclick=()=>{
    setNav(!nav);
  }
  return (
    <header className='sticky top-0 w-full h-[80px] flex justify-between items-center bg-[#fbfcfd] shadow-[0px_8px_21px_#e8e8f1] p-11 ' >
        {/* logo */}
        <div className='flex items-center justify-center gap-3'>
            {/* <BsDiscFill className='w-8 h-8 text-[#0a0517]'/> */}
             <h1 className=" text-[20px] font-semibold cursor-pointer">Priya.Dev</h1>
        </div>
         {/* menu-list */}
            <ul className=' hidden md:flex justify-center items-center gap-4'>
                <li>Home</li>
                <li>About</li>
                <li>Projects</li>
                <li>Contact</li>
            </ul>

        {/* Hamburger */}
        <div onClick={handleOnclick} className='md:hidden z-10 cursor-pointer'>
             {!nav ?<GiHamburgerMenu/>:<FaTimes/> }
            
        </div>

        {/* Mobile Menu */}
        <div className={!nav?'hidden':'absolute  top-20 left-0 w-full h-screen bg-[#f6f7f9]' }>
        <ul className=' flex items-center justify-center flex-col gap-5 '>
                <li className='py-6 text-2xl'>Home</li>
                <li className='py-6 text-2xl'>About</li>
                <li className='py-6 text-2xl'>Projects</li>
                <li className='py-6 text-2xl'>Contact</li>
        </ul>
        </div>


    </header>
  )
}

export default NavBar