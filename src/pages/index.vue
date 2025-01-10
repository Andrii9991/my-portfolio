<template>
  <div class="max-w-[100%] bg-lightGrey flex flex-col items-center">
    <FirstScreen />
    <TheAbout />
    <TheProjects class="mt-[1000px]" />
  </div>
</template>

<script setup lang="ts">
import FirstScreen from "~/components/blocks/FirstScreen.vue";
import TheAbout from "~/components/blocks/TheAbout.vue";
import TheProjects from "~/components/blocks/TheProjects.vue";
</script>
