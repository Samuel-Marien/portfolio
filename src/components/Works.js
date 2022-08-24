import React, { useRef, useState } from 'react'
import PropTypes from 'prop-types'
import MovingText from 'react-moving-text'

import useOnScreen from '../hooks/useOnScreen'
// import iptracker from './iptracker.png'
import MyIcon from './MyIcon'
import myProjects from '../misc/projectsArray'

import { DiReact, DiCode } from 'react-icons/di'
import { SiTailwindcss } from 'react-icons/si'
import { TbBrandJavascript, TbApi } from 'react-icons/tb'
import { IoEarth } from 'react-icons/io5'

console.log(myProjects)

const MySelectorButton = (props) => {
  const { title, onClick } = props
  return (
    <button
      onClick={onClick}
      className="focus:bg-white focus:text-slate-500 mr-3 cursor-pointer p-2 px-4 font-bold text-xl bg-slate-500 text-white shadow rounded-full"
    >
      {title}
    </button>
  )
}
MySelectorButton.propTypes = {
  title: PropTypes.string,
  onClick: PropTypes.func
}

const Works = () => {
  const [projectSelected, setProjectSelected] = useState(0)

  console.log(projectSelected)

  const ref = useRef()
  const isVisible = useOnScreen(ref)
  // console.log(isVisible)

  return (
    <div ref={ref} className="flex flex-col lg:flex-row items-center">
      <div className="skewed__works mt-1 md:mt-10 ml-3 md:ml-0 shadow-xl rounded-lg">
        <img
          src={myProjects[0].image}
          alt="profil"
          className="grayscale hover:grayscale-0 rounded-lg transition-all duration-500"
        />
      </div>
      <div className="p-1 md:p-10 pl-0 lg:pl-20 mt-3 md:mt-0 flex flex-col justify-center ">
        <div className="text-3xl md:text-4xl font-bold text-red-500 uppercase flex justify-center md:justify-start">
          <span>
            {isVisible && (
              <div className="flex">
                <MovingText
                  type="slideInFromLeft"
                  duration="900ms"
                  delay="0s"
                  direction="normal"
                  timing="ease-in"
                  fillMode="none"
                  iteration={1}
                >
                  <span>P</span>
                </MovingText>
                <MovingText
                  type="slideInFromBottom"
                  duration="1800ms"
                  delay="0s"
                  direction="normal"
                  timing="ease"
                  fillMode="none"
                  iteration={1}
                >
                  <span>rojet</span>
                </MovingText>
                <MovingText
                  type="slideInFromTop"
                  duration="2700ms"
                  delay="0s"
                  direction="normal"
                  timing="ease"
                  fillMode="none"
                  iteration={1}
                >
                  <span>s</span>
                </MovingText>
              </div>
            )}
          </span>
        </div>
        <div className="flex mt-5">
          <MySelectorButton title="1" onClick={() => setProjectSelected(0)} />
          <MySelectorButton title="2" onClick={() => setProjectSelected(1)} />
          <MySelectorButton title="3" onClick={() => setProjectSelected(2)} />
          <MySelectorButton title="4" onClick={() => setProjectSelected(3)} />
        </div>
        <div className="flex flex-col">
          <div className="md:mt-8 mb-2 font-bold text-slate-500">
            {myProjects[projectSelected].title}
          </div>
          <p className="text-slate-700  text-base lg:w-9/12 md:tracking-widest leading-6 md:leading-9 text-justify p-4 md:p-0">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industrys standard dummy text
            ever since the 1500s, when an unknown printer took.
          </p>
        </div>
        <div className="flex flex-col mt-10 border rounded-2xl px-0 md:px-8 bg-white">
          <p className=" mx-auto px-8 md:px-16 w-max text-slate-700 text-center font-black text-2xl bg-white -translate-y-5">
            Stack
          </p>
          {isVisible && (
            <div className="flex justify-around">
              <MyIcon
                icon={<DiReact />}
                type="slideInFromRight"
                duration="1000ms"
              />
              <MyIcon
                icon={<SiTailwindcss />}
                type="slideInFromBottom"
                duration="1500ms"
              />
              <MyIcon
                icon={<TbBrandJavascript />}
                type="slideInFromBottom"
                duration="600ms"
              />
              <MyIcon
                icon={<TbApi />}
                type="slideInFromLeft"
                duration="800ms"
              />
            </div>
          )}
        </div>
        <div className="text-slate-500 flex mt-24 font-bold text-xl">
          <a
            target="_blank"
            href="https://ip-tracker-dbfta26z5-samuel-marien.vercel.app/"
            className=" cursor-pointer flex items-center hover:bg-slate-500 hover:text-white hover:shadow-lg transition-all duration-500 rounded-lg px-4 py-2"
            rel="noreferrer"
          >
            <span className="mr-2">
              <IoEarth />
            </span>
            Site internet
          </a>
          <a
            target="_blank"
            href="https://github.com/Samuel-Marien/ip-tracker"
            className=" cursor-pointer flex items-center hover:bg-slate-500 hover:text-white hover:shadow-lg transition-all duration-500 rounded-lg px-4 py-2"
            rel="noreferrer"
          >
            <span className="text-4xl">
              <DiCode />
            </span>
            Code source
          </a>
        </div>
      </div>
    </div>
  )
}

export default Works
