import component from './component';
import './index.scss';

/**
 * support Vue.use
 */
component.install = function(Vue) {
  Vue.component(component.name, component);
};

export default component;
