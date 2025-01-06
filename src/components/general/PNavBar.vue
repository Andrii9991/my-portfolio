<template>
  <nav class="">
    <ul class="font-inter flex items-center gap-x-8">
      <li
        v-for="item in navItems"
        :key="item.id"
        class="leading-[24px] hover:underline cursor-pointer font-medium"
      >
        <nuxt-link :to="item.router">{{ item.title }}</nuxt-link>
      </li>
    </ul>
  </nav>
</template>

<script setup lang="ts">
const navItems = ref([
  {
    id: "1",
    title: "Home",
    router: "/",
  },
  {
    id: "2",
    title: "About",
    router: "/about",
  },
  {
    id: "3",
    title: "Projects",
    router: "/projects",
  },
  {
    id: "4",
    title: "Contacts",
    router: "/contacts",
  },
]);
</script>
