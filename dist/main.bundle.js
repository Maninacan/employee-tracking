webpackJsonp([0],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(1);
	module.exports = __webpack_require__(299);


/***/ },

/***/ 299:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _angular = __webpack_require__(300);
	
	var _angular2 = _interopRequireDefault(_angular);
	
	var _angularUiRouter = __webpack_require__(302);
	
	var _angularUiRouter2 = _interopRequireDefault(_angularUiRouter);
	
	var _angularUiBootstrap = __webpack_require__(303);
	
	var _angularUiBootstrap2 = _interopRequireDefault(_angularUiBootstrap);
	
	var _appConfig = __webpack_require__(305);
	
	var _appConfig2 = _interopRequireDefault(_appConfig);
	
	var _components = __webpack_require__(306);
	
	var _components2 = _interopRequireDefault(_components);
	
	__webpack_require__(328);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	_angular2.default.module('employeeTracking', [_components2.default, _angularUiRouter2.default, _angularUiBootstrap2.default]).config(_appConfig2.default);
	
	_angular2.default.element(document).ready(function () {
	  _angular2.default.bootstrap(document, ['employeeTracking']);
	});

/***/ },

/***/ 305:
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	exports.default = ["$stateProvider", "$urlRouterProvider", function ($stateProvider, $urlRouterProvider) {
	  'ngInject';
	
	  //setup URL routes
	
	  $stateProvider.state('employees', {
	    url: '/employees',
	    template: '<main></main>'
	  });
	
	  $urlRouterProvider.otherwise('employees');
	}];

/***/ },

/***/ 306:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _api = __webpack_require__(307);
	
	var _api2 = _interopRequireDefault(_api);
	
	var _employeeModal = __webpack_require__(310);
	
	var _employeeModal2 = _interopRequireDefault(_employeeModal);
	
	var _main = __webpack_require__(321);
	
	var _main2 = _interopRequireDefault(_main);
	
	var _telephoneFilter = __webpack_require__(326);
	
	var _telephoneFilter2 = _interopRequireDefault(_telephoneFilter);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = angular.module('employeeTracking.components', [_api2.default, _employeeModal2.default, _main2.default, _telephoneFilter2.default]).name;

/***/ },

/***/ 307:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _apiService = __webpack_require__(308);
	
	var _apiService2 = _interopRequireDefault(_apiService);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = angular.module('roApp.components.api', []).factory('apiService', _apiService2.default).name;

/***/ },

/***/ 308:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	apiService.$inject = ["$http"];
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = apiService;
	
	var _Employee = __webpack_require__(309);
	
	var _Employee2 = _interopRequireDefault(_Employee);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function apiService($http) {
	  'ngInject';
	
	  /**
	   * @function getAllEmployees
	   * @returns {*}
	   */
	
	  function getAllEmployees() {
	    return new Promise(function (resolve, reject) {
	      $http.get('/api/employee').then(function (response) {
	        var employees = response.data.map(function (employee) {
	          employee.dateHired = new Date(employee.dateHired);
	          return new _Employee2.default(employee);
	        });
	        resolve(employees);
	      }).catch(function (err) {
	        reject(err);
	      });
	    });
	  }
	
	  function addEmployee(employee) {
	    employee = new _Employee2.default(employee);
	    return new Promise(function (resolve, reject) {
	      $http.post('/api/employee', employee).then(function (response) {
	        resolve(response.data);
	      }).catch(function (err) {
	        reject(err);
	      });
	    });
	  }
	
	  function editEmployee(employee) {
	    return new Promise(function (resolve, reject) {
	      $http.put('/api/employee/' + employee._id, employee).then(function (response) {
	        resolve(response.data);
	      }).catch(function (err) {
	        reject(err);
	      });
	    });
	  }
	
	  function deleteEmployee(employee) {
	    return new Promise(function (resolve, reject) {
	      $http.delete('/api/employee/' + employee._id).then(function (response) {
	        resolve(response.data);
	      }).catch(function (err) {
	        reject(err);
	      });
	    });
	  }
	
	  return {
	    getAllEmployees: getAllEmployees,
	    addEmployee: addEmployee,
	    editEmployee: editEmployee,
	    deleteEmployee: deleteEmployee
	  };
	}

/***/ },

/***/ 309:
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var Employee = function Employee(obj) {
	  _classCallCheck(this, Employee);
	
	  this._id = obj._id;
	
	  if (obj.firstName) {
	    this.firstName = obj.firstName;
	  } else {
	    throw Error('"firstName" is required');
	  }
	
	  if (obj.lastName) {
	    this.lastName = obj.lastName;
	  } else {
	    throw Error('"lastName" is required');
	  }
	
	  this.middleInitial = obj.middleInitial;
	
	  if (obj.emailAddress) {
	    this.emailAddress = obj.emailAddress;
	  } else {
	    throw Error('"emailAddress" is required');
	  }
	
	  this.phoneNumber = obj.phoneNumber;
	  this.positionCategory = obj.positionCategory;
	
	  if (obj.dateHired) {
	    this.dateHired = obj.dateHired;
	  } else {
	    throw Error('"dateHired" is required');
	  }
	
	  this.address1 = obj.address1;
	  this.address2 = obj.address2;
	  this.city = obj.city;
	  this.state = obj.state;
	  this.zipCode = obj.zipCode;
	
	  this.activeFlag = !!obj.activeFlag;
	};
	
	exports.default = Employee;

/***/ },

/***/ 310:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _employeeModalController = __webpack_require__(311);
	
	var _employeeModalController2 = _interopRequireDefault(_employeeModalController);
	
	var _deleteEmployeeModalController = __webpack_require__(313);
	
	var _deleteEmployeeModalController2 = _interopRequireDefault(_deleteEmployeeModalController);
	
	var _employeeModalService = __webpack_require__(314);
	
	var _employeeModalService2 = _interopRequireDefault(_employeeModalService);
	
	__webpack_require__(317);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = angular.module('employeeTracking.components.employeeModal', []).controller('employeeModalController', _employeeModalController2.default).controller('deleteEmployeeModalController', _deleteEmployeeModalController2.default).factory('employeeModalService', _employeeModalService2.default).name;

/***/ },

/***/ 311:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	employeeModalController.$inject = ["$scope", "$uibModalInstance", "resolveObject", "$filter"];
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = employeeModalController;
	
	var _Employee = __webpack_require__(309);
	
	var _Employee2 = _interopRequireDefault(_Employee);
	
	var _usStates = __webpack_require__(312);
	
	var _usStates2 = _interopRequireDefault(_usStates);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function employeeModalController($scope, $uibModalInstance, resolveObject, $filter) {
	  'ngInject';
	
	  var self = this,
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
	
	  self.usStates = _usStates2.default.map(function (state) {
	    return capitalizeFirstLetterOnly(state.name);
	  });
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
	    var lowercaseWord = word.toLowerCase();
	    return '' + lowercaseWord.charAt(0).toUpperCase() + lowercaseWord.slice(1);
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
	    var newEmployee = new _Employee2.default(self.employee);
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
	  $scope.$watch(function () {
	    return self.employee;
	  }, function () {
	    updatePhoneNumberFormat();
	  }, true);
	}

/***/ },

/***/ 312:
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = [{ name: 'ALABAMA', abbreviation: 'AL' }, { name: 'ALASKA', abbreviation: 'AK' }, { name: 'AMERICAN SAMOA', abbreviation: 'AS' }, { name: 'ARIZONA', abbreviation: 'AZ' }, { name: 'ARKANSAS', abbreviation: 'AR' }, { name: 'CALIFORNIA', abbreviation: 'CA' }, { name: 'COLORADO', abbreviation: 'CO' }, { name: 'CONNECTICUT', abbreviation: 'CT' }, { name: 'DELAWARE', abbreviation: 'DE' }, { name: 'DISTRICT OF COLUMBIA', abbreviation: 'DC' }, { name: 'FEDERATED STATES OF MICRONESIA', abbreviation: 'FM' }, { name: 'FLORIDA', abbreviation: 'FL' }, { name: 'GEORGIA', abbreviation: 'GA' }, { name: 'GUAM', abbreviation: 'GU' }, { name: 'HAWAII', abbreviation: 'HI' }, { name: 'IDAHO', abbreviation: 'ID' }, { name: 'ILLINOIS', abbreviation: 'IL' }, { name: 'INDIANA', abbreviation: 'IN' }, { name: 'IOWA', abbreviation: 'IA' }, { name: 'KANSAS', abbreviation: 'KS' }, { name: 'KENTUCKY', abbreviation: 'KY' }, { name: 'LOUISIANA', abbreviation: 'LA' }, { name: 'MAINE', abbreviation: 'ME' }, { name: 'MARSHALL ISLANDS', abbreviation: 'MH' }, { name: 'MARYLAND', abbreviation: 'MD' }, { name: 'MASSACHUSETTS', abbreviation: 'MA' }, { name: 'MICHIGAN', abbreviation: 'MI' }, { name: 'MINNESOTA', abbreviation: 'MN' }, { name: 'MISSISSIPPI', abbreviation: 'MS' }, { name: 'MISSOURI', abbreviation: 'MO' }, { name: 'MONTANA', abbreviation: 'MT' }, { name: 'NEBRASKA', abbreviation: 'NE' }, { name: 'NEVADA', abbreviation: 'NV' }, { name: 'NEW HAMPSHIRE', abbreviation: 'NH' }, { name: 'NEW JERSEY', abbreviation: 'NJ' }, { name: 'NEW MEXICO', abbreviation: 'NM' }, { name: 'NEW YORK', abbreviation: 'NY' }, { name: 'NORTH CAROLINA', abbreviation: 'NC' }, { name: 'NORTH DAKOTA', abbreviation: 'ND' }, { name: 'NORTHERN MARIANA ISLANDS', abbreviation: 'MP' }, { name: 'OHIO', abbreviation: 'OH' }, { name: 'OKLAHOMA', abbreviation: 'OK' }, { name: 'OREGON', abbreviation: 'OR' }, { name: 'PALAU', abbreviation: 'PW' }, { name: 'PENNSYLVANIA', abbreviation: 'PA' }, { name: 'PUERTO RICO', abbreviation: 'PR' }, { name: 'RHODE ISLAND', abbreviation: 'RI' }, { name: 'SOUTH CAROLINA', abbreviation: 'SC' }, { name: 'SOUTH DAKOTA', abbreviation: 'SD' }, { name: 'TENNESSEE', abbreviation: 'TN' }, { name: 'TEXAS', abbreviation: 'TX' }, { name: 'UTAH', abbreviation: 'UT' }, { name: 'VERMONT', abbreviation: 'VT' }, { name: 'VIRGIN ISLANDS', abbreviation: 'VI' }, { name: 'VIRGINIA', abbreviation: 'VA' }, { name: 'WASHINGTON', abbreviation: 'WA' }, { name: 'WEST VIRGINIA', abbreviation: 'WV' }, { name: 'WISCONSIN', abbreviation: 'WI' }, { name: 'WYOMING', abbreviation: 'WY' }];

/***/ },

/***/ 313:
/***/ function(module, exports) {

	'use strict';
	
	deleteEmployeeModalController.$inject = ["$scope", "$uibModalInstance", "resolveObject"];
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = deleteEmployeeModalController;
	function deleteEmployeeModalController($scope, $uibModalInstance, resolveObject) {
	  'ngInject';
	
	  var self = this;
	
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

/***/ },

/***/ 314:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	employeeModalService.$inject = ["$uibModal", "$log", "apiService"];
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = employeeModalService;
	
	var _Employee = __webpack_require__(309);
	
	var _Employee2 = _interopRequireDefault(_Employee);
	
	var _deleteEmployeeModalTemplate = __webpack_require__(315);
	
	var _deleteEmployeeModalTemplate2 = _interopRequireDefault(_deleteEmployeeModalTemplate);
	
	var _employeeModalTemplate = __webpack_require__(316);
	
	var _employeeModalTemplate2 = _interopRequireDefault(_employeeModalTemplate);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function employeeModalService($uibModal, $log, apiService) {
	  'ngInject';
	
	  function open() {
	    var employee = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
	    var method = arguments.length <= 1 || arguments[1] === undefined ? 'add' : arguments[1];
	
	    return new Promise(function (resolve, reject) {
	      var config = {
	        animation: true,
	        size: '',
	        controllerAs: 'ctrl',
	        resolve: {
	          resolveObject: function resolveObject() {
	            return {
	              employee: employee
	            };
	          }
	        }
	      };
	      switch (method) {
	        case 'add':
	          config.template = _employeeModalTemplate2.default;
	          config.controller = 'employeeModalController';
	          break;
	        case 'edit':
	          config.template = _employeeModalTemplate2.default;
	          config.controller = 'employeeModalController';
	          break;
	        case 'delete':
	          config.template = _deleteEmployeeModalTemplate2.default;
	          config.controller = 'deleteEmployeeModalController';
	          break;
	      }
	      var modalInstance = $uibModal.open(config);
	
	      if (method === 'add') {
	        modalInstance.result.then(okAdd, cancel);
	      } else if (method === 'edit') {
	        modalInstance.result.then(okEdit, cancel);
	      } else if (method === 'delete') {
	        modalInstance.result.then(okDelete, cancel);
	      }
	
	      function okAdd(employee) {
	        apiService.addEmployee(employee).then(function (response) {
	          resolve(response);
	        }).catch(function (err) {
	          reject(err);
	        });
	      }
	
	      function okEdit(employee) {
	        apiService.editEmployee(employee).then(function (response) {
	          if (response.nModified === response.n) {
	            resolve(new _Employee2.default(employee));
	          } else {
	            reject(response);
	          }
	        }).catch(function (err) {
	          reject(err);
	        });
	      }
	
	      function okDelete(employee) {
	        apiService.deleteEmployee(employee).then(function (response) {
	          resolve(response);
	        }).catch(function (err) {
	          reject(err);
	        });
	      }
	
	      function cancel() {
	        $log.info('Modal dismissed at: ' + new Date());
	      }
	    });
	  }
	
	  return {
	    open: open
	  };
	}

/***/ },

/***/ 315:
/***/ function(module, exports) {

	module.exports = "<div class=\"employeeModalComponent\" ng-cloak>\n  <div class=\"modal-header\">\n    <h3 class=\"modal-title\">Add employee</h3>\n  </div>\n  <div class=\"modal-body\">\n    <uib-alert type=\"danger\">Are you sure you want to delete the record for {{ctrl.employee.firstName}}?</uib-alert>\n  </div>\n  <div class=\"modal-footer\">\n    <button class=\"btn btn-primary\" type=\"button\" ng-click=\"ctrl.cancel()\">No. Don't delete it.</button>\n    <button class=\"btn btn-danger\" type=\"button\" ng-click=\"ctrl.ok()\">Yes. Delete it.</button>\n  </div>\n</div>"

/***/ },

/***/ 316:
/***/ function(module, exports) {

	module.exports = "<div class=\"employeeModalComponent\" ng-cloak>\n  <div class=\"modal-header\">\n    <h3 class=\"modal-title\">Add employee</h3>\n  </div>\n  <div class=\"modal-body\">\n    <form name=\"form\" novalidate>\n      <div id=\"nameBlock\" class=\"flex-row\">\n        <div id=\"firstNameInputGroup\" class=\"form-group has-feedback\"\n             ng-class=\"{'has-error': form.firstNameFieldForm.firstName.$invalid && form.firstNameFieldForm.firstName.$touched, 'has-success': form.firstNameFieldForm.firstName.$valid && form.firstNameFieldForm.firstName.$touched}\">\n          <ng-form name=\"firstNameFieldForm\">\n            <label for=\"firstNameInput\">First Name <span class=\"asterisk\"></span></label>\n            <input type=\"text\" class=\"form-control\" id=\"firstNameInput\" name=\"firstName\" placeholder=\"First Name\"\n                   ng-model=\"ctrl.employee.firstName\" ng-required=\"true\" aria-describedby=\"firstNameHelpBlock\">\n            <span\n              ng-class=\"{'glyphicon-remove': form.firstNameFieldForm.firstName.$invalid && form.firstNameFieldForm.firstName.$touched, 'glyphicon-ok': form.firstNameFieldForm.firstName.$valid && form.firstNameFieldForm.firstName.$touched}\"\n              class=\"glyphicon form-control-feedback\" aria-hidden=\"true\"></span>\n            <span ng-if=\"form.firstNameFieldForm.firstName.$invalid && form.firstNameFieldForm.firstName.$touched\"\n                  id=\"firstNameHelpBlock\" class=\"help-block\">This field is required.</span>\n          </ng-form>\n        </div>\n        <div id=\"middleInitialInputGroup\" class=\"form-group\">\n          <ng-form name=\"middleInitialFieldForm\">\n            <label for=\"middleInitialInput\">Middle Initial</label>\n            <input type=\"text\" class=\"form-control\" id=\"middleInitialInput\" name=\"middleInitial\" placeholder=\"M.I.\"\n                   ng-model=\"ctrl.employee.middleInitial\">\n          </ng-form>\n        </div>\n        <div id=\"lastNameInputGroup\" class=\"form-group has-feedback\"\n             ng-class=\"{'has-error': form.lastNameFieldForm.lastName.$invalid && form.lastNameFieldForm.lastName.$touched, 'has-success': form.lastNameFieldForm.lastName.$valid && form.lastNameFieldForm.lastName.$touched}\">\n          <ng-form name=\"lastNameFieldForm\">\n            <label for=\"lastNameInput\">Last Name <span class=\"asterisk\"></span></label>\n            <input type=\"text\" class=\"form-control\" id=\"lastNameInput\" name=\"lastName\" placeholder=\"Last Name\"\n                   ng-model=\"ctrl.employee.lastName\" ng-required=\"true\" aria-describedby=\"lastNameHelpBlock\">\n            <span\n              ng-class=\"{'glyphicon-remove': form.lastNameFieldForm.lastName.$invalid && form.lastNameFieldForm.lastName.$touched, 'glyphicon-ok': form.lastNameFieldForm.lastName.$valid && form.lastNameFieldForm.lastName.$touched}\"\n              class=\"glyphicon form-control-feedback\" aria-hidden=\"true\"></span>\n            <span ng-if=\"form.lastNameFieldForm.lastName.$invalid && form.lastNameFieldForm.lastName.$touched\"\n                  id=\"lastNameHelpBlock\" class=\"help-block\">This field is required.</span>\n          </ng-form>\n        </div>\n      </div>\n      <div id=\"address1InputGroup\" class=\"form-group\">\n        <ng-form name=\"address1FieldForm\">\n          <label for=\"address1Input\">Address 1</label>\n          <input type=\"text\" class=\"form-control\" id=\"address1Input\" name=\"address1\" placeholder=\"Address 1\"\n                 ng-model=\"ctrl.employee.address1\">\n        </ng-form>\n      </div>\n      <div id=\"address2InputGroup\" class=\"form-group\">\n        <ng-form name=\"address2FieldForm\">\n          <label for=\"address2Input\">Address 2</label>\n          <input type=\"text\" class=\"form-control\" id=\"address2Input\" name=\"address2\" placeholder=\"Address 2\"\n                 ng-model=\"ctrl.employee.address2\">\n        </ng-form>\n      </div>\n      <div id=\"cityStateZipBlock\" class=\"flex-row\">\n        <div id=\"cityInputGroup\" class=\"form-group\">\n          <ng-form name=\"cityFieldForm\">\n            <label for=\"cityInput\">City</label>\n            <input type=\"text\" class=\"form-control\" id=\"cityInput\" name=\"city\" placeholder=\"City\"\n                   ng-model=\"ctrl.employee.city\">\n          </ng-form>\n        </div>\n        <div id=\"stateInputGroup\" class=\"form-group\">\n          <ng-form name=\"stateFieldForm\">\n            <label for=\"stateSelect\">State</label>\n            <select id=\"stateSelect\" class=\"form-control\" name=\"state\" ng-model=\"ctrl.employee.state\">\n              <option ng-repeat=\"state in ctrl.usStates\">{{state}}</option>\n            </select>\n          </ng-form>\n        </div>\n        <div id=\"zipCodeInputGroup\" class=\"form-group\">\n          <ng-form name=\"zipCodeFieldForm\">\n            <label for=\"zipCodeInput\">Zip Code</label>\n            <input type=\"number\" min=\"00000\" max=\"99999\" class=\"form-control\" id=\"zipCodeInput\" name=\"zipCode\"\n                   placeholder=\"Zip Code\" ng-model=\"ctrl.employee.zipCode\">\n          </ng-form>\n        </div>\n      </div>\n      <div id=\"emailAndPhoneNumberBlock\" class=\"flex-row\">\n        <div id=\"emailGroup\" class=\"form-group has-feedback\"\n             ng-class=\"{'has-error': form.emailAddressFieldForm.emailAddress.$invalid && form.emailAddressFieldForm.emailAddress.$touched, 'has-success': form.emailAddressFieldForm.emailAddress.$valid && form.emailAddressFieldForm.emailAddress.$touched}\">\n          <ng-form name=\"emailAddressFieldForm\">\n            <label for=\"emailInput\">Email address <span class=\"asterisk\"></span></label>\n            <input type=\"email\" class=\"form-control\" id=\"emailInput\" name=\"emailAddress\" placeholder=\"Email\"\n                   ng-model=\"ctrl.employee.emailAddress\" ng-required=\"true\" aria-describedby=\"emailHelpBlock\">\n            <span\n              ng-class=\"{'glyphicon-remove': form.emailAddressFieldForm.emailAddress.$invalid && form.emailAddressFieldForm.emailAddress.$touched, 'glyphicon-ok': form.emailAddressFieldForm.emailAddress.$valid && form.emailAddressFieldForm.emailAddress.$touched}\"\n              class=\"glyphicon form-control-feedback\" aria-hidden=\"true\"></span>\n            <span\n              ng-if=\"form.emailAddressFieldForm.emailAddress.$invalid && form.emailAddressFieldForm.emailAddress.$touched\"\n              id=\"emailHelpBlock\" class=\"help-block\">This field is required.</span>\n          </ng-form>\n        </div>\n        <div id=\"phoneGroup\" class=\"form-group\">\n          <ng-form name=\"phoneNumberFieldForm\">\n            <label for=\"phoneInput\">Phone number</label>\n            <input type=\"tel\" class=\"form-control\" id=\"phoneInput\" name=\"phoneNumber\" placeholder=\"Phone Number\"\n                   ng-model=\"ctrl.employee.phoneNumber\">\n          </ng-form>\n        </div>\n      </div>\n      <div id=\"positionAndDateHiredBlock\" class=\"flex-row\">\n        <div id=\"positionCategoryGroup\" class=\"form-group\">\n          <ng-form name=\"positionCategoryFieldForm\">\n            <label for=\"positionCategorySelect\">Position Category</label>\n            <select id=\"positionCategorySelect\" class=\"form-control\" name=\"positionCategory\"\n                    ng-model=\"ctrl.employee.positionCategory\">\n              <option>Indirect</option>\n              <option>Direct</option>\n              <option>Program Manager</option>\n              <option>Director</option>\n              <option>Executive</option>\n            </select>\n          </ng-form>\n        </div>\n        <div id=\"dateHiredGroup\" class=\"form-group has-feedback\"\n             ng-class=\"{'has-error': form.dateHiredFieldForm.dateHired.$invalid && form.dateHiredFieldForm.dateHired.$touched, 'has-success': form.dateHiredFieldForm.dateHired.$valid && form.dateHiredFieldForm.dateHired.$touched}\">\n          <ng-form name=\"dateHiredFieldForm\">\n            <label for=\"dateHiredInput\">Date Hired <span class=\"asterisk\"></span></label>\n            <p class=\"input-group\">\n              <input id=\"dateHiredInput\"\n                     type=\"text\"\n                     class=\"form-control\"\n                     uib-datepicker-popup=\"{{format}}\"\n                     name=\"dateHired\"\n                     ng-model=\"ctrl.employee.dateHired\"\n                     is-open=\"ctrl.datepicker.open\"\n                     datepicker-options=\"ctrl.datepicker.options\"\n                     ng-required=\"true\"\n                     close-text=\"Close\"\n                     alt-input-formats=\"altInputFormats\"\n                     popup-placement=\"\"\n                     aria-describedby=\"dateHiredHelpBlock\"/>\n            <span class=\"input-group-btn\">\n              <button type=\"button\" class=\"btn btn-default\" ng-click=\"ctrl.openDatepicker()\">\n                <i class=\"glyphicon glyphicon-calendar\"></i>\n              </button>\n            </span>\n            </p>\n            <span\n              ng-class=\"{'glyphicon-remove': form.dateHiredFieldForm.dateHired.$invalid && form.dateHiredFieldForm.dateHired.$touched, 'glyphicon-ok': form.dateHiredFieldForm.dateHired.$valid && form.dateHiredFieldForm.dateHired.$touched}\"\n              class=\"glyphicon form-control-feedback\" aria-hidden=\"true\"></span>\n            <span ng-if=\"form.dateHiredFieldForm.dateHired.$invalid && form.dateHiredFieldForm.dateHired.$touched\"\n                  id=\"dateHiredHelpBlock\" class=\"help-block\">This field is required.</span>\n          </ng-form>\n        </div>\n      </div>\n      <div>\n        <div class=\"checkbox\">\n          <label for=\"activeFlagCheckbox\">\n            <input type=\"checkbox\" id=\"activeFlagCheckbox\" name=\"activeFlag\" ng-model=\"ctrl.employee.activeFlag\"\n                   ng-required=\"true\">\n            Active Employee? <span class=\"asterisk\"></span>\n          </label>\n        </div>\n      </div>\n      <label>Fields with <span class=\"asterisk\"></span> are required.</label>\n    </form>\n  </div>\n  <div class=\"modal-footer\">\n    <button class=\"btn btn-primary\" type=\"button\" ng-click=\"ctrl.cancel()\">Cancel</button>\n    <button class=\"btn btn-danger\" type=\"button\" ng-click=\"ctrl.ok()\"\n            ng-disabled=\"form.$pristine || form.firstNameFieldForm.firstName.$invalid || form.lastNameFieldForm.lastName.$invalid || form.emailAddressFieldForm.emailAddress.$invalid || form.dateHiredFieldForm.dateHired.$invalid\">\n      OK\n    </button>\n  </div>\n</div>"

/***/ },

/***/ 317:
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(318);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(320)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../../../node_modules/css-loader/index.js!./../../../../../node_modules/sass-loader/index.js!./employeeModal.scss", function() {
				var newContent = require("!!./../../../../../node_modules/css-loader/index.js!./../../../../../node_modules/sass-loader/index.js!./employeeModal.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },

/***/ 318:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(319)();
	// imports
	
	
	// module
	exports.push([module.id, ".employeeModalComponent {\n  width: 100%; }\n  .employeeModalComponent #nameBlock {\n    justify-content: space-between; }\n    .employeeModalComponent #nameBlock #firstNameInputGroup, .employeeModalComponent #nameBlock #lastNameInputGroup {\n      width: calc(50% - 70px); }\n    .employeeModalComponent #nameBlock #middleInitialInputGroup {\n      width: 120px; }\n  .employeeModalComponent #emailAndPhoneNumberBlock, .employeeModalComponent #positionAndDateHiredBlock {\n    justify-content: space-between; }\n    .employeeModalComponent #emailAndPhoneNumberBlock #positionCategoryGroup, .employeeModalComponent #emailAndPhoneNumberBlock #dateHiredGroup, .employeeModalComponent #emailAndPhoneNumberBlock #emailGroup, .employeeModalComponent #emailAndPhoneNumberBlock #phoneGroup, .employeeModalComponent #positionAndDateHiredBlock #positionCategoryGroup, .employeeModalComponent #positionAndDateHiredBlock #dateHiredGroup, .employeeModalComponent #positionAndDateHiredBlock #emailGroup, .employeeModalComponent #positionAndDateHiredBlock #phoneGroup {\n      width: calc(50% - 5px); }\n  .employeeModalComponent #cityStateZipBlock {\n    justify-content: space-between; }\n    .employeeModalComponent #cityStateZipBlock #cityInputGroup, .employeeModalComponent #cityStateZipBlock #stateInputGroup, .employeeModalComponent #cityStateZipBlock #zipCodeInputGroup {\n      width: calc(33% - 5px); }\n  .employeeModalComponent span.asterisk:after {\n    color: #a94442;\n    content: \"*\"; }\n", ""]);
	
	// exports


/***/ },

/***/ 321:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _mainController = __webpack_require__(322);
	
	var _mainController2 = _interopRequireDefault(_mainController);
	
	var _mainTemplate = __webpack_require__(323);
	
	var _mainTemplate2 = _interopRequireDefault(_mainTemplate);
	
	__webpack_require__(324);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = angular.module('employeeTracking.components.main', []).controller('mainController', _mainController2.default).directive('main', function () {
	  return {
	    restrict: 'E',
	    scope: {},
	    template: _mainTemplate2.default,
	    bindToController: true,
	    controller: 'mainController',
	    controllerAs: 'ctrl'
	  };
	}).name;

/***/ },

/***/ 322:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	mainController.$inject = ["$scope", "employeeModalService", "apiService"];
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = mainController;
	
	var _Employee = __webpack_require__(309);
	
	var _Employee2 = _interopRequireDefault(_Employee);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function mainController($scope, employeeModalService, apiService) {
	  'ngInject';
	
	  var self = this;
	
	  self.employees = [];
	
	  self.editEmployee = editEmployee;
	  self.deleteEmployee = deleteEmployee;
	  self.addEmployee = addEmployee;
	
	  apiService.getAllEmployees().then(function (employees) {
	    self.employees = employees;
	    $scope.$apply();
	  }).catch(function (err) {
	    throw Error(err);
	  });
	
	  /**
	   * @function addEmployee
	   */
	  function addEmployee() {
	    employeeModalService.open(null, 'add').then(function (employee) {
	      self.employees.push(employee);
	      $scope.$apply();
	    }).catch(function (err) {
	      throw Error(err);
	    });
	  }
	
	  /**
	   * @function editEmployee
	   * @param index
	   */
	  function editEmployee(index) {
	    employeeModalService.open(new _Employee2.default(self.employees[index]), 'edit').then(function (employee) {
	      self.employees[index] = employee;
	      $scope.$apply();
	    }).catch(function (err) {
	      throw Error(err);
	    });
	  }
	
	  /**
	   * @function deleteEmployee
	   * @param index
	   */
	  function deleteEmployee(index) {
	    employeeModalService.open(self.employees[index], 'delete').then(function (deleteResult) {
	      self.employees = self.employees.filter(function (currentEmployee) {
	        return deleteResult.employee._id !== currentEmployee._id;
	      });
	      $scope.$apply();
	    }).catch(function (err) {
	      throw Error(err);
	    });
	  }
	}

/***/ },

/***/ 323:
/***/ function(module, exports) {

	module.exports = "<div class=\"mainComponent\" ng-cloak>\n  <h1>Employee Tracking</h1>\n  <div class=\"panel panel-default\">\n    <!-- Default panel contents -->\n    <div class=\"panel-heading space-between\">\n      <div>Employees</div>\n      <button id=\"add-employee-btn\" ng-click=\"ctrl.addEmployee()\" class=\"btn btn-sm btn-primary flex-row\">\n        <span class=\"glyphicon glyphicon-plus-sign\"></span>\n        <div>Add an employee</div>\n      </button>\n    </div>\n\n    <table class=\"table table-striped\">\n      <thead>\n      <tr>\n        <th>#</th>\n        <th>First Name</th>\n        <th>Middle Initial</th>\n        <th>Last Name</th>\n        <th>Email Address</th>\n        <th>Phone Number</th>\n        <th>Position Category</th>\n        <th>Date Hired</th>\n        <th>Address</th>\n        <th>Active</th>\n        <th></th>\n      </tr>\n      </thead>\n      <tbody>\n      <tr ng-repeat=\"employee in ctrl.employees\">\n        <td><strong>{{ $index + 1}}</strong></td>\n        <td>{{ employee.firstName }}</td>\n        <td>{{ employee.middleInitial }}</td>\n        <td>{{ employee.lastName }}</td>\n        <td>{{ employee.emailAddress }}</td>\n        <td>{{ employee.phoneNumber | telephone : 'format'}}</td>\n        <td>{{ employee.positionCategory }}</td>\n        <td>{{ employee.dateHired | date : 'mediumDate' }}</td>\n        <td>\n          <div class=\"flex-column\">\n            <div>{{ employee.address1 }}</div>\n            <div>{{ employee.address2 }}</div>\n            <div>{{ employee.city }}, {{ employee.state }}</div>\n            <div>{{ employee.zipCode }}</div>\n          </div>\n        </td>\n        <td>{{ employee.activeFlag }}</td>\n        <td>\n          <div class=\"flex-row\">\n            <span class=\"glyphicon glyphicon-edit\" ng-click=\"ctrl.editEmployee($index)\"></span>\n            <span class=\"glyphicon glyphicon-trash\" ng-click=\"ctrl.deleteEmployee($index)\"></span>\n          </div>\n        </td>\n      </tr>\n      </tbody>\n    </table>\n  </div>\n</div>"

/***/ },

/***/ 324:
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(325);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(320)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../../../node_modules/css-loader/index.js!./../../../../../node_modules/sass-loader/index.js!./main.scss", function() {
				var newContent = require("!!./../../../../../node_modules/css-loader/index.js!./../../../../../node_modules/sass-loader/index.js!./main.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },

/***/ 325:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(319)();
	// imports
	
	
	// module
	exports.push([module.id, ".mainComponent #add-employee-btn .glyphicon {\n  position: relative;\n  top: 3px;\n  padding-right: 5px; }\n\n.mainComponent table tbody tr td span.glyphicon {\n  padding-right: 5px; }\n  .mainComponent table tbody tr td span.glyphicon.glyphicon-edit:hover {\n    color: #31708f;\n    cursor: pointer; }\n  .mainComponent table tbody tr td span.glyphicon.glyphicon-trash:hover {\n    color: #a94442;\n    cursor: pointer; }\n", ""]);
	
	// exports


/***/ },

/***/ 326:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _telephoneFilter = __webpack_require__(327);
	
	var _telephoneFilter2 = _interopRequireDefault(_telephoneFilter);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = angular.module('roApp.components.telephoneFilter', []).filter('telephone', _telephoneFilter2.default).name;

/***/ },

/***/ 327:
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = telephoneFilterService;
	// Author found here: https://github.com/benjamincharity/angular-telephone-filter
	
	function telephoneFilterService() {
	  'ngInject';
	
	  /**
	   * Clean or format a telephone number
	   * @function filter
	   * @param {String} tel
	   * @param {String} method
	   * @return {String} finalNumber
	   */
	
	  function phoneFilter(tel, method) {
	    var maxLength = 10;
	    var cityCodeLength = 3;
	    var numberLength = 7;
	    var longDistanceCode = void 0;
	
	    // Return if no number was passed in
	    if (!tel) {
	      return '';
	    }
	
	    // Strip all non-numeric characters
	    var value = tel.toString().trim().replace(/\D/g, '');
	
	    // Trim to verify the model doesn't get any larger
	    if (value.length > maxLength) {
	
	      // If the first character is a US country code
	      if (value.charAt(0) === '1') {
	        // Save the code
	        longDistanceCode = value.charAt(0);
	
	        // Don't strip it, allow 11 digits
	        value = value.substring(1, maxLength + 1);
	      } else {
	        value = value.substring(0, maxLength);
	      }
	    }
	
	    // Return if no method was passed in
	    if (!method) {
	      return 'A method{string} is required. e.g. \'clean\' or \'format\'';
	    }
	
	    //
	    // Clean a phone number
	    if (method === 'clean') {
	      return value;
	    }
	
	    //
	    // Format a phone number
	    if (method === 'format') {
	
	      var city = void 0;
	      var number = void 0;
	
	      switch (value.length) {
	        case 1:
	        case 2:
	        case 3:
	          city = value;
	          break;
	
	        default:
	          city = value.slice(0, cityCodeLength);
	          number = value.slice(cityCodeLength);
	      }
	
	      if (number) {
	
	        if (number.length > cityCodeLength) {
	
	          number = number.slice(0, cityCodeLength) + '-' + number.slice(cityCodeLength, numberLength);
	        }
	
	        return (longDistanceCode ? longDistanceCode + ' ' : '') + ('(' + city + ') ' + number).trim();
	      } else {
	
	        return '(' + city;
	      }
	    }
	  }
	
	  return phoneFilter;
	}

/***/ },

/***/ 328:
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(329);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(320)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../../node_modules/css-loader/index.js!./../../../../node_modules/sass-loader/index.js!./app.scss", function() {
				var newContent = require("!!./../../../../node_modules/css-loader/index.js!./../../../../node_modules/sass-loader/index.js!./app.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },

/***/ 329:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(319)();
	// imports
	exports.i(__webpack_require__(330), "");
	exports.i(__webpack_require__(336), "");
	
	// module
	exports.push([module.id, "/*! normalize.css v3.0.0 | MIT License | git.io/normalize */\nhtml {\n  font-family: sans-serif;\n  /* 1 */\n  -ms-text-size-adjust: 100%;\n  /* 2 */\n  -webkit-text-size-adjust: 100%;\n  /* 2 */ }\n\nbody {\n  margin: 0; }\n\n/* HTML5 display definitions\n   ========================================================================== */\narticle,\naside,\ndetails,\nfigcaption,\nfigure,\nfooter,\nheader,\nhgroup,\nmain,\nnav,\nsection,\nsummary {\n  display: block; }\n\naudio,\ncanvas,\nprogress,\nvideo {\n  display: inline-block;\n  /* 1 */\n  vertical-align: baseline;\n  /* 2 */ }\n\naudio:not([controls]) {\n  display: none;\n  height: 0; }\n\n[hidden],\ntemplate {\n  display: none; }\n\n/* Links\n   ========================================================================== */\na {\n  background: transparent; }\n\na:active,\na:hover {\n  outline: 0; }\n\n/* Text-level semantics\n   ========================================================================== */\nabbr[title] {\n  border-bottom: 1px dotted; }\n\nb,\nstrong {\n  font-weight: bold; }\n\ndfn {\n  font-style: italic; }\n\nh1 {\n  font-size: 2em;\n  margin: 0.67em 0; }\n\nmark {\n  background: #ff0;\n  color: #000; }\n\nsmall {\n  font-size: 80%; }\n\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline; }\n\nsup {\n  top: -0.5em; }\n\nsub {\n  bottom: -0.25em; }\n\n/* Embedded content\n   ========================================================================== */\nimg {\n  border: 0; }\n\nsvg:not(:root) {\n  overflow: hidden; }\n\n/* Grouping content\n   ========================================================================== */\nfigure {\n  margin: 1em 40px; }\n\nhr {\n  -moz-box-sizing: content-box;\n  box-sizing: content-box;\n  height: 0; }\n\npre {\n  overflow: auto; }\n\ncode,\nkbd,\npre,\nsamp {\n  font-family: monospace, monospace;\n  font-size: 1em; }\n\n/* Forms\n   ========================================================================== */\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  color: inherit;\n  /* 1 */\n  font: inherit;\n  /* 2 */\n  margin: 0;\n  /* 3 */ }\n\nbutton {\n  overflow: visible; }\n\nbutton,\nselect {\n  text-transform: none; }\n\nbutton,\nhtml input[type=\"button\"],\ninput[type=\"reset\"],\ninput[type=\"submit\"] {\n  -webkit-appearance: button;\n  /* 2 */\n  cursor: pointer;\n  /* 3 */ }\n\nbutton[disabled],\nhtml input[disabled] {\n  cursor: default; }\n\nbutton::-moz-focus-inner,\ninput::-moz-focus-inner {\n  border: 0;\n  padding: 0; }\n\ninput {\n  line-height: normal; }\n\ninput[type=\"checkbox\"],\ninput[type=\"radio\"] {\n  box-sizing: border-box;\n  /* 1 */\n  padding: 0;\n  /* 2 */ }\n\ninput[type=\"number\"]::-webkit-inner-spin-button,\ninput[type=\"number\"]::-webkit-outer-spin-button {\n  height: auto; }\n\ninput[type=\"search\"] {\n  -webkit-appearance: textfield;\n  /* 1 */\n  -moz-box-sizing: content-box;\n  -webkit-box-sizing: content-box;\n  /* 2 */\n  box-sizing: content-box; }\n\ninput[type=\"search\"]::-webkit-search-cancel-button,\ninput[type=\"search\"]::-webkit-search-decoration {\n  -webkit-appearance: none; }\n\nfieldset {\n  border: 1px solid #c0c0c0;\n  margin: 0 2px;\n  padding: 0.35em 0.625em 0.75em; }\n\nlegend {\n  border: 0;\n  /* 1 */\n  padding: 0;\n  /* 2 */ }\n\ntextarea {\n  overflow: auto; }\n\noptgroup {\n  font-weight: bold; }\n\n/* Tables ========================================================================== */\ntable {\n  border-collapse: collapse;\n  border-spacing: 0; }\n\ntd,\nth {\n  padding: 0; }\n\n*, *:before, *:after {\n  -moz-box-sizing: border-box;\n  -webkit-box-sizing: border-box;\n  box-sizing: border-box; }\n\n.awesome {\n  color: #fff;\n  background-color: #111111; }\n\nbody {\n  background: #fff;\n  position: absolute; }\n\nbody, html {\n  height: 100%;\n  width: 100%; }\n\n/* Always provide a class along with the tag declarations\n    for styles makes reuse much easier, and your code\n    more modular */\nh1, .heading {\n  color: #404040;\n  font-size: 56px;\n  padding-left: 10px;\n  margin: 0; }\n\nh2 {\n  color: #404040;\n  font-size: 45px;\n  padding-left: 10px;\n  margin: 0; }\n\n.button, input[type=\"button\"] {\n  margin-top: 10px; }\n\n.menu {\n  list-style: none;\n  border-bottom: 0.1em solid black;\n  margin-bottom: 2em;\n  padding: 0 0 0.5em; }\n\n.menu li {\n  display: inline; }\n\n.users {\n  list-style-type: none;\n  padding-left: 10px;\n  font-size: 18px; }\n\n.users input {\n  display: block;\n  font-size: 18px;\n  height: 30px;\n  margin: 5px 0; }\n\n/*  These are additive media queries... meaning\nthat they override the base styles as needed.\nThe accepted base is mobile size screens, you\nthen override the styles needed to make things\nmore usable as the screen size grows.\n\nIt should be noted that if you are using media\nto load background images then you want to\nbracket them. Meaning, that you would use a\nmax-width to include them in addition to a\nmin-width to override them. This prevents double\nloading across browsers.\n*/\n@media (min-width: 45em) {\n  body {\n    background: #fff; } }\n\n@media (min-width: 65em) {\n  body {\n    background: #fff; } }\n\n.clearfix {\n  zoom: 1; }\n  .clearfix:before, .clearfix:after {\n    content: \"\";\n    display: table; }\n  .clearfix:after {\n    clear: both; }\n\n.block {\n  display: block; }\n\n.flex-row, .space-between, .space-around, .flex-end {\n  display: flex;\n  flex-direction: row; }\n\n.flex-column {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start; }\n\n.space-between {\n  justify-content: space-between; }\n\n.space-around {\n  justify-content: space-around; }\n\n.flex-end {\n  justify-content: flex-end; }\n", ""]);
	
	// exports


/***/ }

});
//# sourceMappingURL=main.bundle.js.map