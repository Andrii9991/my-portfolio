<template>
  <section
    id="about"
    class="flex h-[100%] w-[100%] justify-center bg-white sm:rounded-[70px] xl:rounded-[160px]"
  >
    <div
      class="flex w-fit-content max-w-[1080px] sm:flex-col md:my-8 md:flex-row lg:my-[105px] lg:justify-around"
    >
      <div
        class="flip-box h-auto w-full p-4 md:max-h-[500px] md:max-w-[398px] lg:max-h-[588px] lg:max-w-[468px]"
      >
        <div class="flip-box-inner">
          <div
            v-for="item in avatarImages"
            :key="item.title"
            :class="item.style"
          >
            <img
              class="rounded-3xl object-cover shadow-lg"
              :src="item.photo"
              :alt="item.title"
            />
          </div>
        </div>
      </div>
      <div
        class="ml-20 flex w-[50%] flex-col items-center md:ml-2 md:p-4 lg:ml-6"
      >
        <h1
          class="gradient-text text-center font-russoOne md:mb-2 md:text-3xl lg:mb-5 lg:text-5xl"
        >
          About me
        </h1>

        <h3
          class="text-inter justify-center text-center font-semibold leading-10 md:mb-[28px] md:w-[100%] md:text-[30px] lg:mb-[46px] lg:w-[80%] lg:text-[40px]"
        >
          Front-End Developer Vue.js Specialist
        </h3>

        <p class="text-inter text-sm font-light md:leading-6 lg:leading-10">
          Skilled Front-End Developer from Ternopil, Ukraine, with a focus on
          JavaScript and TypeScript. Specializing in Vue2/Vue3 frameworks,
          leveraging Pinia and VueX for seamless state management. Adept at
          crafting responsive, user-friendly interfaces through clean, optimized
          code. Strong analytical and problem-solving skills, coupled with a
          collaborative mindset, make me an asset to forward-thinking teams
          aiming to build innovative web solutions.
        </p>

        <div class="flex w-[100%] gap-3 md:mt-16 lg:mt-[90px]">
          <a href="https://github.com/Andrii9991">
            <img
              class="h-[55px] w-[55px]"
              src="../../public/img/social-images/github.svg"
              alt="Github"
            />
          </a>
          <a href="http://www.linkedin.com/in/andrii-myshchyshyn-36a64b228">
            <img
              class="h-[55px] w-[55px]"
              src="../../public/img/social-images/linkedin.svg"
              alt="Github"
          /></a>

          <PButton class="ml-5" text="PORTFOLIO" />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import PButton from '../general-Ui/PButton.vue'

const avatarImages = ref([
  {
    photo: '/img/basic-images/avatar.svg',
    title: 'front-avatar',
    style: 'flip-box-front',
  },
  {
    photo: '/img/basic-images/back-avatar.svg',
    title: 'back-avatar',
    style: 'flip-box-back',
  },
])
</script>

<style>
.flip-box {
  background-color: transparent;
  perspective: 1000px;
  cursor: pointer;
}

.flip-box-inner {
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  transition: transform 0.5s;
  transform-style: preserve-3d;
}

.flip-box:hover .flip-box-inner {
  transform: rotateY(180deg);
}

.flip-box-front,
.flip-box-back {
  position: absolute;
  width: 100%;
  height: 100%;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
}

.flip-box-back {
  transform: rotateY(180deg);
}
</style>
