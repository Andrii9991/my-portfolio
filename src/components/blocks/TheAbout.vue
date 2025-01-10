<template>
  <section
    id="about"
    class="w-[100%] h-[100%] xl:rounded-[160px] sm:rounded-[90px] bg-white flex justify-center"
  >
    <div class="w-fit-content my-[105px] max-w-[1280px] flex justify-around">
      <div class="flip-box w-[468px] h-[588px]">
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
      <div class="flex flex-col items-center w-[50%]">
        <h1
          class="font-russoOne text-[58px] text-center gradient-text mb-[20px]"
        >
          About me
        </h1>

        <h3
          class="text-4xl w-[70%] text-inter text-center justify-center font-semibold mb-[84px]"
        >
          Front-End Developer Vue.js Specialist
        </h3>

        <p class="text-inter text-sm font-light leading-8">
          Skilled Front-End Developer from Ternopil, Ukraine, with a focus on
          JavaScript and TypeScript. Specializing in Vue2/Vue3 frameworks,
          leveraging Pinia and VueX for seamless state management. Adept at
          crafting responsive, user-friendly interfaces through clean, optimized
          code. Strong analytical and problem-solving skills, coupled with a
          collaborative mindset, make me an asset to forward-thinking teams
          aiming to build innovative web solutions.
        </p>

        <div class="flex w-[100%] mt-20 gap-3">
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
