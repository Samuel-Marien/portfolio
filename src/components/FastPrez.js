import React from 'react'
import PropTypes from 'prop-types'

import { FaGithubSquare, FaLinkedin, FaTwitterSquare } from 'react-icons/fa'

const SocialLink = (props) => {
  const { href, icon } = props
  return (
    <a
      target="_blank"
      className="hover:text-slate-300  hover:animate-pulse hover:scale-125 transition-all duration-300"
      href={href}
      rel="noreferrer"
    >
      {icon}
    </a>
  )
}

SocialLink.propTypes = {
  icon: PropTypes.element,
  href: PropTypes.string
}

const FastPrez = () => {
  return (
    <div className="text-slate-300">
      <div className="animate-charcter text-6xl font-black">
        <span>Samuel Marien</span>
      </div>
      <p className="mt-5 text-2xl font-semibold tracking-widest">
        Junior Fullsatck Developer
      </p>
      <div className="flex mt-5 text-2xl justify-between w-24">
        <SocialLink
          icon={<FaGithubSquare />}
          href="https://github.com/Samuel-Marien"
        />
        <SocialLink
          icon={<FaLinkedin />}
          href="https://www.linkedin.com/in/samuel-marien/"
        />
        <SocialLink
          icon={<FaTwitterSquare />}
          href="https://twitter.com/Samuel_Marien"
        />
      </div>
    </div>
  )
}

export default FastPrez
