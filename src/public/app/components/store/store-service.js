import {createState} from './storeServiceUtil';
import {stateReducer, INITIAL_STATE} from './reducers';

export default function roStateService() {
  'ngInject';

  return createState(stateReducer, INITIAL_STATE);
}
