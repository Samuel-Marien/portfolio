import React from 'react'
import './App.css'

import NavBar from './components/NavBar'
import FastPrez from './components/FastPrez'
import ScrollButton from './components/ScrollButton'
import About from './components/About'
import Skills from './components/Skills'
import Works from './components/Works'

function App() {
  return (
    <div
      style={{
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        width: '100%',
        height: '1800px',
        backgroundImage: 'url(images/bgHome.png)'
      }}
    >
      <NavBar />
      <div className="h-screen">
        <div className="flex flex-col mt-5 ml-5 md:mt-56 md:ml-48">
          <FastPrez />
          <div className="absolute bottom-5 left-5 lg:left-48 ">
            <ScrollButton mode="Down" href="#about" />
          </div>
        </div>
      </div>
      <div
        className=""
        style={{
          backgroundSize: '40%',
          backgroundPosition: 'bottom right',
          backgroundRepeat: 'no-repeat',
          backgroundImage: 'url(images/bgSkills.png)'
        }}
      >
        <div className="h-screen">
          <div className="p-2 md:p-0 ml-0 lg:ml-48" id="about">
            <About />
          </div>
        </div>
        <div className="ml-5 lg:ml-48 -translate-y-16">
          <ScrollButton mode="Down" href="#skills" />
        </div>
        <div className="h-screen ">
          <div className="p-2 md:p-0 ml-0 lg:ml-48" id="skills">
            <Skills />
            <div className="relative"></div>
          </div>
        </div>
      </div>
      <div className="ml-5 lg:ml-48 -translate-y-16">
        <ScrollButton mode="Down" href="#works" />
      </div>
      <div className="h-screen">
        <div className="p-2 md:p-0 ml-2" id="works">
          <Works />
        </div>
      </div>
    </div>
  )
}

export default App
