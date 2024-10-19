import { BsTwitter, BsInstagram, BsLinkedin } from 'react-icons/bs'
import { MdEmail } from 'react-icons/md'
import { FaFacebookF } from 'react-icons/fa'

const SocialMedia = () => {
  const commonClasses =
    'w-14 h-14 rounded-full bg-gray m-1 border border-gray flex items-center justify-center duration-300 hover:scale-110 transition-all hover:bg-accent hover:border-secondary hover:text-white'
  return (
    <div className='flex justify-end items-center flex-col mb-2 ml-1.5'>
      <a href='mailto:justinlupica@gmail.com'>
        <div className={commonClasses}>
          <MdEmail />
        </div>
      </a>
      <a href='https://linkedin.com/in/justin-lupica' target='_blank'>
        <div className={commonClasses}>
          <BsLinkedin />
        </div>
      </a>
    </div>
  )
}

export default SocialMedia
