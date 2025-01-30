<template>
  <section
    class="flex w-full justify-center from-[#8F98A4] to-[#DBEBFF] pb-12 md:bg-gradient-to-tr lg:mt-[-120px] xl:rounded-t-[160px]"
    id="projects"
  >
    <!-- Wrapper -->
    <div
      class="mt-6 grid w-full max-w-7xl grid-cols-[repeat(auto-fill,minmax(200px,80%))] justify-center gap-3 md:grid-cols-[repeat(auto-fill,minmax(330px,1fr))]"
    >
      <!-- Container -->
      <div
        data-aos="fade-up"
        v-for="project in projectsData"
        :key="project.title"
        class="mx-2 mt-6 flex flex-col items-center rounded-[30px] bg-lightGrey p-6 xs:p-4"
      >
        <img
          class="mb-3 cursor-pointer duration-200 hover:scale-105"
          :src="project.image"
          alt="project-image"
        />

        <h1 class="gradient-text mb-3 font-russoOne text-xl font-normal">
          {{ project.title }}
        </h1>
        <p class="mb-3 font-inter text-[10px] font-light leading-4">
          {{ project.description }}
        </p>
        <!-- Technologies block -->
        <div class="flex items-start justify-center">
          <strong class="mr-[4px] mt-[6px] font-inter text-[10px] font-medium"
            >Technologies:
          </strong>
          <div>
            <span
              class="mx-[2px] whitespace-normal rounded-lg bg-white px-1 py-[2px] text-[10px]"
              v-for="tech in project.technologies"
              :key="tech"
              >{{ tech }}
            </span>
          </div>
        </div>
        <!-- Link for site block -->
        <div class="my-3 flex w-full justify-center">
          <a href="goole.com">
            <span class="text-[10px] font-medium leading-[28px]"
              >Live Demo</span
            >
            <img
              class="duration-200 hover:scale-105"
              src="../../public/img/projects-image/link-image/livedemo.svg"
              alt="link for site"
            />
          </a>
          <a class="ml-4" href="goole.com">
            <span class="text-[10px] font-medium leading-[28px]">Code</span>
            <img
              class="duration-200 hover:scale-105"
              src="../../public/img/projects-image/link-image/github.svg"
              alt="link for code"
            />
          </a>
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
    technologies: ['Vue ', 'VueX ', 'Pinia ', 'Scss ', 'Html ', 'Css '],
  },
  {
    title: 'TASK MANAGER',
    description:
      'A web service for task and project management. This tool enables users to create projects and tasks, organize them, and set priorities;',
    image: '/img/projects-image/task-manager.svg',
    technologies: ['Vue ', 'VueX ', 'Pinia ', 'Scss ', 'Html ', 'Css '],
  },
  {
    title: 'DESTUP DETAILING',
    description:
      'Commercial project for a car detailing studio. Developing a website layout, connecting a FireBase database, and integrating with a Telegram chat for receiving orders',
    image: '/img/projects-image/destup.svg',
    technologies: ['Vue ', 'VueX ', 'Pinia ', 'Scss ', 'Html ', 'Css '],
  },
  {
    title: 'RELVISE',
    description:
      'My first project when I started learning HTML and CSS. Implemented adaptive layout, and responsive images. Ensured code validity using validators.',
    image: '/img/projects-image/relvise.svg',
    technologies: ['Vue ', 'VueX ', 'Pinia ', 'Scss ', 'Html ', 'Css '],
  },
  {
    title: 'QTECH',
    description:
      'A website for selling electronics. Utilizing an open API, Firebase authentication, and Firestore for the database',
    image: '/img/projects-image/qtech.svg',
    technologies: ['Vue ', 'VueX ', 'Pinia ', 'Scss ', 'Html ', 'Css '],
  },
])
</script>
