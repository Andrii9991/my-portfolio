<template>
  <div>
    <PHeader />

    <main>
      <slot />
    </main>

    <PFooter />
  </div>
</template>

<script setup lang="ts">
useHead({
  title: 'Моє портфоліо | Frontend Developer',
  meta: [
    {
      name: 'description',
      content: 'Портфоліо Frontend розробника. Vue.js, Nuxt.js, Tailwind CSS.',
    },
    { property: 'og:title', content: 'Моє портфоліо | Frontend Developer' },
    {
      property: 'og:description',
      content: 'Досвідчений Frontend розробник з фокусом на Vue.js та Nuxt.js.',
    },
    { property: 'og:image', content: '/preview.jpg' },
    { property: 'og:type', content: 'website' },
    { name: 'twitter:card', content: 'summary_large_image' },
  ],
  link: [
    { rel: 'icon', type: 'image/png', href: '/favicon.png' },
    { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
  ],
})
</script>
