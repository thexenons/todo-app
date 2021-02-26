const path = require('path')
module.exports = function override(config) {
  config.resolve = {
    ...config.resolve,
    alias: {
      ...config.alias,
      '@atoms': path.resolve(__dirname, 'src/components/atoms'),
      '@molecules': path.resolve(__dirname, 'src/components/molecules'),
      '@organisms': path.resolve(__dirname, 'src/components/organisms'),
      '@objects': path.resolve(__dirname, 'src/components/objects'),
      '@context': path.resolve(__dirname, 'src/context'),
      '@hooks': path.resolve(__dirname, 'src/hooks'),
      '@utils': path.resolve(__dirname, 'src/utils'),
    },
  }
  return config
}
