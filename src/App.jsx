import React, { useState, Suspense } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import Projects from './components/Projects'
import Contacts from './components/Contact'
import Skills from './components/Skillls'
import ContactInfo from './components/ContactInfo'

export const App = () => {
  return (
    <div>
        <Navbar/>
        <Hero/>
        <About/>
        <Skills/>
        <Services/>
        <Projects/>
        <ContactInfo/>
        <Contacts/>
    </div>
  )
}


export default App
