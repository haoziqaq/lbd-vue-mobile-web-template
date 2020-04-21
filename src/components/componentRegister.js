import Vue from 'vue'

const modulesFiles = require.context('./', true, /\.vue$/);

modulesFiles.keys().forEach((modulePath) => {
  let moduleName = modulePath.replace(/^\.\/(.*)\.\w+$/, '$1');
  moduleName = moduleName.substring(moduleName.lastIndexOf('/') + 1, moduleName.length);
  const value = modulesFiles(modulePath).default;
  Vue.component(moduleName, value);
});
