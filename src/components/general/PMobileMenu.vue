<template>
  <div
    class="fixed inset-0 z-40 flex flex-col items-center bg-black bg-opacity-90 text-white transition-transform duration-500 md:hidden"
    :class="{
      'translate-x-[-100%]': !modelValue,
      'translate-x-0': modelValue,
    }"
  >
    <img
      src="/img/basic-images/close.svg"
      @click="closeMenu"
      class="absolute right-2 top-2 h-8 w-8 cursor-pointer"
    />
    <ul class="mt-10 space-y-6 text-center text-xl">
      <li v-for="item in navItems" :key="item.id" class="hover:text-gray-400">
        <nuxt-link :to="item.href" @click="closeMenu">
          {{ item.title }}
        </nuxt-link>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { navBarDefineStore } from '~/stores/navbar'

const { navItems } = storeToRefs(navBarDefineStore())

const modelValue = defineModel<boolean>('modelValue', { default: false })

const closeMenu = () => {
  modelValue.value = !modelValue.value
}
</script>
