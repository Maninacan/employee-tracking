import employeeModalService from './employeeModal-service';

chai.should();

describe('employeeModalComponent', () => {

  describe('Service', () => {
    // service specs
    it('has a getName property [REMOVE]', () => { // erase if removing this.getName from the service
      let service = employeeModalService();
      service.should.have.property('open');
    });
  });

});
