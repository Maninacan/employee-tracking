import Employee from '../../models/Employee';

export default function apiService($http) {
  'ngInject';

  /**
   * @function getAllEmployees
   * @returns {*}
   */
  function getAllEmployees() {
    return new Promise((resolve, reject) => {
      $http.get('/api/employee')
        .then(response => {
          const employees = response.data.map((employee) => {
            employee.dateHired = new Date(employee.dateHired);
            return new Employee(employee);
          });
          resolve(employees);
        })
        .catch(err => {
          reject(err);
        });
    });
  }

  function addEmployee(employee) {
    employee = new Employee(employee);
    return new Promise((resolve, reject) => {
      $http.post('/api/employee', employee)
        .then(response => {
          resolve(response.data);
        })
        .catch(err => {
          reject(err);
        });
    });
  }

  function editEmployee(employee) {
    return new Promise((resolve, reject) => {
      $http.put(`/api/employee/${employee._id}`, employee)
        .then(response => {
          resolve(response.data);
        })
        .catch(err => {
          reject(err);
        });
    });
  }

  function deleteEmployee(employee) {
    return new Promise((resolve, reject) => {
      $http.delete(`/api/employee/${employee._id}`)
        .then(response => {
          resolve(response.data);
        })
        .catch(err => {
          reject(err);
        });
    });
  }

  return {
    getAllEmployees,
    addEmployee,
    editEmployee,
    deleteEmployee
  };
}
