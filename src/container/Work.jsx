import { useState, useEffect } from 'react'
import { AiFillEye, AiFillGithub } from 'react-icons/ai'
import { images } from '../constants'
import { easeInOut, motion } from 'framer-motion'

import { AppWrap, MotionWrap } from '../wrapper'
import { urlFor, client } from '../client'

const Work = () => {
  const [activeFilter, setActiveFilter] = useState('All')
  const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 })
  const [works, setWorks] = useState([])
  const [filterWork, setFilterWork] = useState([])

  const handleWorkFilter = (item) => {
    setActiveFilter(item)
    setAnimateCard([{ y: 50, opacity: 0 }])

    setTimeout(() => {
      setAnimateCard([{ y: 0, opacity: 1 }])

      if (item === 'All') {
        setFilterWork(works)
      } else {
        setFilterWork(works.filter((work) => work.tags.includes(item)))
      }
    }, 500)
  }

  useEffect(() => {
    const query = "*[_type == 'works']"

    client.fetch(query).then((data) => {
      setWorks(data)
      setFilterWork(data)
    })
  }, [])

  return (
    <>
      <h2 className='text-3xl font-medium w-full text-center text-white'>
        My Creative <span className='text-accent'>Portfolio</span>
      </h2>
      <div className='w-full flex items-start justify-center my-8 gap-5'>
        {['Professional', 'Personal', 'All'].map((item, index) => (
          <div
            key={index}
            onClick={() => handleWorkFilter(item)}
            className={`px-3 py-2 text-gray-light bg-secondary rounded-lg font-bold cursor-pointer transition-all hover:bg-secondary/75 hover:text-white ${
              activeFilter === item ? 'bg-secondary text-accent' : ''
            }`}
          >
            {item}
          </div>
        ))}
      </div>

      <motion.div
        animate={animateCard}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className='flex items-center justify-center flex-wrap'
      >
        {filterWork.map((work, index) => (
          <div
            key={index}
            className='flex flex-col m-8 p-4 rounded-lg bg-secondary text-white max-w-[25%] min-w-56 hover:shadow-lg cursor-pointer transition-all duration-300'
          >
            <div className='w-full h-max relative'>
              <img src={urlFor(work.imgUrl)} alt={work.name} className='rounded-lg object-cover' />

              <div className='absolute top-0 left-0 bottom-0 right-0 w-full h-full rounded-lg opacity-0 hover:opacity-100 bg-black/25 flex gap-10 justify-center items-center transition-all duration-300 ease-in-out'>
                <a href={work.projectLink} target='_blank' rel='noreferrer'>
                  <div className='flex items-center justify-center w-full h-full rounded-full bg-black/50 text-white font-bold cursor-pointer hover:scale-90 transition-all duration-[250ms]'>
                    <AiFillEye className='text-3xl text-white m-4' />
                  </div>
                </a>
                <a href={work.projectLink} target='_blank' rel='noreferrer'>
                  <div className='flex items-center justify-center w-full h-full rounded-full bg-black/50 text-white font-bold cursor-pointer hover:scale-90 transition-all duration-[250ms]'>
                    <AiFillGithub className='text-3xl text-white m-4' />
                  </div>
                </a>
              </div>
            </div>

            <div className='p-2 w-full relative flex flex-col justify-center items-center'>
              <h4 className='font-bold mt-4 leading-6'>{work.title}</h4>
              <p className='mt-2'>{work.description}</p>

              {/* Tech Stack */}
              <div className='flex flex-col gap-3 justify-center items-start'>
                {work.technologies?.length > 0 &&
                  work.technologies.map((technology, i) => (
                    <div
                      key={i}
                      className='flex items-center gap-2 bg-gray/15 pl-1 pr-3 py-1 rounded-full'
                    >
                      <img
                        src={urlFor(technology.icon)}
                        alt='figma'
                        className='h-6 w-6 rounded-full'
                      />
                      <span className='text-sm text-gray-light'>{technology.technology}</span>
                    </div>
                  ))}
              </div>

              <div className='absolute py-2 px-4 bg-secondary -top-7 rounded-lg'>
                <p className=''>{work.tags[0]}</p>
              </div>
            </div>
          </div>
        ))}
      </motion.div>
    </>
  )
}

export default AppWrap(MotionWrap(Work, 'app__work'), 'work', 'bg-primary')
