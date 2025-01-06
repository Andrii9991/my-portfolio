<template>
  <nav>
    <ul class="font-inter flex items-center gap-x-8">
      <li
        v-for="item in navItems"
        :key="item.id"
        class="leading-[24px] hover:underline cursor-pointer font-medium"
      >
        <nuxt-link :to="item.href">{{ item.title }}</nuxt-link>
      </li>
    </ul>
  </nav>
</template>

<script setup lang="ts">
const navItems = ref([
  {
    active: false,
    id: "1",
    title: "Home",
    href: "#home",
  },
  {
    active: false,
    id: "2",
    title: "About",
    href: "#about",
  },
  {
    active: false,
    id: "3",
    title: "Projects",
    href: "#projects",
  },
  {
    active: false,
    id: "4",
    title: "Contacts",
    href: "#contacts",
  },
]);
</script>
