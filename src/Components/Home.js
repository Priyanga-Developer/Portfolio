import React from 'react'
import { FaLinkedin,FaGithub } from "react-icons/fa6";
import {  PiHandWavingFill } from "react-icons/pi";
import Logo from "../Assets/myPic.jpeg"
import { BiLogoCss3,BiLogoJavascript,BiLogoHtml5,BiLogoReact,BiLogoTailwindCss} from "react-icons/bi";

const Home = () => {
  return (
    <main className='w-full flex flex-col justify-center '>
        <div className=' w-full flex  justify-center items-center px-14 py-10'>
            <div className=' max-[1000px] flex flex-col p-14 justify-center items-start px-6'>
                <h1 className=' text-[30px] font-extrabold py-2 '>Front-End Developer</h1>
                <p className=' text-[16px] font-semibold'>Hi! I'm Priyanga! </p>
                <p className=' text-[15px]'>A passionate Front-end React Developer based in Bangalore,India <PiHandWavingFill className='text-[#f7d4bd] inline-block text-[30px]  '/></p>
                <div className=' flex items-center gap-3 py-6'>
                    <FaLinkedin className=' text-2xl cursor-pointer'/>
                    <FaGithub className=' text-2xl cursor-pointer'/>
                </div>

            </div>
            <div className=' w-3/6 border-2 border-black rounded-[50%] '>
                <img src={Logo}  alt='Img' className='rounded-[50%] object-contain '/>     
            </div>

                
        </div>
        <div className=' w-full flex gap-8 px-20'>
               <h3 className='text-[15px] font-bold self-center'>Tech Stack |</h3>
               <BiLogoHtml5 className='text-[30px]'/>
               <BiLogoCss3 className='text-[30px]'/>
               <BiLogoJavascript className='text-[30px]'/>
               <BiLogoReact className='text-[30px]'/>
               <BiLogoTailwindCss className='text-[30px]'/>
            </div>
    </main>
  )
}

export default Home