// import employeeModalComponent from './index.js';
import employeeModalController from './employeeModal-controller';

chai.should();

describe('employeeModalComponent', () => {
  describe('Controller', () => {
    // controller specs
    it('has a defaultEmployeeObject property', () => { // erase if removing this.name from the controller
      const controller = new employeeModalController();
      controller.should.have.property('defaultEmployeeObject');
    });
  });

});
