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
      'Ce projet a pour objectif de situer sur une carte géographique une adresse IP passée en paramètre dans le formulaire. Pour ce faire je fais appelle a deux APIs distinctes : Google map et Ip Registry. Le formulaire accepte uniquement des adresses IP aux bon format. En plus de la géolocalisation, on accède à certaines informations notamment : adresse, type de port, le réseau …',
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
      'Un jeu de cartes classique pour développer sa mémoire. Vous pouvez choisir la difficulté et le type d’illustration, dépêchez vous le temps est compté ! Ce grand standard des exercices de code m’a permis de bien jouer avec React et ses Hooks. Prochaine étape : enregistrer les meilleurs scores !',
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
      'Ce projet plus ambitieux que les précédents à pour objectif de fournir un base de données visuel pour les fans d’un célèbre jeu vidéo. On peut rechercher tous les items du jeu et consulter les nombreuses caractéristiques des objets demandées. À terme, les enregistrer dans son espace personnel et ainsi gérer sa collection. L’idée dans la construction de ce projet est de découvrir RedwoodJs, PostgreSQL et GraphQL. Le site est toujours en cours de développement et il reste encore de nombreuses fonctionnalités à ajouter.',
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
      'Ah ! Le portfolio, l’idée assez flagrante du site est de présenter mon travail et de prendre contact 👋. J’ai beaucoup aimé développer cette application et découvrir certaines librairies pour les animations, le design part d’un template sur Figma, un outil avec lequel j’aime particulièrement travaillé.',
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
