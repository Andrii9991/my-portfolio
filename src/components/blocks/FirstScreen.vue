<template>
  <section class="w-[100%] flex flex-col items-center bg-lightGrey">
    <div class="flex flex-col items-center w-[650px]">
      <h1
        class="bg-custom-gradient animate-bounce mt-20 mb-[50px] gradient-text text-center font-russoOne text-8xl leading-[96px]"
      >
        Front-End Developer
      </h1>

      <h2 class="text-[49px] font-medium leading-[28px] font-inter">
        Hi, I'm Andrii Myshchyshyn
      </h2>

      <h4 class="text-[16px] text-custom leading-7 mt-6 text-left w-[632px]">
        Diligent Frontend Developer with expertise in JavaScript and TypeScript,
        specializing in Vue2/Vue3 and employing Pinia/VueX for efficient state
        management.
      </h4>
      <div
        class="mt-[77px] flex mb-[64px] flex-wrap gap-x-8 gap-y-4 justify-center max-w-[835px]"
      >
        <img
          class="h-[60px] w-[60px]"
          v-for="item in skilItems"
          :key="item.id"
          :src="item.image"
          :alt="item.title"
        />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const skilItems = ref<{ id: number; image: string; title: string }[]>([
  {
    id: 1,
    image: "/img/skils-images/1.svg",
    title: "css",
  },
  {
    id: 2,
    image: "/img/skils-images/2.svg",
    title: "scss",
  },
  {
    id: 3,
    image: "/img/skils-images/3.svg",
    title: "git",
  },
  {
    id: 4,
    image: "/img/skils-images/4.svg",
    title: "webpack",
  },
  {
    id: 5,
    image: "/img/skils-images/5.svg",
    title: "javascript",
  },
  {
    id: 6,
    image: "/img/skils-images/6.svg",
    title: "typescript",
  },
  {
    id: 7,
    image: "/img/skils-images/7.svg",
    title: "vue",
  },

  {
    id: 8,
    image: "/img/skils-images/8.svg",
    title: "html",
  },
  {
    id: 9,
    image: "/img/skils-images/9.svg",
    title: "pinia ",
  },
  {
    id: 10,
    image: "/img/skils-images/10.svg",
    title: "node",
  },
  {
    id: 11,
    image: "/img/skils-images/11.svg",
    title: "express",
  },
  {
    id: 12,
    image: "/img/skils-images/12.svg",
    title: "mongodb",
  },
  {
    id: 13,
    image: "/img/skils-images/13.svg",
    title: "jest",
  },
  {
    id: 14,
    image: "/img/skils-images/14.svg",
    title: "nuxt",
  },
]);
</script>
