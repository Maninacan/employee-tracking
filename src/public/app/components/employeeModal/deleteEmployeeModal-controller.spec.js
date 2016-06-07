// import employeeModalComponent from './index.js';
import employeeModalController from './deleteEmployeeModal-controller';

chai.should();

describe('employeeModalComponent', () => {
  describe('Controller', () => {
    // controller specs
    it('has an employee property', () => { // erase if removing this.name from the controller
      const controller = new employeeModalController();
      controller.should.have.property('employee');
    });
  });

});
