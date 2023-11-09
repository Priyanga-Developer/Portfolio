import React from 'react'

const Contact = () => {
  return (
    <div name="contact" className='  w-full h-screen pt-[300px]'>
          <div className='flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full'>
            <div className='pb-8'>
                <p className='text-2xl  font-bold inline text-blue-600'>CONTACT</p>
                <p className='py-6 font-semibold text-center'>Submit the form below to get in touch with me</p>
            </div>
            <div className='flex justify-center items-center'>
                <form action='https://getform.io/f/362572ab-a4ac-44d2-a58e-1cb672f66b5c'method='POST' className='flex flex-col w-full md:w-1/2'>
                    <input type='text' required name='name' placeholder='Enter your Name' className='p-2 bg-transparent border-2 border-stone-400 rounded-md focus:outline-none'/>
                    <input type='email' required name='name' placeholder='Enter your Email' className='my-4 p-2 bg-transparent border-2 border-stone-400  rounded-md focus:outline-none'/>
                    <textarea name="message" required placeholder='Enter your message' rows="10" className='p-2 bg-transparent border-2 border-stone-400  rounded-md focus:outline-none '></textarea>
                    <button className=' bg-blue-600 text-white px-6 py-3  my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-500'>Submit</button>
                </form>
            </div>
          </div>
    </div>
  )
}

export default Contact