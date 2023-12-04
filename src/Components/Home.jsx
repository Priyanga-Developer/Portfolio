import React from 'react'
import { FaLinkedin,FaGithub } from "react-icons/fa6";
import {  PiHandWavingFill } from "react-icons/pi";
import Logo from "../Assets/myPic.jpeg"
import { BiLogoCss3,BiLogoJavascript,BiLogoHtml5,BiLogoReact,BiLogoTailwindCss,BiLogoBootstrap} from "react-icons/bi";

const Home = () => {
  return (
    <div name='home' className=' h-screen w-full px-12 pt-24 sm:pt-56 md:p-16'>
        <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row  '>
            <div className=' flex flex-col  justify-center h-full'>
                <h1 className=' font-extrabold text-5xl'>Front-End Developer<PiHandWavingFill className='text-[#f7d4bd] inline-block  '/></h1>
                <h3 className=' text-2xl  py-4 sm:text-base font-semibold'>Hi! I'm Priyanga! </h3>
                <p className='py-4 font-semibold max-w-md'>A passionate Front-end React Developer based in Bangalore,India </p>
                <div className=' flex items-center gap-3 py-6'>
                  <a href='https://www.linkedin.com/in/priyanga-muthuraman/' target='_blank' rel='noreferrer'> <FaLinkedin className=' text-2xl hover:scale-150 duration-500 cursor-pointer text-[#0a66c2]'/> </a> 
                  <a href='https://www.w3schools.com/'target='_blank'  rel='noreferrer'> <FaGithub className=' text-2xl hover:scale-150 duration-500 cursor-pointer text-[#171515]'/> </a> 
                </div>
                <div className=' w-full flex gap-4  py-8 '>
                            <h3 className='text-[15px] font-bold self-center'>Tech Stack |</h3>
                            <BiLogoHtml5 className='text-[25px] text-[#e34c26] sm:text-[30px] '/>
                            <BiLogoCss3 className='text-[25px] text-[#264de4] sm:text-[30px]'/>
                            <BiLogoBootstrap className='text-[25px] text-[#563d7c] sm:text-[30px]' />
                            <BiLogoJavascript className='text-[25px] text-[#F0DB4F] bg-black sm:text-[30px]'/>
                            <BiLogoReact className='text-[25px] text-[#61DBFB] sm:text-[30px]'/> 
                            <BiLogoTailwindCss className='text-[25px] text-[#3490dc] sm:text-[30px]'/>
                            
            </div>
            </div>

            <div className=' sm:w-[30%] rounded-full '>
                <img src={Logo} alt="My Profile" className='rounded-full object-cover float-right'/>
            </div>
        </div>
    </div>
  )
}

export default Home