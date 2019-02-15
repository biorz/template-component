import Vue from 'vue';
import Ymm from '@ymm-design/core';
require('@ymm-design/core/lib/theme-chalk/index.css');
import component from 'main/index.js';
import App from './play/index.vue';

Vue.use(Ymm);
Vue.use(component);

new Vue({ // eslint-disable-line
  render: h => h(App)
}).$mount('#app');
