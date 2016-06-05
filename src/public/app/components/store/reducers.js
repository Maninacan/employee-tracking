import {
  EMPLOYEE_CREATED,
  EMPLOYEE_UPDATED,
  EMPLOYEE_DELETED,
  STATE_RESET,
} from './actionTypes';

const today = new Date();

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
    case EXPECTED_COUNT_SET:
      return {...state, expectedCount: action.expectedCount};
    case ACTUAL_COUNT_INCREMENTED:
      return {...state, actualCount: state.actualCount + 1};
    case CURRENT_BATCH_SET:
      return {...state, currentBatch: action.currentBatch};
    case IS_CONFIGURED_SET:
      return {...state, isConfigured: action.isConfigured};
    case STATE_RESET:
      return {
        ...INITIAL_STATE
      };
    default:
      return state;
  }
}
