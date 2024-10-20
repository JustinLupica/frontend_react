import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { AppWrap, MotionWrap } from '../wrapper'
import { client, urlFor } from '../client'
import { Button } from 'keep-react'

const Skills = () => {
  const [experience, setExperience] = useState([])
  const [skills, setSkills] = useState([])

  useEffect(() => {
    const query = "*[_type == 'experience']"
    const skillsQuery = "*[_type == 'skills']"

    client.fetch(query).then((data) => {
      setExperience(data)
    })
    client.fetch(skillsQuery).then((data) => {
      setSkills(data)
    })
  }, [])

  return (
    <div className='flex flex-col flex-1 justify-center items-center mt-6 h-full max-w-[90vw]'>
      <h2 className='text-2xl md:text-3xl font-medium font-header w-full text-center header'>
        My Skills & Recent Experience
      </h2>

      <div className='w-full flex flex-col items-center justify-center md:flex-row gap-4 h-full'>
        <motion.div
          whileInView={{ opacity: [0, 1] }}
          transition={{ duration: 0.5 }}
          className='flex flex-1 flex-col gap-3 p-5 mb-4 text-gray-400 items-center justify-center md:w-1/2 md:border-r border-r-gray-800 mt-5'
        >
          <ol className='relative border-s border-gray-600'>
            {experience.map((experience, i) => (
              <li className='mb-10 ms-4' key={experience._id}>
                <div className='absolute w-3 h-3 bg-gray-600 rounded-full mt-1.5 -start-1.5'></div>
                <time className='mb-1 text-xs md:text-sm font-normal leading-none text-gray-light/80'>
                  {experience.startYear} - {experience.endYear}
                </time>
                <h3 className='md:text-xl font-semibold text-gray-300'>{experience.jobTitle}</h3>
                <h5 className='text-sm md:text-lg font-medium text-gray-500'>
                  {experience.company}
                </h5>
                <a href='/resume2024.pdf' target='_blank'>
                  <Button className='bg-accent/25 border border-accent text-xs'>
                    Open My Full Resume
                  </Button>
                </a>
                {/* <ul className='mb-4 text-sm md:text-base font-normal text-gray-400'>
                  {experience.body.map((item) => (
                    <li key={item._key} className='list-disc ml-5'>
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
                </ul> */}
              </li>
            ))}
          </ol>
        </motion.div>
        <motion.div
          whileInView={{ opacity: [0, 1] }}
          transition={{ duration: 0.5 }}
          className='flex flex-wrap gap-4 items-center justify-center md:w-1/2 h-max pl-4 md:pl-0'
        >
          {skills.map((skill, i) => (
            <div className='flex flex-col gap-2 items-center justify-center'>
              <div
                key={i}
                className='h-12 w-12 md:w-16 md:h-16 rounded-full bg-gray-700/25 border border-gray-700 flex items-center justify-center p-2'
              >
                <img src={urlFor(skill.icon)} alt={skill.name} />
              </div>
              <p className='text-gray-500 text-xs md:text-sm'>{skill.name}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  )
}

export default AppWrap(MotionWrap(Skills, ''), 'skills', 'bg-secondary relative')
