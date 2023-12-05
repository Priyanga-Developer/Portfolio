import React from 'react'
import { FaLinkedin,FaGithub } from "react-icons/fa6";
import { BiLogoGmail } from "react-icons/bi";
import {  PiHandWavingFill } from "react-icons/pi";
import Logo from "../Assets/myPic.jpeg"



const Home = () => {
  return (
    <div name='home' className='  w-full px-12 pt-[11rem] sm:pt-56 md:p-16 md:pt-[11rem]'>
        <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row  '>
            <div className=' flex flex-col  justify-center h-full'>
                <h1 className=' font-extrabold text-5xl'>Front-End Developer<PiHandWavingFill className='text-[#f7d4bd] inline-block  '/></h1>
                <h3 className=' text-2xl  py-4 sm:text-base font-semibold'>Hi! I'm Priyanga! </h3>
                <p className='py-4 font-semibold  leading-[1.8] max-w-md'>A passionate Front-end React Developer based in Bangalore,India  Hello,I am Priyanga,and currently ,am learning a web development course.Throughout this comprehensive program,I have delved into essential technologies like HTML,CSS,Javascript and React.</p>
                <div className=' flex items-center gap-5 py-6'>
                  <a href='https://www.linkedin.com/in/priyanga-muthuraman/' target='_blank' rel='noreferrer'> <FaLinkedin className=' text-4xl  hover:scale-150 duration-500 cursor-pointer text-[#0a66c2]'/> </a> 
                  <a href='https://github.com/Priyanga-Developer'target='_blank'  rel='noreferrer'> <FaGithub className=' text-4xl hover:scale-150 duration-500 cursor-pointer text-[#171515]'/> </a>
                  <a href='mailto:uthirapriyanga@gmail.com'target='_blank'  rel='noreferrer'> <BiLogoGmail className=' text-4xl  hover:scale-150  duration-500 cursor-pointer text-[#DB4437]'/> </a> 
                </div>
             
            </div>

            <div className=' md:w-[33%] rounded-full '>
                <img src={Logo} alt="My Profile" className='rounded-full object-cover float-right'/>
            </div>
           
        </div>
      
    </div>
  )
}

export default Home