<template>
  <section
    id="about"
    class="flex h-[100%] w-[100%] justify-center bg-white p-5 sm:rounded-t-[70px] lg:mt-[-150px] xl:rounded-t-[160px] xl:pb-[100px]"
  >
    <!-- Wrapper -->
    <div
      class="w-full-content flex max-w-7xl flex-col md:my-8 md:flex-row lg:my-[100px] lg:justify-around"
    >
      <!-- Image Block -->
      <div class="flex w-full justify-center">
        <div class="">
          <div>
            <img
              class="w-full max-w-[300px] md:max-h-[573px] md:max-w-full"
              src="../../public/img/basic-images/back-avatar.svg"
              alt="avatar image"
            />
          </div>
        </div>
      </div>

      <!-- Content Block -->
      <div
        class="m-4 flex w-full flex-col items-center text-center xs:ml-4 md:ml-2 md:max-w-[50%] md:p-4 lg:ml-20"
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
          class="text-inter mb-5 max-w-[80%] text-left text-[12px] font-light leading-5 md:leading-6 lg:text-[14px] lg:leading-10"
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
          class="flex w-[100%] justify-center gap-3 md:mt-16 lg:mt-1"
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
</script>
