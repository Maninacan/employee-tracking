import {
  EMPLOYEE_CREATED,
  EMPLOYEE_UPDATED,
  EMPLOYEE_DELETED,
  STATE_RESET
} from './actionTypes';

export default function actionsService(storeService) {
  'ngInject';

  function createEmployee(selectedDate) {
    storeService.dispatch({
      type: EMPLOYEE_CREATED,
      selectedDate
    });
  }

  function updateEmployee(selectedDate) {
    storeService.dispatch({
      type: EMPLOYEE_UPDATED,
      selectedDate
    });
  }

  function deleteEmployee(selectedDate) {
    storeService.dispatch({
      type: EMPLOYEE_DELETED,
      selectedDate
    });
  }

  function resetState() {
    storeService.dispatch({
      type: STATE_RESET
    });
  }

  return {
    createEmployee,
    updateEmployee,
    deleteEmployee,
    resetState
  };
}
