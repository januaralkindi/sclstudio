const path = require('path')

module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        "@": path.resolve(__dirname, 'src/'),
        "assets": path.resolve(__dirname, 'src/assets'),
        "components": path.resolve(__dirname, 'src/components'),
        "layout": path.resolve(__dirname, 'src/layout'),
        "pages": path.resolve(__dirname, 'src/pages')

      }
    }
  },
  "transpileDependencies": [
    "vuetify"
  ]
  
}