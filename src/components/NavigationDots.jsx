import { Tooltip } from 'react-tooltip'

const NavigationDots = ({ active }) => {
  return (
    <div className='flex justify-center items-center flex-col p-4'>
      {['home', 'about', 'work', 'skills', 'testimonial', 'contact'].map((item, index) => (
        <a
          href={`#${item}`}
          key={item + index}
          data-tooltip-id='section-nav'
          data-tooltip-content={item}
          className={`w-[14px] h-[14px] rounded-full bg-gray m-2 transition-all hover:bg-gray-light/75 ${
            active === item ? 'bg-gray-light' : ''
          }`}
        />
      ))}
      <Tooltip
        id='section-nav'
        className='capitalize !bg-gray/60 transition-all duration-300 ease-in-out font-semibold !rounded'
      />
    </div>
  )
}

export default NavigationDots
