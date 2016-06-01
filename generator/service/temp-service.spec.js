import <%= name %>Service from './<%= name %>-service';

const should = chai.should();

describe('<%= name %>Component', () => {

  describe('Service', () => {
    // service specs
    it('has a getName property [REMOVE]', () => { // erase if removing this.getName from the service
      let service = <%= name %>Service();
      service.should.have.property('getName');
    });
  });

});
