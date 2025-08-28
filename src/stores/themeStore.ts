import { defineStore } from "pinia";

export type Theme = "light" | "dark";

export const useThemeStore = defineStore("theme", {
  state: () => ({
    theme: "dark" as Theme
  }),
  actions: {
    toggleTheme() {
      this.theme = this.theme === "light" ? "dark" : "light";
      this.applyTheme();
      localStorage.setItem("theme", this.theme);
    },
    applyTheme() {
      const root = document.getElementsByTagName("body")[0];
      if (this.theme === "light") {
        root.classList.add("theme-light");
      } else {
        root.classList.remove("theme-light");
      }
    }
  }
});
