import employeeModalComponent from './index.js'
import employeeModalController from './employeeModal-controller';

const should = chai.should();

describe('employeeModalComponent', () => {
  describe('Controller', () => {
    // controller specs
    it('has a name property [REMOVE]', () => { // erase if removing this.name from the controller
      let controller = new employeeModalController();
      controller.should.have.property('name');
    });
  });

});
