import employeeController from './employee.controller';

chai.should();

describe('employeeModalComponent', () => {
  describe('Controller', () => {
    // controller specs
    it('has an employee property', () => { // erase if removing this.name from the controller
      const controller = new employeeController();
      controller.should.have.property('employee');
    });
  });

});
