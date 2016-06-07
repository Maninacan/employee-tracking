import actionsService from './actions-service';

chai.should();

describe('reducers', () => {

  describe('Service', () => {
    // service specs
    it('has a getState property', () => {
      const service = actionsService();
      service.should.have.property('getState');
    });
  });

});
