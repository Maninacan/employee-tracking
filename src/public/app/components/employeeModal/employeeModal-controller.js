import Employee from '../../models/Employee';
import usStates from './usStates';

export default function employeeModalController($scope, $uibModalInstance, resolveObject, $filter) {
  'ngInject';

  const self = this,
    defaultEmployeeObject = {
      activeFlag: true,
      address1: '',
      address2: '',
      city: '',
      dateHired: new Date(),
      emailAddress: '',
      firstName: '',
      lastName: '',
      middleInitial: '',
      phoneNumber: '',
      positionCategory: 'Indirect',
      state: 'Alabama',
      zipCode: null
    };

  if (resolveObject.employee && resolveObject.employee.dateHired && resolveObject.employee.dateHired.constructor === String) {
    resolveObject.employee.dateHired = new Date(resolveObject.employee.dateHired);
  }

  self.usStates = usStates.map(state => capitalizeFirstLetterOnly(state.name));
  self.employee = resolveObject.employee || defaultEmployeeObject;
  self.datepicker = {
    open: false,
    options: {
      formatYear: 'yy',
      maxDate: new Date(),
      startingDay: 0,
      placement: 'bottom-right'
    }
  };
  self.validationClass = {
    firstName: '',
    lastName: '',
    email: '',
    dateHired: ''
  };

  self.openDatepicker = openDatepicker;
  self.ok = ok;
  self.cancel = cancel;

  /**
   * @function capitalizeFirstLetterOnly
   * @param word
   * @returns {string}
   */
  function capitalizeFirstLetterOnly(word) {
    const lowercaseWord = word.toLowerCase();
    return `${lowercaseWord.charAt(0).toUpperCase()}${lowercaseWord.slice(1)}`;
  }

  /**
   * @function openDatepicker
   */
  function openDatepicker() {
    self.datepicker.open = true;
  }

  /**
   * @function updatePhoneNumberFormat
   */
  function updatePhoneNumberFormat() {
    self.employee.phoneNumber = $filter('telephone')(self.employee.phoneNumber, 'format');
  }

  /**
   * @function ok
   */
  function ok() {
    const newEmployee = new Employee(self.employee);
    newEmployee.phoneNumber = $filter('telephone')(newEmployee.phoneNumber, 'clean');
    newEmployee.activeFlag = !!newEmployee.activeFlag;
    $uibModalInstance.close(newEmployee);
  }

  /**
   * @function cancel
   */
  function cancel() {
    $uibModalInstance.dismiss('cancel');
  }

  // $scope.$watch(() => self.employeeForm, (fresh, old, scope) => {
  //   // console.log('employeeForm: ', fresh);
  // }, true);
  //
  $scope.$watch(() => self.employee, () => {
    updatePhoneNumberFormat();
  }, true);
}
