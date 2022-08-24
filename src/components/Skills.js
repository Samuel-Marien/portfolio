import React, { useRef } from 'react'
import PropTypes from 'prop-types'
import MovingText from 'react-moving-text'

import useOnScreen from '../hooks/useOnScreen'
import skillsPic from './skills2.jpg'

import {
  DiHtml5,
  DiCss3,
  // DiJsBadge,
  DiNodejsSmall,
  DiReact,
  DiBootstrap,
  DiPostgresql,
  DiMongodb
} from 'react-icons/di'
import { SiTailwindcss, SiNotion, SiExpress } from 'react-icons/si'
import { FaFigma, FaGithub } from 'react-icons/fa'
import { TbApi, TbBrandJavascript } from 'react-icons/tb'

const MyIcon = (props) => {
  const { icon, type, duration } = props
  return (
    <MovingText
      type={type}
      duration={duration}
      delay="0s"
      direction="normal"
      timing="ease-in"
      fillMode="none"
      iteration={1}
    >
      <div className="m-2 md:m-3">
        <span className="text-4xl md:text-7xl text-slate-800">{icon}</span>
      </div>
    </MovingText>
  )
}
MyIcon.propTypes = {
  icon: PropTypes.element,
  type: PropTypes.string,
  duration: PropTypes.string
}

const Skills = () => {
  const ref = useRef()
  const isVisible = useOnScreen(ref)
  // console.log(isVisible)
  return (
    <div className="flex flex-col lg:flex-row">
      <div className="p-1 md:p-10 pl-0  mt-3 md:mt-0 flex flex-col lg:w-7/12">
        <div
          ref={ref}
          className="text-3xl md:text-4xl font-bold text-red-500 uppercase flex justify-center md:justify-start"
        >
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
                  <span>S</span>
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
                  <span className="">kill</span>
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
                  <span className="">s</span>
                </MovingText>
              </div>
            )}
          </span>
        </div>

        <p className=" text-slate-700 lg:mt-10 text-base md:tracking-widest leading-6 md:leading-9 text-justify p-4 md:p-0">
          J&apos;aime créer des choses qui vivent sur Internet, que ce soit
          sites Web, applications ou quoi que ce soit entre les deux. J’aime
          voir mon imagination prendre forme pour amener mes idées à la vie.
        </p>

        {isVisible && (
          <div className="mt-4 md:mt-10 flex flex-col justify-center items-center">
            <div className="flex flex-col  border rounded-2xl px-0 md:px-8 bg-white">
              <p className=" mx-auto px-8 md:px-16 w-max text-slate-700 text-center font-black text-2xl bg-white -translate-y-5">
                Front-end
              </p>
              <div className="flex">
                <MyIcon
                  icon={<DiHtml5 />}
                  type="slideInFromLeft"
                  duration="1000ms"
                />
                <MyIcon
                  icon={<DiCss3 />}
                  type="slideInFromTop"
                  duration="500ms"
                />
                <MyIcon
                  icon={<TbBrandJavascript />}
                  type="slideInFromBottom"
                  duration="800ms"
                />
                <MyIcon
                  icon={<DiReact />}
                  type="slideInFromRight"
                  duration="1800ms"
                />
                <MyIcon
                  icon={<DiBootstrap />}
                  type="slideInFromLeft"
                  duration="500ms"
                />
                <MyIcon
                  icon={<SiTailwindcss />}
                  type="slideInFromBottom"
                  duration="800ms"
                />
              </div>
            </div>
            <div className="flex flex-col mt-5 md:mt-10 border rounded-2xl px-2 md:px-8 bg-white">
              <p className=" mx-auto px-8 md:px-16 w-max text-slate-700 text-center font-black text-2xl bg-white -translate-y-5">
                Back end
              </p>
              <div className="flex ">
                <MyIcon
                  icon={<DiNodejsSmall />}
                  type="slideInFromBottom"
                  duration="800ms"
                />
                <MyIcon
                  icon={<SiExpress />}
                  type="slideInFromLeft"
                  duration="1500ms"
                />
                <MyIcon
                  icon={<TbApi />}
                  type="slideInFromTop"
                  duration="1200ms"
                />
                <MyIcon
                  icon={<DiPostgresql />}
                  type="slideInFromBottom"
                  duration="1800ms"
                />
                <MyIcon
                  icon={<DiMongodb />}
                  type="slideInFromBottom"
                  duration="800ms"
                />
              </div>
            </div>
            <div className="flex flex-col mt-5 md:mt-10 border rounded-2xl px-2 md:px-8 bg-white">
              <p className=" mx-auto px-8 md:px-16 w-max text-slate-700 text-center font-black text-2xl bg-white -translate-y-5">
                Outils
              </p>
              <div className="flex ">
                <MyIcon
                  icon={<FaFigma />}
                  type="slideInFromLeft"
                  duration="1500ms"
                />
                <MyIcon
                  icon={<SiNotion />}
                  type="slideInFromBottom"
                  duration="1800ms"
                />
                <MyIcon
                  icon={<FaGithub />}
                  type="slideInFromTop"
                  duration="2200ms"
                />
              </div>
            </div>
          </div>
        )}
      </div>
      <div className="skewed__skills hidden lg:block mt-10 border-4 border-white border-dotted ml-3 md:ml-0">
        <img
          src={skillsPic}
          alt="profil"
          className="grayscale border-4 border-black border-dotted"
        />
      </div>
    </div>
  )
}

export default Skills