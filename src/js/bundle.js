webpackJsonp([0],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var NgModule_1 = __webpack_require__(1);
	var ComponentModule_1 = __webpack_require__(6);
	var Services_1 = __webpack_require__(14);
	var NgModule_2 = __webpack_require__(1);
	var AppModule = (function () {
	    function AppModule($locationProvider) {
	        //$locationProvider.html5Mode(true);
	    }
	    AppModule = __decorate([
	        NgModule_2.NgModule({
	            imports: [ComponentModule_1.ComponentModule, Services_1.ServicesModule]
	        }), 
	        __metadata('design:paramtypes', [Object])
	    ], AppModule);
	    return AppModule;
	}());
	NgModule_1.bootstrapModule(AppModule);


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var angular_1 = __webpack_require__(2);
	var angular_ui_router_1 = __webpack_require__(4);
	__webpack_require__(5);
	function NgModule(options) {
	    return function (controller) {
	        function createModuleName(ctrl) {
	            if (typeof ctrl === "string")
	                return ctrl;
	            if (!ctrl.name) {
	                ctrl.name = ctrl.toString().match(/^function\s*([^\s(]+)/)[1];
	            }
	            return ctrl.name;
	        }
	        function createComponentSelector(ctrl) {
	            if (!ctrl.name) {
	                ctrl.name = ctrl.toString().match(/^function\s*([^\s(]+)/)[1];
	            }
	            var selector = camelize(ctrl.name.replace('Component', ''));
	            return selector;
	        }
	        function camelize(str) {
	            return str.replace(/(?:^\w|[A-Z]|\b\w)/g, function (letter, index) { return (index === 0 ? letter.toLowerCase() : letter.toUpperCase()); }).replace(/\s+/g, '');
	        }
	        function registerRoute(ctrl, module, routeOptions) {
	            if (module.requires.indexOf(angular_ui_router_1["default"]) === -1) {
	                throw new Error("Module '" + module.name + "' must import module 'uiRouter' in order to use @Route");
	            }
	            if (!ctrl.name) {
	                ctrl.name = ctrl.toString().match(/^function\s*([^\s(]+)/)[1];
	            }
	            var state = {
	                url: routeOptions.url,
	                name: (routeOptions.name || ctrl.name.replace('Component', '')),
	                component: camelize(ctrl.name.replace('Component', ''))
	            };
	            if (routeOptions.parent) {
	                var parentRouteOptions = Reflect.getMetadata("custom:route", routeOptions.parent);
	                if (parentRouteOptions) {
	                    if (!routeOptions.parent.name) {
	                        routeOptions.parent.name = routeOptions.parent.toString().match(/^function\s*([^\s(]+)/)[1];
	                    }
	                    state.parent = (parentRouteOptions.name || routeOptions.parent.name.replace('Component', ''));
	                }
	            }
	            module.config(['$urlRouterProvider', '$stateProvider', function ($urlRouterProvider, $stateProvider) {
	                    $stateProvider.state(state);
	                    if (routeOptions.isDefault) {
	                        $urlRouterProvider.otherwise(routeOptions.url);
	                    }
	                }]);
	            console.log('register state::', state);
	        }
	        var moduleNames = (options.imports || []).map(function (element) {
	            return createModuleName(element);
	        });
	        var thisModule = angular_1.module(createModuleName(controller), moduleNames);
	        console.log(thisModule.name + ".config", controller);
	        thisModule.config(controller);
	        console.log(thisModule.name, options.providers);
	        (options.providers || []).forEach(function (service) {
	            if (service) {
	                var name_1 = service.toString().match(/^function\s*([^\s(]+)/)[1];
	                var serviceName = camelize(name_1);
	                console.log(thisModule.name + ".service(" + serviceName + ")");
	                thisModule.service(serviceName, service);
	            }
	        });
	        (options.declarations || []).forEach(function (declaration) {
	            var componentOptions = Reflect.getMetadata("custom:component", declaration);
	            componentOptions.controller = declaration;
	            thisModule.component(createComponentSelector(declaration), componentOptions);
	            var routeOptions = Reflect.getMetadata("custom:route", declaration);
	            if (routeOptions) {
	                registerRoute(declaration, thisModule, routeOptions);
	            }
	        });
	    };
	}
	exports.NgModule = NgModule;
	var INgModule = (function () {
	    function INgModule() {
	    }
	    return INgModule;
	}());
	exports.INgModule = INgModule;
	function bootstrapModule(modules, element) {
	    if (!element) {
	        element = document;
	    }
	    if (!(modules instanceof Array)) {
	        modules = [modules];
	    }
	    angular_1.bootstrap(element, modules.map(function (m) { return createModuleName(m); }));
	    function createModuleName(ctrl) {
	        if (typeof ctrl === "string")
	            return ctrl;
	        if (!ctrl.name) {
	            ctrl.name = ctrl.toString().match(/^function\s*([^\s(]+)/)[1];
	        }
	        return ctrl.name;
	    }
	}
	exports.bootstrapModule = bootstrapModule;


/***/ },
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var MainComponent_1 = __webpack_require__(7);
	var ChildComponent_1 = __webpack_require__(18);
	var core_1 = __webpack_require__(8);
	var angular_ui_router_1 = __webpack_require__(4);
	var MainService_1 = __webpack_require__(12);
	var ComponentModule = (function () {
	    function ComponentModule() {
	    }
	    ComponentModule = __decorate([
	        core_1.NgModule({
	            imports: [angular_ui_router_1["default"]],
	            declarations: [MainComponent_1.MainComponent, ChildComponent_1.ChildComponent],
	            providers: [MainService_1.MainService]
	        }), 
	        __metadata('design:paramtypes', [])
	    ], ComponentModule);
	    return ComponentModule;
	}());
	exports.ComponentModule = ComponentModule;


/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(8);
	var MainService_1 = __webpack_require__(12);
	var Services_1 = __webpack_require__(13);
	var MainComponent = (function () {
	    function MainComponent(mainService, testService) {
	        console.log('Main Loaded!!');
	        this.greeting = mainService.getGreeting();
	    }
	    MainComponent = __decorate([
	        core_1.Component({
	            templateUrl: __webpack_require__(17)
	        }),
	        core_1.Route({
	            url: '/',
	            isDefault: true
	        }), 
	        __metadata('design:paramtypes', [MainService_1.MainService, Services_1.TestService])
	    ], MainComponent);
	    return MainComponent;
	}());
	exports.MainComponent = MainComponent;


/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Component_1 = __webpack_require__(9);
	exports.Component = Component_1.Component;
	var NgModule_1 = __webpack_require__(1);
	exports.NgModule = NgModule_1.NgModule;
	var Injectable_1 = __webpack_require__(10);
	exports.Injectable = Injectable_1.Injectable;
	var Route_1 = __webpack_require__(11);
	exports.Route = Route_1.Route;


/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	__webpack_require__(5);
	function Component(options) {
	    return function (controller, key) {
	        Reflect.defineMetadata('custom:component', options, controller, key);
	        if (!controller.name) {
	            controller.name = controller.toString().match(/^function\s*([^\s(]+)/)[1];
	        }
	        options.controllerAs = options.controllerAs || '$ctrl';
	    };
	}
	exports.Component = Component;


/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var angular_1 = __webpack_require__(2);
	function Injectable() {
	    return function (service, key) {
	        Reflect.defineMetadata('custom:service', {}, service, key);
	        var servicesModule;
	        try {
	            servicesModule = angular_1.module('___services');
	        }
	        catch (error) {
	            servicesModule = angular_1.module('___services', []);
	        }
	        /*if (!service) return;
	        if (!service.name) {
	            service.name = service.toString().match(/^function\s*([^\s(]+)/)[1];
	        }
	        var serviceName: string = camelize(service.name);*/
	        //servicesModule.service(serviceName, service);
	    };
	}
	exports.Injectable = Injectable;


/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	__webpack_require__(5);
	function Route(options) {
	    return function (controller, key) {
	        Reflect.defineMetadata('custom:route', options, controller, key);
	    };
	}
	exports.Route = Route;


/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(8);
	var MainService = (function () {
	    function MainService() {
	    }
	    MainService.prototype.getGreeting = function () {
	        return "Hello from service!";
	    };
	    MainService = __decorate([
	        core_1.Injectable(), 
	        __metadata('design:paramtypes', [])
	    ], MainService);
	    return MainService;
	}());
	exports.MainService = MainService;


/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	function __export(m) {
	    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	}
	__export(__webpack_require__(14));
	var TestService_1 = __webpack_require__(16);
	exports.TestService = TestService_1.TestService;


/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(8);
	var TestService_1 = __webpack_require__(15);
	var ServicesModule = (function () {
	    function ServicesModule() {
	    }
	    ServicesModule = __decorate([
	        core_1.NgModule({
	            providers: [TestService_1.TestService]
	        }), 
	        __metadata('design:paramtypes', [])
	    ], ServicesModule);
	    return ServicesModule;
	}());
	exports.ServicesModule = ServicesModule;
	;


/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var TestService_1 = __webpack_require__(16);
	exports.TestService = TestService_1.TestService;


/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(8);
	var TestService = (function () {
	    function TestService() {
	    }
	    TestService = __decorate([
	        core_1.Injectable(), 
	        __metadata('design:paramtypes', [])
	    ], TestService);
	    return TestService;
	}());
	exports.TestService = TestService;


/***/ },
/* 17 */
/***/ function(module, exports) {

	var path = '/app/Components/MainComponent/MainComponent.tpl.html';
	var html = "<h1>Hello component (from template)</h1>\r\n<h2>{{$ctrl.greeting}}</h2>\r\n<a ui-sref=\"Child\">child</a>\r\n<ui-view></ui-view>";
	window.angular.module('ng').run(['$templateCache', function(c) { c.put(path, html) }]);
	module.exports = path;

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(8);
	var MainComponent_1 = __webpack_require__(7);
	var ChildComponent = (function () {
	    function ChildComponent() {
	    }
	    ChildComponent = __decorate([
	        core_1.Component({
	            templateUrl: __webpack_require__(19)
	        }),
	        core_1.Route({
	            url: 'child',
	            parent: MainComponent_1.MainComponent
	        }), 
	        __metadata('design:paramtypes', [])
	    ], ChildComponent);
	    return ChildComponent;
	}());
	exports.ChildComponent = ChildComponent;


/***/ },
/* 19 */
/***/ function(module, exports) {

	var path = '/app/Components/MainComponent/ChildComponent/ChildComponent.tpl.html';
	var html = "<h5>I'm a child</h5>\r\n<a ui-sref=\"Main\">Go back</a>";
	window.angular.module('ng').run(['$templateCache', function(c) { c.put(path, html) }]);
	module.exports = path;

/***/ }
]);
//# sourceMappingURL=bundle.js.map