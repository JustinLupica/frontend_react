import { BsTwitter, BsInstagram, BsLinkedin } from 'react-icons/bs'
import { MdEmail } from 'react-icons/md'
import { FaFacebookF } from 'react-icons/fa'

const SocialMedia = () => {
  const commonClasses =
    'w-12 h-12 rounded-full bg-gray m-1 border border-gray flex items-center justify-center transition-all hover:bg-accent hover:border-secondary hover:text-white'
  return (
    <div className='flex justify-end items-center flex-col mb-2 ml-1.5'>
      <div className={commonClasses}>
        <MdEmail />
      </div>
      <div className={commonClasses}>
        <BsLinkedin />
      </div>
    </div>
  )
}

export default SocialMedia
