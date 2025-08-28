import { defineAppConfig } from "nuxt/app";

export default defineAppConfig({
  title: 'Hello Nuxt',
  icon: 'mdi:home',
  theme: {
    dark: true,
    colors: {
      primary: '#ff0000'
    }
  }
})