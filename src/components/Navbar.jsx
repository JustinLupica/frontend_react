import { useState } from 'react'
import { images } from '../constants'
import { HiMenuAlt4, HiX } from 'react-icons/hi'
import { motion } from 'framer-motion'

const Navbar = () => {
  const [toggle, setToggle] = useState(false)

  return (
    <nav className='flex w-full justify-between items-center py-4 px-8 bg-secondary/40 backdrop-blur-lg border-b-2 border-gray-800/75 fixed z-50'>
      <div className='flex justify-start items-center absolute left-3 top-0 bottom-0'>
        <h1 className='text-3xl text-accent'>Justin's Portfolio</h1>
      </div>

      {/* Desktop navbar */}
      <ul className='hidden lg:flex flex-1 justify-center items-center'>
        {['home', 'about', 'work', 'skills', 'contact'].map((item) => (
          <li key={`link-${item}`} className='mx-4 cursor-pointer flex-col'>
            {/* <div className='w-2 h-2 rounded-full hover:bg-accent' /> */}
            <a
              href={`#${item}`}
              className='text-gray-500 uppercase font-semibold transition-all ease-in-out hover:text-accent'
            >
              {item}
            </a>
          </li>
        ))}
      </ul>

      {/* Mobile Navbar */}
      <div className='flex lg:hidden relative'>
        <HiMenuAlt4
          onClick={() => setToggle(true)}
          className='text-2xl rounded-full hover:cursor-pointer'
        />
        {toggle && (
          <motion.div
            whileInView={{ x: [300, 0] }}
            transition={{ duration: 0.85, ease: 'easeInOut' }}
            className='fixed top-0 right-0 bottom-0 p-4 w-[80%] pr-20 h-[100vh] bg-white shadow-md flex flex-col items-end z-20'
          >
            <HiX
              onClick={() => setToggle(false)}
              className=' absolute top-5 right-5 cursor-pointer mb-8 text-2xl'
            />
            <ul className='flex flex-col justify-center items-start w-full'>
              {['home', 'about', 'work', 'skills', 'contact'].map((item) => (
                <li key={item} className='mb-4 w-full'>
                  <div className='w-1 h-1 rounded-full hover:bg-secondary' />
                  <a
                    href={`#${item}`}
                    onClick={() => setToggle(false)}
                    className='text-gray uppercase font-medium transition-all ease-in-out hover:text-secondary'
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </div>
    </nav>
  )
}

export default Navbar
