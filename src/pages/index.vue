<template>
  <div
    class="flex max-w-[100%] flex-col items-center bg-white px-[3rem] md:bg-lightGrey md:px-0"
  >
    <FirstScreen />
    <TheAbout />
    <TheProjects />
  </div>
</template>

<script setup lang="ts">
import FirstScreen from '~/components/blocks/FirstScreen.vue'
import TheAbout from '~/components/blocks/TheAbout.vue'
import TheProjects from '~/components/blocks/TheProjects.vue'
</script>
