import { useState, useEffect } from 'react'
import { client, urlFor } from '../client'
import { easeInOut, motion } from 'framer-motion'
import { AppWrap, MotionWrap } from '../wrapper'
import { CardCarousel } from '../components'
// import { RiTailwindCssFill } from 'react-icons/ri'
// import { FaReact, FaJsSquare } from 'react-icons/fa'
// import { FaNodeJs } from 'react-icons/fa6'
// import { SiTypescript } from 'react-icons/si'

const Header = () => {
  const [skills, setSkills] = useState([])

  useEffect(() => {
    const query = "*[_type == 'headerSkills']"
    client.fetch(query).then((data) => {
      setSkills(data)
    })
  }, [])

  const scaleVariants = {
    whileInView: {
      scale: [0, 1],
      opacity: [0, 1],
      transition: {
        duration: 1,
        ease: easeInOut
      }
    }
  }

  // const skillIcons = [FaNodeJs, RiTailwindCssFill, FaReact, FaJsSquare, SiTypescript]

  return (
    <div className='h-full w-full flex-1 flex flex-col-reverse items-center justify-center relative snap-center max-w-[90vw] pl-6 md:pl-0'>
      <motion.div
        whileInView={{ x: [-100, 0], opacity: [0, 1] }}
        transition={{ duration: 0.5 }}
        className='z-10 w-full'
      >
        <div className='flex flex-col gap-2 mr-4'>
          <div className='py-4 md:py-6 md:pr-6 px-3 shadow-lg flex hover:scale-110 transition-all duration-300 items-center justify-center rounded-lg w-full bg-secondary/10 outline outline-accent backdrop-blur-sm'>
            <div className='ml-5 flex flex-col gap-4 text-white'>
              <p className='text-2xl md:text-5xl font-header'>
                I'm Justin <span className='text-4xl animate-bounce'>👋</span>
              </p>
              <h1 className='text-base md:text-xl font-medium flex gap-2'>
                Frontend Software Engineer <span className='hidden md:flex'>|</span>{' '}
                <br className='flex md:hidden' /> React and JavaScript Specialist
              </h1>
            </div>
          </div>
        </div>
      </motion.div>

      <div className='flex items-center justify-center z-10 w-full'>
        <motion.div
          variant={scaleVariants}
          whileInView={scaleVariants.whileInView}
          className='flex flex-wrap gap-6 items-end justify-center mb-6'
        >
          {skills.map((skill, index) => (
            <div
              className={`w-12 h-12 md:w-24 md:h-24 rounded-full backdrop-blur-sm bg-gray-800/30 outline outline-gray-800 flex justify-center items-center transition-all duration-300 ease-in-out hover:scale-110 hover:shadow-md bg-${skill.color}`}
            >
              <img src={urlFor(skill.icon)} alt={skill.name} className='w-1/2 h-1/2' />
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  )
}

export default AppWrap(MotionWrap(Header, ''), 'home', 'header-bg')
