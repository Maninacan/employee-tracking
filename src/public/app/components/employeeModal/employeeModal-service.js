import Employee from '../../models/Employee';
import deleteEmployeeModalTemplate from './deleteEmployeeModal-template.html';
import employeeModalTemplate from './employeeModal-template.html';


export default function employeeModalService($uibModal, $log, apiService) {
  'ngInject';

  function open(employee = {}, method = 'add') {
    return new Promise((resolve, reject) => {
      const config = {
        animation: true,
        size: '',
        controllerAs: 'ctrl',
        resolve: {
          resolveObject: function () {
            return {
              employee
            };
          }
        }
      };
      switch (method) {
        case 'add':
          config.template = employeeModalTemplate;
          config.controller = 'employeeModalController';
          break;
        case 'edit':
          config.template = employeeModalTemplate;
          config.controller = 'employeeModalController';
          break;
        case 'delete':
          config.template = deleteEmployeeModalTemplate;
          config.controller = 'deleteEmployeeModalController';
          break;
      }
      const modalInstance = $uibModal.open(config);

      if (method === 'add') {
        modalInstance.result.then(okAdd, cancel);
      } else if (method === 'edit') {
        modalInstance.result.then(okEdit, cancel);
      } else if (method === 'delete') {
        modalInstance.result.then(okDelete, cancel);
      }

      function okAdd(employee) {
        apiService.addEmployee(employee).then(response => {
          resolve(response);
        }).catch(err => {
          reject(err);
        });
      }

      function okEdit(employee) {
        apiService.editEmployee(employee).then(response => {
          if (response.nModified === response.n) {
            resolve(new Employee(employee));
          } else {
            reject(response);
          }
        }).catch(err => {
          reject(err);
        });
      }

      function okDelete(employee) {
        apiService.deleteEmployee(employee).then(response => {
          resolve(response);
        }).catch(err => {
          reject(err);
        });
      }

      function cancel() {
        $log.info('Modal dismissed at: ' + new Date());
      }
    });
  }

  return {
    open
  };
}
