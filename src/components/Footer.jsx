import React from 'react'
import { FaInstagram,FaLinkedinIn,FaFacebook } from 'react-icons/fa'
const Footer = () => {
  return (
    <>
    <hr />
        <footer className='py-12'>
            <div className='max-w-screen-2xl container mx-auto px-4 md:px-20 '>
                <div className='flex flex-col items-center justify-center'>
                    <div className='flex space-x-4'>
                        <FaInstagram  size={24} className='cursor-pointer'/>
                        <FaLinkedinIn  size={24} className='cursor-pointer'/>
                        <FaFacebook size={24} className='cursor-pointer'/>
                    </div>
                    <div className='mt-8 border-t border-gray-700 pt-8 flex flex-col items-center'>
                        <p className='text-sm'>&copy; 2026 Your Company. All rights reserved.</p>
                        <p className='text-sm '>❤️Shyam</p>
                    </div>
                </div>
            </div>
        </footer>
    </>
  )
}

export default Footer
