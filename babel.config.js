module.exports = {
  presets: [
    '@vue/cli-plugin-babel/preset'
  ],
  plugins: [
    ['import', {
      libraryName: 'vant',
      libraryDirectory: 'es',
      style: true
    }, 'vant'],
    ['import', {
      libraryName: 'lbd-ui',
      customName: name => `lbd-ui/src/${name}`,
      camel2DashComponentName: false
    }, 'lbd-ui'],
  ]
};
