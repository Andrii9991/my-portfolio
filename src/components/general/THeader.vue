<template>
  <header class="w-[100%] h-[100px] shadow-custom flex justify-center">
    <div class="w-[100%] flex justify-around items-center">
      <nuxt-link to="/">
        <img
          class="w-[162px] h-[55px]"
          src="../../assets/img/logo.svg"
          alt="logo"
        />
      </nuxt-link>
      <nav>
        <ul class="flex space-x-4 font-inter">
          <li class="leading-[24px] hover:underline cursor-pointer font-medium">
            Home
          </li>
          <li class="leading-[24px] hover:underline cursor-pointer font-medium">
            About
          </li>
          <li class="leading-[24px] hover:underline cursor-pointer font-medium">
            Projects
          </li>
          <li class="leading-[24px] hover:underline cursor-pointer font-medium">
            Contacts
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>
