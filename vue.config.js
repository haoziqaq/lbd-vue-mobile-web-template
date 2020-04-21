const path = require("path");

module.exports = {
  lintOnSave: false,
  productionSourceMap: false,
  publicPath: './',
  devServer: {
    host: process.env.VUE_APP_HOST,
    port: process.env.VUE_APP_PORT,
    overlay: {
      warnings: false,
      errors: true
    },
  },
  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'scss',
      patterns: [
        path.resolve(__dirname, 'src/assets/scss/variable.scss'),
      ]
    }
  },
  configureWebpack: {
    name: process.env.VUE_APP_NAME,
  },
};
