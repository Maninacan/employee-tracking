import <%= name %>Component from './index.js'
import <%= name %>Controller from './<%= name %>-controller';

const should = chai.should();

describe('<%= name %>Component', () => {
  describe('Controller', () => {
    // controller specs
    it('has a name property [REMOVE]', () => { // erase if removing this.name from the controller
      let controller = new <%= name %>Controller();
      controller.should.have.property('name');
    });
  });

});
