import React from 'react'
import { NavigationDots, SocialMedia } from '../components'

const AppWrap = (Component, idName, classNames) =>
  function HOC() {
    return (
      <div id={idName} className={`w-full h-full flex snap-start scroll-smooth ${classNames}`}>
        <SocialMedia />

        <div className='flex-1 flex justify-center items-center flex-col py-8 '>
          <Component />
        </div>

        <NavigationDots active={idName} />
      </div>
    )
  }
export default AppWrap
