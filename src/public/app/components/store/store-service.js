import {createState, combineStateModifiers} from './stateServiceUtil';
import {stateModifier, INITIAL_STATE} from './stateModifier';

export default function roStateService() {
  'ngInject';

  const stateModifier = combineStateModifiers({
    jumbotron: jumbotronStateModifier,
    manageOrdinance: manageOrdinanceStateModifier,
    ordinance: ordinanceStateModifier,
    shared: sharedStateModifier
  });

  const INITIAL_STATE = {
    INITIAL_JUMBOTRON_STATE,
    INITIAL_MANAGE_ORDINANCE_STATE,
    INITIAL_ORDINANCE_STATE,
    INITIAL_SHARED_STATE
  };

  // const state = (window.devToolsExtension ? window.devToolsExtension()(createState) : createState)(stateModifier, INITIAL_STATE);
  // console.log('state: ', state);
  // return state;
  return createState(stateModifier, INITIAL_STATE);
}
