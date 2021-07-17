// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require('path')

module.exports = {
  configureWebpack: {
    resolve: {

      alias: {
        '#components': path.resolve(__dirname, 'src/components'),
        '#styles': path.resolve(__dirname, 'src/styles'),
        '#views': path.resolve(__dirname, 'src/views'),
        '#assets': path.resolve(__dirname, 'src/assets'),

      },
      extensions: ['.js', '.vue', '.json'],
    },
  },
}
