<template>
  <div>
    <button
      class="button-custom text-white px-[48px] font-russoOne py-[16px] rounded-[50px]"
    >
      {{ text }}
    </button>
  </div>
</template>

<script setup lang="ts">
defineProps({
  text: String,
});
</script>
