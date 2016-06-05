export default ($stateProvider, $urlRouterProvider) => {
  'ngInject';

  //setup URL routes
  $stateProvider
    .state('employees', {
      url: '/employees',
      template: '<main></main>'
    });

  $urlRouterProvider.otherwise('employees');
};