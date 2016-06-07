import employeeModalController from './employeeModal-controller';
import deleteEmployeeModalController from './deleteEmployeeModal-controller';
import employeeModalService from './employeeModal-service';
import './employeeModal.scss';

export default angular
  .module('employeeTracking.components.employeeModal', [])
  .controller('employeeModalController', employeeModalController)
  .controller('deleteEmployeeModalController', deleteEmployeeModalController)
  .factory('employeeModalService', employeeModalService)
  .name;
