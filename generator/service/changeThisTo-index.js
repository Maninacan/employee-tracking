import <%= name %>Service from './<%= name %>-service';

export default angular
  .module('roApp.components.<%= name %>', [])
  .factory('<%= name %>Service', <%= name %>Service)
  .name;
