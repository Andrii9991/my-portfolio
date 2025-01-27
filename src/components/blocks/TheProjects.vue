<template>
  <section
    class="flex w-full justify-center bg-gradient-to-tr from-[#8F98A4] to-[#DBEBFF] lg:mt-[-120px] xl:rounded-t-[160px]"
    id="projects"
  >
    <!-- Wrapper -->
    <div
      class="mt-6 grid w-full max-w-7xl grid-cols-[repeat(auto-fill,minmax(363px,1fr))] gap-4"
    >
      <!-- Container -->
      <div
        v-for="project in projectsData"
        :key="project.title"
        class="mx-2 mt-6 flex flex-col items-center rounded-[30px] bg-lightGrey p-6"
      >
        <img
          class="left-0 top-0 mb-6"
          :src="project.image"
          alt="project-image"
        />

        <h1 class="gradient-text mb-8 font-russoOne text-xl font-normal">
          {{ project.title }}
        </h1>
        <p class="mb-10 font-inter text-[10px] font-light leading-4">
          My first project when I started learning HTML and CSS. Implemented
          adaptive layout, and responsive images
        </p>
        <!-- Link buttons -->
        <div class="flex">
          <img
            class="h-[33px] w-[33px]"
            src="../../public/img/social-images/linkedin.svg"
            alt="linkedin"
          />
          <img
            class="ml-[12px] h-[33px] w-[33px]"
            src="../../public/img/social-images/github.svg"
            alt="github"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const projectsData = ref([
  {
    title: 'ACTIVE BOX',
    description:
      'My first project when I started learning HTML and CSS. Implemented adaptive layout, and responsive images. ',
    image: '/img/projects-image/activebox.svg',
  },
  {
    title: 'TASK MANAGER',
    description:
      'A web service for task and project management. This tool enables users to create projects and tasks, organize them, and set priorities;',
    image: '/img/projects-image/task-manager.svg',
  },
  {
    title: 'DESTUP DETAILING',
    description:
      'Commercial project for a car detailing studio. Developed a website layout, connected a Firebase database, and integrated with a Telegram chat for receiving orders.',
    image: '/img/projects-image/destup.svg',
  },
  {
    title: 'RELVISE',
    description:
      'My first project when I started learning HTML and CSS. Implemented adaptive layout, and responsive images. Ensured code validity using validators.',
    image: '/img/projects-image/relvise.svg',
  },
  {
    title: 'QTECH',
    description:
      'Developed a website with an open API and Firebase for authentication. Created responsive product cards and a functional shopping cart, showcasing skills in API integration, user authentication, and adaptive e-commerce design.',
    image: '/img/projects-image/qtech.svg',
  },
])
</script>
