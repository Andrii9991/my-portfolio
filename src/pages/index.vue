<template>
  <div class="flex max-w-[100%] flex-col items-center bg-lightGrey">
    <FirstScreen />
    <!-- <TheAbout /> -->
    <TheProjects class="mt-[1000px]" />
  </div>
</template>

<script setup lang="ts">
import FirstScreen from '~/components/blocks/FirstScreen.vue'
import TheAbout from '~/components/blocks/TheAbout.vue'
import TheProjects from '~/components/blocks/TheProjects.vue'
</script>
