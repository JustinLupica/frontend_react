import React from 'react'
import { Navbar } from './components'
import { About, Footer, Header, Testimonial, Work, Skills } from './container'
import { Glow, GlowCapture } from '@codaworks/react-glow'

const App = () => {
  return (
    <div className='bg-primary snap-y'>
      <Navbar />
      <GlowCapture>
        <Glow>
          <Header />
        </Glow>
      </GlowCapture>
      <About />
      <Work />
      <Skills />
      <Testimonial />
      <Footer />
    </div>
  )
}

export default App
