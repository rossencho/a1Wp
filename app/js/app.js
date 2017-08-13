/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var app_component_1 = __webpack_require__(1);
var tasks_module_1 = __webpack_require__(6);
exports.appModule = angular
    .module('appModule', [
    'ngMaterial',
    tasks_module_1.tasksModule.name
])
    .component('app', app_component_1.appComponent);


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var AppComponent = (function () {
    function AppComponent() {
    }
    return AppComponent;
}());
exports.appComponent = {
    controller: AppComponent,
    template: "<tasks></tasks>"
};


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var module_1 = __webpack_require__(0);
angular.element(function () {
    angular.bootstrap(document, [
        module_1.appModule.name
    ]);
});


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var TaskWizardComponent = (function () {
    function TaskWizardComponent() {
    }
    return TaskWizardComponent;
}());
exports.taskWizardComponent = {
    controller: TaskWizardComponent,
    template: "\n    <div>\n        <h1>Task Wizard</h1>\n        \n   </div>",
    controllerAs: "vm"
};


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var taskWizard_component_1 = __webpack_require__(3);
exports.taskWizardModule = angular
    .module('taskWizardpModule', [
    'ngMaterial'
])
    .component('taskWizard', taskWizard_component_1.taskWizardComponent);


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var TasksComponent = (function () {
    function TasksComponent($mdDialog, $interval) {
        var _this = this;
        this.$mdDialog = $mdDialog;
        this.$interval = $interval;
        this.refresh = function () {
            _this.message = 'refreshed ' + Math.random();
        };
        this.startRefresh = function () {
            _this.refresh();
            _this.timeHandler = _this.$interval(_this.refresh, 1E3);
        };
        this.stopRefresh = function () {
            _this.$interval.cancel(_this.timeHandler);
            _this.timeHandler = null;
            _this.message = 'Refresh stopped';
        };
        this.name = "Rosen Blagoev";
    }
    TasksComponent.prototype.confirmTask = function () {
        console.log("Then fire confirm Task");
    };
    TasksComponent.prototype.$onInit = function () {
        this.startRefresh();
    };
    TasksComponent.prototype.openDialog = function () {
        this.stopRefresh();
        this.$mdDialog.show({
            controllerAs: 'model',
            clickOutsideToClose: true,
            bindToController: true,
            controller: function (refresh, $mdDialog) {
                this.hide = function () {
                    refresh();
                    $mdDialog.hide();
                };
            },
            autoWrap: false,
            template: '<md-dialog class="stickyDialog"  aria-label="wizard"><task-wizard ></task-wizard> <md-button ng-click="model.hide()">Close Popup</md-button></md-dialog>',
            locals: {
                thing: this.confirmTask,
                refresh: this.startRefresh
            }
        });
    };
    return TasksComponent;
}());
exports.tasksComponent = {
    controller: TasksComponent,
    template: "\n    <div>\n        <h1>Hello {{vm.name}}</h1>\n        {{vm.message}}\n        <a href src=\"\" ng-click=\"vm.openDialog()\">Open Dialog</a>\n    </div>\n    ",
    controllerAs: "vm"
};


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tasks_component_1 = __webpack_require__(5);
var taskWizard_module_1 = __webpack_require__(4);
exports.tasksModule = angular
    .module('tasksModule', [
    'ngMaterial',
    taskWizard_module_1.taskWizardModule.name
])
    .component('tasks', tasks_component_1.tasksComponent);


/***/ })
/******/ ]);