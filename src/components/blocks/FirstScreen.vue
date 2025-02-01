<template>
  <section
    class="flex w-[100%] flex-col items-center bg-lightGrey from-[#8F98A4] to-[#DBEBFF] lg:bg-gradient-to-tr lg:pb-[150px]"
  >
    <!-- Wrapper block -->
    <div class="flex w-full max-w-7xl justify-center lg:justify-between">
      <!-- Content block -->
      <div class="flex flex-col items-center px-5">
        <h1
          class="gradient-text my-3 animate-bounce bg-custom-gradient text-center font-russoOne text-xl sm:mb-4 sm:mt-10 sm:px-2 sm:text-5xl md:mb-[50px] md:mt-20 md:text-8xl md:leading-[96px] lg:mb-5 lg:text-[80px]"
        >
          Front-End Developer
        </h1>

        <h2
          class="text-center font-inter text-base font-medium leading-[28px] sm:text-3xl md:text-[49px] lg:text-5xl"
        >
          Hi, I'm Andrii Myshchyshyn
        </h2>

        <h4
          class="text-custom mt-3 max-w-[632px] px-2 text-center text-xs leading-5 xs:max-w-[80%] sm:mt-4 md:mt-6 md:text-[16px] lg:mb-14 lg:w-auto lg:text-base lg:leading-6"
        >
          Diligent Frontend Developer with expertise in JavaScript and
          TypeScript, specializing in Vue2/Vue3 and employing Pinia/VueX for
          efficient state management.
        </h4>
        <div
          class="my-4 flex flex-wrap justify-center gap-1 px-3 xs:max-w-[80%] xs:gap-x-2 xs:px-3 sm:my-5 sm:gap-4 sm:px-5 md:mb-[64px] md:mt-[77px] md:max-w-[740px] md:gap-x-8 lg:mt-0"
        >
          <img
            class="h-[35px] w-[35px] xs:h-[40px] xs:w-[40px] md:h-[60px] md:w-[60px]"
            v-for="item in skilItems"
            :key="item.id"
            :src="item.image"
            :alt="item.title"
          />
        </div>
      </div>

      <!-- Image wrapper -->
      <div class="hidden items-end lg:flex">
        <img
          class="w-full lg:min-w-[500px]"
          src="../../public/img/basic-images/first-screen-photo.svg"
          alt="avatar-image"
        />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const skilItems = ref<{ id: number; image: string; title: string }[]>([
  {
    id: 1,
    image: '/img/skils-images/1.svg',
    title: 'css',
  },
  {
    id: 2,
    image: '/img/skils-images/2.svg',
    title: 'scss',
  },
  {
    id: 3,
    image: '/img/skils-images/3.svg',
    title: 'git',
  },
  {
    id: 4,
    image: '/img/skils-images/4.svg',
    title: 'webpack',
  },
  {
    id: 5,
    image: '/img/skils-images/5.svg',
    title: 'javascript',
  },
  {
    id: 6,
    image: '/img/skils-images/6.svg',
    title: 'typescript',
  },
  {
    id: 7,
    image: '/img/skils-images/7.svg',
    title: 'vue',
  },

  {
    id: 8,
    image: '/img/skils-images/8.svg',
    title: 'html',
  },
  {
    id: 9,
    image: '/img/skils-images/9.svg',
    title: 'pinia ',
  },
  {
    id: 10,
    image: '/img/skils-images/10.svg',
    title: 'node',
  },
  {
    id: 11,
    image: '/img/skils-images/11.svg',
    title: 'express',
  },
  {
    id: 12,
    image: '/img/skils-images/12.svg',
    title: 'mongodb',
  },
  {
    id: 13,
    image: '/img/skils-images/13.svg',
    title: 'jest',
  },
  {
    id: 14,
    image: '/img/skils-images/14.svg',
    title: 'nuxt',
  },
])
</script>
