import React from 'react'
import { BiLogoCss3,BiLogoJavascript,BiLogoHtml5,BiLogoReact,BiLogoTailwindCss,BiLogoBootstrap} from "react-icons/bi";
const TechStack = () => {

  const techs=[
    {
      id:1,
      element:BiLogoHtml5,
      textColour:"text-[#e34c26]",
      style:"shadow-orange-500",
    },
    {
      id:2,
      element:BiLogoCss3,
      textColour:"text-[#264de4]",
      style:"shadow-blue-500",
    },
    {
      id:3,
      element:BiLogoBootstrap,
      textColour:"text-[#563d7c]",
      style:"shadow-violet-500",
    },

    {
      id:4,
      element:BiLogoJavascript,
      textColour:" text-[#F0DB4F]  ",
      style:"shadow-yellow-500",
    },
    {
      id:5,
      element:BiLogoReact,
      textColour:" text-[#61DBFB]",
      style:"shadow-blue-600",
    },
    {
      id:6,
      element:BiLogoTailwindCss,
      textColour:" text-[#3490dc]",
      style:"shadow-sky-500",
    },
  ]
  return (
    <div name="techStack" className='w-full   px-12   pt-[11rem] sm:pt-56 md:p-16 md:pt-[11rem]'>
        <div className='max-w-screen-lg mx-auto  w-full h-full flex flex-col justify-center items-start py-14'>
          <div>
          <p className='text-2xl  font-bold inline text-blue-600'>TECH STACK</p>
         </div>
                            <div className=' w-full justify-center items-center grid grid-cols-2 sm:grid-cols-6 text-center gap-8 py-8 sm:px-0'>
                              {techs.map(({id,element,textColour,style})=>{
                                const Tag=element
                                return  <div className={`shadow-md hover:scale-105 cursor-pointer duration-500 py-2 rounded-lg justify-center items-center flex ${style}`} key={id}>

                                  <Tag className={` w-20 text-[100px]  sm:text-[120px] ${textColour} `}/>
                                  </div>
                              }
                              )}        
                            </div>                  
            </div>
       
    </div>
  )
}

export default TechStack