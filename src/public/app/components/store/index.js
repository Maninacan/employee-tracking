import storeService from './store-service';
import actions from './actions-service';

export default angular
  .module('roApp.components.roState', [])
  .factory('storeService', storeService)
  .factory('stateActions', actions)
  .name;
