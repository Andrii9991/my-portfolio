<template>
  <header
    class="flex max-w-[100%] justify-center py-4 shadow-custom sm:h-[100px]"
    :class="{ isMenuOpen: 'overflow-hidden' }"
  >
    <div class="flex w-[100%] items-center justify-between px-5">
      <nuxt-link to="/">
        <img
          class="max-h-[39px] max-w-[113px] md:max-h-[55px] md:max-w-[162px]"
          src="/img/logo.svg"
          alt="logo"
        />
      </nuxt-link>

      <div class="hidden sm:flex">
        <PNavBar />
      </div>

      <div class="flex items-center justify-center sm:hidden">
        <button @click="toggleMenu" class="text-black">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            class="h-8 w-8"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </button>
      </div>
    </div>

    <PMobileMenu v-model="isMenuOpen" />
  </header>
</template>

<script setup lang="ts">
const isMenuOpen = ref(false)

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}
</script>
