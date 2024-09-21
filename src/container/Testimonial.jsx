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
          <div className='min-h-80 w-max flex items-center justify-center rounded-lg p-8 bg-white shadow-md transition-all duration-300 ease-in-out'>
            <img
              src={urlFor(test.imageurl)}
              alt='testimonial'
              className='w-[100px] h-[100px] rounded-full object-cover'
            />
            <div className='flex flex-1 h-full py-0 px-8 flex-col justify-around items-start'>
              <p className='text-xl leading-8 text-black font-header'>{test.feedback}</p>
              <div>
                <h4 className='font-semibold text-secondary mt-8'>{test.name}</h4>
                <h5 className='font-normal text-gray mt-[5px]'>{test.company}</h5>
              </div>
            </div>
          </div>

          <div className='flex items-center justify-center mt-4 w-full gap-6'>
            <div
              className='flex items-center cursor-pointer justify-center w-12 h-12 rounded-full transition-colors duration-200 ease-in-out bg-white hover:bg-secondary hover:text-white text-secondary'
              onClick={() =>
                handleClick(currentIndex === 0 ? testimonials.length - 1 : currentIndex - 1)
              }
            >
              <HiChevronLeft className='w-6 h-6' />
            </div>
            <div
              className='flex items-center cursor-pointer justify-center w-12 h-12 rounded-full transition-colors duration-200 ease-in-out bg-white hover:bg-secondary hover:text-white text-secondary'
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
        <h2 className='text-4xl text-gray-light font-semibold'>Clients I am proud to have worked with:</h2>
        <div className='w-4/5 flex-wrap -mt-8 flex items-center justify-center'>
          {brands.map((brand) => (
            <motion.div
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: 0.5, type: 'tween' }}
              key={brand.id}
              className='w-40 m-6'
            >
              <img
                src={urlFor(brand.imgUrl)}
                alt={brand.name}
                className='w-full h-auto object-cover grayscale hover:grayscale-0 transition-all duration-300'
              />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default AppWrap(MotionWrap(Testimonial, 'w-full'), 'testimonial', 'bg-primary')
