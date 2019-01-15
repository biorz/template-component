/* eslint-disable */
import directive from './src/directive';
import service from './src/index';
import './index.scss';
import ymm from '@ymm-design/core';

service.install = function(Vue) {
  ymm.plugins = ymm.plugins || []
  Vue.use(directive);
  Vue.prototype.$imageview = service;
};

export default service;