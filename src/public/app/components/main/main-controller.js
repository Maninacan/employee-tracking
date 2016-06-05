export default function mainController($scope, employeeModalService, apiService) {
  'ngInject';

  const self = this;

  // self.employees = [{
  //   firstName: 'Jonathan', // - Text (*)
  //   lastName: 'Aaron', // - Text (*)
  //   middleInitial: 'R', // – Text
  //   emailAddress: 'jon.r.aaron@gmail.com', // - Text (validate emails only) (*)
  //   phoneNumber: '4352790073', // - Text (numbers only)
  //   positionCategory: 'Indirect', // - Drop Down (Indirect, Direct, Program Manager, Director, Executive)
  //   dateHired: new Date(), // - Date (*)
  //   address1: '7602 Ranches Pkwy', // – Text
  //   address2: '', // – Text
  //   city: 'Eagle Mountain', // – Text
  //   state: 'Utah', // - Drop Down
  //   zipCode: 84005, // - Number (5-digit only)
  //   activeFlag: true // - Boolean(*)
  // }, {
  //   firstName: 'Ricky', // - Text (*)
  //   lastName: 'Harris', // - Text (*)
  //   middleInitial: 'W', // – Text
  //   emailAddress: 'jon.r.aaron@gmail.com', // - Text (validate emails only) (*)
  //   phoneNumber: '4352790073', // - Text (numbers only)
  //   positionCategory: 'Indirect', // - Drop Down (Indirect, Direct, Program Manager, Director, Executive)
  //   dateHired: new Date(), // - Date (*)
  //   address1: '7602 Ranches Pkwy', // – Text
  //   address2: '', // – Text
  //   city: 'Eagle Mountain', // – Text
  //   state: 'Utah', // - Drop Down
  //   zipCode: 84005, // - Number (5-digit only)
  //   activeFlag: true // - Boolean(*)
  // }];
  
  self.employees = [];
  
  self.editEmployee = editEmployee;
  self.addEmployee = addEmployee;
  
  apiService.getAllEmployees().then(employees => {
    self.employees = employees;
    $scope.$apply();
  });
  
  /**
   * @function editEmployee
   * @param index
   */
  function editEmployee(index) {
    console.log('Editing: ', self.employees[index]);
  }

  /**
   * @function addEmployee
   */
  function addEmployee() {
    console.log('Adding an employee');
    employeeModalService.open();
  }
}
