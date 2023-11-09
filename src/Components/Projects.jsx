import React from 'react'
import Ecommerce from '../Assets/ecommerce.png'
import { FiExternalLink } from "react-icons/fi";
import { BiLogoGithub} from "react-icons/bi";
import Robofriends from "../Assets/Robofriends.png";
import SocialMedia from "../Assets/Social Media.png";


const Projects = () => {

  const portfolios=[       {
                              id:1,
                              src:Ecommerce,
                              details:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus laudantium distinctio corporis? Quis iure quae quod porro vero impedit doloribus recusandae minus, eos itaque laudantium nemo autem vel nulla ex, incidunt alias ut architecto quaerat assumenda ducimus? Provident non dolor at numquam, eius, minima minus quis amet ipsa, expedita reprehenderit.",
                              tech1:"HTML",
                              tech2:"CSS"
                            },
                            {
                              id:2,
                              src:Robofriends,
                              details:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus laudantium distinctio corporis? Quis iure quae quod porro vero impedit doloribus recusandae minus, eos itaque laudantium nemo autem vel nulla ex, incidunt alias ut architecto quaerat assumenda ducimus? Provident non dolor at numquam, eius, minima minus quis amet ipsa, expedita reprehenderit.",
                              tech1:"React",
                              tech2:"CSS",
                              tech3:"HTML"
                            },
                            {
                              id:3,
                              src:SocialMedia,
                              details:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus laudantium distinctio corporis? Quis iure quae quod porro vero impedit doloribus recusandae minus, eos itaque laudantium nemo autem vel nulla ex, incidunt alias ut architecto quaerat assumenda ducimus? Provident non dolor at numquam, eius, minima minus quis amet ipsa, expedita reprehenderit.",
                              tech1:"HTML",
                              tech2:"CSS"
                            }
                      ]
  return (
    <div name="portfolio" className='w-full bg-white px-9 '>
         
        <div className=' max-w-screen-lg mx-auto flex flex-col justify-center w-full h-full'>
              <p className='text-2xl  font-bold inline text-blue-600 py-2' >PORTFOLIO</p>
              <p className='text-xl  font-bold inline text-[black] py-4'>Check out my work right here</p>
        
                <div className='grid  gap-36 px-12 pt-10 '>
                  {portfolios.map(({id,src,details,tech1,tech2,tech3})=>
                                <div key={id} className='flex flex-col justify-center items-center lg:flex-row lg:gap-6'>
                                <div className='md:w-1/2  w-[100%] h-[100%]'>
                                        <img src={src} alt='projectdemo' className='object-cover w-[100%] h-[100%]' />
                                </div>
                                    
                                        <div className=' w-[100%] flex justify-center items-center flex-col  md:w-1/2 '>  
                                                        <p className='font-bold text-[20px]'>Shopee</p>
                                                        <p className='text-center font-semibold text-[13px] leading-6 '>{details}</p>
                                                <div className='flex justify-center items-center gap-3 py-4 text-sm font-extrabold uppercase'>
                                                        <p>{tech1}</p>
                                                        <p>{tech2}</p>
                                                        <p>{tech3}</p>
                                                </div>
                                                <div className='flex justify-center items-center gap-4 '>
                                                      <a className='flex items-center justify-center text-[14px] font-semibold' href='https://www.w3schools.com/' target='_blank' rel='noreferrer'> <BiLogoGithub className=' text-xl'/>Code</a>
                                                        
                                                        <a className='flex items-center justify-center text-[14px] font-semibold' href='https://www.w3schools.com/' target='_blank' rel='noreferrer'><FiExternalLink className=' text-xl'/>Demo</a>
                                                  </div>
                                        </div>
                            </div>

                  )}
                     
                </div>
          </div>
    </div>
  )
}

export default Projects