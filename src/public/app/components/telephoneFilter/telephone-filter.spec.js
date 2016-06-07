import telephoneFilter from './telephone-filter';

const should = chai.should();

describe('telephoneFilterComponent', () => {

  describe('Service', () => {
    // service specs
    it('has a getName property [REMOVE]', () => { // erase if removing this.getName from the service
      let service = telephoneFilter();
      service.should.have.property('getName');
    });
  });

});
