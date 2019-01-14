/* eslint-disable */

import Vue from 'vue';
import entry from './app';
import Ui from 'main/index.js';
import DemoBlock from './components/demo-block'
Vue.use(Ui);
Vue.component('demo-block', DemoBlock);

new Vue({ // eslint-disable-line
  name: 'app',
  render: h => h(entry),
}).$mount('#app');
