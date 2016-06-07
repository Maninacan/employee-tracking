import api from './api';
import employeeModal from './employeeModal';
import main from './main';
import telephoneFilter from './telephoneFilter';

export default angular
  .module('employeeTracking.components', [
    api,
    employeeModal,
    main,
    telephoneFilter
  ])
  .name;