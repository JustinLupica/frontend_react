import React from 'react'
import { Navbar, CardCarousel } from './components'
import { About, Footer, Header, Testimonial, Work, Skills } from './container'

const App = () => {
  return (
    <div className='bg-black snap-y snap-mandatory h-screen'>
      <Navbar />

      <Header />

      <About />
      {/* <CardCarousel /> */}
      <Work />

      <Skills />
      <Testimonial />
      <Footer />
    </div>
  )
}

export default App
