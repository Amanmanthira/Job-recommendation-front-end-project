import React from 'react'
import Hero from './frontend/hero/Hero'
import Recomendation from './frontend/recomendation/Recomendation'
import Video from './frontend/video/Video'
import Testimonials from './frontend/testimoniels/Testimoniels'
import Articles from './frontend/articles/Articles'
import Footer from './frontend/Footer/Footer'

const Mainpage = () => {
  return (
    <>
      <Hero/>
      <Recomendation/>
      <Video/>
      <Testimonials/>
      <Articles/>
      <Footer/>
    </>
  )
}

export default Mainpage

