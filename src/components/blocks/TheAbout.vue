<template>
  <section
    id="about"
    class="w-[100%] h-[100%] xl:rounded-[160px] sm:rounded-[70px] bg-white flex justify-center"
  >
    <div
      class="w-fit-content lg:my-[105px] md:my-8 max-w-[1080px] flex lg:justify-around sm:flex-col md:flex-row"
    >
      <div
        class="flip-box md:max-w-[398px] lg:max-w-[468px] p-4 md:max-h-[500px] lg:max-h-[588px] w-full h-auto"
      >
        <div class="flip-box-inner">
          <div
            v-for="item in avatarImages"
            :key="item.title"
            :class="item.style"
          >
            <img
              class="object-cover shadow-lg rounded-3xl"
              :src="item.photo"
              :alt="item.title"
            />
          </div>
        </div>
      </div>
      <div
        class="flex flex-col ml-20 lg:ml-6 md:ml-2 md:p-4 items-center w-[50%]"
      >
        <h1
          class="font-russoOne lg:text-5xl md:text-3xl text-center gradient-text lg:mb-5 md:mb-2"
        >
          About me
        </h1>

        <h3
          class="lg:text-[40px] md:text-[30px] leading-10 lg:w-[80%] md:w-[100%] text-inter text-center justify-center font-semibold lg:mb-[46px] md:mb-[28px]"
        >
          Front-End Developer Vue.js Specialist
        </h3>

        <p class="text-inter text-sm font-light lg:leading-10 md:leading-6">
          Skilled Front-End Developer from Ternopil, Ukraine, with a focus on
          JavaScript and TypeScript. Specializing in Vue2/Vue3 frameworks,
          leveraging Pinia and VueX for seamless state management. Adept at
          crafting responsive, user-friendly interfaces through clean, optimized
          code. Strong analytical and problem-solving skills, coupled with a
          collaborative mindset, make me an asset to forward-thinking teams
          aiming to build innovative web solutions.
        </p>

        <div class="flex w-[100%] lg:mt-[90px] md:mt-16 gap-3">
          <a href="https://github.com/Andrii9991">
            <img
              class="w-[55px] h-[55px]"
              src="../../public/img/social-images/github.svg"
              alt="Github"
            />
          </a>
          <a href="http://www.linkedin.com/in/andrii-myshchyshyn-36a64b228">
            <img
              class="w-[55px] h-[55px]"
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
import PButton from "../general-Ui/PButton.vue";

const avatarImages = ref([
  {
    photo: "/img/basic-images/avatar.svg",
    title: "front-avatar",
    style: "flip-box-front",
  },
  {
    photo: "/img/basic-images/back-avatar.svg",
    title: "back-avatar",
    style: "flip-box-back",
  },
]);
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
