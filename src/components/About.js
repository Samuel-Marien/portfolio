import React, { useRef } from 'react'
import MovingText from 'react-moving-text'

import useOnScreen from '../hooks/useOnScreen'
import profil from './profil1.jpg'

const About = () => {
  const ref = useRef()
  const isVisible = useOnScreen(ref)
  console.log(isVisible)

  return (
    <div className="flex mt-28">
      <div className="skewed mt-10 border-4 border-white border-dotted">
        <img
          src={profil}
          alt="profil"
          className="grayscale border-4 border-black border-dotted"
        />
      </div>
      <div className="p-10 pl-20 flex flex-col justify-center">
        <div className="text-4xl font-bold text-red-500 uppercase">
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
                  <span>About</span>
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
                  <span className="ml-3">M</span>
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
                  <span className="">e</span>
                </MovingText>
              </div>
            )}
          </span>
        </div>

        <p
          ref={ref}
          className="text-slate-700 mt-10 text-xl md:w-9/12 tracking-widest leading-9"
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
            <div>
              <button
                className="mt-10 py-2 px-4 bg-slate-800 text-white rounded shadow-xl
          hover:shadow-inner hover:bg-white hover:text-slate-800 hover:font-bold
          transition-all duration-300 "
              >
                Download CV
              </button>
            </div>
          </MovingText>
        )}
      </div>
    </div>
  )
}

export default About
