import { BsLinkedin } from 'react-icons/bs'
import { MdEmail } from 'react-icons/md'

const SocialMedia = () => {
  const commonClasses =
    'w-10 h-10 md:w-12 md:h-12 rounded-full bg-gray-700/50 m-1 border border-gray-600 flex items-center justify-center duration-300 hover:scale-110 transition-all hover:bg-accent hover:border-secondary hover:text-white'
  return (
    <div className='absolute bottom-0 left-0 flex justify-end items-center flex-col mb-4 ml-1.5'>
      <a href='mailto:justinlupica@gmail.com'>
        <div className={commonClasses}>
          <MdEmail className='text-sm md:text-lg text-gray-500' />
        </div>
      </a>
      <a href='https://linkedin.com/in/justin-lupica' target='_blank'>
        <div className={commonClasses}>
          <BsLinkedin className='text-sm md:text-lg text-gray-500' />
        </div>
      </a>
    </div>
  )
}

export default SocialMedia
