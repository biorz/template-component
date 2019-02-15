/* eslint-disable */

import Vue from 'vue';
import entry from './app';
import Ymm from '@ymm-design/core';
require('@ymm-design/core/lib/theme-chalk/index.css');
import component from 'main/index.js';
import DemoBlock from './components/demo-block'

Vue.use(Ymm);
Vue.use(component);
Vue.component('demo-block', DemoBlock);

new Vue({ // eslint-disable-line
  name: 'app',
  render: h => h(entry),
}).$mount('#app');
