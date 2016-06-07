import mainController from './main-controller';
import template from './main-template.html';
import './main.scss';

export default angular
  .module('employeeTracking.components.main', [])
  .controller('mainController', mainController)
  .directive('main', () => ({
    restrict: 'E',
    scope: {},
    template,
    bindToController: true,
    controller: 'mainController',
    controllerAs: 'ctrl'
  }))
  .name;
