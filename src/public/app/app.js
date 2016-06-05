import angular from 'angular';
import uiRouter from 'angular-ui-router';
import angularUiBootstrap from 'angular-ui-bootstrap';
import routerConfig from './app.config.router';
import components from './components';
import './styles/app.scss';

angular.module('employeeTracking', [
  components,
  uiRouter,
  angularUiBootstrap
])
  .config(routerConfig);

angular.element(document).ready(function () {
  angular.bootstrap(document, ['employeeTracking']);
});