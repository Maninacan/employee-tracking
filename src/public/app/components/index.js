import api from './api';
import employeeModal from './employeeModal';
import main from './main';

export default angular
  .module('employeeTracking.components', [
    api,
    employeeModal,
    main
  ])
  .name;