import React from 'react'
import Navbar from './Navbar'
import Hero from './Hero'
import About from './About'
import Projects from './Projects'
import Contacts from './Contact'
import Skills from './Skills'
import ContactInfo from './ContactInfo'

export const Home = () => {
  return (
    <div>
        <Navbar/>
        <Hero/>
        <About/>
        <Skills/>
        <Projects/>
        <ContactInfo/>
        <Contacts/>
    </div>
  )
}
