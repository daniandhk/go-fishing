const { defineConfig } = require('@vue/cli-service');

module.exports = defineConfig({
  transpileDependencies: true,

  // configureWebpack: {
  //   plugins: [
  //     new Dotenv()
  //   ]
  // }
  devServer: {
    port: 8081,
  },

  pluginOptions: {
    i18n: {
      locale: 'id',
      fallbackLocale: 'id',
      localeDir: 'locales',
      enableLegacy: true,
      runtimeOnly: false,
      compositionOnly: true,
      fullInstall: true
    }
  }
})
