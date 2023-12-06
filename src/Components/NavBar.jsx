import React, { useState } from 'react'
import {  FaTimes } from "react-icons/fa";
import {   GiHamburgerMenu   } from "react-icons/gi";
import {Link} from "react-scroll";



const NavBar = () => {

  const [nav,setNav]=useState(false);
  const handleOnclick=()=>{
    setNav(!nav);
  }
  return (
    <header className='fixed top-0 w-full h-[80px] flex justify-between items-center bg-[#fbfcfd] shadow-[0px_8px_21px_#e8e8f1] py-11 px-16 ' >
        {/* logo */}
        <div className='flex items-center justify-center gap-3'>
            
        <Link to="home" smooth duration={500} offset={-100} ><h1 className=" text-[40px] font-Signature  font-extrabold cursor-pointer">Priya</h1></Link>
        </div>
         {/* menu-list */}
            <ul className=' hidden md:flex justify-center items-center gap-4'>
                <Link to="home" smooth duration={500} offset={-100} ><li className='hover:text-blue-600 duration-500'>Home</li></Link>
                <Link to="techStack" smooth duration={500} offset={-100} ><li className='hover:text-blue-600 duration-500'>Tech Stacks</li></Link>
                <Link to="portfolio" smooth duration={500} offset={-100} ><li className='hover:text-blue-600 duration-500'>Projects</li></Link>
                <Link to="contact" smooth duration={500} offset={-90} ><li className='hover:text-blue-600 duration-500'>Contact</li></Link>

            </ul>

        {/* Hamburger */}
        <div onClick={handleOnclick} className='md:hidden cursor-pointer'>
             {!nav ?<GiHamburgerMenu/>:<FaTimes/> }
            
        </div>

        {/* Mobile Menu */}
        <div className={!nav?'hidden':'absolute  top-20 left-0 w-full !h-screen bg-[#f6f7f9] ' }>
        <ul className=' flex items-center justify-center flex-col gap-5'>
        <Link onClick={()=>setNav(!nav)} to="home" smooth duration={500} offset={-100}><li className='py-6 text-2xl '>Home</li></Link>
        <Link onClick={()=>setNav(!nav)} to="techStack" smooth duration={500} offset={-100} > <li className='py-6 text-2xl'>Tech Stacks</li></Link>
        <Link onClick={()=>setNav(!nav)} to="portfolio" smooth duration={500} offset={-100} > <li className='py-6 text-2xl'>Projects</li></Link>
        <Link onClick={()=>setNav(!nav)}  to="contact" smooth duration={500} offset={-90} > <li className='py-6 text-2xl'>Contact</li></Link>
        </ul>
        </div>


    </header>
  )
}

export default NavBar