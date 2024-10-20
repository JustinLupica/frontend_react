import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { client } from '../client'
import { AppWrap, MotionWrap } from '../wrapper'
import { CgIfDesign } from 'react-icons/cg'
import { FaLaptopCode } from 'react-icons/fa'
import {
  Carousel,
  CarouselButtons,
  CarouselControl,
  CarouselItem,
  CarouselNextButton,
  CarouselPrevButton,
  CarouselSlides
  // CarouselIndicators
} from 'keep-react'
import { PortableText } from '@portabletext/react'

const About = () => {
  // const [abouts, setAbouts] = useState([])
  const [bio, setBio] = useState([])
  // const [skills, setSkills] = useState([])

  useEffect(() => {
    // const query = '*[_type == "abouts"]'
    const bioQuery = '*[_type == "bio"]'
    // const skillsQuery = "*[_type == 'skills']"

    // client.fetch(skillsQuery).then((data) => {
    //   setSkills(data)
    // })
    // client.fetch(query).then((data) => setAbouts(data))
    client.fetch(bioQuery).then((data) => setBio(data))
  }, [])

  return (
    <>
      <Carousel options={{ slidesToScroll: 1 }} className='px-2 max-w-[80vw]'>
        <CarouselSlides className='flex flex-1 gap-2 ml-0 max-h-[70vh] w-full'>
          <CarouselItem key={1} className='flex-[0_0_100%] p-2 flex items-center justify-center'>
            <div className=''>
              <h2 className='font-bold header w-full flex items-center justify-center gap-2 text-3xl md:text-4xl my-6'>
                Hi, I'm Justin. <span className='hidden md:flex'>Nice to meet you!</span>
              </h2>
              <div className='text-gray-light text-center font-display leading-relaxed text-sm md:text-base'>
                <PortableText
                  value={bio[0]?.body}
                  components={{
                    block: {
                      // Customize rendering for paragraph
                      normal: ({ children }) => <p className='mb-4'>{children}</p>
                    },
                    marks: {
                      strong: ({ children }) => <strong className='font-bold'>{children}</strong> // Preserve bold
                    }
                  }}
                />
              </div>
            </div>
          </CarouselItem>
          <CarouselItem key={2} className='flex-[0_0_100%] p-2'>
            <motion.div
              whileInView={{ opacity: 1 }}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.25, type: 'tween' }}
              className='hidden md:flex flex-1 flex-col md:flex-row items-center outline outline-gray/60 rounded-lg bg-gray-800/20 text-gray-light p-4 w-full'
              // key={about._id}
            >
              <div className='md:border-r md:border-r-gray/60 flex flex-1 px-3 justify-center items-center flex-col gap-3 h-full'>
                <span className='p-3 rounded-full bg-accent text-gray-light'>
                  <CgIfDesign className='text-6xl' />
                </span>
                <h2 className='text-xl'>Designer</h2>
                <p className='text-center font-header text-md'>
                  I value simple content structure, clean design patterns, and thoughtful
                  interactions.
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
                  I like to code things from scratch, and enjoy bringing ideas to life in the
                  browser.
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

            {/* Mobile Version */}
            <motion.div
              whileInView={{ opacity: 1 }}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.25, type: 'tween' }}
              className='flex md:hidden flex-1 flex-col md:flex-row gap-4 items-center outline outline-gray/60 rounded-lg bg-gray-800/20 text-gray-light p-4 w-full'
              // key={about._id}
            >
              <div className='flex flex-1 px-3 justify-center items-center flex-col gap-3 h-full'>
                <div className='flex items-center gap-4'>
                  <span className='p-2 rounded-full bg-accent text-gray-light'>
                    <CgIfDesign className='text-2xl' />
                  </span>
                  <h2 className='text-lg'>Designer</h2>
                </div>
                <p className='text-center font-header text-sm'>
                  I value simple content structure, clean design patterns, and thoughtful
                  interactions.
                </p>
                <div className='text-center flex flex-col gap-5'>
                  <div>
                    <label className='text-accent font-semibold text-base'>Design Skills:</label>
                    <p className='text-sm'>UX, UI, Web, Apps, Layouts</p>
                  </div>
                  <div>
                    <label className='text-accent font-semibold text-base'>Dev Tools I Use:</label>
                    <ul className='text-sm'>
                      <li>Figma</li>
                      <li>Prototyping in code</li>
                      <li>Replicating designs with code</li>
                    </ul>
                  </div>
                </div>
              </div>
              <hr className='bg-gray-600 w-full rounded-full' />

              <div className='flex flex-1 px-3 justify-center items-center flex-col gap-3 h-full'>
                <div className='flex items-center gap-4'>
                  <span className='p-2 rounded-full bg-accent text-gray-light'>
                    <FaLaptopCode className='text-2xl' />
                  </span>
                  <h2 className='text-lg'>
                    Frontend Developer <br /> React Expert
                  </h2>
                </div>
                <p className='text-center font-header text-sm'>
                  I like to code things from scratch, and enjoy bringing ideas to life in the
                  browser.
                </p>
                <div className='text-center flex flex-col gap-5'>
                  <div>
                    <label className='text-accent font-semibold text-base'>My Top Skills:</label>
                    <p className='text-sm'>HTML, TailwindCSS, React, JavaScript</p>
                  </div>
                  <div>
                    <label className='text-accent font-semibold text-base'>Dev Tools I Use:</label>
                    <ul className='text-sm'>
                      <li>Git/GitLab</li>
                      <li>TailwindCSS</li>
                      <li>VS Code</li>
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>
          </CarouselItem>
        </CarouselSlides>
        <CarouselControl className='flex flex-col gap-3 items-center justify-center w-full'>
          <CarouselButtons className='gap-4'>
            <CarouselPrevButton />
            <CarouselNextButton />
          </CarouselButtons>
          {/* <CarouselIndicators /> */}
        </CarouselControl>
      </Carousel>
    </>
  )
}

export default AppWrap(MotionWrap(About, 'px-3'), 'about', 'bg-secondary snap-center relative')
