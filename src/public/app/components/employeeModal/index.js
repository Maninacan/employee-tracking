import employeeModalController from './employeeModal-controller';
import employeeModalService from './employeeModal-service';
import './employeeModal.scss';

export default angular
  .module('employeeTracking.components.employeeModal', [])
  .controller('employeeModalController', employeeModalController)
  .factory('employeeModalService', employeeModalService)
  .name;
