import {
  EMPLOYEE_CREATED,
  EMPLOYEE_UPDATED,
  EMPLOYEE_DELETED,
  STATE_RESET,
} from './actionTypes';

export const INITIAL_STATE = {
  employees: []
};

export function stateReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case EMPLOYEE_CREATED:
      const employees = [...state.employees];
      employees.push(action.employee);
      return employees;
    case EMPLOYEE_UPDATED:
      return {...state, selectedCardType: action.selectedCardType};
    case EMPLOYEE_DELETED:
      return {...state, selectedSession: action.selectedSession};
    case STATE_RESET:
      return {
        ...INITIAL_STATE
      };
    default:
      return state;
  }
}
