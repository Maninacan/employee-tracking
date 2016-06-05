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
          resolve(response.data);
        })
        .catch(err => {
          throw Error(err);
        });
    });
  }

  return {
    getAllEmployees
  };
}
