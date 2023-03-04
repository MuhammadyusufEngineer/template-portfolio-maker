// vite.config.js
import { resolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
  base: '/upwork-1-portfolio-maker/',
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        blog: resolve(__dirname, 'nested/blog.html'),
        blogItem: resolve(__dirname, 'nested/blog-item.html'),
        projects: resolve(__dirname, 'nested/projects.html'),
        projectItem: resolve(__dirname, 'nested/project-item.html'),
        booking: resolve(__dirname, 'nested/booking.html'),
      },
    },
  },
})
