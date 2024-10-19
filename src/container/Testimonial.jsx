import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi'
import { AppWrap, MotionWrap } from '../wrapper'
import { urlFor, client } from '../client'

const Testimonial = () => {
  const [brands, setBrands] = useState([])
  const [testimonials, setTestimonials] = useState([])
  const [currentIndex, setCurrentIndex] = useState(0)

  const handleClick = (index) => {
    setCurrentIndex(index)
  }

  useEffect(() => {
    const query = "*[_type == 'testimonials']"
    const brandsQuery = "*[_type == 'brands']"
    client.fetch(query).then((data) => {
      setTestimonials(data)
    })
    client.fetch(brandsQuery).then((data) => {
      setBrands(data)
    })
  }, [])

  const test = testimonials[currentIndex]

  return (
    <div className='flex items-center justify-center flex-col w-full'>
      {testimonials.length > 0 && (
        <>
          <div className='min-h-40 max-w-[75vw] w-max flex items-center justify-center rounded-lg p-6 bg-secondary shadow-md transition-all duration-300 ease-in-out'>
            <img
              src={urlFor(test.imageurl)}
              alt='testimonial'
              className='w-32 h-32 rounded-lg object-cover'
            />
            <div className='flex flex-1 py-0 px-8 flex-col gap-3 justify-around items-start'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='33.548'
                height='30'
                viewBox='0 0 33.548 30'
                className='fill-gray-300'
              >
                <path
                  id='quote-symbol'
                  d='M2.816,54.912H17.547v-30L2.816,37.493Zm18.925,0H36.364v-30L21.741,37.493Z'
                  transform='translate(-2.816 -24.912)'
                  fill=''
                />
              </svg>
              <p className='text-xl leading-8 text-gray-300 font-header italic'>{test.feedback}</p>
              <div className='flex flex-col gap-0.5'>
                <h4 className='font-semibold text-gray-500'>{test.name}</h4>
                <h5 className='font-normal text-gray-600'>{test.company}</h5>
              </div>
            </div>
          </div>

          <div className='flex items-center justify-center mt-4 w-full gap-6'>
            <div
              className='flex items-center cursor-pointer justify-center w-12 h-12 hover:scale-105 rounded-full transition-all duration-300 ease-in-out bg-secondary hover:bg-secondary hover:text-white text-gray-500'
              onClick={() =>
                handleClick(currentIndex === 0 ? testimonials.length - 1 : currentIndex - 1)
              }
            >
              <HiChevronLeft className='w-6 h-6' />
            </div>
            <div
              className='flex items-center cursor-pointer justify-center w-12 h-12 hover:scale-105 rounded-full transition-all duration-300 ease-in-out bg-secondary hover:bg-secondary hover:text-white text-gray-500'
              onClick={() =>
                handleClick(currentIndex === testimonials.length - 1 ? 0 : currentIndex + 1)
              }
            >
              <HiChevronRight className='w-6 h-6' />
            </div>
          </div>
        </>
      )}

      <div className='flex flex-col justify-center items-center w-full mt-8'>
        <h2 className='text-3xl text-gray-light font-semibold'>
          Clients I am proud to have worked with:
        </h2>
        <div className='w-4/5 flex-wrap mt-8 flex items-center justify-center'>
          {brands.map((brand) => (
            <motion.div
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: 0.5, type: 'tween' }}
              key={brand.id}
              className='w-36 h-36 m-6 flex items-center justify-center p-2 transition-all duration-300 hover:scale-110'
            >
              <img
                src={urlFor(brand.imgUrl)}
                height='100px'
                width='100px'
                alt={brand.name}
                className='w-full h-auto object-cover'
              />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default AppWrap(MotionWrap(Testimonial, 'w-full'), 'testimonial', 'bg-primary')
