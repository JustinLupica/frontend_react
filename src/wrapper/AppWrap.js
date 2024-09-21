import React from 'react'
import { NavigationDots, SocialMedia } from '../components'
import { Glow, GlowCapture } from '@codaworks/react-glow'

const AppWrap = (Component, idName, classNames) =>
  function HOC() {
    return (
      <div id={idName} className={`w-full min-h-[100vh] flex ${classNames}`}>
        <SocialMedia />
        <div className='flex-1 w-full flex justify-center items-center flex-col py-8 '>
          <Component />
        </div>

        <NavigationDots active={idName} />
      </div>
    )
  }
export default AppWrap
