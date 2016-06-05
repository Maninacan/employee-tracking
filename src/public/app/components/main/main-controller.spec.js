import mainComponent from './index.js'
import mainController from './main-controller';

const should = chai.should();

describe('mainComponent', () => {
  describe('Controller', () => {
    // controller specs
    it('has a name property [REMOVE]', () => { // erase if removing this.name from the controller
      let controller = new mainController();
      controller.should.have.property('name');
    });
  });

});
