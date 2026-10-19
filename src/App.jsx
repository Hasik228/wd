import React from 'react'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Work from './components/Work'
import Portfolio from './components/Portfolio'
import Footer from './components/Footer'

const App = () => {
  return (
    <div>
      <Hero/>
      <About/>
      <Skills/>
      <Work/>
      <Portfolio/>
      <Footer/>
    </div>
  )
}

export default App