import { Tooltip } from 'react-tooltip'

const NavigationDots = ({ active }) => {
  return (
    <div className='flex justify-center items-center flex-col p-1'>
      {['home', 'about', 'work', 'skills', 'testimonial', 'contact'].map((item, index) => (
        <a
          href={`#${item}`}
          key={item + index}
          data-tooltip-id='section-nav'
          data-tooltip-content={item}
          className={`w-[14px] h-[14px] rounded-full bg-gray m-2 transition-all hover:bg-gray-500 transition-colors ${
            active === item ? 'bg-gray-300 hover:bg-gray-300' : ''
          }`}
        />
      ))}
      <Tooltip
        id='section-nav'
        delayShow={300}
        className='hidden md:flex capitalize font-header !bg-gray-800 transition-all duration-300 ease-in-out font-semibold !rounded-md !shadow'
      />
    </div>
  )
}

export default NavigationDots
