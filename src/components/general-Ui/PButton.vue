<template>
  <div>
    <button
      class="button-custom rounded-[30px] px-2 py-3 font-russoOne text-[12px] text-white md:px-[48px] md:py-[16px] lg:rounded-[50px]"
    >
      {{ text }}
    </button>
  </div>
</template>

<script setup lang="ts">
defineProps({
  text: String,
})
</script>
