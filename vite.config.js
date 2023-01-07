const { defineConfig } = require('vite')

module.exports = defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: './index.html',
        //contacts: './contacts.html',
        //works: './works.html',
        // ...
        // List all files you want in your build
      }
    }
  }
})