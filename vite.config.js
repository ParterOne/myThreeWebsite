const { defineConfig } = require('vite')

module.exports = defineConfig({
  base: '/myThreeWebsite/',
  build: {
    rollupOptions: {
      input: {
        main: './index.html',
        works: './works.html',
        contacts: './contacts.html',
        //contacts: './contacts.html',
        //works: './works.html',
        // ...
        // List all files you want in your build
      }
    }
  }
})