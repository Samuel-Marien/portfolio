import React from 'react'

// import iptracker from '../components/assets/iptracker.png'
// import memory from '../components/assets/memory.png'
import acnh from '../components/assets/acnh.png'
import portfolio from '../components/assets/portfolio.png'
import bkm from '../components/assets/bkm2.png'
import jobify from '../components/assets/jobify2.png'

import { DiReact, DiCss3, DiMongodb, DiNodejsSmall } from 'react-icons/di'
import {
  SiTailwindcss,
  SiRedwoodjs,
  SiGraphql,
  SiPrisma,
  SiStyledcomponents
} from 'react-icons/si'
import { TbBrandJavascript, TbApi, TbBrandNextjs } from 'react-icons/tb'

const myProjects = [
  // {
  //   image: iptracker,
  //   title: 'Ip Tracker',
  //   description:
  //     'Ce projet a pour objectif de situer sur une carte géographique une adresse IP passée en paramètre dans le formulaire. Pour ce faire je fais appelle à deux APIs distinctes : Google map et Ip Registry. Le formulaire accepte uniquement des adresses IP au bon format. En plus de la géolocalisation, on accède à certaines informations : adresse, type de port, le réseau …',
  //   linkCode: 'https://github.com/Samuel-Marien/ip-tracker',
  //   linkSite: 'https://ip-tracker-dbfta26z5-samuel-marien.vercel.app/',
  //   techArray: [
  //     { icon: <DiReact />, type: 'slideInFromRight', duration: '1000ms' },
  //     {
  //       icon: <SiTailwindcss />,
  //       type: 'slideInFromBottom',
  //       duration: '400ms'
  //     },
  //     {
  //       icon: <TbBrandJavascript />,
  //       type: 'slideInFromBottom',
  //       duration: '600ms'
  //     },
  //     { icon: <TbApi />, type: 'slideInFromLeft', duration: '800ms' }
  //   ]
  // },
  // {
  //   image: memory,
  //   title: 'Memory game',
  //   description:
  //     'Un jeu de cartes classique pour développer sa mémoire. Vous pouvez choisir la difficulté et le type d’illustration, dépêchez vous le temps est compté ! Ce grand standard des exercices de code m’a permis de bien jouer avec React et ses Hooks. Prochaine étape : enregistrer les meilleurs scores !',
  //   linkCode: 'https://github.com/Samuel-Marien/memory',
  //   linkSite: 'https://memory-lime.vercel.app/',
  //   techArray: [
  //     { icon: <DiReact />, type: 'slideInFromRight', duration: '1000ms' },

  //     {
  //       icon: <TbBrandJavascript />,
  //       type: 'slideInFromBottom',
  //       duration: '600ms'
  //     },
  //     {
  //       icon: <SiTailwindcss />,
  //       type: 'slideInFromLeft',
  //       duration: '300ms'
  //     },
  //     {
  //       icon: <TbBrandNextjs />,
  //       type: 'slideInFromTop',
  //       duration: '600ms'
  //     }
  //   ]
  // },
  {
    image: acnh,
    title: 'AcnH Ultimate DB',
    description:
      'Ce projet a pour objectif de fournir une base de données visuelle pour les fans d’un célèbre jeu vidéo. On peut rechercher tous les items du jeu et consulter les nombreuses caractéristiques des objets demandés. À terme, les enregistrer dans son espace personnel et ainsi gérer sa collection. L’idée dans la construction de ce projet est de découvrir RedwoodJs, PostgreSQL et GraphQL. Le site est toujours en cours de développement et il reste encore de nombreuses fonctionnalités à ajouter.',
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
    image: jobify,
    title: 'JOBIFY track your job search',
    description:
      'Cette application à été développée pour gérer sa recherche d’emploi. iI est question ici de suivre et de manager ses candidatures à l’aide d’ un dashboard complet et intuitif. Un tableau de données permet de visualiser rapidement son avancée sur les mois écoulés. Avec ce projet j’ai révisé mes classiques règles CSS avec Styled-components. J’ai également mieux explorer NodeJs et MongoDB pour implémenter un CRUD simple et fonctionnel.',
    linkCode: 'https://github.com/Samuel-Marien/jobify_Prod',
    linkSite: 'https://jobify-x4gt.onrender.com/landing',
    techArray: [
      { icon: <DiReact />, type: 'slideInFromRight', duration: '1000ms' },
      {
        icon: <SiStyledcomponents />,
        type: 'slideInFromBottom',
        duration: '400ms'
      },
      {
        icon: <TbBrandJavascript />,
        type: 'slideInFromBottom',
        duration: '600ms'
      },
      { icon: <TbApi />, type: 'slideInFromLeft', duration: '800ms' },
      { icon: <DiNodejsSmall />, type: 'slideInFromBottom', duration: '800ms' },
      { icon: <DiMongodb />, type: 'slideInFromTop', duration: '800ms' }
    ]
  },
  {
    image: bkm,
    title: 'BKM - Brooklyn Museum App',
    description:
      'Ce projet présente les œuvres du muséede Brooklyn, au travers deux canaux : les Collections et les expositions en cours et passées. Tous les ouvrages présentés peuvent être sauvegardés dans son espace personnel. L’objectif au travers cette application full stack est de jouer avec l’API public du musée de brooklyn combiné à  une base de données en MongoDB. Le tout servi en NextJs/Tailwind CSS. L’application est toujours en cours de développement, il me reste mille idées et améliorations à implémenter !',
    linkCode: 'https://github.com/Samuel-Marien/museumApp_prod',
    linkSite: 'https://brook-museum.onrender.com/',
    techArray: [
      {
        icon: <TbBrandNextjs />,
        type: 'slideInFromTop',
        duration: '600ms'
      },
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
      { icon: <TbApi />, type: 'slideInFromLeft', duration: '800ms' },
      { icon: <DiNodejsSmall />, type: 'slideInFromBottom', duration: '800ms' },
      { icon: <DiMongodb />, type: 'slideInFromTop', duration: '800ms' }
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
