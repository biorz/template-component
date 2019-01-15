import Vue from 'vue';
import Ui from 'main/index.js';
import App from './play/index.vue';

Vue.use(Ui);

new Vue({ // eslint-disable-line
  render: h => h(App)
}).$mount('#app');
