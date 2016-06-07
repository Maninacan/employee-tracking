import apiService from './api-service';

chai.should();

describe('apiComponent', () => {

  describe('Service', () => {
    // service specs
    it('has a getName property [REMOVE]', () => { // erase if removing this.getName from the service
      let service = apiService();
      service.should.have.property('getName');
    });
  });

});
