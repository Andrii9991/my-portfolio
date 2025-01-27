<template>
  <footer
    class="mt-12 flex h-[300px] flex-col items-center rounded-t-[30px] bg-lightGrey px-8 py-3 xs:px-10 xs:py-4 md:rounded-t-[50px] md:px-16"
    id="contacts"
  >
    <h1
      class="gradient-text py-[12px] font-russoOne text-xl font-normal xs:text-2xl md:text-3xl"
    >
      CONTACT
    </h1>

    <div class="flex w-full flex-col xs:flex-row">
      <!-- Main -->
      <div
        class="flex w-full flex-col justify-center space-y-5 xs:space-y-7 lg:flex-row lg:gap-x-9 lg:space-y-0"
      >
        <!-- Location -->
        <a
          href="https://tailwindcss.com/docs/font-weight"
          class="flex items-center space-x-2"
        >
          <img
            src="../../public/img/contacts-images/location.svg"
            alt="some photo"
            class="h-9 w-9 translate-y-1 xs:h-12 xs:w-12 md:h-14 md:w-14"
          />

          <div class="flex flex-col">
            <strong
              class="font-russoOne text-[14px] font-normal md:text-[18px]"
            >
              Location
            </strong>

            <span class="text-[10px] md:text-[14px]"> Ternopil, Ukraine </span>
          </div>
        </a>
        <!-- Mail -->
        <a
          href="mailto:andriymyshchyshyn6@gmail.com"
          class="flex items-center space-x-2"
        >
          <img
            src="../../public/img/contacts-images/mail.svg"
            alt="some photo"
            class="h-9 w-9 translate-y-1 xs:h-12 xs:w-12 md:h-14 md:w-14"
          />

          <div class="flex flex-col">
            <strong
              class="font-russoOne text-[14px] font-normal md:text-[18px]"
            >
              Email
            </strong>

            <span class="text-[10px] md:text-[14px]">
              andriymyshchyshyn6@gmail.com
            </span>
          </div>
        </a>
        <!-- Phone -->

        <a href="tel: +380969539930s" class="flex items-center space-x-2">
          <img
            src="../../public/img/contacts-images/phone.svg"
            alt="some photo"
            class="h-9 w-9 translate-y-1 xs:h-12 xs:w-12 md:h-14 md:w-14"
          />

          <div class="flex flex-col">
            <strong
              class="font-russoOne text-[14px] font-normal md:text-[18px]"
            >
              Phone
            </strong>

            <span class="text-[10px] md:text-[14px]"> +380969539930 </span>
          </div>
        </a>
      </div>

      <!-- Footer -->
      <div
        class="lg:mt-o mt-7 flex w-full items-center justify-between px-2 xs:mb-3 xs:flex-col-reverse xs:items-end xs:justify-evenly md:justify-between lg:min-h-[100%] lg:max-w-[25%] lg:items-center"
      >
        <div class="flex">
          <a href="https://github.com/Andrii9991">
            <img
              class="mr-3 max-h-7 max-w-7 xs:max-h-8 xs:max-w-8 md:max-h-10 md:max-w-10"
              src="../../public/img/social-images/github.svg"
              alt="Github"
            />
          </a>
          <a href="http://www.linkedin.com/in/andrii-myshchyshyn-36a64b228">
            <img
              class="max-h-7 max-w-7 xs:max-h-8 xs:max-w-8 md:max-h-10 md:max-w-10"
              src="../../public/img/social-images/linkedin.svg"
              alt="Github"
          /></a>
        </div>
        <a href="#home">
          <img
            class="h-7 w-[69px] xs:h-[34px] xs:w-[83px] md:h-[50px] md:w-[116px]"
            src="../../public/img/logo.svg"
            alt="General logo"
          />
        </a>
      </div>
    </div>
  </footer>
</template>
