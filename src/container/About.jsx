import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { urlFor, client } from '../client'
import { AppWrap, MotionWrap } from '../wrapper'
import { CgIfDesign } from 'react-icons/cg'
import { FaLaptopCode } from 'react-icons/fa'

const About = () => {
  const [abouts, setAbouts] = useState([])
  const [bio, setBio] = useState([])
  const [skills, setSkills] = useState([])

  useEffect(() => {
    const query = '*[_type == "abouts"]'
    const bioQuery = '*[_type == "bio"]'
    const skillsQuery = "*[_type == 'skills']"

    client.fetch(skillsQuery).then((data) => {
      setSkills(data)
    })
    client.fetch(query).then((data) => setAbouts(data))
    client.fetch(bioQuery).then((data) => setBio(data))
  }, [])

  return (
    <>
      <div className='mb-6'>
        <h2 className='font-bold header w-full flex items-center justify-center gap-2 text-4xl my-6'>
          Hi, I'm Justin. Nice to meet you!
        </h2>
        <p className='text-gray-light line-clamp-4 text-center font-display leading-relaxed'>
          {bio[0]?.text}
        </p>
      </div>

      <motion.div
        // whileInView={{ opacity: 1 }}
        // whileHover={{ scale: 1.05 }}
        // transition={{ duration: 0.25, type: 'tween' }}
        className='flex flex-1 flex-col md:flex-row items-center outline outline-gray/60 rounded-lg bg-gray-800/20 text-gray-light p-4 w-full'
        // key={about._id}
      >
        <div className='md:border-r md:border-r-gray/60 flex flex-1 px-3 justify-center items-center flex-col gap-3 h-full'>
          <span className='p-3 rounded-full bg-accent text-gray-light'>
            <CgIfDesign className='text-6xl' />
          </span>
          <h2 className='text-xl'>Designer</h2>
          <p className='text-center font-header text-md'>
            I value simple content structure, clean design patterns, and thoughtful interactions.
          </p>
          <div className='text-center flex flex-col gap-5'>
            <div>
              <label className='text-accent font-semibold text-lg'>Design Skills:</label>
              <p>UX, UI, Web, Apps, Layouts</p>
            </div>
            <div>
              <label className='text-accent font-semibold text-lg'>Dev Tools I Use:</label>
              <ul>
                <li>Figma</li>
                <li>Prototyping in code</li>
                <li>Replicating designs with code</li>
              </ul>
            </div>
          </div>
        </div>
        <div className='flex flex-1 px-3 justify-center items-center flex-col gap-3 h-full'>
          <span className='p-3 rounded-full bg-accent text-gray-light'>
            <FaLaptopCode className='text-6xl' />
          </span>
          <h2 className='text-xl'>Frontend Developer | React Expert</h2>
          <p className='text-center font-header text-md'>
            I like to code things from scratch, and enjoy bringing ideas to life in the browser.
          </p>
          <div className='text-center flex flex-col gap-5'>
            <div>
              <label className='text-accent font-semibold text-lg'>My Top Skills:</label>
              <p>HTML, TailwindCSS, React, JavaScript</p>
            </div>
            <div>
              <label className='text-accent font-semibold text-lg'>Dev Tools I Use:</label>
              <ul>
                <li>Git/GitLab</li>
                <li>TailwindCSS</li>
                <li>VS Code</li>
              </ul>
            </div>
          </div>
        </div>
      </motion.div>

      {/* <motion.div className='flex w-3/4 flex-wrap justify-evenly items-center gap-x-6 mt-10 gap-y-4'>
        {skills.map((skill) => (
          <motion.div
            whileInView={{ opacity: [0, 1] }}
            transition={{ duration: 0.5 }}
            key={skill.name}
            className='relative flex flex-col text-center transition-all duration-300 ease-in-out'
          >
            <div
              className={`w-24 h-24 hover:scale-110 rounded-full bg-gray-700/50 border border-gray-500 flex justify-center items-center transition-all duration-300 ease-in-out hover:shadow-md bg-${skill.color}`}
            >
              <img src={urlFor(skill.icon)} alt={skill.name} className='w-1/2 h-1/2' />
            </div>
            <p className='font-medium mt-2 text-gray-light'>{skill.name}</p>
          </motion.div>
        ))}
      </motion.div> */}
    </>
  )
}

export default AppWrap(MotionWrap(About, 'w-3/4'), 'about', 'bg-secondary snap-center')
