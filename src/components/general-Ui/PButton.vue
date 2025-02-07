<template>
  <div>
    <a
      href="https://t.me/Andrii_991"
      class="button-custom h-full rounded-[30px] px-2 py-3 font-russoOne text-[12px] text-white lg:rounded-[50px] lg:px-8 lg:py-6"
    >
      {{ text }}
    </a>
  </div>
</template>

<script setup lang="ts">
defineProps({
  text: String,
})
</script>
