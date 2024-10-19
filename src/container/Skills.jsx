import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { AppWrap, MotionWrap } from '../wrapper'
import { urlFor, client } from '../client'

const Skills = () => {
  const [experience, setExperience] = useState([])

  useEffect(() => {
    const query = "*[_type == 'experience']"

    client.fetch(query).then((data) => {
      setExperience(data)
    })
  }, [])

  return (
    <div className='flex flex-col flex-1 justify-center items-center mt-6'>
      <h2 className='text-3xl font-medium font-header w-full text-center header'>
        My Most Recent Experience
      </h2>

      <div className='w-full flex flex-col-reverse gap-4'>
        <motion.div
          whileInView={{ opacity: [0, 1] }}
          transition={{ duration: 0.5 }}
          className='flex flex-1 flex-col gap-3 p-5 mb-4 text-gray-light'
        >
          <ol class='relative border-s border-gray-600'>
            {experience.map((experience, i) => (
              <li class='mb-10 ms-4' key={experience._id}>
                <div class='absolute w-3 h-3 bg-gray-600 rounded-full mt-1.5 -start-1.5'></div>
                <time class='mb-1 text-sm font-normal leading-none text-gray-light/80'>
                  {experience.startYear} - {experience.endYear}
                </time>
                <h3 class='text-xl font-semibold text-gray-300'>{experience.jobTitle}</h3>
                <h5 class='text-lg font-medium text-gray-500'>{experience.company}</h5>
                <ul class='mb-4 text-base font-normal text-gray-400'>
                  {experience.body.map((item) => (
                    <li key={item._key} class='list-disc ml-5'>
                      {item.children.map((text) =>
                        text.marks.includes('strong') ? (
                          <strong className='underline' key={text._key}>
                            {text.text}
                          </strong>
                        ) : (
                          <span key={text._key}>{text.text}</span>
                        )
                      )}
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ol>
        </motion.div>

        {/* <motion.div className='flex flex-1 justify-start items-start flex-col gap-3'>
          {experience.map((experience) => (
            <motion.div
              className='relative w-full flex flex-col bg-primary rounded-lg px-6 py-3 cursor-pointer justify-start items-start transition-all duration-300 ease-in-out'
              key={experience._id}
            >
              <h3 className='text-gray-light text-xl font-header'>{experience.jobTitle}</h3>
              <div className='flex gap-6 text-gray-light'>
                <p className='font-semibold'>{experience.company}</p>
                <p>
                  {experience.startYear} - {experience.endYear}
                </p>
              </div>
              <div className='text-gray-light/80'>
                {experience.body.map((block) =>
                  block.children.map((child) => <li>{child.text}</li>)
                )}
              </div>
            </motion.div>
          ))}
        </motion.div> */}
      </div>
    </div>
  )
}

export default AppWrap(MotionWrap(Skills, 'app__work'), 'skills', 'bg-secondary')
