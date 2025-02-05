import { defineStore } from 'pinia'
import type { ISkills } from '~/interfaces/skills'

export const skillsDefineStore = defineStore('skilItems', () => {
  const skilItems = ref<ISkills[]>([
    {
      id: 1,
      image: '/img/skils-images/1.svg',
      title: 'css',
      link: 'https://www.w3.org/Style/CSS/Overview.en.html',
    },
    {
      id: 2,
      image: '/img/skils-images/2.svg',
      title: 'scss',
      link: 'https://sass-lang.com/',
    },
    {
      id: 3,
      image: '/img/skils-images/3.svg',
      title: 'git',
      link: 'https://git-scm.com/',
    },
    {
      id: 4,
      image: '/img/skils-images/4.svg',
      title: 'webpack',
      link: 'https://webpack.js.org/',
    },
    {
      id: 5,
      image: '/img/skils-images/5.svg',
      title: 'javascript',
      link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
    },
    {
      id: 6,
      image: '/img/skils-images/6.svg',
      title: 'typescript',
      link: 'https://www.typescriptlang.org/',
    },
    {
      id: 7,
      image: '/img/skils-images/7.svg',
      title: 'vue',
      link: 'https://vuejs.org/guide/introduction',
    },

    {
      id: 8,
      image: '/img/skils-images/8.svg',
      title: 'html',
      link: 'https://html.spec.whatwg.org/',
    },
    {
      id: 9,
      image: '/img/skils-images/9.svg',
      title: 'pinia ',
      link: 'https://pinia.vuejs.org/',
    },
    {
      id: 10,
      image: '/img/skils-images/10.svg',
      title: 'node',
      link: 'https://nodejs.org/uk',
    },
    {
      id: 11,
      image: '/img/skils-images/11.svg',
      title: 'express',
      link: 'https://expressjs.com/',
    },
    {
      id: 12,
      image: '/img/skils-images/12.svg',
      title: 'mongodb',
      link: 'https://www.mongodb.com/',
    },
    {
      id: 13,
      image: '/img/skils-images/13.svg',
      title: 'jest',
      link: 'https://jestjs.io/',
    },
    {
      id: 14,
      image: '/img/skils-images/14.svg',
      title: 'nuxt',
      link: 'https://nuxt.com/docs/getting-started/installation',
    },
  ])

  return {
    skilItems,
  }
})
