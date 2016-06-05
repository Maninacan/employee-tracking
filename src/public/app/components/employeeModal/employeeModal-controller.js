export default function employeeModalController($scope, $uibModalInstance, resolveObject) {
  'ngInject';

  const self = this;

  console.log('resolveObj: ', resolveObject);
  self.employee = resolveObject.employee || {};
  self.datepicker = {
    open: false,
    options: {
      formatYear: 'yy',
      maxDate: new Date(2020, 5, 22),
      minDate: new Date(),
      startingDay: 1,
      placement: 'bottom-right'
    }
  };
  self.validationClass = {
    firstName: '',
    lastName: '',
    email: '',
    dateHired: '',
    activeFlag: ''
  };
  self.employeeForm = null;

  self.openDatepicker = openDatepicker;
  self.formNotReady = formNotReady;
  self.ok = ok;
  self.cancel = cancel;


  /**
   * @function openDatepicker
   */
  function openDatepicker() {
    self.datepicker.open = true;
  }

  /**
   * @function formNotReady
   * @returns {*}
   */
  function formNotReady(form) {
    if (!self.employeeForm) {
      self.employeeForm = form;
    }
    
    function firstNameInvalid() {
      
      return true;
    }

    function lastNameInvalid() {
      return false;
    }

    function emailInvalid() {
      return false;
    }

    function hireDateInvalid() {
      return false;
    }

    function activeFlagInvalid() {
      return false;
    }

    return form.$pristine
      /*|| firstNameInvalid()
      || lastNameInvalid()
      || emailInvalid()
      || hireDateInvalid()
      || activeFlagInvalid()*/;
  }

  /**
   * @function ok
   */
  function ok() {
    $uibModalInstance.close(self.employee);
  }

  /**
   * @function cancel
   */
  function cancel() {
    console.log('Cancel clicked');
    $uibModalInstance.dismiss('cancel');
  }

  $scope.$watch(() => this.employeeForm, (fresh, old) => {
    console.log('employeeForm: ', fresh);
  });
}
