import Employee from '../../models/Employee';

export default function mainController($scope, employeeModalService, apiService) {
  'ngInject';

  const self = this;

  self.employees = [];

  self.editEmployee = editEmployee;
  self.deleteEmployee = deleteEmployee;
  self.addEmployee = addEmployee;

  apiService.getAllEmployees()
    .then(employees => {
      self.employees = employees;
      $scope.$apply();
    })
    .catch(err => {
      throw Error(err);
    });

  /**
   * @function addEmployee
   */
  function addEmployee() {
    employeeModalService.open(null, 'add')
      .then(employee => {
        self.employees.push(employee);
        $scope.$apply();
      })
      .catch(err => {
        throw Error(err);
      });
  }

  /**
   * @function editEmployee
   * @param index
   */
  function editEmployee(index) {
    employeeModalService.open(new Employee(self.employees[index]), 'edit')
      .then(employee => {
        self.employees[index] = employee;
        $scope.$apply();
      })
      .catch(err => {
        throw Error(err);
      });
  }

  /**
   * @function deleteEmployee
   * @param index
   */
  function deleteEmployee(index) {
    employeeModalService.open(self.employees[index], 'delete')
      .then(deleteResult => {
        self.employees = self.employees.filter(currentEmployee => {
          return deleteResult.employee._id !== currentEmployee._id;
        });
        $scope.$apply();
      })
      .catch(err => {
        throw Error(err);
      });
  }
}
