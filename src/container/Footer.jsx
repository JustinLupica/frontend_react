import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { AppWrap, MotionWrap } from '../wrapper'
import { client } from '../client'
import { images } from '../constants'
import { MdEmail } from 'react-icons/md'
import { FaPhoneAlt } from 'react-icons/fa'
import { FaLinkedin } from 'react-icons/fa6'

const Footer = () => {
  return (
    <>
      <h2 className='text-4xl font-semibold text-white mb-6'>
        Let's <span className='text-accent font-semibold'>Connect!</span>
      </h2>

      <div className='flex gap-10'>
        <div className='flex items-center w-max h-max text-gray-300 justify-center shadow-xl bg-gray-700/25 outline outline-gray-800 rounded-lg py-4 px-8 gap-4 hover:shadow-lg transition-all !z-10 duration-200 hover:scale-110 hover:bg-gray-800'>
          <MdEmail className='text-2xl' />
          <a href='mailto:justinlupica@gmail.com' className='font-medium text-lg'>
            justinlupica@gmail.com
          </a>
        </div>
        <div className='flex items-center text-gray-300 justify-center bg-gray-700/25 outline outline-gray-800 rounded-lg py-4 px-8 gap-4 hover:shadow-lg transition-all duration-200 hover:scale-110 hover:bg-gray-800'>
          <FaPhoneAlt className='text-xl' />
          <a href='tel: +1 (567) 322-0452' className='font-medium'>
            +1 (567) 322-0452
          </a>
        </div>
        <div className='flex items-center text-gray-300 justify-center bg-gray-700/25 outline outline-gray-800 rounded-lg py-4 px-8 gap-4 hover:shadow-lg transition-all duration-200 hover:scale-110 hover:bg-gray-800'>
          <FaLinkedin className='text-xl' />
          <a href='https://linkedin.com/in/justin-lupica' target='_blank' className='font-medium'>
            Connect with Me!
          </a>
        </div>
      </div>
    </>
  )
}

export default AppWrap(MotionWrap(Footer, ''), 'contact', 'bg-secondary')
