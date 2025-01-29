<template>
  <section
    id="about"
    class="flex h-[100%] w-[100%] justify-center bg-white p-5 sm:rounded-t-[70px] xl:rounded-t-[160px]"
  >
    <!-- Wrapper -->
    <div
      class="flex w-fit-content max-w-[1080px] flex-col xs:flex-row md:my-8 md:flex-row lg:my-[100px] lg:justify-around"
    >
      <!-- Image Block -->
      <div
        class="flip-box flex h-auto w-full min-w-[40%] justify-center md:max-h-[500px] md:max-w-[398px] lg:max-h-[588px] lg:max-w-[468px]"
      >
        <div class="flip-box-inner max-w-[100%]">
          <div
            v-for="item in avatarImages"
            :key="item.title"
            :class="item.style"
          >
            <img
              class="m-auto rounded-3xl object-cover shadow-lg sm:max-h-[350px]"
              :src="item.photo"
              :alt="item.title"
            />
          </div>
        </div>
      </div>

      <!-- Content Block -->
      <div
        class="mt-4 flex flex-col items-center text-center xs:ml-4 md:ml-2 md:p-4 lg:ml-20"
      >
        <h1
          class="gradient-text text-center font-russoOne text-[20px] md:mb-2 md:text-3xl lg:mb-5 lg:text-5xl"
          data-aos="fade-up"
        >
          About me
        </h1>

        <h3
          class="text-inter justify-center text-center text-base font-semibold leading-10 md:mb-[28px] md:w-[100%] md:text-[30px] lg:mb-[46px] lg:w-[80%] lg:text-[40px]"
        >
          Front-End Developer Vue.js Specialist
        </h3>

        <p
          data-aos="flip-left"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="1000"
          class="text-inter mb-5 text-[12px] font-light leading-5 md:leading-6 lg:text-[12px] lg:leading-10"
        >
          Skilled Front-End Developer from Ternopil, Ukraine, with a focus on
          JavaScript and TypeScript. Specializing in Vue2/Vue3 frameworks,
          leveraging Pinia and VueX for seamless state management. Adept at
          crafting responsive, user-friendly interfaces through clean, optimized
          code. Strong analytical and problem-solving skills, coupled with a
          collaborative mindset, make me an asset to forward-thinking teams
          aiming to build innovative web solutions.
        </p>

        <div
          data-aos="fade-right"
          class="flex w-[100%] gap-3 md:mt-16 lg:mt-[90px]"
        >
          <a href="https://github.com/Andrii9991">
            <img
              class="max-h-[40px] max-w-[40px] md:h-[55px] md:w-[55px]"
              src="../../public/img/social-images/github.svg"
              alt="Github"
            />
          </a>
          <a href="http://www.linkedin.com/in/andrii-myshchyshyn-36a64b228">
            <img
              class="max-h-[40px] max-w-[40px] md:h-[55px] md:w-[55px]"
              src="../../public/img/social-images/linkedin.svg"
              alt="Github"
          /></a>

          <PButton class="ml-[150px] xs:ml-2" text="PORTFOLIO" />
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
.flip-box-back {
  display: none;
}

@media (min-width: 767px) {
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
    display: block;
    position: absolute;
    width: 100%;
    height: 100%;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
  }

  .flip-box-back {
    transform: rotateY(180deg);
  }
}
</style>
