import component from './component';

/**
 * support Vue.use
 */
component.install = function(Vue) {
  Vue.component(component.name, component);
};

export default component;
