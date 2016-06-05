import mainController from './main-controller';
import './main.scss';

const template = `
<div class="mainComponent">
  <h1>Employee Tracking</h1>
  <div class="panel panel-default">
    <!-- Default panel contents -->
    <div class="panel-heading space-between">
      <div>Employees</div>
      <button id="add-employee-btn" ng-click="ctrl.addEmployee()" class="btn btn-sm btn-primary flex-row">
        <span class="glyphicon glyphicon-plus-sign"></span>
        <div>Add an employee</div>
      </button>
    </div>
    
    <table class="table table-striped">
      <thead>
        <tr>
          <th>#</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Middle Initial</th>
          <th>Email Address</th>
          <th>Phone Number</th>
          <th>Position Category</th>
          <th>Date Hired</th>
          <th>Address</th>
          <th>Active</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr ng-repeat="employee in ctrl.employees">
          <td><strong>{{ $index + 1}}</strong></td>
          <td>{{ employee.firstName }}</td>
          <td>{{ employee.lastName }}</td>
          <td>{{ employee.middleInitial }}</td>
          <td>{{ employee.emailAddress }}</td>
          <td>{{ employee.phoneNumber }}</td>
          <td>{{ employee.positionCategory }}</td>
          <td>{{ employee.dateHired | date : 'mediumDate' }}</td>
          <td>
            <div class="flex-column">
              <div>{{ employee.address1 }}</div>
              <div>{{ employee.address2 }}</div>
              <div>{{ employee.city }}, {{ employee.state }}</div>
              <div>{{ employee.zipCode }}</div>
            </div>
          </td>
          <td>{{ employee.activeFlag }}</td>
          <td><span class="glyphicon glyphicon-edit" ng-click="ctrl.editEmployee($index)"></span></td>
         
        </tr>
      </tbody>
    </table>
  </div>
</div>
`;

export default angular
  .module('employeeTracking.components.main', [])
  .controller('mainController', mainController)
  .directive('main', () => ({
    restrict: 'E',
    scope: {},
    template,
    bindToController: true,
    controller: 'mainController',
    controllerAs: 'ctrl'
  }))
  .name;
