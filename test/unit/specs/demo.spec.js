import { createVue } from '../util';
import demo from 'src/index';
import Vue from 'Vue';

describe('ImageView', () => {
  let vm;
  Vue.use(demo);

  afterEach(() => {
    // destroyVM(vm);
  });

  it('service', () => {
    vm = createVue({
      template: `<div><demo/></div>`  // eslint-disable-line
    });
    expect(vm.$el.querySelector('.demo').textContent).to.include('This is an example');
  });
});
