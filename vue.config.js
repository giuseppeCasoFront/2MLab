module.exports = {
  css: {
    loaderOptions: {
      sass: {
        data: '@import "~@/styles/index.scss";'
      }
    }
  },

  chainWebpack: (config) => {
    const svgRule = config.module.rule('svg')
    svgRule.uses.clear()
    svgRule
      .use('vue-svg-loader')
      .loader('vue-svg-loader')
      .options({
        svgo: {
          plugins: [
            { removeViewBox: false },
            { removeDimensions: true },
            { mergePaths: false },
            { cleanupIDs: false }
          ]
        }
      })
  },
  devServer: {
    https: true,
    host: '2MLab.test',
    disableHostCheck: true
  }
}
