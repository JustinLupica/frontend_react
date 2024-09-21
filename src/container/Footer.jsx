import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { AppWrap, MotionWrap } from '../wrapper'
import { client } from '../client'
import { images } from '../constants'

const Footer = () => {
  return (
    <>
      <h2 className='text-4xl font-semibold text-white mb-6'>Let's Chat!</h2>

      <div className='flex gap-10'>
        <div className='flex items-center justify-center bg-gray rounded-lg py-4 px-8 gap-4 hover:shadow-lg transition-all duration-200'>
          <img src={images.email} alt='email' className='w-10' />
          <a href='mailto:justinlupica@gmail.com' className='font-medium'>
            justinlupica@gmail.com
          </a>
        </div>
        <div className='flex items-center justify-center bg-gray rounded-lg py-4 px-8 gap-4 hover:shadow-lg transition-all duration-200'>
          <img src={images.mobile} alt='mobile' className='w-10' />
          <a href='tel: +1 (567) 322-0452' className='font-medium'>
            +1 (567) 322-0452
          </a>
        </div>
      </div>
    </>
  )
}

export default AppWrap(MotionWrap(Footer, ''), 'contact', 'bg-secondary')
