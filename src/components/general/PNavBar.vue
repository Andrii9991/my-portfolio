<template>
  <nav>
    <ul class="flex items-center font-inter sm:gap-x-8">
      <li
        v-for="item in store.navItems"
        :key="item.id"
        class="cursor-pointer font-medium leading-[24px] hover:underline"
      >
        <nuxt-link :to="item.href">{{ item.title }}</nuxt-link>
      </li>
    </ul>
  </nav>
</template>

<script setup lang="ts">
import { navBarDefineStore } from '~/stores/navbar'

const store = navBarDefineStore()
</script>
