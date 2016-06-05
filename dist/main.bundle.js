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
	
	__webpack_require__(318);
	
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
	
	var _api = __webpack_require__(327);
	
	var _api2 = _interopRequireDefault(_api);
	
	var _employeeModal = __webpack_require__(307);
	
	var _employeeModal2 = _interopRequireDefault(_employeeModal);
	
	var _main = __webpack_require__(314);
	
	var _main2 = _interopRequireDefault(_main);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = angular.module('employeeTracking.components', [_api2.default, _employeeModal2.default, _main2.default]).name;

/***/ },

/***/ 307:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _employeeModalController = __webpack_require__(308);
	
	var _employeeModalController2 = _interopRequireDefault(_employeeModalController);
	
	var _employeeModalService = __webpack_require__(309);
	
	var _employeeModalService2 = _interopRequireDefault(_employeeModalService);
	
	__webpack_require__(310);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = angular.module('employeeTracking.components.employeeModal', []).controller('employeeModalController', _employeeModalController2.default).factory('employeeModalService', _employeeModalService2.default).name;

/***/ },

/***/ 308:
/***/ function(module, exports) {

	'use strict';
	
	employeeModalController.$inject = ["$scope", "$uibModalInstance", "resolveObject"];
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = employeeModalController;
	function employeeModalController($scope, $uibModalInstance, resolveObject) {
	  'ngInject';
	
	  var _this = this;
	
	  var self = this;
	
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
	
	  $scope.$watch(function () {
	    return _this.employeeForm;
	  }, function (fresh, old) {
	    console.log('employeeForm: ', fresh);
	  });
	}

/***/ },

/***/ 309:
/***/ function(module, exports) {

	'use strict';
	
	employeeModalService.$inject = ["$uibModal", "$log"];
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = employeeModalService;
	function employeeModalService($uibModal, $log) {
	  'ngInject';
	
	  var template = '\n<div class="employeeModalComponent">\n  <div class="modal-header">\n    <h3 class="modal-title">Add employee</h3>\n  </div>\n  <div class="modal-body">\n    <form name="form" novalidate>\n      <div id="nameBlock" class="flex-row">\n        <div id="firstNameInputGroup" class="form-group" ng-class="ctrl.validationClass.firstName">\n          <label for="firstNameInput">First Name <span class="asterisk"></span></label>\n          <input type="text" class="form-control" id="firstNameInput" name="firstName" placeholder="First Name">\n        </div>\n        <div id="middleInitialInputGroup" class="form-group">\n          <label for="middleInitialInput">Middle Initial</label>\n          <input type="text" class="form-control" id="middleInitialInput" name="middleInitial" placeholder="M.I.">\n        </div>\n        <div id="lastNameInputGroup" class="form-group" ng-class="ctrl.validationClass.lastName">\n          <label for="lastNameInput">Last Name <span class="asterisk"></span></label>\n          <input type="text" class="form-control" id="lastNameInput" name="lastName" placeholder="Last Name">\n        </div>\n      </div>\n      <div class="form-group" ng-class="ctrl.validationClass.email">\n        <label for="emailInput">Email address <span class="asterisk"></span></label>\n        <input type="email" class="form-control" id="emailInput" name="emailAddress" placeholder="Email">\n      </div>\n      <div class="form-group">\n        <label for="phoneInput">Phone number</label>\n        <input type="tel" class="form-control" id="phoneInput" name="phoneNumber" placeholder="Phone Number">\n      </div>\n      <div id="positionAndDateHiredBlock" class="flex-row">\n        <div id="positionCategoryGroup" class="form-group">\n          <label for="">Position Category</label>\n          <select class="form-control" name="positionCategory">\n            <option>Indirect</option>\n            <option>Direct</option>\n            <option>Program Manager</option>\n            <option>Director</option>\n            <option>Executive</option>\n          </select>\n        </div>\n        <div id="dateHiredGroup" class="form-group" ng-class="ctrl.validationClass.dateHired">\n          <label for="dateHiredInput">Date Hired <span class="asterisk"></span></label>\n          <p class="input-group">\n            <input id="dateHiredInput" \n              type="text" \n              class="form-control" \n              uib-datepicker-popup="{{format}}"\n              name="dateHired"\n              ng-model="dt" \n              is-open="ctrl.datepicker.open" \n              datepicker-options="ctrl.datepicker.options" \n              ng-required="true" \n              close-text="Close" \n              alt-input-formats="altInputFormats" \n              popup-placement=""/>\n            <span class="input-group-btn">\n              <button type="button" class="btn btn-default" ng-click="ctrl.openDatepicker()">\n                <i class="glyphicon glyphicon-calendar"></i>\n              </button>\n            </span>\n          </p>\n        </div>\n      </div>\n      <div ng-class="ctrl.validationClass.activeFlag">\n        <div class="checkbox">\n          <label for="activeFlagCheckbox">\n            <input type="checkbox" id="activeFlagCheckbox" name="activeFlag">\n            Active Employee? <span class="asterisk"></span>\n          </label>\n        </div>\n      </div>\n      <label>Fields with <span class="asterisk"></span> are required.</label>\n    </form>\n  </div>\n  <div class="modal-footer">\n    <button class="btn btn-primary" type="button" ng-click="ctrl.ok()" ng-disabled="ctrl.formNotReady(form)">OK</button>\n    <button class="btn btn-warning" type="submit" ng-click="ctrl.cancel()">Cancel</button>\n  </div>    \n</div>\n  ';
	
	  function open() {
	    var employee = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
	
	
	    var modalInstance = $uibModal.open({
	      animation: true,
	      template: template,
	      controller: 'employeeModalController',
	      controllerAs: 'ctrl',
	      size: '',
	      resolve: {
	        resolveObject: function resolveObject() {
	          return {
	            employee: employee
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
	    open: open
	  };
	}

/***/ },

/***/ 310:
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(311);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(313)(content, {});
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

/***/ 311:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(312)();
	// imports
	
	
	// module
	exports.push([module.id, ".employeeModalComponent {\n  width: 100%; }\n  .employeeModalComponent #nameBlock {\n    justify-content: space-between; }\n    .employeeModalComponent #nameBlock #firstNameInputGroup, .employeeModalComponent #nameBlock #lastNameInputGroup {\n      width: calc(50% - 60px); }\n    .employeeModalComponent #nameBlock #middleInitialInputGroup {\n      width: 120px; }\n  .employeeModalComponent #positionAndDateHiredBlock {\n    justify-content: space-between; }\n    .employeeModalComponent #positionAndDateHiredBlock #positionCategoryGroup, .employeeModalComponent #positionAndDateHiredBlock #dateHiredGroup {\n      width: calc(50% - 10px); }\n  .employeeModalComponent span.asterisk:after {\n    color: #a94442;\n    content: \"*\"; }\n", ""]);
	
	// exports


/***/ },

/***/ 314:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _mainController = __webpack_require__(315);
	
	var _mainController2 = _interopRequireDefault(_mainController);
	
	__webpack_require__(316);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var template = '\n<div class="mainComponent">\n  <h1>Employee Tracking</h1>\n  <div class="panel panel-default">\n    <!-- Default panel contents -->\n    <div class="panel-heading space-between">\n      <div>Employees</div>\n      <button id="add-employee-btn" ng-click="ctrl.addEmployee()" class="btn btn-sm btn-primary flex-row">\n        <span class="glyphicon glyphicon-plus-sign"></span>\n        <div>Add an employee</div>\n      </button>\n    </div>\n    \n    <table class="table table-striped">\n      <thead>\n        <tr>\n          <th>#</th>\n          <th>First Name</th>\n          <th>Last Name</th>\n          <th>Middle Initial</th>\n          <th>Email Address</th>\n          <th>Phone Number</th>\n          <th>Position Category</th>\n          <th>Date Hired</th>\n          <th>Address</th>\n          <th>Active</th>\n          <th></th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr ng-repeat="employee in ctrl.employees">\n          <td><strong>{{ $index + 1}}</strong></td>\n          <td>{{ employee.firstName }}</td>\n          <td>{{ employee.lastName }}</td>\n          <td>{{ employee.middleInitial }}</td>\n          <td>{{ employee.emailAddress }}</td>\n          <td>{{ employee.phoneNumber }}</td>\n          <td>{{ employee.positionCategory }}</td>\n          <td>{{ employee.dateHired | date : \'mediumDate\' }}</td>\n          <td>\n            <div class="flex-column">\n              <div>{{ employee.address1 }}</div>\n              <div>{{ employee.address2 }}</div>\n              <div>{{ employee.city }}, {{ employee.state }}</div>\n              <div>{{ employee.zipCode }}</div>\n            </div>\n          </td>\n          <td>{{ employee.activeFlag }}</td>\n          <td><span class="glyphicon glyphicon-edit" ng-click="ctrl.editEmployee($index)"></span></td>\n         \n        </tr>\n      </tbody>\n    </table>\n  </div>\n</div>\n';
	
	exports.default = angular.module('employeeTracking.components.main', []).controller('mainController', _mainController2.default).directive('main', function () {
	  return {
	    restrict: 'E',
	    scope: {},
	    template: template,
	    bindToController: true,
	    controller: 'mainController',
	    controllerAs: 'ctrl'
	  };
	}).name;

/***/ },

/***/ 315:
/***/ function(module, exports) {

	'use strict';
	
	mainController.$inject = ["$scope", "employeeModalService", "apiService"];
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = mainController;
	function mainController($scope, employeeModalService, apiService) {
	  'ngInject';
	
	  var self = this;
	
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
	
	  apiService.getAllEmployees().then(function (employees) {
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

/***/ },

/***/ 316:
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(317);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(313)(content, {});
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

/***/ 317:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(312)();
	// imports
	
	
	// module
	exports.push([module.id, ".mainComponent #add-employee-btn .glyphicon {\n  position: relative;\n  top: 3px;\n  padding-right: 5px; }\n", ""]);
	
	// exports


/***/ },

/***/ 318:
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(319);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(313)(content, {});
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

/***/ 319:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(312)();
	// imports
	exports.i(__webpack_require__(320), "");
	exports.i(__webpack_require__(326), "");
	
	// module
	exports.push([module.id, "/*! normalize.css v3.0.0 | MIT License | git.io/normalize */\nhtml {\n  font-family: sans-serif;\n  /* 1 */\n  -ms-text-size-adjust: 100%;\n  /* 2 */\n  -webkit-text-size-adjust: 100%;\n  /* 2 */ }\n\nbody {\n  margin: 0; }\n\n/* HTML5 display definitions\n   ========================================================================== */\narticle,\naside,\ndetails,\nfigcaption,\nfigure,\nfooter,\nheader,\nhgroup,\nmain,\nnav,\nsection,\nsummary {\n  display: block; }\n\naudio,\ncanvas,\nprogress,\nvideo {\n  display: inline-block;\n  /* 1 */\n  vertical-align: baseline;\n  /* 2 */ }\n\naudio:not([controls]) {\n  display: none;\n  height: 0; }\n\n[hidden],\ntemplate {\n  display: none; }\n\n/* Links\n   ========================================================================== */\na {\n  background: transparent; }\n\na:active,\na:hover {\n  outline: 0; }\n\n/* Text-level semantics\n   ========================================================================== */\nabbr[title] {\n  border-bottom: 1px dotted; }\n\nb,\nstrong {\n  font-weight: bold; }\n\ndfn {\n  font-style: italic; }\n\nh1 {\n  font-size: 2em;\n  margin: 0.67em 0; }\n\nmark {\n  background: #ff0;\n  color: #000; }\n\nsmall {\n  font-size: 80%; }\n\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline; }\n\nsup {\n  top: -0.5em; }\n\nsub {\n  bottom: -0.25em; }\n\n/* Embedded content\n   ========================================================================== */\nimg {\n  border: 0; }\n\nsvg:not(:root) {\n  overflow: hidden; }\n\n/* Grouping content\n   ========================================================================== */\nfigure {\n  margin: 1em 40px; }\n\nhr {\n  -moz-box-sizing: content-box;\n  box-sizing: content-box;\n  height: 0; }\n\npre {\n  overflow: auto; }\n\ncode,\nkbd,\npre,\nsamp {\n  font-family: monospace, monospace;\n  font-size: 1em; }\n\n/* Forms\n   ========================================================================== */\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  color: inherit;\n  /* 1 */\n  font: inherit;\n  /* 2 */\n  margin: 0;\n  /* 3 */ }\n\nbutton {\n  overflow: visible; }\n\nbutton,\nselect {\n  text-transform: none; }\n\nbutton,\nhtml input[type=\"button\"],\ninput[type=\"reset\"],\ninput[type=\"submit\"] {\n  -webkit-appearance: button;\n  /* 2 */\n  cursor: pointer;\n  /* 3 */ }\n\nbutton[disabled],\nhtml input[disabled] {\n  cursor: default; }\n\nbutton::-moz-focus-inner,\ninput::-moz-focus-inner {\n  border: 0;\n  padding: 0; }\n\ninput {\n  line-height: normal; }\n\ninput[type=\"checkbox\"],\ninput[type=\"radio\"] {\n  box-sizing: border-box;\n  /* 1 */\n  padding: 0;\n  /* 2 */ }\n\ninput[type=\"number\"]::-webkit-inner-spin-button,\ninput[type=\"number\"]::-webkit-outer-spin-button {\n  height: auto; }\n\ninput[type=\"search\"] {\n  -webkit-appearance: textfield;\n  /* 1 */\n  -moz-box-sizing: content-box;\n  -webkit-box-sizing: content-box;\n  /* 2 */\n  box-sizing: content-box; }\n\ninput[type=\"search\"]::-webkit-search-cancel-button,\ninput[type=\"search\"]::-webkit-search-decoration {\n  -webkit-appearance: none; }\n\nfieldset {\n  border: 1px solid #c0c0c0;\n  margin: 0 2px;\n  padding: 0.35em 0.625em 0.75em; }\n\nlegend {\n  border: 0;\n  /* 1 */\n  padding: 0;\n  /* 2 */ }\n\ntextarea {\n  overflow: auto; }\n\noptgroup {\n  font-weight: bold; }\n\n/* Tables ========================================================================== */\ntable {\n  border-collapse: collapse;\n  border-spacing: 0; }\n\ntd,\nth {\n  padding: 0; }\n\n*, *:before, *:after {\n  -moz-box-sizing: border-box;\n  -webkit-box-sizing: border-box;\n  box-sizing: border-box; }\n\n.awesome {\n  color: #fff;\n  background-color: #111111; }\n\nbody {\n  background: #fff;\n  position: absolute; }\n\nbody, html {\n  height: 100%;\n  width: 100%; }\n\n/* Always provide a class along with the tag declarations\n    for styles makes reuse much easier, and your code\n    more modular */\nh1, .heading {\n  color: #404040;\n  font-size: 56px;\n  padding-left: 10px;\n  margin: 0; }\n\nh2 {\n  color: #404040;\n  font-size: 45px;\n  padding-left: 10px;\n  margin: 0; }\n\n.button, input[type=\"button\"] {\n  margin-top: 10px; }\n\n.menu {\n  list-style: none;\n  border-bottom: 0.1em solid black;\n  margin-bottom: 2em;\n  padding: 0 0 0.5em; }\n\n.menu li {\n  display: inline; }\n\n.users {\n  list-style-type: none;\n  padding-left: 10px;\n  font-size: 18px; }\n\n.users input {\n  display: block;\n  font-size: 18px;\n  height: 30px;\n  margin: 5px 0; }\n\n/*  These are additive media queries... meaning\nthat they override the base styles as needed.\nThe accepted base is mobile size screens, you\nthen override the styles needed to make things\nmore usable as the screen size grows.\n\nIt should be noted that if you are using media\nto load background images then you want to\nbracket them. Meaning, that you would use a\nmax-width to include them in addition to a\nmin-width to override them. This prevents double\nloading across browsers.\n*/\n@media (min-width: 45em) {\n  body {\n    background: #fff; } }\n\n@media (min-width: 65em) {\n  body {\n    background: #fff; } }\n\n.clearfix {\n  zoom: 1; }\n  .clearfix:before, .clearfix:after {\n    content: \"\";\n    display: table; }\n  .clearfix:after {\n    clear: both; }\n\n.block {\n  display: block; }\n\n.flex-row, .space-between, .space-around, .flex-end {\n  display: flex;\n  flex-direction: row; }\n\n.flex-column {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start; }\n\n.space-between {\n  justify-content: space-between; }\n\n.space-around {\n  justify-content: space-around; }\n\n.flex-end {\n  justify-content: flex-end; }\n", ""]);
	
	// exports


/***/ },

/***/ 327:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _apiService = __webpack_require__(328);
	
	var _apiService2 = _interopRequireDefault(_apiService);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = angular.module('roApp.components.api', []).factory('apiService', _apiService2.default).name;

/***/ },

/***/ 328:
/***/ function(module, exports) {

	'use strict';
	
	apiService.$inject = ["$http"];
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = apiService;
	function apiService($http) {
	  'ngInject';
	
	  /**
	   * @function getAllEmployees
	   * @returns {*}
	   */
	
	  function getAllEmployees() {
	    return new Promise(function (resolve, reject) {
	      $http.get('/api/employee').then(function (response) {
	        resolve(response.data);
	      }).catch(function (err) {
	        throw Error(err);
	      });
	    });
	  }
	
	  return {
	    getAllEmployees: getAllEmployees
	  };
	}

/***/ }

});
//# sourceMappingURL=main.bundle.js.map