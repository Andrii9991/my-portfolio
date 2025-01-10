import { defineStore } from "pinia";
import type { INavbar } from "~/interfaces/navbar";

export const navBarDefineStore = defineStore("navBar", () => {
  const navItems = ref<INavbar[]>([
    {
      active: false,
      id: "1",
      title: "Home",
      href: "#home",
    },
    {
      active: false,
      id: "2",
      title: "About",
      href: "#about",
    },
    {
      active: false,
      id: "3",
      title: "Projects",
      href: "#projects",
    },
    {
      active: false,
      id: "4",
      title: "Contacts",
      href: "#contacts",
    },
  ]);

  return {
    navItems,
  };
});
