export default function deleteEmployeeModalController($scope, $uibModalInstance, resolveObject) {
  'ngInject';

  const self = this;

  self.employee = resolveObject.employee;
  
  self.ok = ok;
  self.cancel = cancel;

  /**
   * @function ok
   */
  function ok() {
    // console.log('submitted: ', self.employee);
    $uibModalInstance.close(self.employee);
  }

  /**
   * @function cancel
   */
  function cancel() {
    // console.log('Cancel clicked');
    $uibModalInstance.dismiss('cancel');
  }
}
