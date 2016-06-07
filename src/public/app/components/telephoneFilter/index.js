import telephoneFilter from './telephone-filter';

export default angular
  .module('roApp.components.telephoneFilter', [])
  .filter('telephone', telephoneFilter)
  .name;
