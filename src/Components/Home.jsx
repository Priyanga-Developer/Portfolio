import React from 'react'
import { FaLinkedin,FaGithub } from "react-icons/fa6";
import { BiLogoGmail } from "react-icons/bi";
import {  PiHandWavingFill } from "react-icons/pi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import Logo from "../Assets/myPic.jpeg"
import {motion } from "framer-motion"



const Home = () => {

  const imageVariants = {
    initial: {
      borderRadius: '60% 40% 30% 70%/60% 30% 60% 40%',
      transition: {
        duration: 2,
        repeat: Infinity
      },
    },
    animate: {
      borderRadius: ['60% 40% 30% 70%/60% 30% 60% 40% ', '30% 60% 70% 40%/50% 60% 30% 60%', '60% 40% 30% 70%/60% 30% 70% 40%'] ,
      transition: {
        duration: 8,
        times: [0, 0.5, 1],
        ease: 'easeInOut',
        repeat: Infinity
        
      },
    }
  }
  return (
    <div name='home' className='  w-full px-12 pt-[11rem] sm:pt-56 md:p-16 md:pt-[11rem]'>
        <div className='max-w-screen-lg mx-auto flex flex-col gap-16 items-center justify-center h-full px-4 md:flex-row  '>
            <div className=' flex flex-col  justify-center h-full'>
                <h1 className=' font-extrabold text-5xl'>Front-End Developer<PiHandWavingFill className='text-[#f7d4bd] inline-block  '/></h1>
                <h3 className=' text-2xl  py-4 sm:text-base font-semibold'>Hi! I'm Priyanga! </h3>
                <p className='py-4 font-semibold  leading-[1.8] max-w-md'>A passionate Front-end React Developer based in Bangalore,India  Hello,I am Priyanga,and currently ,am learning a web development course.Throughout this comprehensive program,I have delved into essential technologies like HTML,CSS,Javascript and React.</p>
                <div className=' flex items-center gap-5 py-6'>
                  <a href='https://www.linkedin.com/in/priyanga-muthuraman/' target='_blank' rel='noreferrer'> <FaLinkedin className=' text-4xl  hover:scale-150 duration-500 cursor-pointer text-[#0a66c2]'/> </a> 
                  <a href='https://github.com/Priyanga-Developer'target='_blank'  rel='noreferrer'> <FaGithub className=' text-4xl hover:scale-150 duration-500 cursor-pointer text-[#171515]'/> </a>
                  <a href='mailto:uthirapriyanga@gmail.com'target='_blank'  rel='noreferrer'> <BiLogoGmail className=' text-4xl  hover:scale-150  duration-500 cursor-pointer text-[#DB4437]'/> </a> 
                  <a href='./Priyanga_Developer.pdf'target='_blank'  rel='noreferrer' download='true' className=' group w-28 h-12  flex items-center justify-around   duration-500  hover:w-36 hover:bg-[#efedfb]' > 
                  <BsFillPersonLinesFill className=' text-4xl  cursor-pointer text-[#161e66]'/>
                  <><p className=' invisible font-semibold text-base group-hover:visible'> Resume</p></>
                   </a> 

                </div>
             
            </div>

            <div  className=' md:w-[33%] rounded-full sm:w-[50%] '>
                < motion.img src={Logo} alt="My Profile"
                initial="initial"
                animate="animate"
                variants={imageVariants} className=' object-cover float-right'/>
            </div>
           
        </div>
      
    </div>
  )
}

export default Home