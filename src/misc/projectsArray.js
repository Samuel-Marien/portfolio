import React from 'react'

import iptracker from '../components/iptracker.png'

import { DiReact } from 'react-icons/di'
import { SiTailwindcss } from 'react-icons/si'
import { TbBrandJavascript, TbApi } from 'react-icons/tb'

const myProjects = [
  {
    image: iptracker,
    title: 'Ip Tracker',
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took.',
    linkCode: 'https://github.com/Samuel-Marien/ip-tracker',
    linkSite: 'https://ip-tracker-dbfta26z5-samuel-marien.vercel.app/',
    techArray: [
      { icon: <DiReact />, type: 'slideInFromRight', duration: '1000ms' },
      {
        icon: <SiTailwindcss />,
        type: 'slideInFromBottom',
        duration: '100ms'
      },
      {
        icon: <TbBrandJavascript />,
        type: 'slideInFromBottom',
        duration: '600ms'
      },
      { icon: <TbApi />, type: 'slideInFromLeft', duration: '800ms' }
    ]
  },
  {
    image: iptracker,
    title: 'Memory game',
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took.',
    linkCode: 'https://github.com/Samuel-Marien/ip-tracker',
    linkSite: 'https://ip-tracker-dbfta26z5-samuel-marien.vercel.app/',
    techArray: [
      { icon: <DiReact />, type: 'slideInFromRight', duration: '1000ms' },
      {
        icon: <SiTailwindcss />,
        type: 'slideInFromBottom',
        duration: '100ms'
      },
      {
        icon: <TbBrandJavascript />,
        type: 'slideInFromBottom',
        duration: '600ms'
      },
      { icon: <TbApi />, type: 'slideInFromLeft', duration: '800ms' }
    ]
  }
]

export default myProjects
