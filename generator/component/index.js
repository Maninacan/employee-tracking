import <%= name %>Controller from './<%= name %>-controller';
import './<%= name %>.scss';

const template = `
<div class="<%= name %>Component">
  <h1>{{ ctrl.name }}</h1>
</div>
`;

export default angular
  .module('<%= appName %>.components.<%= name %>', [])
  .controller('<%= name %>Controller', <%= name %>Controller)
  .directive('<%= name %>', () => ({
    restrict: 'E',
    scope: {},
    template,
    bindToController: true,
    controller: '<%= name %>Controller',
    controllerAs: 'ctrl'
  }))
  .name;
