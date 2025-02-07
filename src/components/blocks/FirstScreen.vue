<template>
  <section
    id="home"
    class="flex w-[100%] flex-col items-center bg-lightGrey from-[#8F98A4] to-[#DBEBFF] lg:bg-gradient-to-tr lg:pb-[150px]"
  >
    <!-- Wrapper block -->
    <div class="flex w-full max-w-7xl justify-center lg:justify-between">
      <!-- Content block -->
      <div class="flex flex-col items-center px-5">
        <h1
          class="gradient-text my-3 bg-custom-gradient text-center font-russoOne text-xl sm:mb-4 sm:mt-10 sm:px-2 sm:text-5xl md:mb-[50px] md:mt-20 md:text-8xl md:leading-[96px] lg:mb-5 lg:text-[80px]"
        >
          Front-End Developer
        </h1>

        <h2
          class="text-center font-inter text-base font-medium leading-[28px] sm:text-3xl md:text-[49px] lg:text-5xl"
        >
          Hi, I'm Andrii Myshchyshyn
        </h2>

        <h4
          class="text-custom mt-3 max-w-[632px] px-2 text-center text-xs leading-5 xs:max-w-[80%] sm:mt-4 md:mt-6 md:text-[16px] lg:mb-14 lg:w-full lg:max-w-[610px] lg:text-base lg:leading-6"
        >
          Diligent Frontend Developer with expertise in JavaScript and
          TypeScript, specializing <br class="hidden xl:block" />
          in Vue2/Vue3 and employing Pinia/VueX for efficient state management.
        </h4>
        <div
          class="my-4 flex flex-wrap justify-center gap-1 px-3 xs:max-w-[80%] xs:gap-x-2 xs:px-3 sm:my-5 sm:gap-4 sm:px-5 md:mb-[64px] md:mt-[77px] md:max-w-[740px] md:gap-x-8 lg:mt-0"
        >
          <a
            :href="item.link"
            v-for="item in skilsStore.skilItems"
            :key="item.id"
          >
            <img
              class="h-[35px] w-[35px] xs:h-[40px] xs:w-[40px] md:h-[60px] md:w-[60px]"
              :src="item.image"
              :alt="item.title"
              loading="lazy"
            />
          </a>
        </div>
      </div>

      <!-- Image wrapper -->
      <div class="hidden items-end lg:flex">
        <img
          class="w-full lg:min-w-[500px]"
          src="/img/basic-images/first-screen-photo.svg"
          alt="avatar-image"
        />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { skillsDefineStore } from '../../stores/skills'

const skilsStore = skillsDefineStore()
</script>
