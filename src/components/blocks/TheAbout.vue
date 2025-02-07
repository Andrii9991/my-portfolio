<template>
  <section
    id="about"
    class="flex h-[100%] w-[100%] justify-center bg-white p-5 sm:rounded-t-[70px] lg:mt-[-150px] xl:rounded-t-[160px] xl:pb-[100px]"
  >
    <!-- Wrapper -->
    <div
      class="w-full-content relative flex max-w-7xl flex-col items-center md:my-8 md:flex-row lg:my-[100px]"
    >
      <!-- Image Block -->
      <div class="flex w-full justify-center">
        <div class="">
          <div>
            <img
              class="w-full max-w-[300px] md:max-h-[573px] md:max-w-full xl:min-h-[673px] xl:min-w-[542px]"
              src="/img/basic-images/back-avatar.svg"
              alt="avatar image"
            />
          </div>
        </div>
      </div>

      <!-- Content Block -->
      <div
        class="m-4 flex w-full flex-col items-center text-center xs:ml-4 md:ml-2 md:max-w-[50%] lg:max-w-full lg:p-4 xl:min-h-[673px] xl:min-w-[542px]"
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
          Front-End Developer <br class="hidden lg:block" />
          Vue.js Specialist
        </h3>

        <p
          class="text-inter lg:font mb-5 max-w-[80%] text-justify text-[12px] font-light leading-5 md:leading-6 lg:text-[18px] lg:leading-10"
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
          class="lg:mt-15 flex w-full max-w-[80%] items-center gap-3 md:mt-[78px] lg:justify-between"
        >
          <div class="flex gap-3">
            <a href="https://github.com/Andrii9991">
              <NuxtImg
                class="max-h-[40px] max-w-[40px] duration-200 hover:scale-110 md:w-[62px] md:max-w-full lg:h-[62px] lg:max-h-full"
                src="/img/social-images/github.svg"
                alt="Github"
                loading="lazy"
              />
            </a>
            <a href="http://www.linkedin.com/in/andrii-myshchyshyn-36a64b228">
              <NuxtImg
                class="max-h-[40px] max-w-[40px] duration-200 hover:scale-110 md:w-[62px] md:max-w-full lg:h-[62px] lg:max-h-full"
                src="/img/social-images/linkedin.svg"
                alt="Github"
                loading="lazy"
            /></a>
          </div>

          <PButton class="xs:ml-2" text="CONTACT ME" />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import PButton from '../general-Ui/PButton.vue'
</script>
