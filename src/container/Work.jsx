import { useState, useEffect } from 'react'
import { AiFillEye } from 'react-icons/ai'
import { motion } from 'framer-motion'
import { AppWrap, MotionWrap } from '../wrapper'
import { urlFor, client } from '../client'
import { CardCarousel } from '../components'
import {
  Carousel,
  CarouselButtons,
  CarouselControl,
  CarouselIndicators,
  CarouselItem,
  CarouselNextButton,
  CarouselPrevButton,
  CarouselSlides,
  Button,
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from 'keep-react'

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
        My Past <span className='text-accent font-medium'>Works</span>
      </h2>
      <p className='text-gray-400 text-lg mt-4 text-center'>
        These are some of my <span className='text-accent font-medium'>recent</span> projects that I
        am most <span className='text-accent font-medium'>proud</span> of.
      </p>

      <motion.div
        animate={animateCard}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className='flex items-center justify-center flex-1 max-h-full w-full mt-3 px-2 md:px-8'
      >
        <Carousel options={{ slidesToScroll: 1 }} className='px-2'>
          <CarouselSlides className='flex flex-1 gap-2 ml-0'>
            {filterWork.map((work, index) => (
              <CarouselItem key={index} className='w-full md:flex-[0_0_45%] p-2'>
                <Card className='bg-secondary/30 border-none h-full max-w-full flex flex-col gap-3 outline outline-gray-800/80 select-none cursor-grab'>
                  <CardHeader className='flex-1 relative h-1/3'>
                    <img
                      src={urlFor(work.imgUrl)}
                      alt={work.name}
                      className='object-cover w-full h-full'
                    />
                    {console.log('work: ', work)}
                    {work.projectLink && (
                      <div className='absolute top-0 left-0 bottom-0 right-0 w-full h-full rounded-lg opacity-0 hover:opacity-100 bg-black/60 flex gap-10 justify-center items-center transition-all duration-300 ease-in-out'>
                        <a href={work.projectLink} target='_blank' rel='noreferrer'>
                          <div className='flex items-center justify-center w-full h-full rounded-full bg-black/50 text-white font-bold cursor-pointer hover:scale-90 transition-all duration-[250ms]'>
                            <AiFillEye className='text-3xl text-white m-4' />
                          </div>
                        </a>
                      </div>
                    )}
                    <div className='absolute -bottom-4 left-1/2 transform -translate-x-1/2 py-1 px-3 text-sm bg-secondary/50 backdrop-blur-sm text-gray-300 font-display rounded-lg border border-gray-800/75'>
                      <p>{work.tags[0]}</p>
                    </div>
                  </CardHeader>

                  <CardContent className='flex-1 h-2/3 flex flex-col justify-center p-4'>
                    <CardTitle className='text-center text-gray-300 font-semibold'>
                      {work.title}
                    </CardTitle>
                    <CardDescription className='flex flex-col text-center gap-4 items-center justify-center'>
                      <p className='text-center text-base text-gray-500'>{work.description}</p>

                      <div className='flex flex-wrap justify-center items-center gap-3 w-full'>
                        {work.technologies?.length > 0 &&
                          work.technologies.map((technology, i) => (
                            <div
                              key={i}
                              className='flex items-center justify-center gap-2 border-2 border-gray/50 bg-gray/15 pl-1 pr-3 py-1 rounded-full hover:scale-105 transition-all'
                            >
                              <img
                                src={urlFor(technology.icon)}
                                alt={technology.technology}
                                className='h-6 w-6 rounded-full'
                              />
                              <span className='text-sm text-gray-light whitespace-nowrap'>
                                {technology.technology}
                              </span>
                            </div>
                          ))}
                      </div>
                    </CardDescription>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselSlides>
          <CarouselControl className='flex items-center justify-center text-center'>
            <CarouselButtons className='gap-4'>
              <CarouselPrevButton />
              <CarouselNextButton />
            </CarouselButtons>
          </CarouselControl>
        </Carousel>
      </motion.div>
    </>
  )
}

export default AppWrap(MotionWrap(Work, 'max-w-[80vw]'), 'work', 'bg-black relative')
