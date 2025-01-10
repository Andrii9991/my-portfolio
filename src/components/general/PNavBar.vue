<template>
  <nav>
    <ul class="font-inter flex items-center gap-x-8">
      <li
        v-for="item in store.navItems"
        :key="item.id"
        class="leading-[24px] hover:underline cursor-pointer font-medium"
      >
        <nuxt-link :to="item.href">{{ item.title }}</nuxt-link>
      </li>
    </ul>
  </nav>
</template>

<script setup lang="ts">
import { navBarDefineStore } from "~/stores/navbar";

const store = navBarDefineStore();
</script>
