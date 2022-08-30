import React from 'react'

import iptracker from '../components/assets/iptracker.png'
import memory from '../components/assets/memory.png'
import acnh from '../components/assets/acnh.png'
import portfolio from '../components/assets/portfolio.png'

import { DiReact, DiCss3 } from 'react-icons/di'
import { SiTailwindcss, SiRedwoodjs, SiGraphql, SiPrisma } from 'react-icons/si'
import { TbBrandJavascript, TbApi, TbBrandNextjs } from 'react-icons/tb'

const myProjects = [
  {
    image: iptracker,
    title: 'Ip Tracker',
    description:
      'Ip Tracker : Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    linkCode: 'https://github.com/Samuel-Marien/ip-tracker',
    linkSite: 'https://ip-tracker-dbfta26z5-samuel-marien.vercel.app/',
    techArray: [
      { icon: <DiReact />, type: 'slideInFromRight', duration: '1000ms' },
      {
        icon: <SiTailwindcss />,
        type: 'slideInFromBottom',
        duration: '400ms'
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
    image: memory,
    title: 'Memory game',
    description:
      'Memory game : Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    linkCode: 'https://github.com/Samuel-Marien/memory',
    linkSite: 'https://memory-lime.vercel.app/',
    techArray: [
      { icon: <DiReact />, type: 'slideInFromRight', duration: '1000ms' },

      {
        icon: <TbBrandJavascript />,
        type: 'slideInFromBottom',
        duration: '600ms'
      },
      {
        icon: <SiTailwindcss />,
        type: 'slideInFromLeft',
        duration: '300ms'
      },
      {
        icon: <TbBrandNextjs />,
        type: 'slideInFromTop',
        duration: '600ms'
      }
    ]
  },
  {
    image: acnh,
    title: 'AcnH Ultimate DB',
    description:
      'AcnH Ultimate DB : Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    linkCode: 'https://github.com/Samuel-Marien/redwood-acnh-DB',
    linkSite: 'https://ayhan-island.netlify.app/',
    techArray: [
      {
        icon: <SiRedwoodjs />,
        type: 'slideInFromLeft',
        duration: '800ms'
      },
      {
        icon: <SiTailwindcss />,
        type: 'slideInFromLeft',
        duration: '600ms'
      },
      {
        icon: <SiGraphql />,
        type: 'slideInFromBottom',
        duration: '1000ms'
      },

      { icon: <DiReact />, type: 'slideInFromRight', duration: '1000ms' },
      { icon: <SiPrisma />, type: 'slideInFromTop', duration: '500ms' }
    ]
  },
  {
    image: portfolio,
    title: 'Portfolio',
    description:
      'Portfolio : Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    linkCode: 'https://github.com/Samuel-Marien/portfolio',
    linkSite: null,
    techArray: [
      { icon: <DiReact />, type: 'slideInFromRight', duration: '1000ms' },
      { icon: <DiCss3 />, type: 'slideInFromLeft', duration: '800ms' },
      {
        icon: <TbBrandJavascript />,
        type: 'slideInFromBottom',
        duration: '600ms'
      },
      {
        icon: <SiTailwindcss />,
        type: 'slideInFromLeft',
        duration: '600ms'
      }
    ]
  }
]

export default myProjects
