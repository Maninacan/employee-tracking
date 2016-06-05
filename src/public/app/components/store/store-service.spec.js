import roStateService from './roState-service';

chai.should();

describe('roStateComponent', () => {

  describe('Service', () => {
    // service specs
    it('has a getState property', () => {
      let service = roStateService();
      service.should.have.property('getState');
    });
  });

});
