/* eslint-disable */

import Vue from 'vue';
import entry from './app';
import Ymm from '@ymm-design/core';
require('@ymm-design/core/lib/theme-chalk/index.css');
import Ui from 'main/index.js';
import DemoBlock from './components/demo-block'

Vue.use(Ymm);
Vue.use(Ui);
Vue.component('demo-block', DemoBlock);

new Vue({ // eslint-disable-line
  name: 'app',
  render: h => h(entry),
}).$mount('#app');
