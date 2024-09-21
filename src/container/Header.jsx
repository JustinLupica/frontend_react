import { useState, useEffect } from 'react'
import { client, urlFor } from '../client'
import { easeInOut, motion } from 'framer-motion'
import { images } from '../constants'
import { AppWrap, MotionWrap } from '../wrapper'
import { GlowCapture, Glow } from '@codaworks/react-glow'
import { RiTailwindCssFill } from 'react-icons/ri'
import { FaReact, FaJsSquare } from 'react-icons/fa'
import { FaNodeJs } from 'react-icons/fa6'
import { SiTypescript } from 'react-icons/si'

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

  const skillIcons = [FaNodeJs, RiTailwindCssFill, FaReact, FaJsSquare, SiTypescript]

  return (
    <GlowCapture>
      <div className='h-full w-full flex-1 flex flex-col-reverse items-center justify-center relative snap-center'>
        <motion.div
          whileInView={{ x: [-100, 0], opacity: [0, 1] }}
          transition={{ duration: 0.5 }}
          className='z-10'
        >
          <div className='flex flex-col gap-2 mr-4'>
            <Glow>
              <div className='py-6 pr-10 pl-6 shadow-md flex items-center justify-center rounded-lg w-full bg-secondary glow:ring glow:ring-accent'>
                <span className='text-4xl animate-bounce'>👋</span>
                <div className='ml-5 flex flex-col gap-4 text-white'>
                  <p className='text-6xl font-header'>I'm Justin</p>
                  <h1 className='text-4xl font-medium font-logo'>Frontend Software Engineer</h1>
                </div>
              </div>
            </Glow>
          </div>
        </motion.div>

        <div className='flex items-center z-10'>
          <motion.div
            variant={scaleVariants}
            whileInView={scaleVariants.whileInView}
            className='flex gap-6 items-end mb-6'
          >
            {skillIcons.map((Skill, index) => (
              <Glow>
                <div
                  key={index}
                  className={`rounded-full flex justify-center items-center bg-secondary glow:outline glow:outline-accent glow:text-accent shadow-lg p-3 ${
                    index === 2
                      ? 'h-40 w-40'
                      : index === 1 || index === 3
                      ? 'w-32 h-32'
                      : 'w-24 h-24'
                  }`}
                >
                  <Skill className='w-full h-full p-3 text-gray glow:text-accent' />
                </div>
              </Glow>
            ))}
          </motion.div>
        </div>
      </div>
      <div class=''></div>
    </GlowCapture>
  )
}

export default AppWrap(
  MotionWrap(Header, ''),
  'home',
  // 'bg-[url("https://flowbite.s3.amazonaws.com/docs/jumbotron/hero-pattern-dark.svg")] backdrop-blur-md'
  ''
)
