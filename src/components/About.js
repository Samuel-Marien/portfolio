import React, { useRef } from 'react'
import MovingText from 'react-moving-text'

import useOnScreen from '../hooks/useOnScreen'
import profil from './profil1.jpg'

import Mypdf from '../CV_Marien_Samuel_FS.pdf'

const About = () => {
  const ref = useRef()
  const isVisible = useOnScreen(ref)
  // console.log(isVisible)

  return (
    <div className="flex flex-col lg:flex-row items-center md:mt-28">
      <div className="skewed mt-10 border-4 border-white border-dotted ml-3 md:ml-0">
        <img
          src={profil}
          alt="profil"
          className="grayscale border-4 border-black border-dotted"
        />
      </div>
      <div className="p-1 md:p-10 pl-0 lg:pl-20 mt-3 md:mt-0 flex flex-col justify-center ">
        <div className="text-3xl md:text-4xl font-bold text-red-500 uppercase flex justify-center md:justify-start">
          <span ref={ref}>
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
                  <span>À</span>
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
                  <span className="ml-3">propos</span>
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
                  <span className="ml-3">de moi</span>
                </MovingText>
              </div>
            )}
          </span>
        </div>

        <p
          ref={ref}
          className="text-slate-700 md:mt-10 
          text-base lg:w-9/12 md:tracking-widest leading-6 
          md:leading-9 text-justify p-4 md:p-0"
        >
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industrys standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged.
        </p>

        {isVisible && (
          <MovingText
            type="slideInFromTop"
            duration="3600ms"
            delay="0"
            direction="normal"
            timing="ease"
            fillMode="none"
            iteration={1}
          >
            <a href={Mypdf} download="CV_Marien_Samuel_FS.pdf">
              <button
                ref={ref}
                className="mt-5 py-2 px-6 bg-slate-800 text-white 
                rounded shadow-xl hover:bg-white hover:text-slate-800
                 transition-all duration-400 w-full md:w-max hover:shadow-md
                 active:bg-slate-400 active:text-white active:shadow-none"
              >
                Télécharger CV
              </button>
            </a>
          </MovingText>
        )}
      </div>
    </div>
  )
}

export default About
