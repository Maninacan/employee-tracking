export default function employeeModalService($uibModal, $log) {
  'ngInject';

  const template = `
<div class="employeeModalComponent">
  <div class="modal-header">
    <h3 class="modal-title">Add employee</h3>
  </div>
  <div class="modal-body">
    <form name="form" novalidate>
      <div id="nameBlock" class="flex-row">
        <div id="firstNameInputGroup" class="form-group" ng-class="ctrl.validationClass.firstName">
          <label for="firstNameInput">First Name <span class="asterisk"></span></label>
          <input type="text" class="form-control" id="firstNameInput" name="firstName" placeholder="First Name">
        </div>
        <div id="middleInitialInputGroup" class="form-group">
          <label for="middleInitialInput">Middle Initial</label>
          <input type="text" class="form-control" id="middleInitialInput" name="middleInitial" placeholder="M.I.">
        </div>
        <div id="lastNameInputGroup" class="form-group" ng-class="ctrl.validationClass.lastName">
          <label for="lastNameInput">Last Name <span class="asterisk"></span></label>
          <input type="text" class="form-control" id="lastNameInput" name="lastName" placeholder="Last Name">
        </div>
      </div>
      <div class="form-group" ng-class="ctrl.validationClass.email">
        <label for="emailInput">Email address <span class="asterisk"></span></label>
        <input type="email" class="form-control" id="emailInput" name="emailAddress" placeholder="Email">
      </div>
      <div class="form-group">
        <label for="phoneInput">Phone number</label>
        <input type="tel" class="form-control" id="phoneInput" name="phoneNumber" placeholder="Phone Number">
      </div>
      <div id="positionAndDateHiredBlock" class="flex-row">
        <div id="positionCategoryGroup" class="form-group">
          <label for="">Position Category</label>
          <select class="form-control" name="positionCategory">
            <option>Indirect</option>
            <option>Direct</option>
            <option>Program Manager</option>
            <option>Director</option>
            <option>Executive</option>
          </select>
        </div>
        <div id="dateHiredGroup" class="form-group" ng-class="ctrl.validationClass.dateHired">
          <label for="dateHiredInput">Date Hired <span class="asterisk"></span></label>
          <p class="input-group">
            <input id="dateHiredInput" 
              type="text" 
              class="form-control" 
              uib-datepicker-popup="{{format}}"
              name="dateHired"
              ng-model="dt" 
              is-open="ctrl.datepicker.open" 
              datepicker-options="ctrl.datepicker.options" 
              ng-required="true" 
              close-text="Close" 
              alt-input-formats="altInputFormats" 
              popup-placement=""/>
            <span class="input-group-btn">
              <button type="button" class="btn btn-default" ng-click="ctrl.openDatepicker()">
                <i class="glyphicon glyphicon-calendar"></i>
              </button>
            </span>
          </p>
        </div>
      </div>
      <div ng-class="ctrl.validationClass.activeFlag">
        <div class="checkbox">
          <label for="activeFlagCheckbox">
            <input type="checkbox" id="activeFlagCheckbox" name="activeFlag">
            Active Employee? <span class="asterisk"></span>
          </label>
        </div>
      </div>
      <label>Fields with <span class="asterisk"></span> are required.</label>
    </form>
  </div>
  <div class="modal-footer">
    <button class="btn btn-primary" type="button" ng-click="ctrl.ok()" ng-disabled="ctrl.formNotReady(form)">OK</button>
    <button class="btn btn-warning" type="submit" ng-click="ctrl.cancel()">Cancel</button>
  </div>    
</div>
  `;

  function open(employee = {}) {

    var modalInstance = $uibModal.open({
      animation: true,
      template,
      controller: 'employeeModalController',
      controllerAs: 'ctrl',
      size: '',
      resolve: {
        resolveObject: function () {
          return {
            employee
          };
        }
      }
    });

    modalInstance.result.then(function (employee) {
      console.log('employee: ', employee);
    }, function () {
      $log.info('Modal dismissed at: ' + new Date());
    });
  }

  return {
    open
  };
}
